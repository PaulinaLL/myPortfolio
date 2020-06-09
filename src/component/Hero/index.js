import scss from "./index.scss";
import React from "react";
import NavBar from "../NavBar";
import { Linkedin, Github } from "../../assets/socialIcons";
import paulina from "../../assets/paulina.jpg";

export default function Hero() {
  const info = {
    name: "Paulina",
    city: "Berlin",
    occupation: "Junior Front-End Developer",
  };

  return (
    <div className="hero" id="hero">
      <NavBar />
      <img
        src={paulina}
        style={{ height: "25%", borderRadius: "20%" }}
        alt="profile-pic"
      ></img>
      <div className="row">
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
    </div>
  );
}
