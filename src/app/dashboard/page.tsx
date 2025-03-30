"use client";

import { Suspense, lazy } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Transaction } from "@/types/charts";
import { useApp } from "@/context/AppContext";
// Lazy load components
const CreditCard = lazy(() =>
  import("@/components/CreditCard").then((mod) => ({ default: mod.CreditCard }))
);
const WeeklyActivityChart = lazy(() =>
  import("@/components/WeeklyActivityChart").then((mod) => ({
    default: mod.WeeklyActivityChart,
  }))
);
const ExpenseStatistics = lazy(() =>
  import("@/components/ExpenseStatistics").then((mod) => ({
    default: mod.ExpenseStatistics,
  }))
);
const BalanceHistory = lazy(() =>
  import("@/components/BalanceHistory").then((mod) => ({
    default: mod.BalanceHistory,
  }))
);

// Loading skeletons
const CardSkeleton = () => (
  <div className="animate-pulse bg-gray-200 rounded-2xl h-[235px] w-full"></div>
);

const ChartSkeleton = () => (
  <div className="animate-pulse bg-gray-200 rounded-2xl h-[322px] w-full"></div>
);

const TransactionSkeleton = () => (
  <div className="animate-pulse bg-white p-4 md:p-6 h-[235px] rounded-2xl flex flex-col gap-4">
    {[...Array(3)].map((_, i) => (
      <div key={i} className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-[55px] h-[55px] bg-gray-200 rounded-full"></div>
          <div>
            <div className="h-4 w-32 bg-gray-200 rounded mb-2"></div>
            <div className="h-3 w-24 bg-gray-200 rounded"></div>
          </div>
        </div>
        <div className="h-4 w-20 bg-gray-200 rounded"></div>
      </div>
    ))}
  </div>
);

const people = [
  { name: "Livia Bator", role: "CEO", avatar: "/images/avatar-2.png" },
  { name: "Randy Press", role: "Director", avatar: "/images/avatar-1.png" },
  { name: "Workman", role: "Designer", avatar: "/images/avatar-3.png" },
];

// Transaction component
const TransactionItem = ({ transaction }: { transaction: Transaction }) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2 md:gap-4">
      <div
        className={cn(
          "w-[45px] h-[45px] md:w-[55px] md:h-[55px] rounded-full flex items-center justify-center",
          transaction.type === "deposit" && "bg-[#FFF5D9]",
          transaction.type === "paypal" && "bg-[#E7EDFF]",
          transaction.type === "send" && "bg-[#DCFAF8]"
        )}
      >
        <Image
          src={`/icons/transaction/${transaction.type}.svg`}
          alt={transaction.type}
          width={28}
          height={28}
          className="w-5 h-5 md:w-7 md:h-7"
          loading="lazy"
        />
      </div>
      <div>
        <p className="font-[500] text-sm md:text-base leading-none tracking-[0%] font-inter text-[#232323] mb-1">
          {transaction.type === "deposit"
            ? "Deposit from my Card"
            : transaction.type === "paypal"
            ? "Deposit Paypal"
            : "Jerni Wilson"}
        </p>
        <p className="text-xs md:text-sm text-[#8BA3CB]">{transaction.date}</p>
      </div>
    </div>
    <p
      className={cn(
        "font-medium text-sm md:text-base",
        transaction.type === "deposit" ? "text-[#FF4B4A]" : "text-[#41D4A8]"
      )}
    >
      {transaction.type === "deposit" ? "-" : "+"}$
      {Number(transaction.amount).toLocaleString()}
    </p>
  </div>
);

