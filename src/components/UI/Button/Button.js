import React from 'react';
import './Button.css';

const Button = ({ type, onClick, children }) => {
  // children: 목표 추가하기
  return (
    <button
      type={type}
      className='button'
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
