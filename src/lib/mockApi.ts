import { User, Card, Transaction } from "@/types/data";
import {
  WeeklyActivity,
  ExpenseCategory,
  BalanceHistoryData,
} from "@/types/charts";

// Simulated delay to mimic API calls
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Mock data
const mockUser: User = {
  id: "1",
  name: "Charlene Reed",
  email: "charlenereed@gmail.com",
  avatar: "/images/avatar.png",
  role: "user",
  username: "charlenereed",
  dateOfBirth: "1990-01-25",
  presentAddress: "San Jose, California, USA",
  permanentAddress: "San Jose, California, USA",
  city: "San Jose",
  postalCode: "45962",
  country: "USA",
  password: "password",
};

const mockCards: Card[] = [
  {
    id: "1",
    cardNumber: "1234 1234 1234 1234",
    cardType: "visa",
    expiryDate: "12/25",
    balance: 5000.0,
    currency: "USD",
    cardHolder: "Eddy Cusuma",
    validThru: "12/22",
  },
  {
    id: "2",
    cardNumber: "5618 5618 5618 5618",
    cardType: "mastercard",
    expiryDate: "03/26",
    balance: 2500.0,
    currency: "USD",
    cardHolder: "Eddy Cusuma",
    validThru: "12/22",
  },
];

const mockTransactions: Transaction[] = [
  {
    id: 1,
    date: "29 January 2021",
    description: "Amazon Purchase",
    amount: 99.99,
    type: "deposit",
    category: "Shopping",
    status: "completed",
  },
  {
    id: 2,
    date: "29 January 2021",
    description: "Salary Deposit",
    amount: 5000.0,
    type: "paypal",
    category: "Income",
    status: "completed",
  },
  {
    id: 3,
    date: "28 January 2021",
    description: "Netflix Subscription",
    amount: 15.99,
    type: "send",
    category: "Entertainment",
    status: "pending",
  },
];

const mockChartData: WeeklyActivity[] = [
  { day: "Sat", deposit: 220, withdraw: 450 },
  { day: "Sun", deposit: 110, withdraw: 350 },
  { day: "Mon", deposit: 250, withdraw: 320 },
  { day: "Tue", deposit: 360, withdraw: 450 },
  { day: "Wed", deposit: 230, withdraw: 150 },
  { day: "Thu", deposit: 230, withdraw: 400 },
  { day: "Fri", deposit: 320, withdraw: 380 },
];

const expenseData: ExpenseCategory[] = [
  { name: "Others", value: 35, color: "#232323" },
  { name: "Investment", value: 20, color: "#1947E5" },
  { name: "Entertainment", value: 30, color: "#2D3648" },
  { name: "Bill Expense", value: 15, color: "#FF8F6B" },
];

const balanceHistoryData: BalanceHistoryData[] = [
  { month: "Jul", balance: 150 },
  { month: "Aug", balance: 300 },
  { month: "Sep", balance: 450 },
  { month: "Oct", balance: 750 },
  { month: "Nov", balance: 250 },
  { month: "Dec", balance: 550 },
  { month: "Jan", balance: 600 },
];

// Mock API endpoints
export const api = {
  async getCurrentUser(): Promise<User> {
    await delay(500);
    return mockUser;
  },

  async getCards(): Promise<Card[]> {
    await delay(500);
    return mockCards;
  },

  async getTransactions(limit: number = 10): Promise<Transaction[]> {
    await delay(800);
    return mockTransactions.slice(0, limit);
  },

  async getChartData(): Promise<WeeklyActivity[]> {
    await delay(1000);
    return mockChartData;
  },

  async getExpenseCategories(): Promise<ExpenseCategory[]> {
    await delay(1000);
    return expenseData;
  },

  async getBalanceHistory(): Promise<BalanceHistoryData[]> {
    await delay(1000);
    return balanceHistoryData;
  },
};
