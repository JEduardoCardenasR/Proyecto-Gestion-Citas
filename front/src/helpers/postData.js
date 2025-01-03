import axios from 'axios';

export const postData = async (formData) => {
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


// export const postDataLogin = async (formData) => {
//   try {
//     const response = await axios.post('http://localhost:3002/users/login', formData);
//     if (response.status === 200) {
//       alert('User logged successfully');
//     } else {
//       alert('User not logged successfully');
//     }
//   } catch (error) {
//     console.log(error);
//     alert('User not logged successfully');
//   }
// };