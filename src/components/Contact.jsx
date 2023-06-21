import React from "react";
import Navbar from "./navbar/Navbar";
import Heroimage2 from "./heroimage/Heroimage2";
import Footer from "./footer/Footer";
import Contactform from "./contactus/Contactform";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <Heroimage2 heading="CONTACT." text="Lets have a Chat.s" />
      <Contactform />
      <Footer />
    </div>
  );
}
