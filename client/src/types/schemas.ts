export interface UserModel {
    _id:string;
    username: string;
    email:string;
    phoneNumber: string;
    isAdmin: Boolean;
    appointments: AppointmentModel[];
}
export interface AppointmentModel {
    _id:string;
    description?: string;
    user: string;
    start: Date;
    end: Date;
}
export interface toastData{
    type: string,
    content: string
}