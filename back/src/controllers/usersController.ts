import { Request, Response } from "express";
import { createUserService, getAllUsersService, getUserByIdService } from "../services/usersService"; 
import IUserDto from "../dtos/IUserDto";
import User from "../entities/User";

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users: User[] = await getAllUsersService();
        res.status(200).json(users)
    } catch (error: any) {
        res.status(400).json({error: error.message});
    }
};

export const getUserById = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const user: User = await getUserByIdService(Number(id));
        res.status(200).json(user)
    } catch (error: any) {
        res.status(400).json({error: error.message});
    }    
};

export const register = async (req: Request, res: Response) => {
    try {
        const {name, email, username, password, birthdate, nDni}: IUserDto = req.body;
        const newUser: User = await createUserService({
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