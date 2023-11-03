import React, { useState } from 'react';
import './App.css';
import CourseInput from './components/CourseGoals/CourseInput';
import CourseList from './components/CourseGoals/CourseList';
// 배열이나 함수 같은경우는 중괄호 사용

const DUMMY_DATA = [
  {
    id: 'g1',
    text: '리액트 컴포넌트 스타일링 마스터하기',
  },
  {
    id: 'g2',
    text: 'UI 프로그래밍 삽고수 되기',
  },
];

const App = () => {
  // goals는 리스트로 받기때문에 리스트형태로 보내야한다.
  const [goals, setGoals] = useState(DUMMY_DATA);

  // Input에게 전달할 함수
  const addGoalHandler = (text) => {
    // console.log('전달받은 텍스트:', text);
    const newGoal = {
      id: Math.random().toString(),
      text: text,
    };

    // 상태변수(배열) 수정 상태변수는 반드시 setter를 이용해야함
    // setGoals([...goals, newGoal]); // 기존내역 그대로 가져오면서 newGoal을 추가 하겠다.
    setGoals((prevGoals) => [...prevGoals, newGoal]); // 가장 직전 최신의 값이 온다
  };

  // 삭제 이벤트 핸들러를 CourseItem까지 내려보내야 됨.
  const deleteGoalHandler = (id) => {
    // console.log('전달된 id: ', id);
    const updateGoals = [...goals]; // 상태 배열의 원본 그대로 복사해서 가져옴.

    // 배열의 객체안의 id를 찾아와야함 id가 같다면 index값을 가져옴
    const index = updateGoals.findIndex((goal) => goal.id === id);
    updateGoals.splice(index, 1); // splice 선택된 index값부터 몇개를 삭제하느냐

    // filter는 조건에 맞는것만 출력
    // const updateGoals = goals.filter((goal) => goal.id !== id);

    setGoals(updateGoals);
  };

  // CourseList 조건부 렌더링
  // style을 자바스크립트 객체 형태로 전달하기 떄문에 {{}}를 사용
  // style에 {}치고 자바스크립트 객체 라는 {}를 또 사용
  // 카멜케이스 사용하여 입력
  let listContent = (
    <p
      style={{
        color: 'red',
        fontSize: '20px',
        textAlign: 'center',
      }}
    >
      목표를 등록해 주세요!!
    </p>
  );
  if (goals.length > 0) {
    listContent = (
      <CourseList
        items={goals}
        onDelete={deleteGoalHandler}
      />
    );
  }

  return (
    <div>
      <section id='goal-form'>
        <CourseInput onAdd={addGoalHandler} />
      </section>
      <section id='goals'>{listContent}</section>
    </div>
  );
};

export default App;
