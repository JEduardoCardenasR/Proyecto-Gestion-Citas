# 🗓️ Proyecto de Gestión de Citas y Usuarios Técnicos - Front y Back Full Stack

📅 **Período de desarrollo:** octubre 2024 – diciembre 2024  
👨‍💻 **Modalidad:** Proyecto Full Stack individual realizado como parte de una formación en desarrollo web.

---

## 🔍 Descripción General

Aplicación orientada a la gestión de usuarios y reservas de citas técnicas. Permite a clientes y técnicos interactuar mediante un sistema organizado, funcional y fácil de usar.

Se trabajaron tanto el frontend como el backend, aplicando buenas prácticas de arquitectura y desarrollo.

---

## 🛠️ Tecnologías Utilizadas

### 🖥️ Frontend:
- React con Vite
- JavaScript (sin SWC)
- CSS
- React Router
- Hooks: `useState`, `useEffect`, `useContext`

### ⚙️ Backend:
- Node.js
- TypeScript
- Express
- TypeORM
- PostgreSQL

### 🧪 Testing & Dev Tools:
- Insomnia (pruebas de endpoints)
- Nodemon
- ts-node
- dotenv

### 📂 Control de versiones:
- Git & GitHub

---

## 🔑 Funcionalidades Principales

### 🔐 Usuarios:
- Registro de nuevos usuarios con validaciones
- Login con credenciales seguras
- Obtención de listado y detalle de usuarios

### 📅 Citas:
- Agendamiento de turnos técnicos
- Consulta y detalle de citas
- Cancelación de citas
- Asociación de citas a usuarios mediante `userId`
- Estados: Activa, Cancelada, Completada

### 💡 Interfaz:
- Interfaz intuitiva con componentes reutilizables
- Manipulación de estado con `useState`, `props`, y `useContext`
- Navegación por rutas con React Router

---

## ✨ Buenas Prácticas Aplicadas

- Separación de responsabilidades entre capas (controladores, servicios, entidades)
- Uso de DTOs para validación de datos en TypeScript
- Middleware para validaciones y errores
- Funciones puras para manipulación de estado
- Comunicación entre componentes vía props y callbacks
- Asincronía controlada con `async/await`
- Uso de `keys` en listas renderizadas

---

## 📁 Estructura del Backend (Express)

### 📌 Ejemplo de Controlador de Usuarios

``ts
export const register = async (req: Request, res: Response) => {
    try {
        const {name, email, username, password, birthdate, nDni}: IUserDto = req.body;
        const newUser: User = await createUserService({
            name, email, username, password, birthdate, nDni
        });
        res.status(201).json(newUser)
    } catch (error: any) {
        res.status(400).json({error: error.message});
    };    
};

📌 Rutas de Usuarios
usersRouter.get("/", getAllUsers);
usersRouter.get("/:id", getUserById);
usersRouter.post("/register", validateRegister, register);
usersRouter.post("/login", validateLogin, login);

📌 Rutas de Citas
appointmentsRouter.get("/", getAllAppointments);
appointmentsRouter.get("/:id", getAppointmentById);
appointmentsRouter.post("/schedule", validateDate, validateTime, validateDescription, schedule);
appointmentsRouter.put("/cancel/:id", validateCancellation, inactiveAppointment);

🌐 Estructura del Frontend (React)

📌 Renderizado con Context API
<UserContext.Provider value={{ user, setUser, userAppointments, setUserAppointments }}>
  {children}
</UserContext.Provider>

📌 Rutas Principales
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/login' element={<Login />} />
  <Route path='/register' element={<Register />} />
  <Route path='/appointments' element={<MyAppointments />} />
  <Route path='/newappointment' element={<NewAppointment />} />
</Routes>

🧠 Aptitudes Desarrolladas
React.js · JavaScript · CSS
Node.js · TypeScript · Express.js
PostgreSQL · TypeORM · GitHub · Git

📸 Capturas de Pantalla
![Natalux](https://github.com/user-attachments/assets/701bd547-a3bb-41d1-9b4c-7265290a14f6)
![AboutNatalux](https://github.com/user-attachments/assets/804c7d63-3dd8-4992-beae-7d5d3675f196)
![AboutNatalux1](https://github.com/user-attachments/assets/722a9172-59e8-4df9-825c-cdbbc0e7efea)
![LogInNatalux](https://github.com/user-attachments/assets/454954f2-4520-46ce-9691-2af5d46c469a)
![RegisterNatalux](https://github.com/user-attachments/assets/053a20df-9f46-4854-aab8-758c88733a7f)
![ContactNatalux](https://github.com/user-attachments/assets/360fd5b0-69a8-45c0-bd92-8c499e8731b1)

📌 Nota Final
Este proyecto fue construido como una práctica integral para consolidar conocimientos de desarrollo web full stack, aplicando estándares de calidad profesional tanto en frontend como backend.
