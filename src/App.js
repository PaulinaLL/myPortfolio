import React from "react";
import Hero from "./component/Hero";
import About from "./component/About";
import Footer from "./component/Footer";
import Projects from "./component/Projects";
import "./styles/App.scss";

function App() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Footer />
    </main>
  );
}

export default App;
