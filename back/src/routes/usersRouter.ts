import { Router } from "express";
import { getAllUsers, getUserById, login, register } from "../controllers/usersController";
import { validateRegister, validateLogin } from "../middlewares/validationMiddleware";

const usersRouter: Router = Router();

// Rutas / Endpoints

//Obtener el listado de todos los usuarios
usersRouter.get("/", getAllUsers);

//Obtener el detalle de un usuario específico
usersRouter.get("/:id", getUserById);

//Registro de un nuevo usuario
usersRouter.post("/register", validateRegister, register);

//Login del usuario a la aplicación
usersRouter.post("/login", validateLogin, login);

export default usersRouter;
