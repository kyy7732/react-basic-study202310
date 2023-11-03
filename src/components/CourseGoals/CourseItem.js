import React from 'react';
import './CourseItem.css';

const CourseItem = ({ item, onDelete }) => {
  return (
    <li
      className='goal-item'
      onClick={() => onDelete(item.id)} // id만 넘겨주면 되므로 콜백함수를 사용해서 바로 보냄
    >
      {item.text}
    </li>
  );
};

export default CourseItem;
