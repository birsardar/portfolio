import { NavLink } from "react-router-dom";
import "./workcard.css";
import React, { useRef, useState } from "react";

export default function WorkCard(props) {
  const contentRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleContent = (event) => {
    if (expandedIndex === props.text) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(props.text);
    }
  };
  const handleClick = (event) => {
    event.preventDefault();
    // Perform form submission logic here

    // Reset the form fields
    event.target.reset();

    // Set the isSubmitted state to true
  };
  return (
    <>
      <div className="project-card" ref={contentRef}>
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
            <button onClick={toggleContent} className="btn">
              {expandedIndex ? "Collapse" : "Expand"}
            </button>
          </div>
        </div>
      </div>
      {expandedIndex && (
        <div onClick={handleClick}>
          <div className="expanded-content">
            {props.text}
          </div>
        </div>
      )}
    </>
  );
}
