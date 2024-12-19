import { AppointmentModel, UserModel } from "../types/schemas";

const closestAppointment = (user:UserModel | null): AppointmentModel |null => {
  if (!user?.appointments  || user?.appointments.length === 0) return null;

  const nowDate = new Date();

  const appointments: AppointmentModel[] = user.appointments.map(
    (appoint: AppointmentModel) => ({
      user: appoint.user,
      description: appoint.description,
      _id: appoint._id,
      start: new Date(appoint.start),
      end: new Date(appoint.end),
    })
  );

  const closest = appointments.reduce((prev, current) => {
    const prevDiff = Math.abs(new Date(prev.start).getTime() - nowDate.getTime());
    const currentDiff = Math.abs(new Date(current.start).getTime() - nowDate.getTime());
    return currentDiff < prevDiff ? current : prev;
  });

  return closest;
};

export default closestAppointment;
