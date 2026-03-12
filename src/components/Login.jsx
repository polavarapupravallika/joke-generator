import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [isSignup, setIsSignup] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSignup = () => {
    if (!email || !password || !confirmPassword) {
      setMessage("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    localStorage.setItem("user", JSON.stringify({ email, password }));
    setMessage("Signup Successful! Please Sign In.");
    setIsSignup(false);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      email === storedUser.email &&
      password === storedUser.password
    ) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard");
    } else {
      setMessage("Invalid Email or Password");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h2>{isSignup ? "Sign Up" : "Sign In"}</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {isSignup && (
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}

        {isSignup ? (
          <button onClick={handleSignup}>Sign Up</button>
        ) : (
          <button onClick={handleLogin}>Login</button>
        )}
        {isSignup && (
          <p className="toggle-text">
            Already have an account?{" "}
            <span onClick={() => setIsSignup(false)}>Sign In</span>
          </p>
        )}

        <p className="error-msg">{message}</p>
      </div>
    </div>
  );
}

export default Login;