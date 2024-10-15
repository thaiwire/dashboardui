"use client";

import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import Image from "next/image";

const data = [
  { name: "Group A", value: 92, fill: "#FFC107" },
  { name: "Group B", value: 8, fill: "#FAE27C" },
];
const Performance = () => {
  return (
    <div className="bg-white p-4 rounded-md h-80">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-xl font-semibold rounded-md h-8">Performance</h1>
        <Image src="/moreDark.png" alt="" width={16} height={16} />
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute top-1/2 left-1/2">
        <h1>9.2</h1>
        <p>of 10 max LTS</p>
      </div>
      <div className="">1st Semeter - 2nd Semester</div>
    </div>
  );
};
export default Performance;
