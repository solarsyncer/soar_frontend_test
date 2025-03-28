import React from "react";

interface ExpenseCategory {
  name: string;
  percentage: number;
  color: string;
}

const categories: ExpenseCategory[] = [
  { name: "Entertainment", percentage: 30, color: "#2D60FF" },
  { name: "Investment", percentage: 20, color: "#1947E5" },
  { name: "Bill Expense", percentage: 15, color: "#FF8F6B" },
  { name: "Others", percentage: 35, color: "#232323" },
];

export function ExpenseStatistics() {
  let cumulativePercentage = 0;

  return (
    <div className="flex items-center justify-between">
      <div className="relative w-48 h-48">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          {categories.map((category, index) => {
            const startAngle = cumulativePercentage;
            cumulativePercentage += category.percentage;
            const endAngle = cumulativePercentage;

            const x1 = 50 + 40 * Math.cos((startAngle / 100) * 2 * Math.PI);
            const y1 = 50 + 40 * Math.sin((startAngle / 100) * 2 * Math.PI);
            const x2 = 50 + 40 * Math.cos((endAngle / 100) * 2 * Math.PI);
            const y2 = 50 + 40 * Math.sin((endAngle / 100) * 2 * Math.PI);

            const largeArcFlag = category.percentage > 50 ? 1 : 0;

            return (
              <path
                key={index}
                d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                fill={category.color}
                className="transition-all duration-300"
              />
            );
          })}
        </svg>
      </div>

      <div className="space-y-4">
        {categories.map((category, index) => (
          <div key={index} className="flex items-center gap-3">
            <div
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: category.color }}
            />
            <div>
              <p className="text-sm font-medium text-[#232323]">
                {category.name}
              </p>
              <p className="text-xs text-[#8BA3CB]">{category.percentage}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
