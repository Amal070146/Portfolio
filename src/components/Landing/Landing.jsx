import React from "react";
import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.InnerWrapper}>
        <div className={styles.content}>
          <h1>INTRODUCE</h1>
          <p>
            Say Hi from <span>Amal C P</span>,<br></br>Developer and Designer
          </p>
          <div>
            <p>
              I design and code beautifully simple things and i love what i do.
            </p>
            <p>Just simple like that!</p>
          </div>
        </div>
        <div className={styles.experiences}>
          <div>
            <h1>3+</h1>
            <p>Years of Experience</p>
          </div>
          <div>
            <h1>30+</h1>
            <p>Projects Completed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
