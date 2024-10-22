import { useState } from 'react';
import './App.css'; // Custom CSS file for styling

function App() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [task, setTask] = useState("");
  const [editId, seteditId] = useState("");
  const [record, setRecord] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!date || !name || !task) {
      alert("Please fill out all fields");
      return;
    }

    let obj = {
      id: editId ? editId : Math.floor(Math.random() * 10000),
      name: name,
      date: date,
      task: task,
    };

    if (editId) {
      let updatedRecords = record.map((val) => val.id === editId ? obj : val);
      setRecord(updatedRecords);
      alert("Task updated!");
    } else {
      let allRecords = [...record, obj];
      setRecord(allRecords);
      alert("Task added!");
    }

    localStorage.setItem('user', JSON.stringify(record));

    // Clear the form
    setName("");
    setDate("");
    setTask("");
    seteditId("");
  };

  const handleEdit = (val) => {
    setName(val.name);
    setDate(val.date);
    setTask(val.task);
    seteditId(val.id);
  };

  const handleDelete = (id) => {
    let filteredRecords = record.filter((val) => val.id !== id);
    setRecord(filteredRecords);
    alert("Task deleted!");
  };

  return (
    <div className="container">
      <div className="header">
        <h2>Task Manager</h2>
        <p>Stay organized and manage your tasks</p>
      </div>

      <div className="form-container">
        <div className="card">
          <h4>{editId ? 'Edit Task' : 'Add Task'}</h4>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input-group">
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="input-group">
              <textarea
                placeholder="Enter Task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              ></textarea>
            </div>
            <div className="button-group">
              <button type="submit" className="btn-primary">
                {editId ? 'Update Task' : 'Add Task'}
              </button>
              <button type="button" className="btn-secondary" onClick={() => seteditId("")}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="task-list">
        {record.length > 0 ? (
          record.map((val) => (
            <div className="task-card" key={val.id}>
              <div className="task-details">
                <h5>{val.name}</h5>
                <h6>{val.date}</h6>
                <p>{val.task}</p>
                <div className="task-actions">
                  <button className="btn-edit" onClick={() => handleEdit(val)}>Edit</button>
                  <button className="btn-delete" onClick={() => handleDelete(val.id)}>Delete</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-tasks">
            <p>No tasks available. Add a task to get started!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
