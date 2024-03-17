import React from 'react';
import Electrical from '../Images/Electrical.jpeg'
import ERP from '../Images/ERP.jpeg'
import Ecommerece from '../Images/QW.jpeg'


function Projects() {
  return (
    <section class="portfolio" id="portfolio">
        <h2 class="heading">Latest
            <span>Projects</span>
        </h2>

        <div class="portfolio-container">
            <div class="portfolio-box">
                <img src={Electrical} alt="" />
                <div class="portfolio-layer">
                    <h4>Electrical AI App</h4>
                    <p> I spearheaded a project developing an Al-powered module
                        for imaging electrical infrastructure, using Qwik.js, and Kotlin.
                        The module features offline capability, ensuring seamless data
                        handling in fluctuating connectivity, highlighting my proficiency
                        in creating efficient, resilient software solutions.</p>
                    <i class="fa-solid fa-up-right-form-square"></i>
                </div>
            </div>

            <div class="portfolio-box">
                <img src={ERP} alt="" />
                <div class="portfolio-layer">
                    <h4>ERP AI APP</h4>
                    <p>Developed multiple mobile applications with multiple, modules
                        namely Examinations, Payments, Academics, Student & Parent
                        Login, Faculty Login, Trasport, Digital Content, Library, Visitor
                        Management and many more.</p>
                    <i class="fa-solid fa-up-right-form-square"></i>
                </div>
            </div>

            <div class="portfolio-box">
                <img src={Ecommerece} alt="" />
                <div class="portfolio-layer">
                    <h4>E-Commerce App</h4>
                    <p>Qwiksto is India's first B2B cum B2C Reselling Business App, where
                        you can find top-quality products at the lowest prices and sell
                        them in your personal circle. You can also offer "Factory deals" to
                        people who want to start their own online business.</p>
                    <i class="fa-solid fa-up-right-form-square"></i>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Projects;
