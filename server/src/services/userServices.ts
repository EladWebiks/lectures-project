import bcrypt from "bcrypt";
import User, { UserModel } from "../models/User";
const salt: number = parseInt(process.env.SALT || "10")
// Create a new user
export const createUser = async (
  username: string,
  password: string
): Promise<UserModel> => {
  const passwordHash = await bcrypt.hash(password, salt);

  const newUser = new User({
    username,
    passwordHash,
  });

  await newUser.save();
  return newUser;
};

// Authenticate a user
export const authenticateUser = async (
  username: string,
  password: string
): Promise<UserModel | null> => {
  const user = await User.findOne({ username });

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
