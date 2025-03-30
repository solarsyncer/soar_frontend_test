"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { User, Card, Transaction } from "@/types/data";
import {
  WeeklyActivity,
  ExpenseCategory,
  BalanceHistoryData,
} from "@/types/charts";
import { api } from "@/lib/mockApi";

interface AppContextType {
  user: User | null;
  cards: Card[];
  transactions: Transaction[];
  chartData: WeeklyActivity[];
  expenseCategories: ExpenseCategory[];
  balanceHistory: BalanceHistoryData[];
  loading: {
    user: boolean;
    cards: boolean;
    transactions: boolean;
    chartData: boolean;
    expenseCategories: boolean;
    balanceHistory: boolean;
  };
  error: {
    user?: string;
    cards?: string;
    transactions?: string;
    chartData?: string;
    balanceHistory?: string;
  };
  refreshData: () => Promise<void>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [cards, setCards] = useState<Card[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [chartData, setChartData] = useState<WeeklyActivity[]>([]);
  const [expenseCategories, setExpenseCategories] = useState<ExpenseCategory[]>(
    []
  );
  const [balanceHistory, setBalanceHistory] = useState<BalanceHistoryData[]>(
    []
  );

  const [loading, setLoading] = useState({
    user: true,
    cards: true,
    transactions: true,
    chartData: true,
    expenseCategories: true,
    balanceHistory: true,
  });

  const [error, setError] = useState<{
    user?: string;
    cards?: string;
    transactions?: string;
    chartData?: string;
    balanceHistory?: string;
  }>({});

  const fetchData = async () => {
    try {
      setLoading((prev) => ({ ...prev, user: true }));
      const userData = await api.getCurrentUser();
      setUser(userData);
    } catch (err: unknown) {
      const error =
        err instanceof Error ? err.message : "Failed to fetch user data";
      setError((prev) => ({ ...prev, user: error }));
    } finally {
      setLoading((prev) => ({ ...prev, user: false }));
    }

    try {
      setLoading((prev) => ({ ...prev, cards: true }));
      const cardsData = await api.getCards();
      setCards(cardsData);
    } catch (err: unknown) {
      const error =
        err instanceof Error ? err.message : "Failed to fetch cards";
      setError((prev) => ({ ...prev, cards: error }));
    } finally {
      setLoading((prev) => ({ ...prev, cards: false }));
    }

    try {
      setLoading((prev) => ({ ...prev, transactions: true }));
      const transactionsData = await api.getTransactions();
      setTransactions(transactionsData);
    } catch (err: unknown) {
      const error =
        err instanceof Error ? err.message : "Failed to fetch transactions";
      setError((prev) => ({ ...prev, transactions: error }));
    } finally {
      setLoading((prev) => ({ ...prev, transactions: false }));
    }

    try {
      setLoading((prev) => ({ ...prev, chartData: true }));
      const chartDataResponse = await api.getChartData();
      setChartData(chartDataResponse);
    } catch (err: unknown) {
      const error =
        err instanceof Error ? err.message : "Failed to fetch chart data";
      setError((prev) => ({ ...prev, chartData: error }));
    } finally {
      setLoading((prev) => ({ ...prev, chartData: false }));
    }

    try {
      setLoading((prev) => ({ ...prev, expenseCategories: true }));
      const expenseCategoriesData = await api.getExpenseCategories();
      setExpenseCategories(expenseCategoriesData);
    } catch (err: unknown) {
      const error =
        err instanceof Error
          ? err.message
          : "Failed to fetch expense categories";
      setError((prev) => ({ ...prev, expenseCategories: error }));
    } finally {
      setLoading((prev) => ({ ...prev, expenseCategories: false }));
    }

    try {
      setLoading((prev) => ({ ...prev, balanceHistory: true }));
      const balanceHistoryData = await api.getBalanceHistory();
      setBalanceHistory(balanceHistoryData);
    } catch (err: unknown) {
      const error =
        err instanceof Error ? err.message : "Failed to fetch balance history";
      setError((prev) => ({ ...prev, balanceHistory: error }));
    } finally {
      setLoading((prev) => ({ ...prev, balanceHistory: false }));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refreshData = async () => {
    await fetchData();
  };

  const value = {
    user,
    cards,
    transactions,
    chartData,
    expenseCategories,
    balanceHistory,
    loading,
    error,
    refreshData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
