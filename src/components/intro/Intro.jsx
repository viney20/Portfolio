import React from "react";
import "./intro.scss";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Typewriter from "typewriter-effect";
import Image from "../../image/profilePic.png";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgcontainer">
          <img src={Image} alt="profile img" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Viney Gautam</h1>
          <h3>
            <span>
              <Typewriter
                options={{
                  strings: ["Front End Developer", "Designer"],
                  autoStart: true,
                  delay: 75,
                  loop: true,
                }}
              />
            </span>
          </h3>
        </div>
        <a href="#projects" className="arrow">
          <MdOutlineKeyboardArrowDown />
        </a>
      </div>
    </div>
  );
}
