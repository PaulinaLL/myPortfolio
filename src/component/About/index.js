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
        style={{ width: "20%", borderRadius: "20%" }}
        alt="profile-pic"
      ></img>
      <p>
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit.
      </p>
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
