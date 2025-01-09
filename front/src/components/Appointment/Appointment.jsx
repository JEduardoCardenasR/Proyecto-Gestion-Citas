import axios from 'axios';
import style from "./Appointment.module.css";
import { useUser } from '../../context/UserContext';
import { canCancelAppointment } from '../../helpers/validate';

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

    const canCancel = canCancelAppointment(date);
    const errorMessage = status !== 'Cancelled' && !canCancel
        ? "Appointments can only be cancelled until the day before the scheduled date."
        : "";

    return (
        <div className={style.appointmentContainer}>
            <p><strong>Date:</strong> {formatDate(date)}</p>
            <p><strong>Time:</strong> {time}</p>
            <p><strong>Description:</strong> {description}</p>
            <p>
                <strong>Status:</strong>
                <span className={status === 'Cancelled' ? style.cancelledStatus : style.activeStatus}>
                    {status}
                </span>
            </p>

            {/* {
                status != 'Cancelled' &&  <button onClick={cancelAppointment}>Cancel</button>
            } */}

            <button 
                onClick={cancelAppointment} 
                disabled={status === 'Cancelled' || !canCancel}>
                Cancel
            </button>

            {errorMessage && <p className={style.errorMessage}>{errorMessage}</p>}
            
        </div>
    );
};

export default Appointment;
