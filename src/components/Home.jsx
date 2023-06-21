import React from "react";
import Navbar from "./navbar/Navbar";
import Heroimage from "./heroimage/Heroimage";
import Footer from "./footer/Footer";
import Work from "./workcard/Work";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Heroimage />
      <Work />

      <Footer />
    </div>
  );
}
