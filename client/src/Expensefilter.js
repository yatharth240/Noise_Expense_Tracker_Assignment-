import React, { useState } from 'react';

const ExpenseFilter = ({ setFilter }) => {
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleChange = () => {
    setFilter({ category, date });
  };

  return (
    <div>
      <input type="text" placeholder="Category" onChange={e => setCategory(e.target.value)} />
      <input type="date" onChange={e => setDate(e.target.value)} />
      <button onClick={handleChange}>Filter</button>
    </div>
  );
};

export default ExpenseFilter;
