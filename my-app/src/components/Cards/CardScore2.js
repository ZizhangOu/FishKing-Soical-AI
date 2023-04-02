import { useEffect } from "react";
import ReactECharts from "echarts-for-react";

// 在此组件中绘制一个仪表盘图
export const CardGauge2 = () => {
  // 返回仪表盘的配置对象
 

 let  option = {
    series: [
      {
        type: 'gauge',
        axisLine: {
          lineStyle: {
            width: 30,
            color: [
              [0.25, '#7CFFB2'],
              [0.5, '#67e0e3'],
              [0.75, '#37a2da'],
              [1, '#fd666d']
            ]
          }
        },
        pointer: {
          itemStyle: {
            color: 'inherit'
          }
        },
        axisTick: {
          distance: -20,
          length: 5,
          lineStyle: {
            color: '#fff',
            width: 2
          }
          
        },
        splitLine: {
          distance: -20,
          length: 20,
          lineStyle: {
            color: '#fff',
            width: 4
          }
        },
        axisLabel: {
          color: 'inherit',
          distance: 40,
          fontSize: 15
        },
        detail: {
          fontSize: 35,
          offsetCenter: [0, '30%'],
          valueAnimation: true,
          
          color: 'inherit'
        },
        data: [
          {
            value: 82
          }
        ]
      }
    ]
  };
  
  return (
    <div>
      <ReactECharts option={option} style={{ height: "300px" }} />
    </div>
  );
};
