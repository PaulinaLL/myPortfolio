import scss from "./index.scss";
import React from "react";
import lotto from "../../assets/Lotto.gif";
import dogs from "../../assets/dogs.gif";
import ball from "../../assets/ball.gif";
import color from "../../assets/color.gif";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Projects extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
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
        <h3>Projects</h3>
        <Slider {...settings}>
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
            <img src={lotto} alt="lotto" style={{ height: "90%" }}></img>
            <div className="projectLinks">
              <a href="https://react-lotto-paulina.netlify.app/">View</a>
              <a href="">Code</a>
            </div>
          </div>
          <div className="project">
            <img src={color} alt="color" style={{ height: "90%" }}></img>
            <div className="projectLinks">
              <a href="https://react-color-generator-paulina.netlify.app">
                View
              </a>
              <a href="">Code</a>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
