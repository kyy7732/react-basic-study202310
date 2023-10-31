import React from 'react';
// css 로딩
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
const ExpenseItem = ({ title, price: propsPrice, date }) => {
  // price: 사욜할 이름
  // 부모가 전달한 객체가 들어옴

  // const price = 99999;
  // const expenseDate = date;
  // const expenseTitle = title;
  // const expensePrice = propsPrice;

  // 1자리 숫자를 2자리수로 변환하는 함수
  const make2digit = (text) => {
    // padStart: 자바 스크립트의 문자열 함수 총자리수는 2자리고 0으로 채움
    return text.toString().padStart(2, '0');
  };

  // 날짜 포맷팅 변환 함수 정의
  const makeFormattedDate = () => {
    // const year = date.getFullYear();
    // const month = date.getMonth();
    // const day = date.getDate();
    // (템플릿 리터럴) `${}`
    // return `${year}년 ${make2digit(month)}월 ${make2digit(day)}일`;
  };

  // 숫자를 원화 표기법으로 바꾸기
  const formattedPrice = new Intl.NumberFormat('ko-KR').format(propsPrice);

  return (
    <div className='expense-item'>
      <ExpenseDate date={date} />
      <div>{makeFormattedDate()}</div>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>{formattedPrice}원</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
