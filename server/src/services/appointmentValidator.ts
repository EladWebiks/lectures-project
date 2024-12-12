import Appointment from "../models/Appointment";

export const appointmentValidator =async (start: Date, end: Date): Promise<boolean> => {
  let { MINMARGIN, MAXMARGIN } = process.env;
  const minMargin = parseInt(MINMARGIN || "0", 10);
  const maxMargin = parseInt(MAXMARGIN || "1440", 10);


  const differenceInMs = end.getTime() - start.getTime();
  const differenceInMinutes = differenceInMs / (1000 * 60);
  console.log(
    differenceInMinutes,
    differenceInMinutes > minMargin && differenceInMinutes < maxMargin,
    MINMARGIN,
    MAXMARGIN
  );
  return differenceInMinutes > minMargin && differenceInMinutes < maxMargin && await verifyNoAppointments(start,end);
};


const verifyNoAppointments = async (start: Date, end: Date) => {
    const overlappingAppointments = await Appointment.aggregate([
      {
        $match: {
          $or: [
            { date: { $gte: start, $lt: end } },
            { date: { $gt: start, $lte: end } },
          ],
        },
      },
    ]);
  
    return overlappingAppointments.length === 0;
  };