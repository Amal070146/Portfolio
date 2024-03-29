import { useState, useEffect } from "react";

import styles from "./Companies.module.css";
import Marquee from "react-fast-marquee";



export const Companies = ({ partners }) => {
  const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth < 2020);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth < 2000);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const marqParams = {
    autoFill: true,
    pauseOnHover: true,
    gradient: false,
    speed: 30,
    drag: true,
  };
  return (
    <div className={styles.Partners}>
      <div className={styles.PartnersImageWrapper}>
        {isScreenSmall ? (
          <Marquee {...marqParams} style={{ width: "100vw" }}>
            {partners.map((partner, index) => (
              <div
                key={index}
                style={{ padding: "0px 20px", textAlign: "center" }}
              >
                <img src={partner.image} alt="companies" loading="lazy" />
              </div>
            ))}
          </Marquee>
        ) : (
          // Render the images without marquee for larger screens
          <div style={{ display: "flex" }}>
            {partners.map((partner, index) => (
              <div key={index} style={{ padding: "0px 10px" }}>
                <img src={partner.image} alt="companies" loading="lazy" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
