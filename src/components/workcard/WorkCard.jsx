import { NavLink } from "react-router-dom";
import "./workcard.css";
import React from "react";

export default function WorkCard(props) {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="imageloading" />
      <h2 className="project-title">
        {props.title.length > 50
          ? props.title.slice(0, 40) + "..."
          : props.title}
      </h2>
      <div className="project-details">
        <p>
          {props.text.length > 100
            ? props.text.slice(0, 100) + "..."
            : props.text}
        </p>
        <div className="pro-btns">
          <NavLink to={props.view} className="btn">
            View
          </NavLink>
          <NavLink to="url.com" className="btn">
            Souce
          </NavLink>
        </div>
      </div>
    </div>
  );
}
