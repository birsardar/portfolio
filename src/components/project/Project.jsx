import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Heroimage2 from "../heroimage/Heroimage2";
import Card from "../card/Card";
import Work from "../workcard/Work";

export default function project() {
  return (
    <div>
      <Navbar />
      <Heroimage2 heading="PROJECTS." text="Some of my projects" />
      <Work />
      {/* <Card /> */}
      <Footer />
    </div>
  );
}
