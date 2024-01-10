import React from "react";

import { AiOutlineHome } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { TbMessages } from "react-icons/tb";
import { useState } from "react";
import IMG1 from "../../assets/projects/cdw.png";
import IMG2 from "../../assets/projects/mulearncce.png";
import IMG3 from "../../assets/projects/fundesign.png";

import IMG4 from "../../assets/projects/wrap.png";
import IMG5 from "../../assets/projects/unnathi.png";
import IMG6 from "../../assets/portfolio1.png";
import IMG7 from "../../assets/projects/Cholaarts.png";
import IMG8 from "../../assets/projects/gtaHackathon.png";
import IMG9 from "../../assets/projects/sarahsTechno.png";
import IMG10 from "../../assets/projects/opengrad.png";

const Projects = () => {
  const [activeNav, setActiveNav] = useState("#");

  const data = [
    {
      id: 1,
      image: IMG1,
      title: "CODe Design Week Website",
      github: "https://github.com/amalcpaulson/code-design-week",
      demo: "https://codedesignweek.netlify.app/",
    },
    {
      id: 10,
      image: IMG10,
      title: "OpenGrad",
      github: "https://github.com/amalcpaulson/opengrad-frontend",
      demo: "https://opengrads.netlify.app/",
    },
    {
      id: 5,
      image: IMG5,
      title: "Unnathi - Website",
      github: "https://github.com/amalcpaulson/unnathi-vite",
      demo: "https://unnathi-new.vercel.app/",
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
      title: "WRAP - Waste Management Application",
      github: "https://github.com/amalcpaulson/Wrap-Django",
      demo: "https://wrap-web-app.netlify.app/",
    },

    {
      id: 7,
      image: IMG7,
      title: "Chola Art Gallery",
      github: "https://github.com/amalcpaulson/Chola-Arts-Gallery",
      demo: "https://cholaart.in/",
    },
    {
      id: 8,
      image: IMG8,
      title: "GTA Hackathon (Mulearn) - Website",
      github: "https://github.com/amalcpaulson/gtahackathon",
      demo: "https://gta.mulearn.org/",
    },

    {
      id: 3,
      image: IMG3,
      title: "Web applicaation for Fundesign",
      github: "https://github.com/amalcpaulson/fundesign",
      demo: "https://fundesign.vercel.app/",
    },
    {
      id: 9,
      image: IMG9,
      title: "Sarah's Techno",
      github: "https://github.com/amalcpaulson/SarasTechno",
      demo: "https://saras-techno.vercel.app/",
    },

    {
      id: 6,
      image: IMG6,
      title: "Lab Report Daily basis analysing application",
      github: "https://github.com/amalcpaulson/TEZER",
      demo: "https://github.com/amalcpaulson/TEZER",
    },
  ];

  return (
    <div>
      <div>
        <nav className="navbar">
          <a
            href="../"
            onClick={() => setActiveNav("#")}
            className={activeNav === "#" ? "active" : ""}
          >
            <AiOutlineHome />
          </a>
          <a
            href="../#about"
            onClick={() => setActiveNav("#about")}
            className={activeNav === "#" ? "active" : ""}
          >
            <BiUserCircle />
          </a>
          <a
            href="../#experience"
            onClick={() => setActiveNav("#experience")}
            className={activeNav === "#" ? "active" : ""}
          >
            <BsJournalBookmarkFill />
          </a>
          <a
            href="../#services"
            onClick={() => setActiveNav("#services")}
            className={activeNav === "#" ? "active" : ""}
          >
            <MdOutlineHomeRepairService />
          </a>
          <a
            href="../#contact"
            onClick={() => setActiveNav("#contact")}
            className={activeNav === "#" ? "active" : ""}
          >
            <TbMessages />
          </a>
        </nav>
      </div>
      <div className="projects-wrapper">
        <div id="portfolio" className="portfolio-wrapper">
          <div className="portfolio-header" style={{ marginTop: "15px" }}>
            <h2>My Projects</h2>
          </div>
          <div className="portfolio_container">
            {data.map(({ id, image, title, github, demo }) => {
              return (
                <article key={id} className="portfolio_item">
                  <a
                    href={demo}
                    target="_blank"
                    className="portfolio_item_image"
                  >
                    <img src={image} alt={title} />
                  </a>
                  <h3>{title}</h3>
                  <div className="portfolio_item_cta">
                    <a href={github} className="btn" target="_blank">
                      GitHub
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
