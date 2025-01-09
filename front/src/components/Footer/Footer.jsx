import React from 'react';
import style from './Footer.module.css';
import Logo from '../../assets/Images/Logo.png';  // Ruta a la imagen del logo (si es necesario)
import FacebookLogo from '../../assets/Images/FacebookLogo.png';
import WhatsappLogo from '../../assets/Images/WhatsappLogo.png';
import InstagramLogo from '../../assets/Images/InstagramLogo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <Link to='/' className={style.logo} onClick={() => window.scrollTo(0, 0)}>
          <img src={Logo} alt="NATALUX" />
      </Link>
      <div className={style.brand}>
        NATALUX - Maternal-Fetal Clinic
      </div>
      <div className={style.socials}>
        <Link to="/contact">
          <img src={FacebookLogo} alt="Facebook" />
        </Link>
        <Link to="/contact">
          <img src={InstagramLogo} alt="Instagram" />
        </Link>
        <Link to="/contact">
          <img src={WhatsappLogo} alt="Whatsapp" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
