import scss from "./index.scss";
import React from "react";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#tech">TechStack</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
      </ul>
    </nav>
  );
}
