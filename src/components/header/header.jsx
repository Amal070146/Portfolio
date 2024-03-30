import React, { useEffect, useState } from "react";
import "./header.css";


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
import { Companies } from "../Companies/Companies";


import opengrad from "../../assets/companies/opengrad.png";
import sarahs from "../../assets/companies/sarahstechno.png";
import mulearn from "../../assets/companies/mulearn.png";
import hound from "../../assets/companies/houndelect.png";
import offcet from "../../assets/companies/offcet.png";
import cce from "../../assets/companies/cce.png";
import chola from "../../assets/companies/cholaart.png";
import unnathi from "../../assets/companies/unnathi.png";
import Aproit from "../../assets/companies/aproit.png";
import karghewala from "../../assets/companies/karghewala.png";
import urbantrash from "../../assets/companies/urbantrash.png";

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

   const partnersData = [
     { image: opengrad },
     { image: sarahs },
     { image: hound },
     { image: offcet },
     { image: cce },
     { image: mulearn },
     { image: chola },
     { image: unnathi },
     { image: Aproit },
     { image: karghewala },
     { image: urbantrash },
   ];
  return (
    <>
      <div className="whole-wrapper">
        <div className="right-scroll-container">
          <Landing />
        </div>
      </div>
      <Companies partners={partnersData} />
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
