export interface ExpenseCategory {
  name: string;
  value: number;
  color: string;
}

export interface WeeklyActivity {
  day: string;
  deposit: number;
  withdraw: number;
}

export interface Transaction {
  id: number;
  type: "deposit" | "paypal" | "send";
  amount: number;
  date: string;
}

export interface CustomLabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  name: string;
  value: number;
}

export interface BalanceHistoryData {
  month: string;
  balance: number;
}
