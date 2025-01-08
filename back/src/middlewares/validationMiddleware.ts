import { Request, Response, NextFunction, RequestHandler } from "express";

// Validación de registro
export const validateRegister: RequestHandler = (req, res, next) => {
    const errors: Record<string, string> = {};
    const { name, email, birthdate, nDni, username, password } = req.body;

    // Validar nombre
    if (!name) {
        errors.name = "Name is required";
    } else if (name.length < 2) {
        errors.name = "Name must be at least 2 characters long";
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
        errors.name = "Name must contain only letters and spaces";
    }

    // Validar correo electrónico
    if (!email) {
        errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
        errors.email = "Invalid email address";
    }

    // Validar fecha de nacimiento
    if (!birthdate) {
        errors.birthdate = "Birthdate is required";
    } else {
        const today = new Date();
        const birthdateDate = new Date(birthdate);
        const age = today.getFullYear() - birthdateDate.getFullYear();
        if (age < 18) {
            errors.birthdate = "You must be at least 18 years old";
        }
    }

    // Validar DNI
    if (!nDni) {
        errors.nDni = "DNI is required";
    } else if (!/^\d{7,8}$/.test(nDni)) {
        errors.nDni = "DNI must be 7 or 8 digits long";
    }

    // Validar username
    if (!username) {
        errors.username = "Username is required";
    } else if (username.length < 4) {
        errors.username = "Username must be at least 4 characters long";
    } else if (!/^[a-zA-Z0-9_]+$/.test(username)) {
        errors.username = "Username can only contain letters, numbers, and underscores";
    }

    // Validar contraseña
    if (!password) {
        errors.password = "Password is required";
    } else if (password.length < 8) {
        errors.password = "Password must be at least 8 characters long";
    } else if (
        !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(password)
    ) {
        errors.password = "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character";
    }

    // Enviar errores si existen
    if (Object.keys(errors).length > 0) {
        res.status(400).json({ errors });
    } else {
        next(); // Continuar con la ejecución
    }
};

// Validación de login
export const validateLogin: RequestHandler = (req, res, next) => {
    const errors: Record<string, string> = {};
    const { username, password } = req.body;

    // Validar username
    if (!username) {
        errors.username = "Username is required";
    } else if (!/^[a-zA-Z0-9_]+$/.test(username)) {
        errors.username = "Username must contain only letters, numbers, or underscores";
    }

    // Validar contraseña
    if (!password) {
        errors.password = "Password is required";
    } else if (password.length < 8) {
        errors.password = "Password must be at least 8 characters long";
    }

    // Enviar errores si existen
    if (Object.keys(errors).length > 0) {
        res.status(400).json({ errors });
    } else {
        next(); // Continuar con la ejecución
    }
};
