import { Request, Response, NextFunction, RequestHandler } from "express";

// Validación de fecha
export const validateDate: RequestHandler = (req, res, next) => {
    const { date } = req.body;
    const errors: Record<string, string> = {};

    // Validar que la fecha no sea fin de semana
    const dateObj = new Date(date);
    const dayOfWeek = dateObj.getDay();
    if (dayOfWeek === 5 || dayOfWeek === 6) {
        errors.date = "The appointment must be scheduled on a weekday.";
    }

    // Validar que la fecha sea futura
    const today = new Date();
    if (dateObj <= today) {
        errors.date = "The appointment must be scheduled for a date after today.";
    }

    if (Object.keys(errors).length > 0) {
        res.status(400).json({ errors });
    } else {
        next(); // Continuar con la ejecución si la fecha es válida
    }
};

// Validación de hora
export const validateTime: RequestHandler = (req, res, next) => {
    const { time } = req.body;
    const errors: Record<string, string> = {};

    // Validar que la hora esté entre 8 AM y 5 PM
    const [hour, minutes] = time.split(":").map(Number);
    if (hour < 8 || hour > 17 || (hour === 17 && minutes > 0)) {
        errors.time = "The appointment must be scheduled between 8 AM and 5 PM.";
    }

    if (Object.keys(errors).length > 0) {
        res.status(400).json({ errors });
    } else {
        next(); // Continuar con la ejecución si la hora es válida
    }
};

// Validación de descripción
export const validateDescription: RequestHandler = (req, res, next) => {
    const { description } = req.body;
    const errors: Record<string, string> = {};

    // Validar que la descripción no tenga más de 30 caracteres
    if (description.length > 30) {
        errors.description = "The description must not exceed 30 characters.";
    }

    if (Object.keys(errors).length > 0) {
        res.status(400).json({ errors });
    } else {
        next(); // Continuar con la ejecución si la descripción es válida
    }
};
