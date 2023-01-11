import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio1.png";
import IMG3 from "../../assets/portfolio1.png";
import IMG4 from "../../assets/portfolio1.png";
import IMG5 from "../../assets/portfolio1.png";
import IMG6 from "../../assets/portfolio1.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Lab Report Daily basis analysing application",
    github: "https://github.com/Amal070146/TEZER",
    demo: "https://cdn.dribbble.com/userupload/3864186/file/original-e76878961f17b4df6817b0d95a4a4d34.png?compress=1&resize=1200x900",
  },
  {
    id: 2,
    image: IMG1,
    title: "Lab Report Daily basis analysing application",
    github: "https://github.com/Amal070146/TEZER",
    demo: "https://cdn.dribbble.com/userupload/3864186/file/original-e76878961f17b4df6817b0d95a4a4d34.png?compress=1&resize=1200x900",
  },
  {
    id: 3,
    image: IMG1,
    title: "Lab Report Daily basis analysing application",
    github: "https://github.com/Amal070146/TEZER",
    demo: "https://cdn.dribbble.com/userupload/3864186/file/original-e76878961f17b4df6817b0d95a4a4d34.png?compress=1&resize=1200x900",
  },
  {
    id: 4,
    image: IMG1,
    title: "Lab Report Daily basis analysing application",
    github: "https://github.com/Amal070146/TEZER",
    demo: "https://cdn.dribbble.com/userupload/3864186/file/original-e76878961f17b4df6817b0d95a4a4d34.png?compress=1&resize=1200x900",
  },
  {
    id: 5,
    image: IMG1,
    title: "Lab Report Daily basis analysing application",
    github: "https://github.com/Amal070146/TEZER",
    demo: "https://cdn.dribbble.com/userupload/3864186/file/original-e76878961f17b4df6817b0d95a4a4d34.png?compress=1&resize=1200x900",
  },
  {
    id: 6,
    image: IMG1,
    title: "Lab Report Daily basis analysing application",
    github: "https://github.com/Amal070146/TEZER",
    demo: "https://cdn.dribbble.com/userupload/3864186/file/original-e76878961f17b4df6817b0d95a4a4d34.png?compress=1&resize=1200x900",
  },
];

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item_image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item_cta">
                <a href={github} className="btn" target="_blank">
                  GitHub
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default portfolio;
