"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

interface WeeklyActivityData {
  day: string;
  deposit: number;
  withdraw: number;
}

interface WeeklyActivityChartProps {
  data: WeeklyActivityData[];
}

const CustomLegend = () => {
  return (
    <div className="flex items-center gap-6">
      <div className="flex items-center gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-[#2D60FF]" />
        <span className="text-sm text-[#718EBF]">Deposit</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-[#232323]" />
        <span className="text-sm text-[#718EBF]">Withdraw</span>
      </div>
    </div>
  );
};

export function WeeklyActivityChart({ data }: WeeklyActivityChartProps) {
  return (
    <div className="w-full h-full">
      <div className="flex justify-end">
        <CustomLegend />
      </div>
      <div className="w-full h-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
            barGap={1}
          >
            <CartesianGrid
              horizontal={true}
              vertical={false}
              stroke="#F5F7FA"
            />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#718EBF", fontSize: 13 }}
              dy={5}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#718EBF", fontSize: 13 }}
              ticks={[0, 100, 200, 300, 400, 500]}
            />
            <Tooltip
              cursor={{ fill: "transparent" }}
              contentStyle={{
                backgroundColor: "#fff",
                border: "none",
                borderRadius: "8px",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              }}
              itemStyle={{ color: "#232323" }}
              labelStyle={{ color: "#8BA3CB" }}
            />
            <Bar
              dataKey="deposit"
              fill="#232323"
              radius={[8, 8, 8, 8]}
              maxBarSize={16}
            />
            <Bar
              dataKey="withdraw"
              fill="#2D60FF"
              radius={[8, 8, 8, 8]}
              maxBarSize={16}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
