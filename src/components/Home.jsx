import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">
      <div className="home-container">
        <h4>Welcome to Joke Generator App 😂</h4>
        <br></br>

        {/* Login Button */}
        <button onClick={() => navigate("/login")}>Login</button>
      </div>
    </div>
  );
}
export default Home;