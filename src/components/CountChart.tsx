"use client";
import Image from "next/image";
import { FaMale, FaFemale } from "react-icons/fa"; // or BiMale, BiFemale if you prefer

import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Total",
    count: 110,
    fill: "white",
  },
  {
    name: "Girls",
    count: 60,
    fill: "#F3B910",
  },
  {
    name: "Boys",
    count: 50,
    fill: "#174A93",
  },
];

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image src="/moreDark.png" alt="icon" width={20} height={20} />
      </div>
      {/* CHART */}
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        {/* IMAGE OF THE MALE & FEMALE INSIDE THE CIRCLE CHART  */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center text-5xl">
          <FaMale className="text-Blue -mr-2 " /> {/* change color in the tailwin.config.ts file */}
          <FaFemale className="text-Yellow -ml-4" />
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-Blue rounded-full" />
          <h1 className="font-bold">1,200</h1>
          <h2 className="text-xs text-gray-300">Boys (45%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-Yellow rounded-full" />
          <h1 className="font-bold">1,400</h1>
          <h2 className="text-xs text-gray-300">Girls (55%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;