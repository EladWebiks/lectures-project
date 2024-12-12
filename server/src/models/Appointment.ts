import mongoose, { Schema, Document } from "mongoose";

const appointmentSchema: Schema = new Schema({
    userId: {
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
    }
    
}, { timestamps: true });

export interface AppointmentModel extends Document {
    _id: mongoose.Types.ObjectId;
    userId:mongoose.Types.ObjectId;
    description?: string;
    start: Date;
    end: Date;
}

const Appointment = mongoose.model<AppointmentModel>("Appointment", appointmentSchema);

export default Appointment;
