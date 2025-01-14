import express, { Router } from "express";
import * as userController from "../controllers/userController"
import authMiddleware from "../middlewares/authMiddleware";

const router: Router = express.Router();

router.post("/register", userController.register);

router.post("/login", userController.login);

router.get("/getUserByToken", authMiddleware, userController.getUserByToken)
export default router;
