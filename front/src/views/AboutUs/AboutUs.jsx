import React from 'react';
import style from './AboutUs.module.css';
import Caring from '../../assets/Images/FotoCaring.jpg'
import Vision from '../../assets/Images/FotoVision.jpg'
import Excellence from '../../assets/Images/FotoExcellence.jpg'
import Why from '../../assets/Images/FotoWhyChoose.jpg'

const AboutUs = () => {
    return (
        <section className={style.aboutUsContainer}>
            <div className={style.infoContainer}>
                <h2>Welcome to Natalux</h2>
                <p>At Natalux, we are dedicated to supporting mothers and their little ones. Our mission is to deliver exceptional care in a nurturing and professional environment tailored to meet your needs.</p>
            </div>
            <div className={style.imageContainer}>
                <img src={Caring} alt="Caring for Mothers and Babies" />
            </div>
            <div className={style.imageContainer}>
                <img src={Vision} alt="Our Vision" />
            </div>
            <div className={style.infoContainer}>
                <h2>Our Vision</h2>
                <p>We strive to set the standard in maternal and pediatric healthcare, offering compassionate services that promote the well-being of families in every stage of life.</p>
            </div>
            <div className={style.infoContainer}>
                <h2>Committed to Excellence</h2>
                <p>Natalux is more than just a healthcare provider—we are your partner in parenthood. Our team is committed to ensuring you and your child receive the highest level of personalized care.</p>
            </div>
            <div className={style.imageContainer}>
                <img src={Excellence} alt="Excellence in Healthcare" />
            </div>
            <div className={style.imageContainer}>
                <img src={Why} alt="Why Choose Natalux" />
            </div>
            <div className={style.infoContainer}>
                <h2>Why Choose Us</h2>
                <p>With a focus on innovation, empathy, and expertise, Natalux creates a safe and welcoming space for every patient. Join us on a journey of holistic health and care.</p>
            </div>
        </section>
    
    );
}

export default AboutUs;
