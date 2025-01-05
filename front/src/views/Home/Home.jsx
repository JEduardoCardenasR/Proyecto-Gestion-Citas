import React from "react";
import style from "./Home.module.css";
import Comprenhensive from '../../assets/Images/FotoComprenhensive.jpg';
import Team from '../../assets/Images/FotoTeam1.jpg';
import Facilities from '../../assets/Images/FotoFacilities.jpg';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={style.homeContainer}>
      <header className={style.heroSection}>
        <div className={style.heroText}>
          <h1>Welcome to Natalux</h1>
          <p>
            Providing holistic care for mothers and children. Your journey starts here, 
            where compassion meets excellence in every step of the way.
          </p>
        </div>
      </header>

      <section className={style.featuresSection}>
        <div className={style.feature}>
          <img src={Comprenhensive} alt="Comprehensive Care" />
          <h3>Comprehensive Care</h3>
          <p>
            We offer personalized maternal and pediatric healthcare with
            professionalism and compassion.
          </p>
        </div>
        <div className={style.feature}>
          <img src={Team} alt="Qualified Team" />
          <h3>Qualified Team</h3>
          <p>
            Our team is highly trained to ensure the best care for mothers and
            their children.
          </p>
        </div>
        <div className={style.feature}>
          <img src={Facilities} alt="Modern Facilities" />
          <h3>Modern Facilities</h3>
          <p>
            State-of-the-art facilities to provide you with the comfort and
            security you deserve.
          </p>
        </div>
      </section>

      <footer className={style.ctaSection}>
        <h2>Start Your Journey with Natalux</h2>
        <p>
          Join our family and experience healthcare redefined. A place where
          your comfort and care come first.
        </p> 
        <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
          <button className={style.ctaButton}>Contact Us</button>
        </Link>
      </footer>
    </div>
  );
};

export default Home;
