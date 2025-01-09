import { Router } from "express";
import { getAllAppointments, getAppointmentById, inactiveAppointment, schedule } from "../controllers/appointmentsController";
import { validateDate, validateDescription, validateTime } from "../middlewares/appointmentValidationMiddleware";
import { validateCancellation } from "../middlewares/cancelValidationMiddleware";

const appointmentsRouter: Router = Router();

// Rutas / Endpoints

//Obtener el listado de todos los turnos de todos los usuarios
appointmentsRouter.get("/", getAllAppointments);

//Obtener el detalle de un turno específico
appointmentsRouter.get("/:id", getAppointmentById);

//Agendar un nuevo turno
appointmentsRouter.post("/schedule",
    validateDate,
    validateTime,
    validateDescription,
    schedule);

//Cambiar el estatus de un turno a "Cancelled"
appointmentsRouter.put("/cancel/:id", validateCancellation, inactiveAppointment);

export default appointmentsRouter;
