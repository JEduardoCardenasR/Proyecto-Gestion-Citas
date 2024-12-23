import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./User";
import { AppointmentStatus } from "../enums/AppointmentStatus";

@Entity({
    name: "appointments"
})

class Appointment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: Date;

    @Column()
    time: string;

    @Column({
        type: "enum",
        enum: AppointmentStatus,
        default: AppointmentStatus.Active,
    })
    status: AppointmentStatus;

    @Column({ nullable: true}) //Permite valores NULL en la base de datos
    description?: string //Es opcional en typescript (se necesitan ambos)

    @ManyToOne(() => User, (user) => user.appointments)
    user: User;
}

export default Appointment;