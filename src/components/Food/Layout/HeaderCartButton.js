import React, { useContext, useEffect, useState } from 'react';

import styles from './HeaderCartButton.module.scss';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../../store/cart-context';

const HeaderCartButton = ({ onShow }) => {
  // bump 애니메이션을 제어하는 상태변수
  const [isBump, setIsBump] = useState(false);

  const { button, icon, badge, bump } = styles;

  const { items } = useContext(CartContext);

  const numberOfCart = items.reduce((accum, item) => {
    return accum + item.amount; // 누적 연산 하는 reduce함수
  }, 0);

  useEffect(() => {
    if (items.length === 0) return;
    console.log('useEffect in CartBtn!');
    setIsBump(true);

    // 애니메이션 시간이 300밀리초니까 그 시간이 지나면 클래스를 제거.
    const timer = setTimeout(() => {
      setIsBump(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]); // []배열을 주지 않으면 항상 변한다. 빈배열을 주면 딱 한번만 실행
  // items에 변화가 생길때마다 useEfect를 실행
  return (
    <button
      className={`${button} ${isBump ? bump : ''}`}
      onClick={onShow}
    >
      <span className={icon}>
        <CartIcon />
      </span>
      <span>My Cart</span>
      <span className={badge}>{numberOfCart}</span>
    </button>
  );
};

export default HeaderCartButton;
