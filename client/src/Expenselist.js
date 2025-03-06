import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ExpenseList = ({ filter }) => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/expenses?category=${filter.category}&date=${filter.date}`);
        setExpenses(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchExpenses();
  }, [filter]);

  return (
    <div>
      <h2>Expenses</h2>
      <ul>
        {expenses.map(expense => (
          <li key={expense._id}>
            {expense.amount} - {expense.category} - {expense.date} - {expense.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
