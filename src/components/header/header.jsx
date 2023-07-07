import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/amalcp.png";
import HeaderSocial from "./headersocial";
import { BsFillFileArrowDownFill } from "react-icons/bs";

import About from "../about/About";
import Experience from "../experience/experience";
import Services from "../services/services";
import Portfolio from "../portfolio/portfolio";
import Testimonials from "../testimonials/testiomonials";
import Contact from "../contacts/contact";
import Footer from "../bfooter/bfooter";

const header = () => {
  return (
    <>
      <div className="whole-wrapper">
        <div className="headers">
          <div className="header_container">
            <div>
              <h5>Hello I'm</h5>
              <h1>Amal C P</h1>
              <h5 className="text-light">Full Stack Developer</h5>
            </div>
            <div className="header-image-link-wrapper">
              <div className="me">
         
                  <img src={ME} alt="me" />
          
              </div>
              <div className="social_medias">
                <HeaderSocial />
              </div>
              <CTA />
            </div>
          </div>
        </div>
        <div className="right-scroll-container">
          <About />
          <Experience />
          <Services />
          <Portfolio />
          {/* <Testimonials /> */}
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default header;
