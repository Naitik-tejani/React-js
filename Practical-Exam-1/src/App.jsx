
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import SignIn from "./pages/Signin";
import SignUp from "./pages/SignUp";
import Add from "./pages/Add";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("isAuthenticated");
    if (loggedInUser === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<SignIn users={users} setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route path="/signup" element={<SignUp setUsers={setUsers} />} />
        <Route
          path="/add"
          element={
            isAuthenticated ? <Add /> : <Navigate to="/" />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
