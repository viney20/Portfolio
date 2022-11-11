import React from "react";
import "./menu.scss";

export default function Menu({ menuopen, setMenuopen }) {
  return (
    <div className={"menu " + (menuopen && "active")} id="menu">
      <a
        href="#intro"
        className="home"
        onClick={() => setMenuopen(!menuopen)}
        key={1}
      >
        Home
      </a>

      <a
        href="#skills"
        className="home"
        onClick={() => setMenuopen(!menuopen)}
        key={3}
      >
        Skills
      </a>
      <a
        href="#projects"
        className="home"
        onClick={() => setMenuopen(!menuopen)}
        key={2}
      >
        Projects
      </a>
      <a
        href="#contact"
        className="home"
        onClick={() => setMenuopen(!menuopen)}
        key={4}
      >
        Contact
      </a>
    </div>
  );
}
