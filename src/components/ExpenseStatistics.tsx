"use client";

import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import { ExpenseCategory, CustomLabelProps } from "@/types/charts";

interface ExpenseStatisticsProps {
  data: ExpenseCategory[];
}

const CustomLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  name,
  value,
}: CustomLabelProps) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      style={{ fontSize: "18px", fontWeight: 600 }}
    >
      <tspan x={x} dy="-0.5em">
        {value}%
      </tspan>
      <tspan x={x} dy="1.2em" style={{ fontSize: "13px" }}>
        {name}
      </tspan>
    </text>
  );
};

export function ExpenseStatistics({ data }: ExpenseStatisticsProps) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={CustomLabel}
          outerRadius={140}
          stroke="white"
          strokeWidth={10}
          dataKey="value"
          isAnimationActive={true}
          animationDuration={800}
        >
          {data.map((category, index) => (
            <Cell key={`cell-${index}`} fill={category.color} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
}
