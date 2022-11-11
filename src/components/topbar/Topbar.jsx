import React from "react";
import "./topbar.scss";
import { MdEmail, MdPerson } from "react-icons/md";

export default function Topbar({ menuopen, setMenuopen }) {
  return (
    <div className={"topbar " + (menuopen && "active")} id="topbar">
      <div className="wrapper">
        <div className="left">
          <h1 className="logo">Viney Gautam.</h1>
          <MdPerson />
          <span className="phoneNumber">+91-7018745229</span>
          <MdEmail />
          <span className="Email">Vineygautam.23@gmail.com</span>
        </div>
        <div
          className={"right " + (menuopen && "active")}
          onClick={() => setMenuopen(!menuopen)}
        >
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>
      </div>
    </div>
  );
}
