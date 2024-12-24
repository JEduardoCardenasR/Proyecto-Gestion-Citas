import { appointmentModel, userModel } from "../config/dataSource";
import IAppointmentDto from "../dtos/IAppointmentDto";
import Appointment from "../entities/Appointment";
import User from "../entities/User";
import { AppointmentStatus } from "../enums/AppointmentStatus";

//Función que trae a todos los turnos
export const getAllAppointmentsService = async (): Promise<Appointment[]> => {
    const appointments: Appointment[] = await appointmentModel.find();
    return appointments;
};

//Función que trae un turno en específico
export const getAppointmentByIdService = async (id: number): Promise<Appointment> => {
    const foundAppointment = await appointmentModel.findOneBy({ id });
    if(!foundAppointment) throw Error("El turno no fue encontrado");
    return foundAppointment;
};

//Función que crea un turno y guarda el usuario que lo crea 
export const createAppointmentService = async (createAppointmentDto: IAppointmentDto): Promise<Appointment> => {
    const newAppointment: Appointment = await appointmentModel.create(createAppointmentDto)
    const user: User = await userModel.findOneBy({id: createAppointmentDto.userId})
    newAppointment.user = user;
    await appointmentModel.save(newAppointment)
    return newAppointment;
};

//Función que cancela un turno
export const cancelAppointmentService = async (appointmentId: number) => {
    const foundAppointment = await appointmentModel.findOneBy({id: appointmentId})
    if(!foundAppointment) throw Error("Turno inexistente");
    foundAppointment.status = AppointmentStatus.Cancelled;
    await appointmentModel.save(foundAppointment);
    return foundAppointment;
};