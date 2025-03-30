"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import type { BalanceHistoryData } from "@/types/charts";

interface BalanceHistoryProps {
  data: BalanceHistoryData[];
}

interface CustomTickProps {
  x: number;
  y: number;
  payload: {
    value: string | number;
  };
}

const CustomXAxisTick = ({ x, y, payload }: CustomTickProps) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="middle"
        fill="#8BA3CB"
        fontSize={12}
      >
        {payload.value}
      </text>
      <line x1={0} y1={0} x2={0} y2={5} stroke="#8BA3CB" strokeWidth={1} />
    </g>
  );
};

const CustomYAxisTick = ({ x, y, payload }: CustomTickProps) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dx={-10} textAnchor="end" fill="#8BA3CB" fontSize={12}>
        {payload.value}
      </text>
      <line x1={0} y1={0} x2={-5} y2={0} stroke="#8BA3CB" strokeWidth={1} />
    </g>
  );
};

export function BalanceHistory({ data }: BalanceHistoryProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{ top: 0, right: 0, left: -10, bottom: 0 }}
      >
        <defs>
          <linearGradient id="balanceGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1814F3" stopOpacity={0.2} />
            <stop offset="100%" stopColor="#1814F3" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#EFF3F9" />
        <XAxis
          dataKey="month"
          axisLine={false}
          tickLine={false}
          tick={CustomXAxisTick}
        />
        <YAxis axisLine={false} tickLine={false} tick={CustomYAxisTick} />
        <Area
          type="monotone"
          dataKey="balance"
          stroke="#1814F3"
          strokeWidth={2}
          fill="url(#balanceGradient)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
