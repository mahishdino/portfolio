import React from 'react';
import AboutMe from "../Images/rathan_1.jpeg"

function About() {
    return (
        <section className="about" id="about">
            <div className="about-img">
                <img src={AboutMe} alt="" />
            </div>

            <div className="about-content">
                <h2 className="heading">
                    ABOUT <span>Me</span>
                </h2>
                <h3>Frontend Developer</h3>
                <p>Hello! I'm Dhondi Rathan Raj, a dedicated React Native Developer with 4 years of hands-on experience in crafting dynamic and responsive Mobile App applications. Passionate about leveraging cutting-edge technologies and best practices to deliver exceptional user experiences, I specialize in front-end development using React Native and a wide range of complementary tools and libraries.</p>
                <p>Skills : <span>HTML, CSS, JavaScript, TypeScript, Tailwind CSS, Node Js,Nest Js,Qwik Js, React Native, Kotlin,Graph ql </span></p>
                <a href="#" className="btn">Read More</a>
            </div>
        </section>
    );
}

export default About;
