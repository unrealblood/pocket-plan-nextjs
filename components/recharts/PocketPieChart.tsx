"use client";

import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";

export default function PocketPieChart({ data }: { data: any[] }) {
  const colors = ["#8884d8","#82ca9d","#ffc658","#ff8042","#8dd1e1","#a4de6c","#d0ed57"];

  return (
    <PieChart width={400} height={460}>
      <Pie
        dataKey="value"
        data={data}
        outerRadius={160}
        fill="#8884d8"
        label
      >
        {data.map((entry, index) => (
          <Cell key={index} fill={colors[index % colors.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
}