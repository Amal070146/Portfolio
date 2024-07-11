import React from "react";
import "./experience.css";


const experience = () => {
  const data = [
    {
      company: "AproIT Solutions Pvt Ltd",
      time: "02/2024 to 06/2024",
      role: "Frontent Developer",
      description:
        "Completed daily tasks with 90% precision, reducing operational errors by 25%.Analyzed complex issues using data-driven insights, reducing project turnaround time by 20% and improving decision-making efficiency by 15%.Spearheaded the development of new versions of the company's website and mobile application, resulting in a 30% increase in user engagement.",
    },
    {
      company: "GTech Mulearn",
      time: "05/2023 to 03/2024",
      role: "Frontent Developer",
      description:
        "Used critical thinking to break down problems, evaluate solutions and make decisions.Executed daily tasks with 99% accuracy, reducing operational errors by 20%.Led the development of a new version of the website for Mulearn, enhancing user experience and increasing site traffic by 40%.",
    },
    {
      company: "Fynext innovations Pvt Ltd",
      time: "02/2023 to 06/2023",
      role: "Frontent Developer",
      description:
        "As a Technical Associate, I led the development of a applications using ReactJs, React Native ensuring a seamless user experience and efficient data management.",
    },
    {
      company: "Glome Healthtech",
      time: "09/2022 to 04/2023",
      role: "Web Developer Intern",
      description:
        "Engineered a dynamic website using Django, HTML, and CSS with a team of 3; enhanced mobile responsiveness and user engagement, resulting in a 25% increase in daily active users over 6 months.",
    },
    {
      company: "Tegain",
      time: "04/2022 to 02/2023",
      role: "Web Developer Intern",
      description:
        "Developed user interfaces for web applications using JavaScript frameworks, HTML5, and CSS3, increasing user satisfaction by 25%. Collaborated with a team of developers, reducing development time by 15%.",
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
