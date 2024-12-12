import { Request, Response, NextFunction } from "express";
import { UserModel } from "../models/User";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import {authenticateUser, createUser, getUser as serviceGetUser} from "../services/userServices"
dotenv.config();

// Route: /users/register
// Method: POST
// Body: {username, pssword}
// returns {id}
export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      res.status(400);
      throw new Error("Passowrd and or username is missing");
    }
    const user: UserModel = await createUser(username, password);
    res.status(201).json({ id: user.id });
  } catch (error) {
    next(error);
  }
};

// Route: /users/login
// Method: POST
// Body: {username, pssword}
// Returns: {token}
export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      res.status(400);
      throw new Error("Passowrd and or username is missing");
    }

    const user = await authenticateUser(username, password);
    if (!user) {
      res.status(401);
      throw new Error("Authentication failed");
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, {
      expiresIn: "1h",
    });
    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

// Route: /users/getUser
// Method: GET
// Body: {}
// Returns: User + firstname + lastname+ imagUrl
export const getUser = async (
  req: any,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try{

    const userId = req.user.id
    const user:any = await serviceGetUser(userId)
    if(!user){
      res.status(404);
      throw new Error('user doesnt exist');
    }
    console.log(user);
    
    res.status(200).json({...user,imageUrl:"https://avatars.githubusercontent.com/u/48385417?v=4",firstName:"Elad",lastName:"Harel"})
  }catch(error){
    next(error)
  }
};
