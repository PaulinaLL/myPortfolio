import React from "react";
import NavBar from "./component/NavBar";
import Hero from "./component/Hero";
import About from "./component/About";
import Footer from "./component/Footer";
import Projects from "./component/Projects";
import "./styles/App.scss";

function App() {
  return (
    <main>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </main>
  );
}

export default App;
