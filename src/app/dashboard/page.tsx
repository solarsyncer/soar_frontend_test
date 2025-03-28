import { CreditCard } from "@/components/CreditCard";
import { WeeklyActivityChart } from "@/components/WeeklyActivityChart";
import { ExpenseStatistics } from "@/components/ExpenseStatistics";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <div className="max-w-[1440px] mx-auto p-8">
        <div className="space-y-6">
          {/* First Row: My Cards (2/3) and Recent Transactions (1/3) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-[#232323]">
                  My Cards
                </h2>
                <button className="text-[#2D60FF] font-medium">See All</button>
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
            <div className="bg-white rounded-xl p-6">
              <h2 className="text-xl font-semibold text-[#232323] mb-6">
                Recent Transaction
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                      <span className="icon-[mingcute--card-fill] w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <p className="font-medium text-[#232323]">
                        Deposit from my Card
                      </p>
                      <p className="text-sm text-[#8BA3CB]">28 January 2021</p>
                    </div>
                  </div>
                  <p className="text-red-500 font-medium">-$850</p>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="icon-[mingcute--paypal-fill] w-5 h-5 text-blue-500" />
                    </div>
                    <div>
                      <p className="font-medium text-[#232323]">
                        Deposit Paypal
                      </p>
                      <p className="text-sm text-[#8BA3CB]">25 January 2021</p>
                    </div>
                  </div>
                  <p className="text-green-500 font-medium">+$2,500</p>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                      <span className="icon-[mingcute--user-4-fill] w-5 h-5 text-teal-500" />
                    </div>
                    <div>
                      <p className="font-medium text-[#232323]">Jemi Wilson</p>
                      <p className="text-sm text-[#8BA3CB]">21 January 2021</p>
                    </div>
                  </div>
                  <p className="text-green-500 font-medium">+$5,400</p>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row: Weekly Activity (2/3) and Expense Statistics (1/3) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white rounded-xl p-6">
              <h2 className="text-xl font-semibold text-[#232323] mb-6">
                Weekly Activity
              </h2>
              <WeeklyActivityChart />
            </div>
            <div className="bg-white rounded-xl p-6">
              <h2 className="text-xl font-semibold text-[#232323] mb-6">
                Expense Statistics
              </h2>
              <ExpenseStatistics />
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
    </div>
  );
}
