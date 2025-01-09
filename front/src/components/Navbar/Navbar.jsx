import style from "./Navbar.module.css";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/Images/Logo.png';
import { useUser } from "../../context/UserContext";


const Navbar = () => {
    const {user, setUser} = useUser();
    
    const navigate = useNavigate();
    const logoutUser = () => {
        setUser({})
        navigate('/')
    }

    return (
        <nav className={style.navbarContainer} >
            <Link to='/' className={style.logo} onClick={() => window.scrollTo(0, 0)}>
                <img src={logo} alt="NATALUX" />
            </Link>
            
            {
                user.name ? (
                    <div>
                        <div className={style.navIcons}>
                            <p>Welcome to Natalux</p>
                            <p className={style.name}>
                                {user.name}
                            </p>
                        </div>
                        
                    </div>
                ) : (
                    <div className={style.navIcons}>
                        <p>Welcome to Natalux</p>
                    </div>
                )
            }
            {
                user.name ? (
                    
                    
                    <ul className={style.navLinks}>
                        <Link to='/appointments'>
                            <p>Appointments</p>
                        </Link>

                        <Link to='/about'>
                            <p>About Us</p>
                        </Link>

                        <Link to='/contact'>
                            <p>Contact Us</p>
                        </Link>
                        <button onClick={logoutUser}>
                            Logout
                        </button>
                    </ul>

                ) : (

                    <ul className={style.navLinks}>
                        <Link to='/register'>
                            <p>Register</p>
                        </Link>

                        <Link to='/login'>
                            <p>Login</p>
                        </Link>

                        <Link to='/about'>
                            <p>About Us</p>
                        </Link>

                        <Link to='/contact'>
                            <p>Contact Us</p>
                        </Link>
                    </ul>

                )
            }
        </nav>
    )
}

export default Navbar;