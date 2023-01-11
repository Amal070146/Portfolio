import React from "react";
import "./portfolio.css";
import IMG1 from '../../assets/'

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item_image">

          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com/Amal070146" className="btn" target='_blank'>
            GitHub
          </a>
          <a
            href="https://cdn.dribbble.com/userupload/3864186/file/original-e76878961f17b4df6817b0d95a4a4d34.png?compress=1&resize=1200x900"
            className="btn btn-primary" target='_blank'
          >
            Live Demo
          </a>
        </article>
      </div>
    </section>
  );
};

export default portfolio;
