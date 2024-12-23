import {DataSource} from "typeorm";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME } from "./envs";
import Appointment from "../entities/Appointment";
import Credential from "../entities/Credential";
import User from "../entities/User";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST || "localhost",
    port: DB_PORT || 5432,
    username: DB_USERNAME, //Los que dimos en postgres cuando instalamos
    password: DB_PASSWORD, //Los que dimos en postgres cuando instalamos
    database: DB_NAME, //El que dimos al crear la base de datos (SQL Shell)
    //dropSchema: "true", //Vacía la base de datos para no estar eliminando los datos en cada actualización
    synchronize: true,
    logging: false,   //Esto (false) hace que los movimientos de la base de datos no apartezcan en la consola. Si quiero debuggear algo que no está saliendo bien le pongo en true
    entities: [Appointment, Credential, User],
    migrations: [],
})

export const userModel = AppDataSource.getRepository(User);
export const credentialModel = AppDataSource.getRepository(Credential);
export const appointmentModel = AppDataSource.getRepository(Appointment);