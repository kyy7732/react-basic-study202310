import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ onSaveExpense, onToggle }) => {
  const [userInput, setUserInput] = useState({
    title: '',
    price: '',
    date: '',
  });

  const titleChangeHandler = (e) => {
    setUserInput((prevUserInput) => {
      // userState가 가지고있던 객체가 들어옴
      return {
        ...prevUserInput,
        title: e.target.value,
      };
    });
    // react의 setter 함수는 비동기 방식으로 실행이 된다.
    // 그러므로 순차적으로 진행되지 않는다.
    // setUserInput({
    //   ...userInput,
    //   title: e.target.value,
    // });
  };

  const priceChangeHandler = (e) => {
    setUserInput({
      ...userInput, // ...: userInput에 있는 내용 그대로 불러오겠다.
      price: e.target.value,
    });
  };

  const dateChangeHandler = (e) => {
    setUserInput({
      ...userInput, // ...: userInput에 있는 내용 그대로 불러오겠다.
      date: e.target.value,
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault(); // submit 차단

    const newExpense = {
      title: userInput.title,
      // +: 만약 이 문자열이 정수형으로 받아야한다면 +기호를 사용하여 정수형으로 받아줄 수 있다.
      price: +userInput.price,
      date: new Date(userInput.date),
    };

    console.log('submit 버튼을 누름!');

    onSaveExpense(newExpense);

    // 입력창 리셋
    setUserInput({
      title: '',
      price: '',
      date: '',
    });

    onToggle();
  };

  const cancelInsertHandler = () => {
    // console.log('취소 버튼 누름!');
    onToggle();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            onChange={titleChangeHandler}
            value={userInput.title}
          />
        </div>
        <div className='new-expense__control'>
          <label>Price</label>
          <input
            type='number'
            min='100'
            step='100'
            onChange={priceChangeHandler}
            value={userInput.price}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2025-12-31'
            onChange={dateChangeHandler}
            value={userInput.date}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button
          type='button'
          onClick={cancelInsertHandler}
        >
          Cancel
        </button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
