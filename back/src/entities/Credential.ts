import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: "credentials" //en minúsculas por que SQL no lee bien las mayúculas
})

class Credential {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

}

export default Credential;