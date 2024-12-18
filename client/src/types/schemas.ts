export interface UserModel {
    _id:string;
    username: string;
    email:string,
    isAdmin: Boolean;
    appointments: AppointmentModel[];
}
export interface AppointmentModel extends Document {
    _id:string;
    description?: string;
    start: Date;
    end: Date;
}