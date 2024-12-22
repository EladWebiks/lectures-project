import mongoose, { Schema, Document } from "mongoose";

const userSchema: Schema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true, 
    },
    phoneNumber:{
        type:String,
        required: true,
        unique:true,
        trim: true,
    },
    passwordHash: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: {
          validator: function (email: string) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
          },
          message: (props: any) => `${props.value} is not a valid email address!`,
        },
    },
    isAdmin:{
        type: Boolean,
        default: false
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
    phoneNumber: string;
    passwordHash: string;
    email:string,
    isAdmin: Boolean;
    appointments: mongoose.Types.ObjectId[];
}

const User = mongoose.model<UserModel>("User", userSchema);

export default User;
