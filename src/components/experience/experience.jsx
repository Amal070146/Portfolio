import React from "react";
import "./experience.css";


const experience = () => {
  const data = [
    {
      company: "GTech Mulearn",
      time: "05/2023 to 01/2024",
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
    {
      company: "Glome Healthtech",
      time: "09/2022 to 04/2023",
      role: "Web Developer Intern",
      description:
        "As a Technical Associate, I developed a dynamic website with Django, HTML, and CSS,ensuring mobile responsiveness and improved user engagement.",
    },
    {
      company: "Tegain",
      time: "04/2022 to 02/2023",
      role: "Web Developer Intern",
      description:
        "I specialized in developing user interfaces for web applications using modern JavaScript frameworks, complemented by HTML5 and CSS3. In addition to this front-end development, I crafted testing code for these web-based applications to ensure robustness and reliability. Collaborating closely with fellow developers, I played an integral role in the creation of new code, enhancing the overall functionality and user experience of our projects.",
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
