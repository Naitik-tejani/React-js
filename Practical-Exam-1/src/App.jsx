import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./Pages/Signin";
import SignUp from "./Pages/SignUp";
import Add from "./Pages/Add"; // Placeholder for protected page

function App() {
  const [users, setUsers] = useState(() => {
    // Load users from localStorage or use default user list
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  // Save users to localStorage whenever users state changes
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/add" />
            ) : (
              <SignIn users={users} setIsAuthenticated={setIsAuthenticated} />
            )
          }
        />
        <Route
          path="/signup"
          element={<SignUp users={users} setUsers={setUsers} />}
        />
        <Route
          path="/add"
          element={isAuthenticated ? <Add /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
