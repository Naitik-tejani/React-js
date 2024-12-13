import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";

const SignIn = ({ users, setIsAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSignIn = () => {
    const findUser = users.find(
      (user) => user.username === username && user.password === password
    );
    if (findUser) {
      localStorage.setItem("isAuthenticated", "true");
      setIsAuthenticated(true);
      navigate("/add");
    } else {
      setErrorMessage("Invalid username or password");
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign In</h2>
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
      <button onClick={handleSignIn}>Sign In</button>
      <p>
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>
    </div>
  );
};

export default SignIn;