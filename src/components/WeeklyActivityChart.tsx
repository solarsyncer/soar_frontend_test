import React from "react";

interface WeeklyActivityData {
  day: string;
  deposit: number;
  withdraw: number;
}

const mockData: WeeklyActivityData[] = [
  { day: "Sat", deposit: 220, withdraw: 450 },
  { day: "Sun", deposit: 110, withdraw: 350 },
  { day: "Mon", deposit: 250, withdraw: 320 },
  { day: "Tue", deposit: 360, withdraw: 450 },
  { day: "Wed", deposit: 230, withdraw: 150 },
  { day: "Thu", deposit: 230, withdraw: 400 },
  { day: "Fri", deposit: 320, withdraw: 380 },
];

const yAxisLabels = [500, 400, 300, 200, 100, 0];

export function WeeklyActivityChart() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#2D60FF]" />
          <span className="text-sm text-[#232323]">Deposit</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#232323]" />
          <span className="text-sm text-[#232323]">Withdraw</span>
        </div>
      </div>

      <div className="relative pl-12">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between">
          {yAxisLabels.map((value) => (
            <div
              key={value}
              className="text-xs text-[#8BA3CB] -translate-y-1/2"
            >
              {value}
            </div>
          ))}
        </div>

        {/* Chart grid */}
        <div className="absolute inset-0 pl-12 flex flex-col justify-between">
          {yAxisLabels.map((_, i) => (
            <div key={i} className="border-b border-gray-100 w-full h-0" />
          ))}
        </div>

        {/* Bars */}
        <div className="h-64 flex items-end justify-between">
          {mockData.map((data, index) => (
            <div key={index} className="flex gap-1.5 h-full items-end">
              <div
                className="w-2.5 bg-[#2D60FF] rounded-full transition-all duration-300"
                style={{
                  height: `${(data.deposit / 500) * 100}%`,
                }}
              />
              <div
                className="w-2.5 bg-[#232323] rounded-full transition-all duration-300"
                style={{
                  height: `${(data.withdraw / 500) * 100}%`,
                }}
              />
            </div>
          ))}
        </div>

        {/* X-axis labels */}
        <div className="flex justify-between mt-4">
          {mockData.map((data, index) => (
            <span key={index} className="text-xs text-[#8BA3CB]">
              {data.day}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
