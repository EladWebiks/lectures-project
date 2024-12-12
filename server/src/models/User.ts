import mongoose, { Schema, Document } from "mongoose";

const userSchema: Schema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true, 
        trim: true, 
    },
    passwordHash: {
        type: String,
        required: true,
    },
    appointments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Appointment",
        default: []
    }]
}, { timestamps: true });

export interface UserModel extends Document {
    _id: mongoose.Types.ObjectId;
    username: string;
    passwordHash: string;
    appointments: mongoose.Types.ObjectId[];
}

const User = mongoose.model<UserModel>("User", userSchema);

export default User;
