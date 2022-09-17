import "../Styles/signup.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { registerInitiate } from "../Redux/AuthReducer/action";

export const SignUP = () => {
  const [state, setState] = useState({
    displayName: "",
    email: "",
    password: "",
  });

  const { currentUser } = useSelector((state) => state.userReducer);

  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  const dispatch = useDispatch();

  const { email, password, displayName } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (password !== passwordConfirm) {
    //   return alert("Passwords don't match");
    // }
    dispatch(registerInitiate(email, password, displayName));
    setState({ email: "", displayName: "", password: "" });
    alert("You have successfully registered");
    navigate("/login");
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
                  <div className="sign-up-title">
                    Sign up &amp; manage fundraisers, donations &amp; more
                  </div>
                  <form className="form-signup" onSubmit={handleSubmit}>
                    <input
                      type="text"
                      id="displayName"
                      className="form-control"
                      placeholder="Full Name"
                      name="displayName"
                      onChange={handleChange}
                      value={displayName}
                      required
                    />

                    <input
                      type="email"
                      id="userEmail"
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
                      Sign Up
                    </button>
                    <div
                      style={{
                        padding: "10px 0",
                      }}
                    ></div>
                    <div className="login-details">
                      <div className="login-description">
                        Already signed up with Milaap?{" "}
                      </div>
                      <div className="login-btn">
                        <Link to="/login">
                          <button className="btn_login">Login</button>
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
