import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";

const MyProfile = () => {
  const { userName, password } = useContext(UserContext);
  const [show, setShow] = useState(false);
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
      <h1>{userName}'s Profile</h1>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Password" : "Show Password"}
      </button>
      {show && <h4>Your password is: {password}</h4>}
    </div>
  );
};

export default MyProfile;
