import { errorType } from "../constants/errorResponses";
import { Request, Response, NextFunction } from "express";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction): void => {
  const statusCode = res.statusCode || 500;
  const message = err.message;

  switch (statusCode) {
    case errorType.VALIDATION_ERROR:
      res.json({ title: "Validation Failed", message });
      break;
    case errorType.UNAUTHORIZED:
      res.json({ title: "Unauthorized", message });
      break;
    case errorType.FORBIDDEN:
      res.json({ title: "Forbidden", message });
      break;
    case errorType.NOT_FOUND:
      res.json({ title: "Not Found", message });
      break;
    case errorType.SERVER_ERROR:
      res.json({ title: "Server Error", message });
      break;
    default:
      res.json({ title: "Uncaught Error", message });
      break;
  }
};
