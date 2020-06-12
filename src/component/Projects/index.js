import scss from "./index.scss";
import React from "react";
import lotto from "../../assets/lotto.gif";
import dogs from "../../assets/dogs.gif";
import ball from "../../assets/ball.gif";
import color from "../../assets/color.gif";
import text from "../../assets/text.gif";
import crypto from "../../assets/crypto.gif";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Projects extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="projectsContainer" id="projects">
        <h2>Projects</h2>
        <Slider {...settings}>
          <div className="project">
            <img src={dogs} alt="dogs" style={{ height: "90%" }}></img>
            <div className="projectLinks">
              <a
                href="https://react-walk-a-dog-paulina.netlify.app"
                target="_blank"
                rel="noreferrer noopener"
              >
                View
              </a>
              <a
                href="https://github.com/PaulinaLL/react-walk-a-dog"
                target="_blank"
                rel="noreferrer noopener"
              >
                Code
              </a>
            </div>
          </div>
          <div className="project">
            <img src={text} alt="color" style={{ height: "90%" }}></img>
            <div className="projectLinks">
              <a
                href="https://react-interactive-text-paulina.netlify.app"
                target="_blank"
                rel="noreferrer noopener"
              >
                View
              </a>
              <a
                href="https://github.com/PaulinaLL/react-interactive-text"
                target="_blank"
                rel="noreferrer noopener"
              >
                Code
              </a>
            </div>
          </div>
          <div className="project">
            <img src={ball} alt="ball" style={{ height: "90%" }}></img>
            <div className="projectLinks">
              <a
                href="https://css-ball-animation-paulina.netlify.app"
                target="_blank"
                rel="noreferrer noopener"
              >
                View
              </a>
              <a
                href="https://github.com/PaulinaLL/CSS-animations-basketball"
                target="_blank"
                rel="noreferrer noopener"
              >
                Code
              </a>
            </div>
          </div>
          <div className="project">
            <img src={lotto} alt="lotto" style={{ height: "90%" }}></img>
            <div className="projectLinks">
              <a
                href="https://react-lotto-paulina.netlify.app/"
                target="_blank"
                rel="noreferrer noopener"
              >
                View
              </a>
              <a
                href="https://github.com/PaulinaLL/react-lotto"
                target="_blank"
                rel="noreferrer noopener"
              >
                Code
              </a>
            </div>
          </div>
          <div className="project">
            <img src={crypto} alt="color" style={{ height: "90%" }}></img>
            <div className="projectLinks">
              <a href="">View</a>
              <a
                href="https://github.com/PaulinaLL/browser-fetch-data-crypto-currency-converter"
                target="_blank"
                rel="noreferrer noopener"
              >
                Code
              </a>
            </div>
          </div>
          <div className="project">
            <img src={color} alt="color" style={{ height: "90%" }}></img>
            <div className="projectLinks">
              <a
                href="https://react-color-generator-paulina.netlify.app"
                target="_blank"
                rel="noreferrer noopener"
              >
                View
              </a>
              <a
                href="https://github.com/PaulinaLL/react-color-generator"
                target="_blank"
                rel="noreferrer noopener"
              >
                Code
              </a>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
