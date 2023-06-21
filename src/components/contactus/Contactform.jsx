import "./contact.css";
import React, { useEffect, useRef, useState } from "react";

export default function Contactform() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const alertRef = useRef(null);

  useEffect(() => {
    if (isSubmitted) {
      const timeout = setTimeout(() => {
        setIsSubmitted(false);
      }, 2000);
      alertRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isSubmitted]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here

    // Reset the form fields
    event.target.reset();

    // Set the isSubmitted state to true
    setIsSubmitted(true);
  };

  return (
    <div className="form">
      {isSubmitted && (
        <div id="alert-container" ref={alertRef}>
          <div className="alert">Successfully sent!</div>
        </div>
      )}
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Your Name</label>
        <input type="text" />
        <label htmlFor="">Email</label>
        <input type="email" />
        <label htmlFor="">Subject</label>
        <input type="text" />
        <label htmlFor="">Message</label>
        <textarea rows="10" placeholder="Type your message here"></textarea>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
}
