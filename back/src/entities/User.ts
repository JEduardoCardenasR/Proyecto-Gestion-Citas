import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Credential from "./Credential";
import Appointment from "./Appointment";

@Entity({
    name: "users"
})

class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    birthdate: Date;

    @Column()
    nDni: string;

    @OneToOne(() => Credential)
    @JoinColumn()
    credential: Credential; //El nombre de este atributo puede ser cualquiera

    @OneToMany(() => Appointment, (appointment) => appointment.user)
    appointments: Appointment[]; //Un array de appointments porque el usuario puede tener múltiples appointments
}

export default User;