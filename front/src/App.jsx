import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import MyAppointments from './views/MyAppointments/MyAppointments';
import Register from './views/Register/Register';
import Navbar from "./components/Navbar/Navbar.jsx";
import './styles/Global.module.css';
import Footer from './components/Footer/Footer.jsx';
import AboutUs from './views/AboutUs/AboutUs.jsx';
import ContactUs from './views/ContactUs/ContactUs.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/appointments' element={<MyAppointments />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<ContactUs />} />       
      </Routes>
      <Footer />
    </>
  )
}

export default App
