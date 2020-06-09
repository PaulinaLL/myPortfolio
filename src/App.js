import React from "react";
import Hero from "./component/Hero";
import TechStack from "./component/TechStack";
import Footer from "./component/Footer";
import Projects from "./component/Projects";
import "./styles/App.scss";

function App() {
  return (
    <main>
      <Hero />
      <TechStack />
      <Projects />
      <Footer />
    </main>
  );
}

export default App;
