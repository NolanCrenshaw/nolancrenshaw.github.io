import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const ContactForm = () => {
  // Variable Access
  const userID = "";
  const ejsSERVICE = "";
  const ejsTEMPLATE = "";

  // State
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Handlers
  const handleFirstname = (e) => setFirstname(e.target.value);
  const handleLastname = (e) => setLastname(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleMessage = (e) => setMessage(e.target.value);

  // Functions
  const clearForm = () => {
    setFirstname("");
    setLastname("");
    setEmail("");
    setMessage("");
  };
  const submitHandle = async (e) => {
    e.preventDefault();
    const res = await emailjs.sendForm(
      ejsSERVICE,
      ejsTEMPLATE,
      e.target,
      userID
    );
    if (res.text !== "OK") {
      // -- TODO -- Error Handling
      // console.log("Contact Form EmailJS res failure: ", res.text);
    } else {
      clearForm();
    }
  };

  return (
    <div className="contact-form">
      <form className="contact_form" onSubmit={(e) => submitHandle(e)}>
        <div>
          <input
            id="contact_firstname"
            name="firstname"
            value={firstname}
            onChange={handleFirstname}
            type="text"
            placeholder="First Name"
          />
          <input
            id="contact_lastname"
            name="lastname"
            value={lastname}
            onChange={handleLastname}
            type="text"
            placeholder="Last Name"
          />
        </div>
        <input
          id="contact_email"
          name="email"
          value={email}
          onChange={handleEmail}
          type="email"
          placeholder="Email"
        />
        <textarea
          id="contact_message"
          name="message"
          value={message}
          onChange={handleMessage}
          placeholder="Your Message"
        />
        <div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.1 }}
            type="submit"
            value="Send"
          >
            Submit
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.1 }}
            onClick={clearForm}
          >
            Clear Form
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
