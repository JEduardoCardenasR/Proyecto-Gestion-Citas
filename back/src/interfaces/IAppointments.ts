interface IAppointment {
    id: number;
    date: Date;
    time: string;
    status: "Active" | "Cancelled" | "Completed";
    userId: number;
    description?: string; // Agrega la propiedad description como opcional
};

export default IAppointment;

