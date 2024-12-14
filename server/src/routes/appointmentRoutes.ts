import express, { Router } from "express";
import * as appointmentController from "../controllers/appointmentController"
import authMiddleware from "../middlewares/authMiddleware";

const router: Router = express.Router();

router.post("/",authMiddleware, appointmentController.makeAppointment);
router.get("/", authMiddleware, appointmentController.getAppointments)
router.patch("/:id", authMiddleware,appointmentController.editAppointment)
router.delete("/:id",authMiddleware,appointmentController.deleteAppointment)
export default router;
