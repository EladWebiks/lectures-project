import Appointment from "../models/Appointment";
import { ObjectId } from "mongodb";

export const appointmentValidator = async (
  start: Date,
  end: Date,
  id?: string
): Promise<{success:boolean, message?: string}> => {
  let { MINMARGIN, MAXMARGIN } = process.env;
  let success = true;
  let message="";
  const minMargin = parseInt(MINMARGIN || "0", 10);
  const maxMargin = parseInt(MAXMARGIN || "1440", 10);

  const differenceInMs = end.getTime() - start.getTime();
  const differenceInMinutes = differenceInMs / (1000 * 60);

  const noAppointments = await verifyNoAppointments(start, end, id);
  if(!noAppointments)
{
  success = false;
  message += " This time already taken! \n"
}

  const notTooEarly = verifyNotTooEarly(start);
if(!notTooEarly)
{
  success = false;
  message+= " This date already passed! \n"
}
if( ! (differenceInMinutes > minMargin &&
  differenceInMinutes < maxMargin))
  {
    success= false;
    message += ` The margin between the dates is smaller than ${minMargin} or higher than ${maxMargin}! \n`
  }
  return (
    {success, message}
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
