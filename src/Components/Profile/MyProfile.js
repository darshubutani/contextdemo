import React, { useState } from "react";
import { useContext, createContext } from "react";
import { UserContext } from "../../UserContext";
import { Link } from "react-router-dom";
import { profileData } from "../utils/profileData";
//import UpdateProfile from "./UpdateProfile";

export const LanguageContext = createContext([]);

const MyProfile = () => {
  const { userName } = useContext(UserContext);
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(["React"]);

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
      {selected && selected.map((item, index) => <div key={index}>{item}</div>)}
      <button onClick={() => setShow(!show)}>
        <Link to="/updateprofile">Update Profile</Link>
      </button>
      <LanguageContext.Provider value={{ selected, setSelected }}>
        <UpdateProfile />
      </LanguageContext.Provider>
    </div>
  );
};
const UpdateProfile = () => {
  const { selected, setSelected } = useContext(LanguageContext);
  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setSelected(
        selected && Array.isArray(selected)
          ? [...selected, e.target.value]
          : [e.target.value]
      );
    } else {
      setSelected(selected?.filter((item) => item !== e.target.value));
    }
  };

  return (
    <>
      <div>
        {profileData.map((item) => (
          <label key={item}>
            <input
              type="checkbox"
              value={item}
              checked={selected?.includes(item)}
              onChange={handleCheckboxChange}
            />
            {item}
          </label>
        ))}
      </div>
    </>
  );
};
export default MyProfile;
