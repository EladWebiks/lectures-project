import bcrypt from "bcrypt";
import User, { UserModel } from "../models/User";
const salt: number = parseInt(process.env.SALT || "10")
// Create a new user
export const createUser = async (
  username: string,
  password: string,
  email:string,
  phoneNumber:string
): Promise<UserModel> => {
  const passwordHash = await bcrypt.hash(password, salt);

  const newUser = new User({
    username,
    passwordHash,
    email,
    phoneNumber
  });

  await newUser.save();
  return newUser;
};

// Authenticate a user
export const authenticateUser = async (
  email: string,
  password: string
): Promise<UserModel | null> => {
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.passwordHash))) {
    return user;
  }

  return null;
};

// Get a user by ID
export const getUser = async (id: string): Promise<UserModel | null> => {
  const user = await User.findById(id);
  return user;
};
export const getUserByEmail = async (email: string): Promise<boolean | null> => await User.findOne({email})
export const getUserByPhoneNumber = async (phoneNumber: string): Promise<boolean | null> => await User.findOne({phoneNumber})
 