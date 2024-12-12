// src/components/TodoItem.js
import React from "react";

const TodoItem = ({ todo, completeTask, deleteTask }) => {
  return (
    <div
      style={{
        textDecoration: todo.completed ? "line-through" : "none",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        backgroundColor: "#444",
        margin: "10px 0",
      }}
    >
      <div>
        <h3>{todo.name}</h3>
        <p>{todo.description}</p>
      </div>
      <div>
        <button onClick={completeTask} disabled={todo.completed}>
          Complete
        </button>
        <button onClick={deleteTask} style={{ marginLeft: "10px" }}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
