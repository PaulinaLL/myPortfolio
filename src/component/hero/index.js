import scss from "./index.scss";
import React from "react";
import { Linkedin, Github } from "../../assets/socialIcons";

export default function Hero() {
  const info = {
    name: "Paulina",
    city: "Berlin",
    occupation: "Junior Front-End Developer",
  };

  return (
    <div className={scss.hero}>
      <div className="row">
        <h1>I'm {info.name}</h1>
        <div className={scss.description}>
          I'm a {info.city} based {info.occupation}. Here comes some description
          to describe myself a bit to a potential employer.
        </div>
        <div className={scss.socialIcons}>
          <a href="//github.com/PaulinaLL">
            <Github />
          </a>
          <a href="//linkedin.com/in/paulina-lukarska">
            <Linkedin />
          </a>
        </div>
      </div>
    </div>
  );
}
