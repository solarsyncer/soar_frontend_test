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
  {
    day: "Sat",
    deposit: Math.floor(Math.random() * 401) + 100,
    withdraw: Math.floor(Math.random() * 401) + 100,
  },
  {
    day: "Sun",
    deposit: Math.floor(Math.random() * 401) + 100,
    withdraw: Math.floor(Math.random() * 401) + 100,
  },
  {
    day: "Mon",
    deposit: Math.floor(Math.random() * 401) + 100,
    withdraw: Math.floor(Math.random() * 401) + 100,
  },
  {
    day: "Tue",
    deposit: Math.floor(Math.random() * 401) + 100,
    withdraw: Math.floor(Math.random() * 401) + 100,
  },
  {
    day: "Wed",
    deposit: Math.floor(Math.random() * 401) + 100,
    withdraw: Math.floor(Math.random() * 401) + 100,
  },
  {
    day: "Thu",
    deposit: Math.floor(Math.random() * 401) + 100,
    withdraw: Math.floor(Math.random() * 401) + 100,
  },
  {
    day: "Fri",
    deposit: Math.floor(Math.random() * 401) + 100,
    withdraw: Math.floor(Math.random() * 401) + 100,
  },
];

const expenseData: ExpenseCategory[] = [
  {
    name: "Others",
    value: 25 + Math.floor(Math.random() * 10),
    color: "#232323",
  },
  {
    name: "Investment",
    value: 25 + Math.floor(Math.random() * 10),
    color: "#1947E5",
  },
  {
    name: "Entertainment",
    value: 25 + Math.floor(Math.random() * 10),
    color: "#2D3648",
  },
  {
    name: "Bill Expense",
    value: 25 + Math.floor(Math.random() * 10),
    color: "#FF8F6B",
  },
];

const balanceHistoryData: BalanceHistoryData[] = [
  { month: "Jul", balance: Math.floor(Math.random() * 901) + 100 },
  { month: "Aug", balance: Math.floor(Math.random() * 901) + 100 },
  { month: "Sep", balance: Math.floor(Math.random() * 901) + 100 },
  { month: "Oct", balance: Math.floor(Math.random() * 901) + 100 },
  { month: "Nov", balance: Math.floor(Math.random() * 901) + 100 },
  { month: "Dec", balance: Math.floor(Math.random() * 901) + 100 },
  { month: "Jan", balance: Math.floor(Math.random() * 901) + 100 },
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
