import ReactEcharts from "echarts-for-react";

export const DateRatingRadarChart = () => {
  const option = {
    title: {
      text: "Total Score: 82",
      subtext: "",
      subtextStyle: {
        color: "purple",
        fontSize: 16,
        fontWeight: "bold",
        distance: -30,
      },
      left: "center",
    },
    tooltip: {},
    radar: {
      name: {
        textStyle: {
          color: "#9b59b6",
        },
      },
      indicator: [
        { name: "Appearance", max: 20 },
        { name: "Personality", max: 30 },
        { name: "Interests", max: 20 },
        { name: "Occupation", max: 15 },
        { name: "Education Background", max: 15 },
      ],
    
      center: ["50%", "50%"],
      radius: "60%",
    },
    series: [
      {
        name: "Score",
        type: "radar",
        data: [
          {
            value: [18, 27, 16, 12, 9],
            name: "Score",
            areaStyle: {
              color: "rgba(155, 89, 182, 0.3)",
            },
            lineStyle: {
              color: "#9b59b6",
              width: 2,
            },
            itemStyle: {
              color: "#9b59b6",
            },
          },
        ],
      },
    ],
  };

  return <ReactEcharts option={option} className="mt-20" />;
};
