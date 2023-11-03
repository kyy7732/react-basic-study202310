import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = ({ dataPoints }) => {
  // 1년치 지출 총액이 필요하다! (그래야 비율을 설정할 수 있으니까!)
  const dataPointsValues = dataPoints.map((dp) => dp.value); // 지출액들만 월별로 추출.

  // 1년치 총액
  // a: 리턴결과에 대한 누적값, b: 배열에서 하나씩 꺼낸 값
  const totalValue = dataPointsValues.reduce((a, b) => {
    // const totalValue = dataPointsValues.reduce((a,b) => a + b, 0)같은말 0은초기인덱스값
    // reduce: 특정 배열에서 누적된 값을 더하는 함수
    console.log(`a : ${a}, b: ${b}`);
    return a + b;
  }, 0); // 0: 초기값

  // 그 중에서 제일 지출이 높은 값
  // const maximumValue = Math.max(...dataPointsValues);
  // console.log('maximum: ', maximumValue);

  return (
    <div className='chart'>
      {dataPoints.map(({ label, value }) => {
        return (
          <ChartBar
            key={label}
            label={label}
            currentValue={value}
            maxValue={totalValue}
          />
        ); // key값은 가공해서 사용하는건 지양한다. // 그래서 label을 다시 만든다
      })}
    </div>
  );
};

export default Chart;
