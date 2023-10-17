import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const experience = () => {
  const data = [
    {
      company: "GTech Mulearn",
      time: "05/2023 to 10/2023",
      role: "Frontent Developer",
      description:
        "Using critical thinking, I consistently broke down complex problems, evaluated potential solutions, and made informed decisions. In addition to this analytical approach, I ensured that day-to-day duties were executed with precision and efficiency. Furthermore, I was instrumental in developing a new version of the website for Mulearn.",
    },
    {
      company: "Fynext innovations Pvt Ltd",
      time: "02/2023 to 06/2023",
      role: "Frontent Developer",
      description:
        "As a Technical Associate, I led the development of a applications using ReactJs, ReactNative ensuring a seamless user experience and efficient data management.",
    },
  ];
  return (
    <div id="experience" className="experienceWrapper">
      <div className="experienceHeading">
        <h2>My Experience</h2>
      </div>

      <div className="ExperienceContentWrapper">
        {data.map(({ company, time, role, description }) => {
          return (
            <div className="IndividualExperiences">
              <h2>{role}</h2>
              <div>
                <h2>{company}</h2>
                <p>{time}</p>
              </div>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default experience;
