import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { requiredDay, requiredTime, isValidTime, isValidDay, isWeekDay, validateDescription } from "../../helpers/validate";
import style from './NewAppointment.module.css';
import { postDataNew } from "../../helpers/PostData";

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

    const handleSubmit = (event) => {
        event.preventDefault();

        postDataNew(formData, user, navigate);
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
            }
            
            if (!isValidDay(formData.date)) {
                newErrors.date = 'The appointment must be scheduled for a date after today.';
            } 

            if ((isWeekDay(formData.date)) && (isValidDay(formData.date))) {
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

          if (!requiredDay(formData.date)) {
            newErrors.date = 'Date is required';
          }

          if (!requiredTime(formData.time)) {
            newErrors.time = 'Time is required';
          }

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
                  placeholder='Description (max 30 words)'
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