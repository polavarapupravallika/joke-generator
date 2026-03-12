import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function Layout() {
  const location = useLocation();

  return (
    <div style={{ textAlign: "center" }}>
      {/* Show title only on Home page */}
      {location.pathname === "/" && (
        <h1>😂 Joke Generator App</h1>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;