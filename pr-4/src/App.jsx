import { useState } from "react";
import "./App.css"; // Optional: Create a separate CSS file for cleaner code

function App() {
  const [data, setData] = useState([{ name: "", email: "", salary: "" }]);

  const handleClick = () => {
    setData([...data, { name: "", email: "", salary: "" }]);
  };

  const handleChange = (e, i) => {
    const { name, value } = e.target;
    const updatedData = [...data];
    updatedData[i][name] = value;
    setData(updatedData);
  };

  const handleCancel = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <button className="add-button" onClick={handleClick}>
        ADD
      </button>

      {data.map((val, i) => (
        <div className="form-row" key={i}>
          <input
            className="input-field"
            type="text"
            name="name"
            placeholder="Name"
            value={val.name}
            onChange={(e) => handleChange(e, i)}
          />
          <input
            className="input-field"
            type="email"
            name="email"
            placeholder="Email"
            value={val.email}
            onChange={(e) => handleChange(e, i)}
          />
          <input
            className="input-field"
            type="text"
            name="salary"
            placeholder="Salary"
            value={val.salary}
            onChange={(e) => handleChange(e, i)}
          />
          <button className="cancel-button" onClick={() => handleCancel(i)}>
            Cancel
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
