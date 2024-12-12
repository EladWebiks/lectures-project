import { Request, Response, NextFunction } from "express";

const errorHandler = async (
  err: any,
  req: Request,
  res: Response
): Promise<void> => {
  if (process.env.ENVIORMENT === "dev") {
    res.status(500).json({ stack: err.stack });
    return;
  }
  res.status(500).json({
    succsess: false,
    message: err.message,
  });
};

export default errorHandler;
