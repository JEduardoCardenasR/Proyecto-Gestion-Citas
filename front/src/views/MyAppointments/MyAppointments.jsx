import { useState } from "react";
import MyAppointmentsPreload from "../../helpers/MyAppointments";
import Appointment from "../../components/Appointment/Appointment";

const MyAppointments = () => {
    const [appointments, setAppointments] = useState(MyAppointmentsPreload);

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