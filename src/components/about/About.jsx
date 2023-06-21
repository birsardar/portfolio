import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Heroimage2 from "../heroimage/Heroimage2";
import AboutContent from "./AboutContent";

export default function About() {
  return (
    <div>
      <Navbar />
      <Heroimage2 heading="ABOUT." text="I'm a friendly Front-End Developer." />
      <AboutContent />
      <Footer />
    </div>
  );
}
