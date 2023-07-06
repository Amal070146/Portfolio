import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/myimage.jpg";
import HeaderSocial from "./headersocial";
import { BsFillFileArrowDownFill } from "react-icons/bs";

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
            <div className="header_image">
              <img src={ME} alt="me" />
            </div>
          </div>
          <div>
            <a href="#contact" className="scroll_down">
              <BsFillFileArrowDownFill />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default header;
