import React from "react";
import Header from "../../components/header/header";
import Nav from "../../components/nav/nav";
import AOS from "aos";

import "aos/dist/aos.css";
AOS.init();
const Homepage = () => {
  return (
    <div>
      <Nav />
      <Header />
    </div>
  );
};

export default Homepage;
