import { useEffect } from "react";
import Appointment from "../../components/Appointment/Appointment";
import axios from "axios";
import style from "./MyAppointments.module.css";
import { useUser } from '../../context/UserContext';
import { Link, useNavigate} from 'react-router-dom'

const MyAppointments = () => {
    const navigate = useNavigate();
    const {user, setUserAppointments, userAppointments} = useUser();


    // MONTAJE DEL COMPONENTE
    useEffect(() => {
        // LÓGICA A EJECUTAR
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3002/users/${user.id}`);
                setUserAppointments(response.data.appointments)
            } catch (error) {
                console.log(error);
            }
        };
        !user.name ? navigate('/login') : fetchData();
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
            <Link to='/newappointment' className={style.button}>
                <p>Create A New Appointment</p>
            </Link>
            <h1>My Appointments</h1>
            {userAppointments.length ? (
                userAppointments.map((appointment) => {
                    return (
                        <Appointment key={appointment.id} {...appointment}/>
                    );
                })
            ) : (
                <div className={style.noAppointments}>No tienes ningún turno</div>
            )}
        </div>
    );
};

export default MyAppointments;
