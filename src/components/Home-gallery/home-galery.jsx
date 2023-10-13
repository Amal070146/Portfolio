import React from "react";
import "./homegalery.css";
import { MdOutlineReadMore } from "react-icons/md";

// certificate

import beachhack from "../../assets/certificates/Beach hack 5 Amal C P.jpg";
import RIBC from "../../assets/certificates/ribc.png";
import YIP from "../../assets/certificates/yip2023 voc.png";
import cdw from "../../assets/certificates/cdw..png";
import HFT from "../../assets/certificates/hackfortommorow.png";
import Summit from "../../assets/certificates/Summit.png";
import Define from "../../assets/certificates/Define.png";

const homegalery = () => {
  return (
    <div className="homegalery-wrapper">
      <div style={{ textAlign: "center" }}>
        <h2 style={{ textAlign: "center" }}>Certifications & Achievements</h2>
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
      <div className="portfolio-view-button">
        <a href="/gallery">
          {" "}
          View More <MdOutlineReadMore />
        </a>
      </div>
    </div>
  );
};

export default homegalery;
