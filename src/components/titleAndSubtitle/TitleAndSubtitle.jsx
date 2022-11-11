import React from "react";
import "./titleAndSubtitle.scss";
function TitleAndSubtitle({ title, subtitle }) {
  return (
    <div className="container">
      <h1>{title}</h1>
      <span>{subtitle}</span>
    </div>
  );
}

export default TitleAndSubtitle;
