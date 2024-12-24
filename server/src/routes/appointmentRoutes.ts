import express, { Router } from "express";
import * as appointmentController from "../controllers/appointmentController"
import authMiddleware from "../middlewares/authMiddleware";

const router: Router = express.Router();

router.post("/",authMiddleware, appointmentController.makeAppointment);
router.get("/", authMiddleware, appointmentController.getAppointments)
router.patch("/:id", authMiddleware,appointmentController.editAppointment)
router.delete("/:id",authMiddleware,appointmentController.deleteAppointment)
router.get("/:date",authMiddleware,appointmentController.getAppointmentsByDate)
router.get("/month/:date", authMiddleware,appointmentController.getAppointmentsByMonth)
export default router;
