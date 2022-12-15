import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/Amal_C_P.png";
import HeaderSocial from "./headersocial";

const header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Amal C P</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        <div className="header-image-link-wrapper">
          <div className="social_media">
            <HeaderSocial />
          </div>

          <div className="me">
            <div className="social_media_in">
              <HeaderSocial />
            </div>

            <img src={ME} alt="me" />
          </div>

          <a href="#contact" className="scroll_down">
            Scroll Down
          </a>
        </div>
      </div>
    </header>
  );
};

export default header;
