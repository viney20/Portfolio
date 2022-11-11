import React from "react";
import TitleAndSubtitle from "../titleAndSubtitle/TitleAndSubtitle";
import ProjectCard from "../projectCard/ProjectCard.jsx";
import "./projects.scss";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <TitleAndSubtitle title="Projects" subtitle="Things  I've built so far" />
      <div className="projectCards">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}
