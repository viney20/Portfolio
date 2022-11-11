import React from "react";
import { BsLink45Deg, BsGithub } from "react-icons/bs";
import "./projectCard.scss";

export default function ProjectCard() {
  return (
    <div className="CardMainContainer">
      <div className="imgcontainer">
        <img src="https://picsum.photos/200" alt="" />
      </div>

      <div className="desc">
        <h3>Project tile goes here</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quae
          officiis dicta, facere ullam odio quos natus corporis saepe
          consequatur quo tenetur enim laudantium molestiae? Amet,
          necessitatibus ad.
        </p>
        <small>
          <strong>Tech stack : </strong> html,css javaScript react
        </small>
      </div>
      <div className="linktoproject">
        <a href="">
          {" "}
          <BsLink45Deg /> Live Preview
        </a>
        <a href="">
          {" "}
          <BsGithub /> View Code
        </a>
      </div>
    </div>
  );
}
