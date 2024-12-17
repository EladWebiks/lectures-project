import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();



const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const JWT_SECRET: string | undefined = process.env.JWT_SECRET
  if(typeof JWT_SECRET === 'undefined'){
    res.status(500).json({ message: "server internal issue, try again later" });
    return
  }
  const authHeader: string =
    (req.headers["authorization"] as string) ||
    (req.headers["Authorization"] as string);
    
  if (!authHeader) {
    res.status(401).json({ message: "Access token is missing!" });
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    (req as any).user = decoded;
    next();
  } catch (error) {
    res.status(403).json({ message: "Invalid Token" });
  }
};

export default authMiddleware;
