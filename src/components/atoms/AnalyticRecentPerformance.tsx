"use client";
import { FC, ReactElement } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const AnalyticRecentPerformance: FC = (): ReactElement => {
  function createGradient(ctx: CanvasRenderingContext2D) {
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "#16D3FD");
    gradient.addColorStop(0.5, "#E5F52F");
    gradient.addColorStop(1, "#FDB415");
    return gradient;
  }
  const data = {
    labels: ["Your Score"],
    datasets: [
      {
        data: [80, 20],
        backgroundColor: (context: any) => {
          const index = context.dataIndex;
          const value = context.dataset.data[index];
          const color = value === 80 ? createGradient(context.chart.ctx) : "#E5E5E5";
          return color;
        },
        borderWidth: 0,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    // cutout: 75,
    rotation: 75,
  };

  return (
    <section className="col-span-3 lg:col-span-1 bg-neutral-50 px-8 py-3">
      <header className="border-b-[0.5px] border-neutral-200 py-2 mb-6">
        <h1 className="text-sm font-bold">Performa Batch Ini</h1>
      </header>
      <div className=" flex items-center justify-center pb-4">
        <Doughnut data={data} options={options} />
        <h1 className="absolute text-2xl font-bold">{80}%</h1>
      </div>
    </section>
  );
};

export default AnalyticRecentPerformance;
