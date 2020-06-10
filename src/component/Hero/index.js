import scss from "./index.scss";
import React from "react";
import { Spring } from "react-spring/renderprops";

import { Linkedin, Github } from "../../assets/socialIcons";

export default function Hero() {
  const info = {
    name: "Paulina",
    city: "Berlin",
    occupation: "Junior Front-End Developer",
  };

  return (
    <div className="hero" id="home">
      {/* <div className="row"> */}
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ duration: 1500 }}
      >
        {(props) => (
          <div style={props}>
            <h1>I'm {info.name}</h1>
            <div className="description">
              I'm a {info.city} based {info.occupation}.
            </div>

            <div className="socialIcons">
              <a href="//github.com/PaulinaLL">
                <Github />
              </a>
              <a href="//linkedin.com/in/paulina-lukarska">
                <Linkedin />
              </a>
            </div>
          </div>
        )}
      </Spring>
    </div>
    // </div>
  );
}
