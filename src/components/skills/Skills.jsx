import React from "react";
import "./skills.scss";
import htmlimg from "../../image/Icon/html.png";
import cssimg from "../../image/Icon/css3.png";
import javaScriptimg from "../../image/Icon/javaScript.png";
import reactimg from "../../image/Icon/react.png";
import reduximg from "../../image/Icon/redux.png";
import bootstrapimg from "../../image/Icon/bootstrap.png";
import sassimg from "../../image/Icon/sass.png";
import gitversionimg from "../../image/Icon/gitversion.png";
import vscodeimg from "../../image/Icon/vscode.png";
import githubimg from "../../image/Icon/github.png";
import TitleAndSubtitle from "../titleAndSubtitle/TitleAndSubtitle.jsx";

export default function Skills() {
  return (
    <div className="skills" id="skills">
      <TitleAndSubtitle
        title="My Tech Stack"
        subtitle="Technologies I've been working with recently"
      />
      <div className="imgSkillContainer">
        <img src={htmlimg} alt="html skill image" className="skill" />
        <img src={cssimg} alt="html skill image" className="skill" />
        <img src={javaScriptimg} alt="html skill image" className="skill" />
        <img src={reactimg} alt="html skill image" className="skill" />
        <img src={reduximg} alt="html skill image" className="skill" />
        <img src={bootstrapimg} alt="html skill image" className="skill" />
        <img src={sassimg} alt="html skill image" className="skill" />
        <img src={gitversionimg} alt="html skill image" className="skill" />
        <img src={vscodeimg} alt="html skill image" className="skill" />
        <img src={githubimg} alt="html skill image" className="skill" />
      </div>
    </div>
  );
}