export default function DashboardPage() {
  const {
    cards,
    transactions,
    chartData,
    expenseCategories,
    balanceHistory,
    loading,
    error,
  } = useApp();

  // Check if any error exists
  const hasError = Object.values(error).some(Boolean);
  const errorMessage = Object.values(error).find(Boolean);

  if (hasError && errorMessage) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-2">
            Oops! Something went wrong
          </div>
          <div className="text-gray-600">{errorMessage}</div>
        </div>
      </div>
    );
  }

  // Check if any data is still loading
  const isLoading = Object.values(loading).some(Boolean);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#343C6A]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* My cards */}
          <div className="col-span-1 md:col-span-12 lg:col-span-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-[#343C6A]">My Cards</h2>
              <button className="text-[#343C6A] hover:text-gray-400 font-medium transition-colors">
                See All
              </button>
            </div>
            <div className="flex md:gap-6 gap-4 overflow-x-auto overflow-y-hidden">
              {cards.map((card, i) => (
                <Suspense fallback={<CardSkeleton />} key={card.id}>
                  <CreditCard
                    balance={card.balance.toString()}
                    cardHolder={card.cardHolder}
                    cardNumber={card.cardNumber}
                    validThru={card.validThru}
                    variant={i === 0 ? "dark" : "light"}
                  />
                </Suspense>
              ))}
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="col-span-1 md:col-span-12 lg:col-span-4">
            <h2 className="text-xl font-semibold text-[#343C6A] mb-6">
              Recent Transaction
            </h2>
            <Suspense fallback={<TransactionSkeleton />}>
              <div className="bg-white p-4 md:p-6 h-[235px] rounded-2xl flex flex-col gap-4 justify-between">
                {transactions.map((transaction) => (
                  <TransactionItem
                    key={transaction.id}
                    transaction={transaction}
                  />
                ))}
              </div>
            </Suspense>
          </div>

          {/* Weekly Activity */}
          <div className="col-span-1 md:col-span-8">
            <h2 className="text-xl font-semibold text-[#343C6A] mb-6">
              Weekly Activity
            </h2>
            <div className="bg-white p-4 md:p-6 h-[322px] rounded-2xl">
              <Suspense fallback={<ChartSkeleton />}>
                <WeeklyActivityChart data={chartData ?? []} />
              </Suspense>
            </div>
          </div>

          {/* Expense Statistics */}
          <div className="col-span-1 md:col-span-4">
            <h2 className="text-xl font-semibold text-[#343C6A] mb-6">
              Expense Statistics
            </h2>
            <div className="bg-white p-4 md:p-6 h-[322px] rounded-2xl">
              <Suspense fallback={<ChartSkeleton />}>
                <ExpenseStatistics data={expenseCategories} />
              </Suspense>
            </div>
          </div>

          {/* Quick Transfer */}
          <div className="col-span-1 md:col-span-12 lg:col-span-5">
            <h2 className="text-xl font-semibold text-[#343C6A] mb-6">
              Quick Transfer
            </h2>
            <div className="bg-white p-4 md:p-6 h-[220px] md:h-[275px] rounded-2xl flex flex-col gap-3 md:gap-4 justify-around w-full">
              <div className="flex gap-2 md:gap-4 items-center justify-evenly">
                {people.map((person, i) => (
                  <div key={i} className="flex flex-col items-center gap-1">
                    <Image
                      src={person.avatar}
                      alt={person.name}
                      width={70}
                      height={70}
                      className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded-full mb-1 md:mb-2"
                      loading="lazy"
                    />
                    <p className="text-sm md:text-md font-medium text-[#232323]">
                      {person.name}
                    </p>
                    <p className="text-xs md:text-sm text-[#8BA3CB]">
                      {person.role}
                    </p>
                  </div>
                ))}
                <button className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full bg-white flex items-center justify-center mt-0.5 flex-shrink-0 shadow-[4px_4px_18px_-2px_#E7E4E8CC] hover:bg-gray-50 active:bg-gray-100 transition-colors duration-200 hover:shadow-[4px_4px_18px_-2px_#E7E4E8FF]">
                  <Image
                    src="/icons/next.svg"
                    alt="next"
                    width={6.5}
                    height={13}
                    loading="lazy"
                  />
                </button>
              </div>

              <div className="flex items-center justify-between gap-4 md:gap-6 w-full">
                <p className="text-xs md:text-md text-[#718EBF]">
                  Write Amount
                </p>
                <div className="flex-1 bg-gray-50 h-[35px] md:h-[50px] rounded-full flex items-center justify-between">
                  <p className="text-[#718EBF] ml-4 md:ml-6 text-xs md:text-base">
                    525.50
                  </p>
                  <button className="h-full w-[80px] md:w-[125px] bg-[#232323] text-white rounded-full font-medium flex items-center gap-2 md:gap-3 justify-center hover:bg-[#3a3a3a] active:bg-[#1a1a1a] transition-colors duration-200">
                    <span className="text-xs md:text-base">Send</span>
                    <Image
                      src="/icons/send.svg"
                      alt="send"
                      width={26}
                      height={22.6}
                      className="w-[16px] h-[14px] md:w-[26px] md:h-[22.6px]"
                      loading="lazy"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Balance History */}
          <div className="col-span-1 md:col-span-12 lg:col-span-7">
            <h2 className="text-xl font-semibold text-[#343C6A] mb-6">
              Balance History
            </h2>
            <div className="bg-white p-6 h-[275px] rounded-2xl flex w-full justify-center items-center">
              <Suspense fallback={<ChartSkeleton />}>
                <BalanceHistory data={balanceHistory} />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
