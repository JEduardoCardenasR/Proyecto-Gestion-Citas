import { Router } from "express";
import { getAllAppointments, getAppointmentById, inactiveAppointment, schedule } from "../controllers/appointmentsController";

const appointmentsRouter: Router = Router();

// Rutas / Endpoints

//Obtener el listado de todos los turnos de todos los usuarios
appointmentsRouter.get("/", getAllAppointments);

//Obtener el detalle de un turno específico
appointmentsRouter.get("/:id", getAppointmentById);

//Agendar un nuevo turno
appointmentsRouter.post("/schedule", schedule);

//Cambiar el estatus de un turno a "Cancelled"
appointmentsRouter.put("/cancel/:id", inactiveAppointment);

export default appointmentsRouter;
