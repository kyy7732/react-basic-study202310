import React, { useContext } from 'react';

import Card from '../../UI/Card';
import styles from './Home.module.css';
import Button from '../../UI/Button/Button';
import AuthContext from '../../../store/auth-context';

const Home = () => {
  // consumer문법을 생략하게 해 주는 문법(useContext)
  // 디스트럭쳐링하여 onLogout만 가져옴
  const { onLogout } = useContext(AuthContext); // 사용하고자하는 Context를 집어넣는다
  // console.log('authCtx: ', authCtx);

  return (
    <Card className={styles.home}>
      <h1>Welcome back!</h1>
      <Button onClick={onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
