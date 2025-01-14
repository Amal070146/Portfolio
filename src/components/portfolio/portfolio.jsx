import React, { useEffect, useState } from "react";
import "./portfolio.css";
import IMG1 from "../../assets/projects/cdw.webp";
import IMG2 from "../../assets/projects/mulearncce.webp";
import IMG10 from "../../assets/projects/opengrad.webp";

import IMG4 from "../../assets/projects/urbantrash.webp";
import IMG5 from "../../assets/projects/unnathi.webp";
import IMG6 from "../../assets/projects/Cholaarts.webp";

import { MdOutlineReadMore } from "react-icons/md";

const data = [
  {
    id: 5,
    image: IMG5,
    title: "Unnathi - Website",
    github: "https://github.com/amalcpaulson/unnathi-vite",
    demo: "https://unnathi-new.vercel.app/",
  },
  {
    id: 10,
    image: IMG10,
    title: "OpenGrad",
    github: "https://github.com/amalcpaulson/opengrad-frontend",
    demo: "https://opengrads.netlify.app/",
  },
  {
    id: 1,
    image: IMG1,
    title: "CODe Design Week Website",
    github: "https://github.com/amalcpaulson/code-design-week",
    demo: "https://codedesignweek.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Website - Mulearn CCE Chapter",
    github: "https://github.com/amalcpaulson/mulearn_cce",
    demo: "https://mulearn-cce.vercel.app/",
  },

  {
    id: 4,
    image: IMG4,
    title: "Urban Trash",
    github: "https://github.com/fundesigns/UrbanTrash-New",
    demo: "https://urbantrash.in/",
  },

  {
    id: 6,
    image: IMG6,
    title: "Chola Art Gallery",
    github: "https://github.com/amalcpaulson/Chola-Arts-Gallery",
    demo: "https://cholaart.in/",
  },
];

function Portfolio() {
  const [state, setState] = useState(data.length);
  useEffect(() => {
    window.innerWidth <= 1000 ? setState(4) : setState(data.length);
  }, []);
  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="portfolio-header ">
        <h2>My Projects</h2>
      </div>
      <div className="portfolio_container">
        {data.slice(0, state).map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <a
                href={demo}
                target="_blank"
                className="portfolio_item_image"
                rel="noopener noreferrer"
              >
                <img src={image} alt={title} />
              </a>
              <h3>{title}</h3>
              <div className="portfolio_item_cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </article>
          );
        })}
      </div>

      <a href="/projects" className="portfolio-view-button">
        View More <MdOutlineReadMore />
      </a>
    </div>
  );
}

export default Portfolio;
