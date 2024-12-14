import Appointment from "../models/Appointment";
import { ObjectId } from "mongodb";

export const appointmentValidator = async (
  start: Date,
  end: Date,
  id?: string
): Promise<boolean> => {
  let { MINMARGIN, MAXMARGIN } = process.env;
  const minMargin = parseInt(MINMARGIN || "0", 10);
  const maxMargin = parseInt(MAXMARGIN || "1440", 10);

  const differenceInMs = end.getTime() - start.getTime();
  const differenceInMinutes = differenceInMs / (1000 * 60);

  const noAppointments = await verifyNoAppointments(start, end, id);
  const notTooEarly = verifyNotTooEarly(start);
  
  return (
    differenceInMinutes > minMargin &&
    differenceInMinutes < maxMargin &&
    noAppointments &&
    notTooEarly
  );
};

const verifyNoAppointments = async (start: Date, end: Date, id?: string) => {
  const matchCondition: any = {
    start: { $lt: end },
    end: { $gt: start },
  };

  if (id) {
    matchCondition["_id"] = { $ne: new ObjectId(id) };
  }

  const overlappingAppointments = await Appointment.aggregate([
    {
      $match: matchCondition,
    },
  ]);

  return overlappingAppointments.length === 0;
};

const verifyNotTooEarly = (start: Date): boolean => {
  const now = new Date();
  const minimumLeadTime = parseInt(process.env.HOUR || "3600000", 10);
  return start.getTime() - now.getTime() > minimumLeadTime;
};
