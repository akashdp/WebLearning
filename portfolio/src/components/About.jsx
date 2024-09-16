import React from "react";
import './About.css';
import aboutImage from "./myimg.png"; // Import your image here

const About = () => {
  return (
    <section className="about-section">
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          Hi, I’m Akash Deep, a passionate web developer from Himachal Pradesh, India, with a strong focus on full-stack development. I graduated with a degree in Computer Science Engineering from Chandigarh University in 2022. Since then, I’ve been honing my skills in modern web technologies to build responsive and dynamic web applications.
        </p>
        <h3>Skills & Expertise</h3>
        <ul>
          <li><strong>Front-end:</strong> HTML, CSS, JavaScript, ReactJS</li>
          <li><strong>Back-end:</strong> NodeJS, ExpressJS</li>
          <li><strong>Databases:</strong> MongoDB, PostgreSQL, MySQL</li>
          <li><strong>Other:</strong> RESTful API development, Git for version control</li>
        </ul>
        <h3>My Journey</h3>
        <p>
          Born and raised in Himachal Pradesh, I pursued my engineering degree at Chandigarh University from 2018 to 2022. Throughout my academic journey, I developed a deep passion for coding and web development.
        </p>
        <h3>Vision</h3>
        <p>
          As a developer, my goal is to build user-friendly, scalable web applications that solve real-world problems. I am always eager to learn and embrace new technologies to stay updated in this fast-paced field.
        </p>
      </div>
      <div className="about-image">
        <img src={aboutImage} alt="Akash" />
      </div>
    </section>
  );
};

export default About;
