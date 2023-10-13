import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const experience = () => {
  return (
    <div id="experience"  className="experience-wrapper">
      <div className="experience-heading">
       
        <h2>My Experience</h2>
      </div>
      <div className="experience_container">
        <div className="experience_website">
          <h3>Website Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>HTML</h4>
                <small className="text_light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>CSS</h4>
                <small className="text_light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text_light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>Django</h4>
                <small className="text_light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>ReactJs</h4>
                <small className="text_light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>Python</h4>
                <small className="text_light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>TypeScript</h4>
                <small className="text_light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>C++</h4>
                <small className="text_light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_design">
          <h3>Design(UI/UX & Posters)</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>Figma</h4>
                <small className="text_light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>Photoshop</h4>
                <small className="text_light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>Illustrator</h4>
                <small className="text_light">Beginer</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>Canva</h4>
                <small className="text_light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default experience;
