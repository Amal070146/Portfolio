import React from "react";
import "./about.css";
import ME from "../../assets/amal.png";
import { RiAwardFill } from "react-icons/ri";
import { HiOutlineUsers } from "react-icons/hi";
import { RiProjectorFill } from "react-icons/ri";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <RiAwardFill className="about_icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className="about_card">
              <HiOutlineUsers className="about_icon" />
              <h5>Clients</h5>
              <small>20+ Clents</small>
            </article>
            <article className="about_card">
              <RiProjectorFill className="about_icon" />
              <h5>Projects</h5>
              <small>20+ Projects</small>
            </article>
          </div>
          <p>
            I am a self-driven Computer Science and Engineering student. I am a
            quick and avid learner who has taken part in multiple internships
            and projects. I am an enthusiastic individual who is proven to meet
            deadlines and work as a team player.<br></br> Front-end Developer | UI/UX
            Designer | Graphic Designer | Back-end Developer
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
