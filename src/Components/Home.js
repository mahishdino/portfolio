import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Typed from 'typed.js';
import Resume from "../Resume/dhondi rathan raj.pdf";
import HomeImage from "../Images/rathan_home.jpeg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Home() {

    useEffect(() => {
        // Initialize ScrollReveal for animations
        ScrollReveal().reveal('.home-content, heading', { origin: 'top' });

        // Initialize Typed.js for the multiple-text span
        const typed = new Typed('.multiple-text', {
            strings: ['Frontend Developer', "Mobile App Developer", "Fullstack Developer"],
            typeSpeed: 70,
            backSpeed: 70,
            backDelay: 1000,
            loop: true
        });

        // Event listener for scrolling to handle sticky navbar
        window.addEventListener('scroll', handleScroll);

        return () => {
            // Cleanup event listener
            window.removeEventListener('scroll', handleScroll);
            // Cleanup Typed.js instance
            typed.destroy();
        }
    }, []);

    const handleScroll = () => {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    }

    return (
        <section className="home" id="home">
            <div className="home-content">
                <h3>Hi, Myself</h3>
                <h1>Dhondi Rathan Raj</h1>
                <h3>And I'm <span className="multiple-text"></span></h3>
                <p>Responsible for designing and implementing user interfaces, ensuring responsiveness, performance, and
                    cross-browser compatibility, while collaborating closely with design and backend teams.</p>
                    <div className="social-media">
                    <a href="https://www.facebook.com/MahishDino/"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="https://www.linkedin.com/in/mahish-dino-rathan-raj-d-37106313a"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="https://x.com/mahishdino7?t=JlMM8vXlA5OepgLOOScHFQ&s=09"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="https://www.instagram.com/dinomahish/"><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
                <a href={Resume} className="btn" download>Download CV</a>
            </div>

            <div className="home-img">
                <img src={HomeImage} alt="" />
            </div>
        </section>
    );
}

export default Home;
