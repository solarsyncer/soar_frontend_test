import Image from "next/image";
import { CreditCard } from "@/components/CreditCard";
import { WeeklyActivityChart } from "@/components/WeeklyActivityChart";
import { ExpenseStatistics } from "@/components/ExpenseStatistics";
import type {
  ExpenseCategory,
  WeeklyActivity,
  Transaction,
} from "@/types/charts";
import { cn } from "@/lib/utils";

const transactions: Transaction[] = [
  { id: 1, type: "deposit", amount: 850, date: "28 January 2021" },
  { id: 2, type: "paypal", amount: 2500, date: "25 January 2021" },
  { id: 3, type: "send", amount: 5400, date: "21 January 2021" },
];

const weeklyActivityData: WeeklyActivity[] = [
  { day: "Sat", deposit: 220, withdraw: 450 },
  { day: "Sun", deposit: 110, withdraw: 350 },
  { day: "Mon", deposit: 250, withdraw: 320 },
  { day: "Tue", deposit: 360, withdraw: 450 },
  { day: "Wed", deposit: 230, withdraw: 150 },
  { day: "Thu", deposit: 230, withdraw: 400 },
  { day: "Fri", deposit: 320, withdraw: 380 },
];

const expenseData: ExpenseCategory[] = [
  {
    name: "Others",
    value: 35,
    color: "#232323", // Black
  },
  {
    name: "Investment",
    value: 20,
    color: "#1947E5", // Bright blue
  },
  {
    name: "Entertainment",
    value: 30,
    color: "#2D3648", // Dark navy
  },
  {
    name: "Bill Expense",
    value: 15,
    color: "#FF8F6B", // Orange
  },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <div className="max-w-[1440px] mx-auto p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          {/* My cards */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-[#343C6A]">My Cards</h2>
              <button className="text-[#343C6A] hover:text-gray-400 font-medium transition-colors">
                See All
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CreditCard
                balance="5,756"
                cardHolder="Eddy Cusuma"
                cardNumber="3778 **** **** 1234"
                validThru="12/22"
                variant="dark"
              />
              <CreditCard
                balance="5,756"
                cardHolder="Eddy Cusuma"
                cardNumber="3778 **** **** 1234"
                validThru="12/22"
                variant="light"
              />
            </div>
          </div>

          {/* Recent Transactions */}
          <div>
            <h2 className="text-xl font-semibold text-[#343C6A] mb-6">
              Recent Transaction
            </h2>
            <div className="bg-white p-6 h-[235px] rounded-2xl flex flex-col gap-4 justify-between">
              {transactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={cn(
                        "w-[55px] h-[55px] rounded-full flex items-center justify-center",
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
                      />
                    </div>
                    <div>
                      <p className="font-[500] text-base leading-none tracking-[0%] font-inter text-[#232323] mb-1">
                        {transaction.type === "deposit"
                          ? "Deposit from my Card"
                          : transaction.type === "paypal"
                          ? "Deposit Paypal"
                          : "Jerni Wilson"}
                      </p>
                      <p className="text-sm text-[#8BA3CB]">
                        {transaction.date}
                      </p>
                    </div>
                  </div>
                  <p
                    className={cn(
                      "font-medium",
                      transaction.type === "deposit"
                        ? "text-[#FF4B4A]"
                        : "text-[#41D4A8]"
                    )}
                  >
                    {transaction.type === "deposit" ? "-" : "+"}$
                    {Number(transaction.amount).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly Activity */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold text-[#343C6A] mb-6">
              Weekly Activity
            </h2>
            <div className="bg-white p-6 h-[322px] rounded-2xl">
              <WeeklyActivityChart data={weeklyActivityData} />
            </div>
          </div>

          {/* Expense Statistics */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-semibold text-[#343C6A] mb-6">
              Expense Statistics
            </h2>
            <div className="bg-white p-6 h-[322px] rounded-2xl">
              <ExpenseStatistics data={expenseData} />
            </div>
          </div>
        </div>

        {/* Third Row: Quick Transfer (1/3) and Balance History (2/3) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6">
            <h2 className="text-xl font-semibold text-[#232323] mb-6">
              Quick Transfer
            </h2>
            <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
              {[
                { name: "Livia Bator", role: "CEO" },
                { name: "Randy Press", role: "Director" },
                { name: "Workman", role: "Designer" },
              ].map((person, i) => (
                <div key={i} className="text-center flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mb-2" />
                  <p className="text-sm font-medium text-[#232323]">
                    {person.name}
                  </p>
                  <p className="text-xs text-[#8BA3CB]">{person.role}</p>
                </div>
              ))}
              <button className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                <span className="icon-[mingcute--arrow-right-line] w-5 h-5 text-gray-400" />
              </button>
            </div>
            <div className="flex gap-3">
              <div className="flex-1 px-4 py-3 bg-gray-50 rounded-lg">
                <p className="text-xs text-[#8BA3CB] mb-1">Write Amount</p>
                <p className="text-[#232323]">525.50</p>
              </div>
              <button className="px-5 py-3 bg-[#232323] text-white rounded-lg font-medium flex items-center gap-2">
                Send
                <span className="icon-[mingcute--send-plane-fill] w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="lg:col-span-2 bg-white rounded-xl p-6">
            <h2 className="text-xl font-semibold text-[#232323] mb-6">
              Balance History
            </h2>
            <div className="h-[200px] relative">
              {/* This is a placeholder for the area chart */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent rounded-lg" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-blue-100" />
              <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-[#8BA3CB] py-2">
                <span>Jul</span>
                <span>Aug</span>
                <span>Sep</span>
                <span>Oct</span>
                <span>Nov</span>
                <span>Dec</span>
                <span>Jan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
