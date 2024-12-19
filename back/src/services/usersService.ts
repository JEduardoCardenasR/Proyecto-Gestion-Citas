import IUserDto from "../dtos/IUserDto";
import IUser from "../interfaces/IUser";
import { createCredential } from "./credentialsService";

const users: IUser[] = [];
let userId: number = 1;

//  Función que retorna el arreglo de usuarios

export const getAllUsersService = async (): Promise<IUser[]> => {
    return users;
};

//Función que retorna un elemento del arreglo por ID

export const getUserByIdService = async (id: number): Promise<IUser> => {
    const foundUser = users.find(user => user.id === id);
    if(!foundUser) throw Error("Usuario no fue encontrado");
    return foundUser;
};

//Función que crea un usuario con sus credenciales
export const createUserService = async (createUserDto: IUserDto): Promise<IUser> => {
    const newCredential: number = await createCredential({
        username: createUserDto.username,
        password: createUserDto.password
    });
    const newUser: IUser = {
        id: userId++,
        name: createUserDto.name,
        email: createUserDto.email,
        birthdate: createUserDto.birthdate,
        nDni: createUserDto.nDni,
        credentialsId: newCredential
    }
    users.push(newUser);
    return newUser;
}