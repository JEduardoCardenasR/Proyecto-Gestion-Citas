export const validateRegister = (values) => {
    const errors = {};
  
    // Validación nombre
    if (!values.name) {
      errors.name = 'Name is required';
    } else if (values.name.length < 2) {
      errors.name = 'Name must be at least 2 characters long';
    } else if (!/^[a-zA-Z\s]+$/.test(values.name)) {
      errors.name = 'Name must contain only letters and spaces';
    }
  
    // Validación correo electrónico
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
  
    // Validación fecha de nacimiento
    if (!values.birthdate) {
      errors.birthdate = 'Birthdate is required';
    } else {
      const today = new Date();
      const birthdate = new Date(values.birthdate);
      const age = today.getFullYear() - birthdate.getFullYear();
      if (age < 18) {
        errors.birthdate = 'You must be at least 18 years old';
      }
    }
  
    // Validación DNI
    if (!values.nDni) {
      errors.nDni = 'DNI is required';
    } else if (!/^\d{7,8}$/.test(values.nDni)) {
      errors.nDni = 'DNI must be 7 or 8 digits long';
    }
  
    // Validación nombre de usuario
    if (!values.username) {
      errors.username = 'Username is required';
    } else if (values.username.length < 4) {
      errors.username = 'Username must be at least 4 characters long';
    } else if (!/^[a-zA-Z0-9_]+$/.test(values.username)) {
      errors.username = 'Username can only contain letters, numbers, and underscores';
    }
  
    // Validación contraseña
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    } else if (
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(values.password)
    ) {
      errors.password =
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character';
    }
  
    return errors;
  };
  

  export const validateLogin = (values) => {
    const errors = {};
  
    // Validación username
    if (!values.username) {
      errors.username = 'Username is required';
    } else if (!/^[a-zA-Z0-9_]+$/.test(values.username)) {
      errors.username = 'Username must contain only letters, numbers, or underscores';
    }
  
    // Validación password
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    }
  
    return errors;
  };

  export const requiredDay = (dateString) => {
    const required = dateString;
    if (!required) {
      return false
    }
    return true
  }

  export const isWeekDay = (dateString) => {
    const date = new Date(dateString);
    const dayOfWeek = date.getDay();
    return dayOfWeek !== 5 && dayOfWeek !== 6 
  };

  export const isValidDay = (dateString)=> {
    const date = new Date(dateString);
    const today = new Date();
    if (date <= today) {
        return false;
    }
    return true; 
  };
  

  export const isValidTime = (timeString) => {
    const [hour, minutes] = timeString.split(':').map(Number)
    if(hour < 8 || hour > 17 || (hour === 17 && minutes > 0)) {
      return false
    }
    return true
  };

  export const requiredTime = (timeString) => {
    const required = timeString;
    if (!required) {
      return false
    }
    return true
  }

  export const validateDescription = (description) => {
    const wordCount = description.length;
    if (wordCount > 30) {
        return false;
    }
    return true;
  };

  export const canCancelAppointment = (appointmentDateString) => {
    const appointmentDate = new Date(appointmentDateString);
    const today = new Date();
  
    // Normalizar horas para comparar solo día, mes y año
    today.setHours(0, 0, 0, 0);
    appointmentDate.setHours(0, 0, 0, 0);
  
    // Verifica si la fecha de la cita es después de hoy
    return appointmentDate > today;
  };