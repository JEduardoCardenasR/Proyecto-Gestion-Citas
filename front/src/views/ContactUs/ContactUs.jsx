import React from 'react';
import style from './ContactUs.module.css';
import FacebookLogo from '../../assets/Images/FacebookLogo.png';
import InstagramLogo from '../../assets/Images/InstagramLogo.png';
import WhatsappLogo from '../../assets/Images/WhatsappLogo.png';

const ContactUs = () => {
    return (
        <section className={style.contactUsContainer}>
            <div className={style.infoWrapper}>
                <h2>Contact Us</h2>
                <p className={style.explanationText}>
                    If you have any questions or need further information, feel free to get in touch with us. We're here to help!
                </p>

                <div className={style.socialContainer}>
                    <div className={style.socialSection}>
                        <h3>Facebook</h3>
                        <div className={style.imageContainer}>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <img src={FacebookLogo} alt="Facebook" />
                            </a>
                        </div>
                    </div>

                    <div className={style.socialSection}>
                        <h3>Instagram</h3>
                        <div className={style.imageContainer}>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <img src={InstagramLogo} alt="Instagram" />
                            </a>
                        </div>
                    </div>

                    <div className={style.socialSection}>
                        <h3>WhatsApp</h3>
                        <div className={style.imageContainer}>
                            <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
                                <img src={WhatsappLogo} alt="WhatsApp" />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ContactUs;
