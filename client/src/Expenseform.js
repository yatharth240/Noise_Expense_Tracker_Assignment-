import React, { useState } from 'react';
import axios from 'axios';

const ExpenseForm = ({ refreshExpenses }) => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const expenseData = { amount, category, date, description };
    try {
      await axios.post('http://localhost:5000/expenses', expenseData);
      refreshExpenses();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" placeholder="Amount" onChange={e => setAmount(e.target.value)} required />
      <input type="text" placeholder="Category" onChange={e => setCategory(e.target.value)} required />
      <input type="date" onChange={e => setDate(e.target.value)} required />
      <textarea placeholder="Description" onChange={e => setDescription(e.target.value)} required />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
