import style from "./Navbar.module.css";
import { Link } from 'react-router-dom';
import logo from '../../assets/Images/Logo.png';


const Navbar = () => {
    return (
        <nav className={style.navbarContainer}>
            
            <Link to='/home' className={style.logo}>
                <img src={logo} alt="NATALUX" />
            </Link>

            <div className={style.navIcons}>
                <p>Welcome to Natalux</p>
            </div>

            <ul className={style.navLinks}>
                <Link to='/register'>
                    <p>Register</p>
                </Link>

                <Link to='/'>
                    <p>Login</p>
                </Link>

                <Link to='/appointments'>
                    <p>Appointments</p>
                </Link>

                <Link to='/about'>
                    <p>About Us</p>
                </Link>

                <Link to='/contact'>
                    <p>Contact</p>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar;