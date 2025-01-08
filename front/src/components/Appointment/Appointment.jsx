import axios from 'axios';
import style from "./Appointment.module.css";
import { useUser } from '../../context/UserContext';

const Appointment = ({ date, time, description, status, id }) => {
    const {userAppointments, setUserAppointments} = useUser(); 
    
    const cancelAppointment = async () => {
        try {
            await axios.put(`http://localhost:3002/appointments/cancel/${id}`);
            const newAppointments = userAppointments.map(appointment => {
                if(appointment.id === id) {
                    return {...appointment, status: 'Cancelled'}
                }
                return appointment;
            })
            setUserAppointments(newAppointments)
        } catch (error) {
            console.log(error);
        }
    }

    // Formatear la fecha
    const formatDate = (isoDate) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Intl.DateTimeFormat('en-US', options).format(new Date(isoDate));
    };

    return (
        <div className={style.appointmentContainer}>
            <p><strong>Date:</strong> {formatDate(date)}</p>
            <p><strong>Time:</strong> {time}</p>
            <p><strong>Description:</strong> {description}</p>
            <p><strong>Status:</strong> {status}</p>

            {/* {
                status != 'Cancelled' &&  <button onClick={cancelAppointment}>Cancel</button>
            } */}

            <button onClick={cancelAppointment} disabled={status === 'Cancelled'}>Cancel</button>
        </div>
    );
};

export default Appointment;
