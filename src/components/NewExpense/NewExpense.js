import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({ onAddExpense }) => {
  // add라는 문자가 옴

  const [expenseToggle, setExpenseToggle] = useState(false);

  const startInsertModeHandler = () => setExpenseToggle(true); // 1줄이라 {}생략
  const stopInsertModeHandler = () => setExpenseToggle(false);

  let newExpenseContent = (
    <button onClick={startInsertModeHandler}>새로운 지출 추가하기</button>
  );

  if (expenseToggle) {
    newExpenseContent = (
      <ExpenseForm
        onSaveExpense={onAddExpense}
        onToggle={stopInsertModeHandler}
      />
    );
  }

  return <div className='new-expense'>{newExpenseContent}</div>;
};

export default NewExpense;
