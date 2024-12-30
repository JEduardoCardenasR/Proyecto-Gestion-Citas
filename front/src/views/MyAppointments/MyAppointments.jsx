import { useState, useEffect } from "react";
import Appointment from "../../components/Appointment/Appointment";
import axios from "axios";

const MyAppointments = () => {
    const [appointments, setAppointments] = useState([]);

    //MONTEJE DEL COMPONENTE

    useEffect(()=> {
        //LÓGICA A EJECUTAR
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3002/appointments');
                setAppointments(response.data)
            } catch (error) {
                console.log(error);
                
            }
        }
        fetchData()
    }, [])

    // //ACTUALIZACIÓN DEL COMPONENTE

    // useEffect(()=> {
    //     //LÓGICA A EJECUTAR
    // }, [appointments])

    // //DESMONTEJE DEL COMPONENTE

    // useEffect(()=> {
    //     //LÓGICA A EJECUTAR
    //     return () => {
    //         //LÓGICA A EJECTUAR CUANDO SE DESMONTA EL COMPONENTE
    //     }
    // }, [])

    return (
        <div>
            <h1>My Appointments</h1>
            {
                appointments.length ? (
                    appointments.map((appointment) => {
                        return(
                            <Appointment key={appointment.id} 
                                date={appointment.date} 
                                time={appointment.time} 
                                description={appointment.description} 
                                status={appointment.status}
                            />
                        )
                    })
                ) : (
                    <div>No tienes ningun turno</div>
                )
            }
        </div>
    )
}

export default MyAppointments;