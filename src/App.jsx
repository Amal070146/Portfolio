import React from "react";
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import About from "./components/about/About";
import Experience from "./components/experience/experience";
import Services from "./components/services/services";
import Portfolio from "./components/portfolio/portfolio";
import Testimonials from "./components/testimonials/testiomonials";
import Contact from "./components/contacts/contact";
import Footer from "./components/bfooter/bfooter";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      {/* <About /> */}
      {/* <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer /> */}
    </>
  );
};

export default App;
