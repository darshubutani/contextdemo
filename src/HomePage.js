import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./UserContext";

const HomePage = () => {
  const { userName } = useContext(UserContext);

  return (
    <>
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
      <h1>Hello {userName}</h1>
    </>
  );
};

export default HomePage;
