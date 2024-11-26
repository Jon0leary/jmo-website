import React from 'react';
import './Home.css';
import Background from '../components/Background.js';
import BiWeeklyCarousel from '../components/BiWeeklyCarousel'; // Import the BiWeeklyCarousel component\
import LinkedInIcon from '../images/official-icons/LinkedIn_icon.svg'; // Import the LinkedIn SVG

function Home() {
  return (
    <div className="main-container">
      <Background />

      {/* Welcome Section */}
      <section className="welcome-section">
      <h1 className="outlined-text-large">Welcome!</h1>
        <p className="outlined-text-small">
          This website will provide updates on my games, projects, and more!
        </p>
      </section>

      {/* Bi-Weekly Update Section */}
      <section className="bi-weekly-update">
        <BiWeeklyCarousel /> {/* Use the BiWeeklyCarousel component here */}
      </section>

      {/* Contact Me Section */}
      <section className="contact-section">
        <h3>Contact Me</h3>
        <p>Email: jomosoftware@gmail.com</p>
        <a href="https://www.linkedin.com/in/jmo" target="_blank" rel="noopener noreferrer">
          <button className="linkedin-button-home">
            LinkedIn
            <img src={LinkedInIcon} alt="LinkedIn" className="icon" />
          </button>
        </a>
      </section>
    </div>
  );
}

export default Home;