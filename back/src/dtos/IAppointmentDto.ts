import { AppointmentStatus } from "../enums/AppointmentStatus";

interface IAppointmentDto {
    date: Date,
    time: string,
    status: AppointmentStatus,
    userId: number,
    description: string
};

export default IAppointmentDto;
