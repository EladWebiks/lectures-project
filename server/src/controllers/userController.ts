import { Request, Response, NextFunction } from "express";
import { UserModel } from "../models/User";
import jwt from "jsonwebtoken";
import {
  authenticateUser,
  createUser,
} from "../services/userServices";

// Route: /users/register
// Method: POST
// Body: {username, pssword}
// returns { success: boolean, token: string, message: string}
export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      const message = "Passowrd and or username is missing";
      res.status(400).json({ success:false, message });
      throw new Error(message);
    }
    const user: UserModel = await createUser(username, password);
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, {
        expiresIn: process.env.TOKENDURATION || "1h",
      });
    res.status(201).json({ token, success: true, message: "registered successfully" });
  } catch (error) {
    next(error);
  }
};

// Route: /users/login
// Method: POST
// Body: {username, pssword}
// Returns: {success:bolean,token:string, message: string}
export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      const message = "Passowrd and or username is missing";
      res.status(400).json({ success:false, message });
      throw new Error(message);
    }

    const user = await authenticateUser(username, password);
    if (!user) {
      const message = "Authentication failed";
      res.status(401).json({ success:false, message });
      throw new Error(message);
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, {
      expiresIn:  process.env.TOKENDURATION || "1h",
    });
    res.status(200).json({ token, success: true, message: "Logged in successfully" });
  } catch (error) {
    next(error);
  }
};