import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp = ({ setUsers }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (username.trim() && password.trim()) {
      const newUser = { username, password };
      setUsers((prevUsers) => [...prevUsers, newUser]);
      localStorage.setItem("user", JSON.stringify(newUser));
      alert("Sign up successful! Please log in.");
      navigate("/");
    } else {
      alert("Please fill out all fields");
    }
  };

  return (
    <div className="auth-container">
      <h1>Sign Up</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignUp;