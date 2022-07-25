import React from "react";
import "./App.css"
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";


function App() {
  return (
    <div className="app">
       <div className="sections">
          <Navbar/>
          <Home/>
          <About/>
          <Projects/>
          <Skills/>
          <Contact/>
       </div>
    </div>
  );
}

export default App;
