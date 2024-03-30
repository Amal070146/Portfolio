import React from "react";
import Header from "../../components/header/header";
import Nav from "../../components/nav/nav";
import AOS from "aos";
import './HomePage.css'

import "aos/dist/aos.css";
AOS.init();
const Homepage = () => {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    const spiralAnimationScript = document.createElement("script");
    spiralAnimationScript.src = "/static/js/spiral.js";
    document.body.appendChild(spiralAnimationScript);

    document.querySelectorAll(".effect-letter").forEach((button) => {
      let div = document.createElement("div"),
        letters = button.textContent.trim().split("");

      function elements(letter, index, array) {
        let element = document.createElement("span"),
          part = index >= array.length / 2 ? -1 : 1,
          position =
            index >= array.length / 2
              ? array.length / 2 - index + (array.length / 2 - 1)
              : index,
          move = position / (array.length / 2),
          rotate = 1 - move;

        element.innerHTML = !letter.trim() ? "&nbsp;" : letter;
        element.style.setProperty("--move", move);
        element.style.setProperty("--rotate", rotate);
        element.style.setProperty("--part", part);

        div.appendChild(element);
      }

      letters.forEach(elements);

      button.innerHTML = div.outerHTML;

      button.addEventListener("mouseenter", (e) => {
        if (!button.classList.contains("out")) {
          button.classList.add("in");
        }
      });

      button.addEventListener("mouseleave", (e) => {
        if (button.classList.contains("in")) {
          button.classList.add("out");
          setTimeout(() => button.classList.remove("in", "out"), 950);
        }
      });
    });

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div
      className="body-wrapper"
      style={{
        background: "black",
        height: "100vh",
        overflow: "scroll",
        overflowX: "hidden",
      }}
    >
      <Nav />
      <div style={{ position: "relative", background: "black" }}>
        <div className="spiral-container">
          <div className="styles-test">
            <section className="" id="">
              <canvas id="canvas"></canvas>
              <div className="dust-animation">
                <div className="bg-animation">
                  <div id="stars2" className="dust"></div>
                  <div id="stars3" className="dust"></div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div
          className="body-wrapper spiral-innercontainer"
          style={{
            background: "transparent",
            height: "100vh",
            overflow: "scroll",
            overflowX: "hidden",
            position: "absolute",
            left: "0",
            top: "0",
          }}
        >
          <Header />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
