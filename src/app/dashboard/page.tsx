import Image from "next/image";
import { CreditCard } from "@/components/CreditCard";
import { WeeklyActivityChart } from "@/components/WeeklyActivityChart";
import { ExpenseStatistics } from "@/components/ExpenseStatistics";
import { BalanceHistory } from "@/components/BalanceHistory";
import type {
  ExpenseCategory,
  WeeklyActivity,
  Transaction,
  BalanceHistoryData,
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

const people = [
  { name: "Livia Bator", role: "CEO", avatar: "/images/avatar-2.png" },
  { name: "Randy Press", role: "Director", avatar: "/images/avatar-1.png" },
  { name: "Workman", role: "Designer", avatar: "/images/avatar-3.png" },
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

export default function DashboardPage() {
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
          <div className="col-span-1 md:col-span-12 lg:col-span-4">
            <h2 className="text-xl font-semibold text-[#343C6A] mb-6">
              Recent Transaction
            </h2>
            <div className="bg-white p-4 md:p-6 h-[235px] rounded-2xl flex flex-col gap-4 justify-between">
              {transactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between"
                >
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
                      <p className="text-xs md:text-sm text-[#8BA3CB]">
                        {transaction.date}
                      </p>
                    </div>
                  </div>
                  <p
                    className={cn(
                      "font-medium text-sm md:text-base",
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
          <div className="col-span-1 md:col-span-8">
            <h2 className="text-xl font-semibold text-[#343C6A] mb-6">
              Weekly Activity
            </h2>
            <div className="bg-white p-4 md:p-6 h-[322px] rounded-2xl">
              <WeeklyActivityChart data={weeklyActivityData} />
            </div>
          </div>

          {/* Expense Statistics */}
          <div className="col-span-1 md:col-span-4">
            <h2 className="text-xl font-semibold text-[#343C6A] mb-6">
              Expense Statistics
            </h2>
            <div className="bg-white p-4 md:p-6 h-[322px] rounded-2xl">
              <ExpenseStatistics data={expenseData} />
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
              <BalanceHistory data={balanceHistoryData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
