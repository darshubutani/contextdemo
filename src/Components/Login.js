import React, { useContext } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";

function Login() {
  const { setUserName, setPassword } = useContext(UserContext);
  const navigate = useNavigate();
  const handleLoginClick = (e) => {
    e.preventDefault();
    let name = document.forms[0].name.value;
    let pwd = document.forms[0].password.value;
    setUserName(name);
    setPassword(pwd);
    navigate("/home");
  };

  return (
    <>
      <div className="container">
        <div className="screen">
          <div className="screen__content">
            <form className="login" onSubmit={handleLoginClick}>
              <div className="login__field">
                <i className="login__icon fas fa-user" />
                <input
                  name="name"
                  type="text"
                  className="login__input"
                  placeholder="User name / Email"
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock" />
                <input
                  name="password"
                  type="password"
                  className="login__input"
                  placeholder="Password"
                />
              </div>
              <button className="button login__submit">
                <span className="button__text">Log In Now</span>
                <i className="button__icon fas fa-chevron-right" />
              </button>
            </form>
            <div className="social-login">
              <h3>log in via</h3>
              <div className="social-icons">
                <a href="#" className="social-login__icon fab fa-instagram" />
                <a href="#" className="social-login__icon fab fa-facebook" />
                <a href="#" className="social-login__icon fab fa-twitter" />
              </div>
            </div>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4" />
            <span className="screen__background__shape screen__background__shape3" />
            <span className="screen__background__shape screen__background__shape2" />
            <span className="screen__background__shape screen__background__shape1" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
