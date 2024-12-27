import style from "./Navbar.module.css"

const Navbar = () => {
    return (
        <nav className={style.navbarContainer}>
            <p>Logo</p>

            <p>Welcome to Natalux</p>

            <p>Buttons</p>
        </nav>
    )
}

export default Navbar;