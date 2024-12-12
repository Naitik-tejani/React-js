import React from "react";

function View({ data, onDelete }) {
  return (
    <div>
      <h2>View Data</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => onDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default View;
