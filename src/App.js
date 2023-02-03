import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import HomePage from "./Components/HomePage";
import ContactUs from "./Components/ContactUs";
import MyProfile from "./Components/Profile/MyProfile";
import UpdateProfile from "./Components/Profile/UpdateProfile";
import { UserContext } from "./UserContext";

function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <UserContext.Provider
        value={{ userName, setUserName, password, setPassword }}
      >
        <Router>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/home" element={<HomePage />} />
            <Route exact path="/contact" element={<ContactUs />} />
            <Route exact path="/profile" element={<MyProfile />} />
            <Route exact path="/updateprofile" element={<UpdateProfile />} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
