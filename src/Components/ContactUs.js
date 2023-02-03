import React from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div>
      <ul style={{ display: "flex", gap: "30px" }}>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <h1>Contact us</h1>
    </div>
  );
};

export default ContactUs;
