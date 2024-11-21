import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [budgetAmount, setBudgetAmount] = useState("");
  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");

  const totalExpenses = expenses.reduce((acc, curr) => acc + curr.amount, 0);
  const balance = budget - totalExpenses;

  const handleSetBudget = (e) => {
    e.preventDefault();
    const amount = Number(budgetAmount);
    if (amount > 0) {
      setBudget(amount);
      setBudgetAmount("");
    } else {
      alert("Please enter a valid budget amount.");
    }
  };

  const handleAddExpense = (e) => {
    e.preventDefault();
    const amount = Number(expenseAmount);
    if (expenseTitle.trim() !== "" && amount > 0) {
      setExpenses([
        ...expenses,
        { id: Date.now(), title: expenseTitle, amount: amount },
      ]);
      setExpenseTitle("");
      setExpenseAmount("");
    } else {
      alert("Please enter valid expense title and amount.");
    }
  };

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div className="container">
      <h1 className="app-title">Budget Tracker</h1>

      <div className="content">
        {/* Budget Section */}
        <div className="card">
          <h2>Set Your Budget</h2>
          <form onSubmit={handleSetBudget}>
            <input
              type="number"
              placeholder="Enter your budget"
              value={budgetAmount}
              onChange={(e) => setBudgetAmount(e.target.value)}
              required
            />
            <button type="submit">Set Budget</button>
          </form>
        </div>

        {/* Expense Section */}
        <div className="card">
          <h2>Add an Expense</h2>
          <form onSubmit={handleAddExpense}>
            <input
              type="text"
              placeholder="Expense Title"
              value={expenseTitle}
              onChange={(e) => setExpenseTitle(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Amount"
              value={expenseAmount}
              onChange={(e) => setExpenseAmount(e.target.value)}
              required
            />
            <button type="submit">Add Expense</button>
          </form>
        </div>

        {/* Summary Section */}
        <div className="summary">
          <div className="summary-card">
            <h3>Total Budget</h3>
            <p>₹{budget}</p>
          </div>
          <div className="summary-card">
            <h3>Total Expenses</h3>
            <p>₹{totalExpenses}</p>
          </div>
          <div className={`summary-card ${balance < 0 ? "negative" : "positive"}`}>
            <h3>Balance</h3>
            <p>₹{balance}</p>
          </div>
        </div>

        {/* Expense List */}
        <div className="card expense-list">
          <h2>Expenses</h2>
          {expenses.length === 0 ? (
            <p>No expenses recorded yet.</p>
          ) : (
            <ul>
              {expenses.map((expense) => (
                <li key={expense.id}>
                  <span>{expense.title}</span>
                  <span>₹{expense.amount}</span>
                  <button
                    className="delete-btn"
                    onClick={() => handleDeleteExpense(expense.id)}
                  >
                    🗑
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
