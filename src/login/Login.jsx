import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Please fill all fields");
      return;
    }

    navigate("/");
  };

  return (
    <div className="main-conatiner">
      <div className="form-conatiner">
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
          <div className="email-div">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="password-div">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Login submit */}
          <button type="submit">Login</button>

          <p className="signup-text">Don’t have an account?</p>

          {/* Sign up navigation button */}
          <button
            type="button"
            className="signup-btn"
            onClick={() => navigate("/registration")}
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
