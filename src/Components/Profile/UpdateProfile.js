import React, { useContext } from "react";
import { profileData } from "../utils/profileData";
import { LanguageContext } from "./MyProfile";

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
      <h1>Update Profile</h1>
      <div>
        {profileData.map((item) => (
          <label key={item} style={{ display: "flex" }}>
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

export default UpdateProfile;
