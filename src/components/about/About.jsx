import React from "react";
import "./about.css";
import { RiAwardFill } from "react-icons/ri";
import { HiOutlineUsers } from "react-icons/hi";
import { RiProjectorFill } from "react-icons/ri";

const About = () => {
  return (
    <div id="about"  className="about-section">
      <div className="about-heading">
        <h2>ABOUT ME</h2>
      </div>
      <div className="about_container">
        <div className="about_content">
          <p>
            I am a motivated Computer Science and Engineering student with track
            record of taking part in multiple internships and projects. As a
            quick and avid learner, I am committed to staying up-to-date with
            latest advancements in my field. I am known for my enthusiasm and
            ability to work well in a team environment, and I have a proven
            track record of meeting tight deadlines. Front-end Developer | UI/UX
            Designer | Graphic Designer | Back-end Developer
          </p>
      
        </div>
      </div>
    </div>
  );
};

export default About;
