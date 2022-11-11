import Intro from "./components/intro/Intro";
import Topbar from "./components/topbar/Topbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import "./App.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuopen, setMenuopen] = useState(false);
  return (
    <div className="App">
      <Topbar menuopen={menuopen} setMenuopen={setMenuopen} />
      <Menu menuopen={menuopen} setMenuopen={setMenuopen} />
      <div className="sections">
        <Intro />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
