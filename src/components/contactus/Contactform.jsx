import "./contact.css";
import React, { useEffect, useRef, useState } from "react";

export default function Contactform() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const alertRef = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };

    // Validate name field
    if (name.trim() === "") {
      newErrors.name = "Name is required";
      valid = false;
    }

    // Validate email field
    if (email.trim() === "") {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    }

    // Validate subject field
    if (subject.trim() === "") {
      newErrors.subject = "Subject is required";
      valid = false;
    }

    // Validate message field
    if (message.trim() === "") {
      newErrors.message = "Message is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      // Perform form submission logic here

      // Reset the form fields
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");

      // Set the isSubmitted state to true
      setIsSubmitted(true);
    }
  };

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

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Perform form submission logic here

  //   // Reset the form fields
  //   event.target.reset();

  //   // Set the isSubmitted state to true
  //   setIsSubmitted(true);
  // };

  return (
    <div className="form">
      {isSubmitted && (
        <div id="alert-container" ref={alertRef}>
          <div className="alert">Successfully sent!</div>
        </div>
      )}
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name</label>
        {errors.name && <div className="error">{errors.name}</div>}
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">Email</label>
        {errors.email && <div className="error">{errors.email}</div>}
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="subject">Subject</label>
        {errors.subject && <div className="error">{errors.subject}</div>}
        <input
          type="text"
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        <label htmlFor="message">Message</label>
        {errors.message && <div className="error">{errors.message}</div>}
        <textarea
          id="message"
          rows="10"
          placeholder="Type your message here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
}
