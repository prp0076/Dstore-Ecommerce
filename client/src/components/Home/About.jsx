import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <div className="about-img">
        <img src="your-image-src-here" alt="about-img" />
      </div>
      <div className="about-title">
        <h1>About Us</h1>
      </div>
      <div className="about-description">
        <p>Your description text goes here...</p>
      </div>
      <div className="about-contact">
        <h2>Contact Us</h2>
        <p>Your contact information goes here...</p>
      </div>
    </div>
  );
};

export default About;
