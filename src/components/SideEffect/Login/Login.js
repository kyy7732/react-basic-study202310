import React, { useEffect, useReducer, useState } from 'react';

import Card from '../../UI/Card';
import styles from './Login.module.css';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';

// 리듀서 함수
/*
  이 컴포넌트에서 사용하는 모든 상태와 상태 변경을 중앙 제어하는 함수.
  컴포넌트 내부 데이터를 사용하지 않고 상태에만 집중하기 때문에
  컴포넌트 바깥쪽에 선언하는 것이 일반적입니다.
  param1 - state: 변경 전의 상태값
  param2 - action: dispatch함수(상태 변경 등의 행동)가 전달한 상태 변경 객체
  return: 관리할 상태값들을 반환
*/

const emailReducer = (state, action) => {
  // state에는 가장 직전의 상태가 온다 , action에는 디스패치함수를 통해서 들어온 값이 들어옴.
  // console.log('email reducer called!!!!');
  // console.log('state: ', state);
  // console.log('action: ', action);

  // dispatch 함수가 전달한 액션 객체의 타입에 따라 변경할 상태값을 반환.
  if (action.type === 'USER_INPUT') {
    return {
      value: action.val,
      isValid: action.val.includes('@'),
    };
  } else if (action.type === 'INPUT_VALIDATE') {
    return {
      value: state.value,
      isValid: state.value.includes('@'),
    };
  }

  // return {
  //   value: '',
  //   isValid: null,
  // };
};

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return {
      value: action.val,
      isValid: action.val.trim().length > 6,
    };
  } else if (action.type === 'INPUT_VALIDATE') {
    return {
      value: state.value,
      isValid: state.value.trim().length > 6,
    };
  }
};

const Login = () => {
  // email reducer 사용하기
  /*
    param1 - reducer function: 위에서 만든 리듀서 함수
    param2 - initial state: 초기 상태값
    return1 - 이메일 관련 상태 변수
    return2 - dispatch함수: 상태를 변경할 수 있는 함수
  */
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    // 받을 함수, 초기값
    value: '',
    isValid: null,
  });

  // 이메일, 패스워드가 둘 다 동시에 정상적인 상태인지 확인
  const [formIsValid, setFormIsValid] = useState(false);

  // emailState는 객체 형태. -> isValid 프로퍼티가 변경됐을 때만 useEffect를 실행하게 하려면
  // isValid를 디스트럭쳐링 한다. (프로퍼티로 바로 사용 x)
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  // 입력란을 모두 체크하여 form의 버튼 disabled를 해제하는
  // 상태 변수 formIsValid의 사이드 이펙트를 처리하는 영역
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('useEffect called in Login.js!');
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 1000); // 1000 -> 1초

    // cleanup 함수 - 컴포넌트가 업데이트 되거나 없어지기 전에 실행
    return () => {
      // update전의 상태 (리렌더링 전의 상태)
      console.log('clean up!');
      clearTimeout(timer); // userEffect가 실행되기 전에 실행이 되면 setTimeout는 비활성화 된다.
    };

    // 이 배열에 상태변수를 넣어주면 그 상태변수가 바뀔 때마다 useEffect를 재실행함.
  }, [emailIsValid, passwordIsValid]); // 배열에 값이 없으면 최초 한번만 실행

  const emailChangeHandler = (e) => {
    // reducer의 상태 변경은 dispatch함수를 통해 처리
    /*
      param1 - action객체(리듀서 함수의 2번째 파라미터)
    */
    dispatchEmail({
      // action으로 감
      type: 'USER_INPUT', // 이런 이름으로 사용함
      val: e.target.value,
    });
  };

  const passwordChangeHandler = (e) => {
    // action으로 감
    dispatchPassword({
      type: 'USER_INPUT', // 이런 이름으로 사용함
      val: e.target.value,
    });
  };

  const validateEmailHandler = () => {
    dispatchEmail({
      type: 'INPUT_VALIDATE', // 이런 이름으로 사용함
    });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({
      type: 'INPUT_VALIDATE',
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
        <Input
          type='email'
          id='email'
          label='E-Mail'
          value={emailState.value}
          isValid={emailIsValid}
          onChange={emailChangeHandler} // ...rest에 나머지값이 들어간다(onChange,onBlur등)
          onBlur={validateEmailHandler}
        />
        <Input
          type='password'
          id='password'
          label='Password'
          value={passwordState.value}
          isValid={passwordIsValid}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={styles.actions}>
          <Button
            type='submit'
            className={styles.btn}
            disabled={!formIsValid}
          >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
