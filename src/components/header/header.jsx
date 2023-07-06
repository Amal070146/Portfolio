import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/Amal_C_P.png";
import HeaderSocial from "./headersocial";
import { BsFillFileArrowDownFill } from "react-icons/bs";

const header = () => {
  return (
    <>
      <div>
        <div className="headers">
          <div className="header_container">
            <h5>Hello I'm</h5>
            <h1>Amal C P</h1>
            <h5 className="text-light">Full Stack Developer</h5>

            <div className="header-image-link-wrapper">
              <div className="me">
                <div className="header_image">
                  <img src={ME} alt="me" />
                </div>
              </div>
              <div className="social_medias">
                <HeaderSocial />
              </div>
              <CTA />
            </div>
          </div>
          <div>
            <a href="#contact" className="scroll_down">
              <BsFillFileArrowDownFill />
            </a>
          </div>
        </div>
        <div className="">

        </div>
      </div>
    </>
  );
};

export default header;
