import React from "react";
import TitleAndSubtitle from "../titleAndSubtitle/TitleAndSubtitle";
import ProjectCard from "../projectCard/ProjectCard.jsx";
import "./projects.scss";
import { data } from "../../data/projects";
export default function Projects() {
  return (
    <div className="projects" id="projects">
      <TitleAndSubtitle title="Projects" subtitle="Things  I've built so far" />
      <div className="projectCards">
        {data.map((item) => (
          <ProjectCard data={item} />
        ))}
      </div>
    </div>
  );
}
