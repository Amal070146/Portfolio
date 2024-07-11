import React from "react";
import "./homegalery.css";
import { MdOutlineReadMore } from "react-icons/md";

// certificate

import beachhack from "../../assets/certificates/Beachhack5AmalCP.webp";
import RIBC from "../../assets/certificates/ribc.webp";
import YIP from "../../assets/certificates/yip2023voc.webp";
import cdw from "../../assets/certificates/cdw.webp";
import HFT from "../../assets/certificates/hackfortommorow.webp";
import Summit from "../../assets/certificates/Summit.webp";
import Define from "../../assets/certificates/Define.webp";

const homegalery = () => {
  return (
    <div className="homegalery-wrapper">
      <div className="headingWrapper">
        <h2>Recognitions</h2>
      </div>
      <ul className="honeycomb" lang="es">
        <li className="honeycomb-cell">
          <img className="honeycomb-cell__image" src={beachhack} alt="img" />
          <div className="honeycomb-cell__title">Beach Hack 5</div>
        </li>
        <li className="honeycomb-cell">
          <img className="honeycomb-cell__image" src={RIBC} alt="img" />
          <div className="honeycomb-cell__title">RIBC 2022</div>
        </li>
        <li className="honeycomb-cell">
          <img className="honeycomb-cell__image" src={YIP} alt="img" />
          <div className="honeycomb-cell__title">YIP</div>
        </li>
        <li className="honeycomb-cell">
          <img className="honeycomb-cell__image" src={cdw} alt="img" />
          <div className="honeycomb-cell__title">CODe Design Week</div>
        </li>
        <li className="honeycomb-cell">
          <img className="honeycomb-cell__image" src={HFT} alt="img" />
          <div className="honeycomb-cell__title">HackForTommorow</div>
        </li>
        <li className="honeycomb-cell">
          <img className="honeycomb-cell__image" src={Summit} alt="img" />
          <div className="honeycomb-cell__title">IEDC Summit Hack</div>
        </li>
        <li className="honeycomb-cell">
          <img className="honeycomb-cell__image" src={Define} alt="img" />
          <div className="honeycomb-cell__title">Define Hack</div>
        </li>
        <li className="honeycomb-cell honeycomb__placeholder"></li>
      </ul>

      <a href="/gallery" className="portfolio-view-button">
        {" "}
        View More <MdOutlineReadMore />
      </a>
    </div>
  );
};

export default homegalery;
