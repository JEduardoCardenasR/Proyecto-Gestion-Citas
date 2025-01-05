import React from 'react';
import style from './AboutUs.module.css';

const AboutUs = () => {
    return (
        <section className={style.aboutUsContainer}>
            <div className={style.infoContainer}>
                <h2>About Natalux</h2>
                <p>Welcome to Natalux, a place where we care for both mothers and babies. Our goal is to provide top-notch maternal and pediatric healthcare services with compassion and professionalism.</p>
            </div>
            <div className={style.imageContainer}>
                <img src="your-image-path.jpg" alt="About Us" />
            </div>
            <div className={style.imageContainer}>
                <img src="your-image-path.jpg" alt="Our Mission" />
            </div>
            <div className={style.infoContainer}>
                <h3>Our Mission</h3>
                <p>We aim to create a welcoming environment for all our patients, with personalized care for each individual. We believe in holistic healthcare for mothers and children alike.</p>
            </div>
            <div className={style.infoContainer}>
                <h2>About Natalux</h2>
                <p>Welcome to Natalux, a place where we care for both mothers and babies. Our goal is to provide top-notch maternal and pediatric healthcare services with compassion and professionalism.</p>
            </div>
            <div className={style.imageContainer}>
                <img src="your-image-path.jpg" alt="About Us" />
            </div>
            <div className={style.imageContainer}>
                <img src="your-image-path.jpg" alt="Our Mission" />
            </div>
            <div className={style.infoContainer}>
                <h3>Our Mission</h3>
                <p>We aim to create a welcoming environment for all our patients, with personalized care for each individual. We believe in holistic healthcare for mothers and children alike.</p>
            </div>
            
        </section>
    );
}

export default AboutUs;
