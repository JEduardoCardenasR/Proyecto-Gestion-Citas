import { userModel } from "../config/dataSource";
import IUserDto from "../dtos/IUserDto";
import Credential from "../entities/Credential";
import User from "../entities/User";
import { createCredential } from "./credentialsService";

//  Función que retorna el arreglo de usuarios
export const getAllUsersService = async (): Promise<User[]> => {
    const users: User[] = await userModel.find();
    return users;
};

//Función que retorna un elemento del arreglo por ID
export const getUserByIdService = async (id: number): Promise<User> => {
    const foundUser: User = await userModel.findOne({where: {id}, relations: ["appointments"]})
    if(!foundUser) throw Error("Usuario no fue encontrado");
    return foundUser;
};

//Función que crea un usuario con sus credenciales
export const createUserService = async (createUserDto: IUserDto): Promise<User> => {
    const newCredential: Credential = await createCredential({
        username: createUserDto.username,
        password: createUserDto.password
    });

    const newUser: User = await userModel.create(createUserDto)
    newUser.credential = newCredential;
    await userModel.save(newUser);
    return newUser;
}