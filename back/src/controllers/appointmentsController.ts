import { Request, Response } from "express";
import IAppointment from "../interfaces/IAppointments";
import { cancelAppointmentService, createAppointmentService, getAllAppointmentsService, getAppointmentByIdService } from "../services/appointmentsService";
import IAppointmentDto from "../dtos/IAppointmentDto";

export const getAllAppointments = async (req: Request, res: Response) => {
    try {
        const appointments: IAppointment[] = await getAllAppointmentsService();
        res.status(200).json(appointments);
    } catch (error: any) {
        res.status(400).json({error: error.message});
    };
};

export const getAppointmentById = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const appointment: IAppointment = await getAppointmentByIdService(Number(id));
        res.status(200).json(appointment);        
    } catch (error: any) {
        res.status(400).json({error: error.message});
    };
};

export const schedule = async (req: Request, res: Response) => {
    try {
        const{date, time, status, userId, description}: IAppointmentDto = req.body;
        const newAppointment: IAppointment = await createAppointmentService ({
            date, time, status, userId, description
        });
        res.status(200).json(newAppointment);
    } catch (error: any) {
        res.status(400).json({error: error. message});
    };
};

export const inactiveAppointment = async (req: Request, res: Response) => {
   try {
    const {id} = req.params;
    const newAppointment: IAppointment = await cancelAppointmentService(Number(id));
    res.status(200).json(newAppointment);
   } catch (error: any) {
    res.status(400).json({ error: error.message});
   };
};