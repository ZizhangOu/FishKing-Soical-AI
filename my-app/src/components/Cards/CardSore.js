import React from 'react';
import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

function CardGauge() {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);
    const option = {
      series: [
        {
          name: '仪表盘',
          type: 'gauge',
          startAngle: 180,
          endAngle: 0,
          pointer: {
            show: false,
            length: '80%',
            width: 8,
          },
          progress: {
            show: true,
            width: 8,
          },
          axisLine: {
            lineStyle: {
              width: 8,
              color: [
                [0.2, '#67e0e3'],
                [0.8, '#37a2da'],
                [1, '#fd666d'],
              ],
            },
          },
          axisTick: {
            distance: 0,
            lineStyle: {
              color: '#ccc',
              width: 1,
            },
            length: 4,
          },
          splitLine: {
            distance: 0,
            length: 10,
            lineStyle: {
              color: '#ccc',
              width: 1,
            },
          },
          axisLabel: {
            distance: 15,
            color: '#ccc',
            fontSize: 10,
          },
          detail: {
            show: false,
          },
          data: [
            {
              value: 82 || 0,
              name: "score" || '',
            },
          ],
        },
      ],
    };
    chart.setOption(option);
    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <div
      className="w-40 h-40 rounded-full border-4 border-gray-300 flex items-center justify-center"
      ref={chartRef}
    ></div>
  );
}

export default CardGauge;
