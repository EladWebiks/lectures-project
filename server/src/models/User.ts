import mongoose, { Schema, Document } from "mongoose";

// Define the User Schema
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
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

// Define the User model type by extending Document
interface UserModel extends Document {
    _id: mongoose.Types.ObjectId;
    username: string;
    passwordHash: string;
}

// Create the User Model
const User = mongoose.model<UserModel>("User", userSchema);

export default User;
