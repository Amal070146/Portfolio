import React, { useEffect, useState } from "react";
import "./header.css";
import CTA from "./CTA";

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
        <div className="right-scroll-container">
          <Landing />
        </div>
      </div>
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Tools />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
};

export default Header;
