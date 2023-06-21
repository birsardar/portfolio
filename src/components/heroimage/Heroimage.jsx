import "./heroimage.css";
import React from "react";
import { Link } from "react-router-dom";
export default function Heroimage() {
  return (
    <div className="hero">
      <div className="mask">
        <img
          className="into-img"
          src="https://img.freepik.com/free-photo/flat-lay-desktop-with-agenda-magnifying-glass_23-2148397834.jpg?w=900&t=st=1687188527~exp=1687189127~hmac=e9e03bd3daf91c40fad9c455de634f35595b73d92810dd203a7f02f7ca3deb66"
          alt="Intro-img"
        />
        <div className="content">
          <p>HI , I'M FREELANCER.</p>
          <h1>React Developer</h1>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
