import { Request, Response, NextFunction } from "express";
import { appointmentModel } from "../config/dataSource";

export const validateCancellation = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { id } = req.params;
        const appointment = await appointmentModel.findOneBy({ id: Number(id) });

        if (!appointment) {
            res.status(404).json({ error: "Nonexistent Appointment" });
            return; // Asegura que el flujo termina aquí
        }

        const appointmentDate = new Date(appointment.date);
        const today = new Date();

        // Normaliza las fechas para comparar solo día, mes y año
        today.setHours(0, 0, 0, 0);
        appointmentDate.setHours(0, 0, 0, 0);

        if (appointmentDate <= today) {
            res.status(400).json({
                error: "Appointments can only be cancelled until the day before the scheduled date.",
            });
            return; // Asegura que el flujo termina aquí
        }

        // Continúa con la ejecución si no hay errores
        next();
    } catch (error) {
        // Captura errores inesperados
        res.status(500).json({ error: "Internal server error" });
    }
};
