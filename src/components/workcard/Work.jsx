import "./workcard.css";
import WorkCard from "./WorkCard";
import ProjectCardData from "./WorkCardData";
import React, { useEffect, useState } from "react";
import axios from "axios";
import data from "./WorkCardData.json";

export default function Work() {
  const [projectData, setProjectData] = useState([]);
  useEffect(() => {
    setProjectData(data);
  }, []);
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {projectData.map((value, i) => {
          return (
            <WorkCard
              key={i}
              imgsrc={value.imgsrc}
              title={value.title}
              text={value.text}
              view={value.view}
            />
          );
        })}
      </div>
    </div>
  );
}
