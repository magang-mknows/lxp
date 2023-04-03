import { FC, ReactElement } from "react";

import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
);

const labels = ["Batch 1", "Batch 2", "Batch 3", "Batch 4", "Batch 5", "Batch 6"];
const dataLine = {
  labels: labels,
  datasets: [
    {
      label: "IPK",
      data: [0.0, 2.5, 2.2, 3.8, 3.0, 3.0],
      borderColor: "white",
      tension: 0.1,
      fill: true,
      backgroundColor: (context: any) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, "#053d38d7");
        gradient.addColorStop(1, "#053d3872");
        return gradient;
      },
      hoverBackgroundColor: "#3b83f67e",
      hoverBorderColor: "#3b83f652",
      pointRadius: 6,
      pointHoverRadius: 20,
      pointStyle: "circle",
      pointBackgroundColor: "#737373",
      borderWidth: 2,
    },
  ],
};

const optionsLine = {
  scales: {
    y: {
      max: 4.5,
      min: 0,
      ticks: {
        fontColor: "red",
        stepSize: 1,
        max: 4,
        callback: function (value: any) {
          if (value === 4.5) {
            return "";
          } else {
            return value;
          }
        },
      },
      border: {
        dash: [2, 4],
      },
      grid: {
        display: true,
      },
    },
    x: {
      grid: {
        display: true,
      },
      ticks: {
        display: true,
      },
      border: {
        dash: [4, 4],
      },
      reverse: false,
    },
  },
  element: {
    line: {
      tension: 0,
      borderwidth: 2,
      borderColor: "rgba (47, 97, 68, 1) ",
      fill: "start",
      backgroundColor: "rgba (47, 97, 68, 0.3) ",
    },
    point: {
      radius: 0,
      hintRadius: 0,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const ScoreChart: FC = (): ReactElement => {
  return (
    <div className="h-[400px] -mt-4 overflow-hidden ">
      <Line data={dataLine} options={optionsLine} />
    </div>
  );
};

export default ScoreChart;
