import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { isValidTime, isWeekDay, validateDescription } from "../../helpers/validate";
import axios from "axios";
import style from './NewAppointment.module.css';

const NewAppointment = () => {

    const navigate = useNavigate();
    const {user} = useUser();

    useEffect(() => {
        !user.name && navigate('/login') 
    }, []);

    const initialValue = {
        date: '',
        time: '',
        description: ''
    }
    const [formData, setFormData] = useState(initialValue)
    const [errors, setErrors] = useState(initialValue)

    const postData = async () => {
        try{
            await axios.post(`http://localhost:3002/appointments/schedule`, {
                date: formData.date,
                time: formData.time,
                description: formData.description,
                userId: user.id

            });
            alert ('Appointment Successfully Created')
            navigate('/appointments')
        } catch (error){
            console.log(error);
            
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        postData();

    }

    const handleChange = (event) => {
      const {name, value} = event.target;
  
      setFormData({
          ...formData,
          [name]: value
      });
    };

    useEffect(() => {
        const newErrors = { ...errors }; // Copiar el estado actual de errores
    
        // Validar la fecha
        if (formData.date) {
            if (!isWeekDay(formData.date)) {
                newErrors.date = 'The appointment must be scheduled on a weekday.';
            } else {
                newErrors.date = ''; // Limpiar el error si la fecha es válida
            }
        }
    
        // Validar el horario
        if (formData.time) {
            if (!isValidTime(formData.time)) {
                newErrors.time = 'The appointment must be scheduled between 8 AM and 5 PM.';
            } else {
                newErrors.time = ''; // Limpiar el error si la hora es válida
            }
        }

        if (formData.description) {
          if (!validateDescription(formData.description)) {
              newErrors.description = 'The description must not exceed 30 words.';
          } else {
              newErrors.description = ''; // Limpiar el error si la fecha es válida
          }
      }
    
        // Actualizar los errores
        setErrors(newErrors);
    }, [formData]);

    return (
        <div className={style.mainContainer}>
          <div className={style.formContainer}>
            <h1>New Appointment</h1>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Date</label>
                <input
                  type="date"
                  name="date"
                  onChange={handleChange}
                  value={formData.date}
                />
                {errors.date && <span>{errors.date}</span>}
              </div>
    
              <div>
                <label>Time</label>
                <input
                  type="time"
                  name="time"
                  onChange={handleChange}
                  value={formData.time}
                />
                {errors.time && <span>{errors.time}</span>}
              </div>
    
              <div>
                <label>Description</label>
                <input
                  type="text"
                  name="description"
                  onChange={handleChange}
                  value={formData.description}
                />
                {errors.description && <span>{errors.description}</span>}
              </div>
    
              <button disabled={errors.date || errors.time || errors.description} type="submit" onClick={() => window.scrollTo(0, 0)}>Create</button>
            </form>
          </div>
        </div>    
    );
}

export default NewAppointment;