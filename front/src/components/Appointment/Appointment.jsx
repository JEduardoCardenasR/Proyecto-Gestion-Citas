
// const Appointment = ({date, description, status, time}) => {
//     return (
//         <div>
//             <h2>{date}</h2>
//             <p>{time}</p>
//             <p>{description}</p>
//             <p>{status}</p>
//         </div>
//     )
// }

// export default Appointment;

import React from "react";
import style from "./Appointment.module.css";

const Appointment = ({ date, time, description, status }) => {
    return (
        <div className={style.appointmentContainer}>
            <p><strong>Date:</strong> {date}</p>
            <p><strong>Time:</strong> {time}</p>
            <p><strong>Description:</strong> {description}</p>
            <p><strong>Status:</strong> {status}</p>
        </div>
    );
};

export default Appointment;
