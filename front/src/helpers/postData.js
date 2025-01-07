import axios from 'axios';
// import { useUser } from '../../context/UserContext';

// const {setUser} = useUser();

export const postDataRegister = async (formData) => {
  try {
    const response = await axios.post('http://localhost:3002/users/register', formData);
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