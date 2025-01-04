import style from "./Navbar.module.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={style.navbarContainer}>
            <Link to='/home'>
            <p>Logo</p>
            </Link>

            <p>Welcome to Natalux</p>

            <div>
                <Link to='/'>
                <p>Login</p>
                </Link>

                <Link to='/register'>
                <p>Register</p>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;