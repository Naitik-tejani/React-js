import React, { useState } from "react";

function Signup({ onSignup }) {
  const [userData, setUserData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignup(userData);  // Pass the user data to the parent component (App)
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={userData} 
          onChange={(e) => setUserData(e.target.value)} 
          placeholder="Enter your name" 
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
