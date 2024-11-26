import React from 'react';
import './Portfolio.css'; // Link to your CSS file
import Background from '../components/Background.js'; // Import the new Background component
import LinkedInIcon from '../images/official-icons/LinkedIn_icon.svg'; // Import the LinkedIn SVG
import GithubIcon from '../images/official-icons/github-icon.svg'

// Import your images (optional step if using direct paths)
import selfPortrait from '../images/Me(NoGlasses).jpg';
import resumeImage from '../images/resume.jpg';


function Portfolio() {
  return (
    <div className="portfolio-container">
      <Background /> {/* Add the background component */}
      {/* Name Section */}
      <section className="name-section">
        <h1>Jonathan Maxwell O'Leary</h1>
      </section>

      {/* Flexbox Section for Portrait, Buttons, and Resume */}
      <section className="main-content">
        {/* Left-side Section */}
        <div className="left-section">
          {/* Self Portrait */}
          <div className="self-portrait">
            <img src={selfPortrait} alt="Self Portrait" className="portrait-image" />
          </div>

          {/* Social Buttons */}
          <div className="social-buttons">
            <button className="linkedin-button-portfolio">
              LinkedIn
              <img src={LinkedInIcon} alt="LinkedIn" className="icon" />
            </button>
            <button className="github-button-portfolio">
              Github
              <img src={GithubIcon} alt="Github" className="icon" />
            </button>
          </div>
        </div>

        {/* Resume Section */}
        <div className="resume-section">
          <h2>Resume</h2>
          <div className="resume-content">
            <img
              src={resumeImage}
              alt="Resume"
              className="resume-image"
            />
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="about-me">
        <h3>Projects</h3>
        <hr />
        <p>Text Regarding Me...</p>
      </section>
    </div>
  );
}

export default Portfolio;