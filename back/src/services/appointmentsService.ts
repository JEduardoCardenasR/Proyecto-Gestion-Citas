import IAppointmentDto from "../dtos/IAppointmentDto";
import IAppointment from "../interfaces/IAppointments";

const appointments: IAppointment[] = [];
let appointmentsId: number = 1;

//Función que trae a todos los turnos
export const getAllAppointmentsService = async (): Promise<IAppointment[]> => {
    return appointments;
};


//Función que trae un turno en específico
export const getAppointmentByIdService = async (id: number): Promise<IAppointment> => {
    const foundAppointment = appointments.find(appointment => appointment.id === id)
    if(!foundAppointment) throw Error("El turno no fue encontrado")
    return foundAppointment;
};

//Función que crea un turno y guarda el usuario que lo crea 
export const createAppointmentService = async (createAppointmentDto: IAppointmentDto): Promise<IAppointment> => {
    const newAppointment = {
        id: appointmentsId++,
        date: createAppointmentDto.date,
        time: createAppointmentDto.time,
        status: createAppointmentDto.status,
        userId: createAppointmentDto.userId,
        description: createAppointmentDto.description
    };
    appointments.push(newAppointment);
    return newAppointment;
};

//Función que cancela un turno
export const cancelAppointmentService = async (appointmentId: number) => {
    const appointmentIndex = appointments.findIndex(appointment => appointment.id === appointmentId)

    if(appointmentIndex !== -1){
        appointments[appointmentIndex].status = "Cancelled"
        return appointments[appointmentIndex];
    } else {
        throw Error ("No se encontró el turno");
    };
};