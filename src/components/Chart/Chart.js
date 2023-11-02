import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = ({ dataPoints }) => {
  return (
    <div className='chart'>
      {dataPoints.map((dp) => (
        <ChartBar
          key={dp.label}
          label={dp.label}
        /> // key값은 가공해서 사용하는건 지양한다. // 그래서 label을 다시 만든다
      ))}
    </div>
  );
};

export default Chart;
