import axios from 'axios';

export const postDataRegister = async (formData, navigate) => {
  try {
    const response = await axios.post('http://localhost:3002/users/register', formData);
    navigate('/login')
    if (response.status === 201) {
      alert('User logged successfully');
    } else {
      alert('User not logged successfully');
    }
  } catch (error) {
    console.log(error);
    alert('User not logged successfully');
  }
};


export const postDataLogin = async (formData, setUser, navigate) => {
  try {
    const response = await axios.post('http://localhost:3002/users/login', formData);
    setUser(response.data.user)
    navigate('/')
    if (response.status === 200) {
      alert('User logged successfully');
      // if (setUser) {
      //   setUser(response.data.user)
      // }
    } else {
      alert('User not logged successfully');
    }
  } catch (error) {
    console.log(error);
    alert('User not logged successfully');
  }
};

export const postDataNew = async (formData, user, navigate) => {
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