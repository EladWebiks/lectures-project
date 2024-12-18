import { Request, Response, NextFunction } from "express";
import User, { UserModel } from "../models/User";
import jwt from "jsonwebtoken";
import {
  authenticateUser,
  createUser,
  getUserByEmail,
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
    const { username, password, email } = req.body;
    if (!username || !password || !email) {
      const message = "Some parameters are missing";
      res.status(400).json({ success:false, message });
      throw new Error(message);
    }
    if(await getUserByEmail(email)){
        const message= "This email address already used"
        res.status(400).json({success:false, message})
        throw new Error(message)
    }
    const user: UserModel = await createUser(username, password, email);
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
// Body: {email, pssword}
// Returns: {success:bolean,token:string, message: string}
export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      const message = "Passowrd or email is missing";
      res.status(400).json({ success:false, message });
      throw new Error(message);
    }

    const user = await authenticateUser(email, password);
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
// Route: /users/getUserByToken - Token In Header
// Method: GET
// Returns: {success:bolean,user:UserModel, message: string}
export const getUserByToken = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const userId = (req as any).user.id;
    
    try {
      const user = await User.findById(userId)
        .select(process.env.KEYVALUESTOREMOVEFROMAUTHUSER ||"-passwordHash -isAdmin -updatedAt -createdAt -__v") 
        .populate("appointments"); 
      if (!user) {
        const message = "Authentication failed";
        res.status(401).json({ success: false, message });
        throw new Error(message);
      }
      
      res.status(200).json({ success: true, message: "User found", user });
    } catch (error) {
      next(error);
    }
  };