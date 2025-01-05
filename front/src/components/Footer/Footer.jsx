import React from 'react';
import style from './Footer.module.css';
import Logo from '../../assets/Images/Logo.png';  // Ruta a la imagen del logo (si es necesario)
import FacebookLogo from '../../assets/Images/FacebookLogo.png';
import WhatsappLogo from '../../assets/Images/WhatsappLogo.png';
import InstagramLogo from '../../assets/Images/InstagramLogo.png';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.logo}>
        <img src={Logo} alt="NATALUX" />
      </div>
      <div className={style.brand}>
        NATALUX - Consultorio Materno-Fetal
      </div>
      <div className={style.socials}>
        <a href="/contact">
          <img src={FacebookLogo} alt="Facebook" />
        </a>
        <a href="/contact">
          <img src={InstagramLogo} alt="Instagram" />
        </a>
        <a href="/contact">
          <img src={WhatsappLogo} alt="Whatsapp" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
