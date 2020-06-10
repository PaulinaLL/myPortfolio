import scss from "./index.scss";
import React from "react";
import { Spring } from "react-spring/renderprops";
import paulina from "../../assets/paulina.jpg";
import {
  HtmlIcon,
  CssIcon,
  SassIcon,
  BootstrapIcon,
  JavascriptIcon,
  JqueryIcon,
  ReactIcon,
  NodeIcon,
  MongoIcon,
  GithubIcon,
  NpmIcon,
} from "../../assets/techStack";

export default function About() {
  return (
    <div className="about" id="about">
      <img
        src={paulina}
        style={{ width: "20%", borderRadius: "50%" }}
        alt="profile-pic"
      ></img>
      <p>
        I am a self-motivated and fast learning person, with an open personality
        and hands-on mentality. Well organized, communicative and enthusiastic,
        happy to face new challenges.
      </p>
      <h2>Tech Stack</h2>
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ duration: 1500 }}
      >
        {(props) => (
          <div style={props}>
            <div className="tech">
              <HtmlIcon />
              <CssIcon />
              <SassIcon />
              <BootstrapIcon />
              <JavascriptIcon />
              <JqueryIcon />
              <ReactIcon />
              <NodeIcon />
              <MongoIcon />
              <GithubIcon />
              <NpmIcon />
            </div>
          </div>
        )}
      </Spring>
    </div>
  );
}
