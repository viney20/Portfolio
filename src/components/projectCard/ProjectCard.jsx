import React from "react";
import { BsLink45Deg, BsGithub } from "react-icons/bs";
import "./projectCard.scss";

export default function ProjectCard({ data }) {
  return (
    <div className="CardMainContainer">
      <div className="imgcontainer">
        <img
          src={require(`../../image/projectImage/${data.ImagePath}.PNG`)}
          alt={data.titile}
        />
      </div>

      <div className="desc">
        <h3>{data.titile}</h3>
        <p>{data.desc}</p>
        <small>
          <strong>Tech stack : </strong> {data.techStack}
        </small>
      </div>
      <div className="linktoproject">
        <a href={data.liveLink}>
          {" "}
          <BsLink45Deg /> Live Preview
        </a>
        <a href={data.githubLink}>
          {" "}
          <BsGithub /> View Code
        </a>
      </div>
    </div>
  );
}
