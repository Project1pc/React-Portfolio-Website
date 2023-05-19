import Topbar from "./components/Topbar/Topbar";
import Intro from "./components/Intro/Intro";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/Contact/Contact";
import Testinomials from "./components/testinomilas/Testinomials";
import Works from "./components/Works/Works";
import "./App.scss";
import React from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen,setMenuOpen] = React.useState(false)
  return (
    <div className="app">
      < Topbar menuOpen = {menuOpen} setMenuOpen = {setMenuOpen} />
      <Menu menuOpen = {menuOpen} setMenuOpen = {setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testinomials />
        <Contact />

      </div>
    </div>
  );
}

export default App;
