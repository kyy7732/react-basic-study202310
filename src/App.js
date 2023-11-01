import React from 'react';
import './App.css';
import Expenses from './components/Expenses';
import Hello from './components/Hello';
// 배열이나 함수 같은경우는 중괄호 사용

const App = () => {
  // 지출 항목 객체 배열

  const expenses = [
    {
      title: '바나나',
      price: 2000,
      date: new Date(2023, 3 - 1, 23),
    },
    {
      title: 'BBQ치킨',
      price: 20000,
      date: new Date(2023, 5 - 1, 21),
    },
    {
      title: '도미노피자',
      price: 35000,
      date: new Date(2023, 7 - 1, 4),
    },
  ];
  // 리액트 고유 속성: 수정이 필요한 부분만 수정이 되기 때문에 다시 실행이 되는게 아니다.
  // 화면이 변환되었다고 알려줘야 함.
  console.log('App 실행!');

  return (
    <>
      <Expenses items={expenses} />
    </>
  );
};

export default App;
