import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp = ({ users, setUsers }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (users.find((user) => user.username === username)) {
      setErrorMessage("Username already exists");
    } else if (username && password) {
      setUsers([...users, { username, password }]);
      localStorage.setItem("users", JSON.stringify([...users, { username, password }]));
      navigate("/");
    } else {
      setErrorMessage("Please fill in all fields");
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
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
      {errorMessage && <p className="error">{errorMessage}</p>}
      <button onClick={handleSignUp}>Sign Up</button>
      <p>
        Already have an account? <a href="/">Sign In</a>
      </p>
    </div>
  );
};

export default SignUp;
