import { useState, useEffect } from "react";
import Appointment from "../../components/Appointment/Appointment";
import axios from "axios";
import style from "./MyAppointments.module.css";

const MyAppointments = () => {
    const [appointments, setAppointments] = useState([]);

    // MONTAJE DEL COMPONENTE
    useEffect(() => {
        // LÓGICA A EJECUTAR
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3002/appointments');
                setAppointments(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    // // ACTUALIZACIÓN DEL COMPONENTE
    // useEffect(()=> {
    //     // LÓGICA A EJECUTAR
    // }, [appointments])

    // // DESMONTAJE DEL COMPONENTE
    // useEffect(()=> {
    //     // LÓGICA A EJECUTAR
    //     return () => {
    //         // LÓGICA A EJECUTAR CUANDO SE DESMONTA EL COMPONENTE
    //     }
    // }, [])

    return (
        <div className={style.container}>
            <h1>My Appointments</h1>
            {appointments.length ? (
                appointments.map((appointment) => {
                    return (
                        <Appointment
                            key={appointment.id}
                            date={appointment.date}
                            time={appointment.time}
                            description={appointment.description}
                            status={appointment.status}
                        />
                    );
                })
            ) : (
                <div className={style.noAppointments}>No tienes ningún turno</div>
            )}
        </div>
    );
};

export default MyAppointments;
