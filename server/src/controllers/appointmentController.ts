import { NextFunction, Request, Response } from "express";
import User, { UserModel } from "../models/User";
import Appointment, { AppointmentModel } from "../models/Appointment";
import { appointmentValidator } from "../services/appointmentValidator";

// Route: /appointments/
// Method: POST
// Body: {start,end, description}
// returns { success: boolean, message: string}
export const makeAppointment = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const user = await User.findById((req as any).user.id);
    let { start, end, description } = req.body;
    start = new Date(start as string);
    end = new Date(end as string);

    if (!user) {
      const message = "User not found";
      res.status(400).json({ success: false, message });
      return;
    }
    if (!(await appointmentValidator(start, end))) {
      const message = "These times are unavailable";
      res.status(403).json({ success: false, message });
      return;
    }
    const appointment = new Appointment({
      start,
      end,
      description,
      user: user._id,
    });

    await appointment.save();
    user.appointments.push(appointment._id);
    await user.save();
    res.status(201).json({ success: true, appointment });
  } catch (error) {
    next(error);
  }
};

// Route: /appointments/
// Method: GET
// returns { success: boolean, message: string, appointments: appointment[]}
export const getAppointments = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const user = await User.findById((req as any).user.id).populate(
      "appointments",
      process.env.KEYVALUESTOREMOVEFROMAPPOINTMENT
    );
    if (!user) {
      res.status(400).json({
        success: false,
        message: "User not found",
      });
      return;
    }

    if (user.isAdmin) {
      const appointments = await Appointment.find({}).populate(
        "user",
        process.env.KEYVALUESTOREMOVEFROMUSER
      );
      res.status(200).json({
        success: true,
        message: "Fetched all appointments from DB (Admin Account)",
        appointments,
      });
      return;
    }

    if (!user.appointments || user.appointments.length === 0) {
      res.status(400).json({
        success: false,
        message: "No appointments settled for this account",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Fetched your appointments from DB",
      appointments: user.appointments,
    });
  } catch (error) {
    next(error);
  }
};
// Route: /appointments/:date
// Method: GET
// returns { success: boolean, message: string, appointments: appointment[]}
export const getAppointmentsByDate = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      let { date }: any = req.params;
      const selectedDate = new Date(date);
  
      const startOfDay = new Date(selectedDate);
      startOfDay.setHours(0, 0, 0, 0);
  
      const endOfDay = new Date(selectedDate);
      endOfDay.setHours(23, 59, 59, 999);
  
      const appointments: AppointmentModel[] = await Appointment.find({
        start: { $gte: startOfDay, $lte: endOfDay },
      }).select(String(process.env.GETAPPOINTMENTSBYDATEREMOVAL));
  
      res.status(200).json({
        success: true,
        message: "Appointments retrieved successfully",
        appointments,
      });
    } catch (error) {
      next(error);
    }
  };

// Route: /appointments/:id
// Method: PATCH
// Body: {start, end, description}
// Returns: { success: boolean, message: string, appointment: appointment }
export const editAppointment = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const { start, end, description } = req.body;
    const user = await User.findById((req as any).user.id);

    if (!user) {
      const message = "User not found";
      res.status(400).json({ success: false, message });
      return;
    }

    const appointment = await Appointment.findById(id);

    if (!appointment) {
      const message = "Appointment not found";
      res.status(404).json({ success: false, message });
      return;
    }

    // Check if the user owns the appointment or is an admin
    if (appointment.user.toString() !== user._id.toString() && !user.isAdmin) {
      const message = "You are not authorized to edit this appointment";
      res.status(403).json({ success: false, message });
      return;
    }

    // Validate if 'start' and 'end' are valid Date objects
    const newStart = new Date(start);
    const newEnd = new Date(end);

    if (isNaN(newStart.getTime()) || isNaN(newEnd.getTime())) {
      const message = "Invalid date format for start or end";
      res.status(400).json({ success: false, message });
      return;
    }

    appointment.start = newStart;
    appointment.end = newEnd;
    appointment.description = description || appointment.description;

    // Verifies availability
    if (!(await appointmentValidator(newStart, newEnd, id))) {
      const message = "These times are unavailable";
      res.status(403).json({ success: false, message });
      return;
    }

    await appointment.save();

    res.status(200).json({
      success: true,
      message: "Appointment updated successfully",
      appointment,
    });
  } catch (error) {
    next(error);
  }
};

// Route: /appointments/:id
// Method: DELETE
// Returns: { success: boolean, message: string }
export const deleteAppointment = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params; // Extract appointment ID from URL
    const user = await User.findById((req as any).user.id); // Find the current user

    if (!user) {
      const message = "User not found";
      res.status(400).json({ success: false, message });
      return;
    }

    const appointment = await Appointment.findById(id); // Find the appointment by ID

    if (!appointment) {
      const message = "Appointment not found";
      res.status(404).json({ success: false, message });
      return;
    }

    // Check if the user owns the appointment or is an admin
    if (appointment.user.toString() !== user._id.toString() && !user.isAdmin) {
      const message = "You are not authorized to delete this appointment";
      res.status(403).json({ success: false, message });
      return;
    }

    // Remove the appointment
    await Appointment.findByIdAndDelete(id);

    // Also remove the appointment from the user's appointments list (if the user is not an admin)
    if (!user.isAdmin) {
      user.appointments = user.appointments.filter(
        (appointmentId) => appointmentId.toString() !== id
      );
      await user.save();
    }

    res.status(200).json({
      success: true,
      message: "Appointment deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
