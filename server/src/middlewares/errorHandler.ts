import { Request, Response, NextFunction } from "express";

const errorHandler = async (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  if (process.env.ENVIRONMENT === "dev") {
    res.status(500).json({ stack: err.stack });
  } else {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export default errorHandler;
