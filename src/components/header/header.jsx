import React, { useEffect, useState } from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/amalcp.png";
import HeaderSocial from "./headersocial";
import Landing from "../Landing/Landing";
import About from "../about/About";
import Experience from "../experience/experience";
import Services from "../services/services";
import Portfolio from "../portfolio/portfolio";
// import Testimonials from "../testimonials/testiomonials";
import Gallery from "../Home-gallery/home-galery";
import Contact from "../contacts/contact";
import Footer from "../bfooter/bfooter";
import Tools from "../Tool/tools";
import { useReactPath } from "./path.hook";

const Header = () => {
  const [navlogo, setnavlogo] = useState(false);
  const path = useReactPath();
  useEffect(() => {}, [path]);
  const changenavlogo = () => {
    window.scrollY >= 1050 ? setnavlogo(true) : setnavlogo(false);
    return navlogo;
  };
  useEffect(() => {
    window.addEventListener("scroll", changenavlogo);

    return () => {
      window.removeEventListener("scroll", changenavlogo);
    };
  }, []);
  return (
    <>
      <div className="whole-wrapper">
        <div className="headers">
          <div className="header_container">
            <div className="header-image-link-wrapper">
              <div className="me">
                <div></div>
                <div className="fixedContentBox">
                  <div>
                    <h1>Amal C P</h1>
                    <p>FULL STACK DEVELOPER</p>
                  </div>
                  <div className="project-fixed-details">
                    <div>
                      <h2>3+</h2>
                      <p>Years of Experience</p>
                    </div>
                    <div>
                      <h2>30+</h2>
                      <p>Projects Completed</p>
                    </div>
                  </div>
                </div>

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
          <Landing />
          <About />
          <Experience />
          <Services />
          <Portfolio />
          <Tools />
          <Gallery />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Header;
