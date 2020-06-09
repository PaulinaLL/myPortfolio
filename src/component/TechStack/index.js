import scss from "./index.scss";
import React from "react";
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

export default function TechStack() {
  return (
    <div className="tech" id="tech">
      {" "}
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
  );
}
