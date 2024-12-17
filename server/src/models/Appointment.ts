import mongoose, { Schema, Document } from "mongoose";

const appointmentSchema: Schema = new Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    description:
    {
        type: String,
        required: false
    },
    start:
    {
        type: Date,
        unique: true,
        required: true
    },
    end:
    {
        type: Date,
        unique: true,
        required: true
    },
    
}, { timestamps: true });

export interface AppointmentModel extends Document {
    _id: mongoose.Types.ObjectId;
    user:mongoose.Types.ObjectId;
    description?: string;
    start: Date;
    end: Date;
    populateUser(): Promise<AppointmentModel>;
}
appointmentSchema.methods.populateUser = function (): Promise<AppointmentModel> {
    return this.populate("user").execPopulate();
};

const Appointment = mongoose.model<AppointmentModel>("Appointment", appointmentSchema);

export default Appointment;
