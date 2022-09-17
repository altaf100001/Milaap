import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import {
  googleSignInInitiate,
  loginInitiate,
} from "../Redux/AuthReducer/action";
import "../Styles/login.css";

export const LogIn = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [update, setUpdate] = useState(false);

  const { email, password } = state;

  const { currentUser } = useSelector((state) => state.userReducer);

  const navigate = useNavigate();

  useEffect(() => {
    if (update) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  const dispatch = useDispatch();

  const handleGoogleSignIn = () => {
    dispatch(googleSignInInitiate());
    setUpdate(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return alert("Please fill in all fields");
    }
    if (password.length < 6) {
      return alert("Password must be at least 6 characters");
    }
    if (email.length < 6) {
      return alert("Email must be at least 6 characters");
    }
    if (!email.includes("@")) {
      return alert("Please enter a valid email");
    }
    if (!email.includes(".")) {
      return alert("Please enter a valid email");
    }
    //if(!e.email){
    //return alert("Please enter a valid email");

    // if(e.password !== password)
    // return alert("Please enter a valid password");

    dispatch(loginInitiate(email, password));
    setState({ email: "", password: "" });
    alert("You have successfully logged in");
    navigate("/");
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <div className="user-management-block">
        {/* <div className="right back-button"></div> */}
        <div className="row-main-frame">
          <div className="left-sider-block">
            <div className="user-management_Image">
              <div className="center-align">
                <div className="logo-wrapper">
                  <img
                    alt="Milaap logo"
                    className="milaap-logo"
                    src="https://assets.milaap.org/assets/milaap-trasparent-logo-25f6253e0156e2f82e2c3daf85575d169864e35ffffd21033ac59da0b4dd88e0.png"
                  />
                </div>
                <div className="block-title">Welcome to Milaap,</div>
                <div className="block-subtitle">
                  India’s largest crowdfunding site
                </div>
              </div>
            </div>
          </div>
          <div className="right-sider-block">
            <div
              className="user-management__block--dynamic sign-up--dynamic"
              id="sign-up-container"
            >
              <div className="sign-up-component">
                <div className="">
                  <div className="sign-up-title">Quickly login using</div>
                  <div className="social-container">
                    <div className="social-facebook">
                      <button className="btn facebook-btn ">Facebook</button>
                    </div>
                    <div className="social-google">
                      <button
                        className="btn google-btn "
                        type="button"
                        onClick={handleGoogleSignIn}
                      >
                        Google
                      </button>
                    </div>
                  </div>
                  <form className="form-signup" onSubmit={handleSubmit}>
                    <input
                      type="email"
                      id="inputEmail"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      onChange={handleChange}
                      value={email}
                      required
                    />

                    <input
                      type="password"
                      id="inputPassword"
                      className="form-control"
                      placeholder="Password"
                      name="password"
                      onChange={handleChange}
                      value={password}
                      required
                    />

                    <button className="block" type="submit">
                      Login
                    </button>
                    <div
                      style={{
                        padding: "10px 0",
                      }}
                    ></div>
                    <div className="login-details">
                      <div className="login-description">
                        New to Milaap? Sign up now, it’s quick & free
                      </div>
                      <div className="login-btn">
                        <Link to="/login">
                          <button className="btn_login">Sign up</button>
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
