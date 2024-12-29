import Navbar from "../../components/Navbar/Navbar.jsx";
import style from "./Home.module.css"


const Home = () => {
    return (
        <div className={style.homeContainer}>
            <Navbar />
            <h1>Home</h1>
        </div>
    )
};

export default Home;
