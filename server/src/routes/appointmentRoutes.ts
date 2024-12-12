import express, { Router } from "express";
import * as appointmentController from "../controllers/appointmentController"
import authMiddleware from "../middlewares/authMiddleware";

const router: Router = express.Router();

router.post("/makeAppointment",authMiddleware, appointmentController.makeAppointment);

export default router;
