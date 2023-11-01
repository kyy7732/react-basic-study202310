import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({ onAddExpense }) => {
  // add라는 문자가 옴
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpense={onAddExpense} />
    </div>
  );
};

export default NewExpense;
