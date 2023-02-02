import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import HomePage from "./HomePage";
import ContactUs from "./ContactUs";
import MyProfile from "./MyProfile";
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
          </Routes>
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
