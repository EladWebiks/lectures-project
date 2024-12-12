import { NextFunction, Request, Response } from "express";
import User, { UserModel } from "../models/User";
import Appointment from "../models/Appointment";
import { appointmentValidator } from "../services/appointmentValidator";

// Route: /appointments/makeappointment
// Method: POST
// Body: {start,end, description}
// returns { success: boolean, token: string, message: string}

export const makeAppointment = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
        const user = await User.findById((req as any).user.id);
        let { start,end, description } = req.body;
        start = new Date(start as string);
        end = new Date(end as string);
  
      if (!user) {
        const message = "User not found";
        res.status(400).json({ success: false, message });
        return;
      }
      if(!(await appointmentValidator(start,end)))
      {
        const message = "These times are unavailable";
        res.status(403).json({ success: false, message });
        return;
      }
      const appointment = new Appointment({
        start,
        end,
        description,
        userId: user._id,
      });
  
      await appointment.save();
      res.status(201).json({ success: true, appointment });
    } catch (error) {
      next(error);
    }
  };