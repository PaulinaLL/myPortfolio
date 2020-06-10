import scss from "./index.scss";
import React from "react";
import lotto from "../../assets/Lotto.gif";
import dogs from "../../assets/dogs.gif";
import ball from "../../assets/ball.gif";
import color from "../../assets/color.gif";

export default function Projects() {
  return (
    <div className="projectsContainer" id="projects">
      <div className="project">
        <img src={lotto} alt="lotto" style={{ height: "90%" }}></img>
        <div className="projectLinks">
          <a href="https://react-lotto-paulina.netlify.app/">View</a>
          <a href="">Code</a>
        </div>
      </div>
      <div className="project">
        <img src={dogs} alt="dogs" style={{ height: "90%" }}></img>
        <div className="projectLinks">
          <a href="https://react-walk-a-dog-paulina.netlify.app">View</a>
          <a href="https://github.com/PaulinaLL/react-walk-a-dog">Code</a>
        </div>
      </div>
      <div className="project">
        <img src={ball} alt="ball" style={{ height: "90%" }}></img>
        <div className="projectLinks">
          <a href="https://css-ball-animation-paulina.netlify.app">View</a>
          <a href="https://github.com/PaulinaLL/CSS-animations-basketball">
            Code
          </a>
        </div>
      </div>
      <div className="project">
        <img src={color} alt="color" style={{ height: "90%" }}></img>
        <div className="projectLinks">
          <a href="https://react-color-generator-paulina.netlify.app">View</a>
          <a href="">Code</a>
        </div>
      </div>
      {/* <div className="project">
        <img src={} alt="color" style={{ height: "90%" }}></img>
             <div className="projectLinks"> 
        <a href="">View</a>
        <a href="https://github.com/PaulinaLL/react-interactive-text">Code</a>
         </div>
      </div> */}
    </div>
  );
}
