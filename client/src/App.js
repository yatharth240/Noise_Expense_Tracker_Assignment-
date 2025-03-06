import React, { useState } from 'react';
import ExpenseList from './expenselist';
import ExpenseForm from './expenseform';
import ExpenseFilter from './expensefilter';

const App = () => {
  const [filter, setFilter] = useState({ category: '', date: '' });

  const refreshExpenses = () => {
    // Trigger a refresh of expenses when a new one is added
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseForm refreshExpenses={refreshExpenses} />
      <ExpenseFilter setFilter={setFilter} />
      <ExpenseList filter={filter} />
    </div>
  );
};

export default App;
