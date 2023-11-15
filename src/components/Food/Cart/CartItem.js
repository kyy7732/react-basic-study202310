import React, { useContext } from 'react';
import styles from './CartItem.module.scss';
import CartContext from '../../../store/cart-context';

const CartItem = ({ cart }) => {
  const { name, price, amount } = cart;

  const { addItem } = useContext(CartContext);

  // + 버튼 누르면 무적권 amount는 하나다!
  const cartAddItemHandler = () => {
    addItem({ ...cart, amount: 1 }); // 기존에 cart라는 객체를 뿌리고 amount는 1로 고정
  };

  const {
    'cart-item': cartItem,
    summary,
    price: priceStyle,
    amount: amountStyle,
    actions,
  } = styles;
  const formatPrice = new Intl.NumberFormat('ko-KR').format(price);

  return (
    <li className={cartItem}>
      <div>
        <h2>{name}</h2>
        <div className={summary}>
          <span className={priceStyle}>{formatPrice}</span>
          <span className={amountStyle}>x {amount}</span>
        </div>
      </div>
      <div className={actions}>
        <button>−</button>
        <button onClick={cartAddItemHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
