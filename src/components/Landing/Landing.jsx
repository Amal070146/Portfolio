import React from "react";
import styles from "./Landing.module.css";
import HeaderSocial from "../header/headersocial";

import CV from "../../assets/CV_Resume.pdf";

const Landing = () => {
  return (
    <div className={styles.InnerWrapper} id="home">
      <div className={styles.content}>
        <p>
          Say Hi from <span>Amal C P</span>,<br></br>Developer and Designer
        </p>
        <div>
          <p>
            I create elegantly simple designs and code, and I have a passion for
            my work.
          </p>
          <p>Just simple like that!</p>
        </div>
      </div>

      <HeaderSocial />

      <div className={styles.experiences}>
        <div>
          <h1>3+</h1>
          <p>Years of Experience</p>
        </div>
        <div>
          <h1>30+</h1>
          <p>Projects Completed</p>
        </div>{" "}
        <div>
          <h1>20+</h1>
          <p>Client Satisfaction</p>
        </div>
      </div>
      <div className="cta">
        <a href={CV} download className="cta-btn1">
          Download Me
        </a>
      </div>
    </div>
  );
};

export default Landing;
