import { Request, Response } from "express";
import { createUserService, getAllUsersService, getUserByIdService } from "../services/usersService";
import IUser from "../interfaces/IUser";
import IUserDto from "../dtos/IUserDto";

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users: IUser[] = await getAllUsersService();
        res.status(200).json(users)
    } catch (error: any) {
        res.status(400).json({error: error.message});
    }
};

export const getUserById = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const user: IUser = await getUserByIdService(Number(id));
        res.status(200).json(user)
    } catch (error: any) {
        res.status(400).json({error: error.message});
    }    
};

export const register = async (req: Request, res: Response) => {
    try {
        const {name, email, username, password, birthdate, nDni}: IUserDto = req.body;
        const newUser: IUser = await createUserService({
            name, email, username, password, birthdate, nDni
        });
        res.status(200).json(newUser)
    } catch (error: any) {
        res.status(400).json({error: error.message});
    };    
};

//PENDIENTE
export const login = (req: Request, res: Response) => {
    res.status(200).send("Autentica al usuario");
};