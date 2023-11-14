import React from 'react';
import styles from './Header.module.scss';
import mealsImage from '../../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';
// react에서는 img를 가져오려면 임포트 선언 해야함

const Header = () => {
  // header.module.scss에 클래스명을 가져옴
  const { header, 'main-image': mainImage } = styles;
  return (
    <>
      <header className={header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={mainImage}>
        <img
          src={mealsImage}
          alt='Looks very delicious meals'
        />
      </div>
    </>
  );
};

export default Header;
