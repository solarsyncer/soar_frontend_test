export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-[#232323]">
              Total Balance
            </h3>
            <span className="icon-[mingcute--chart-line-fill] w-6 h-6 text-[#2D60FF]" />
          </div>
          <p className="text-2xl font-semibold text-[#232323]">$24,680.00</p>
          <p className="text-sm text-[#8BA3CB] mt-1">+2.3% from last month</p>
        </div>

        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-[#232323]">
              Total Spending
            </h3>
            <span className="icon-[mingcute--chart-bar-fill] w-6 h-6 text-[#2D60FF]" />
          </div>
          <p className="text-2xl font-semibold text-[#232323]">$14,320.00</p>
          <p className="text-sm text-[#8BA3CB] mt-1">+8.1% from last month</p>
        </div>

        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-[#232323]">Total Saved</h3>
            <span className="icon-[mingcute--wallet-4-fill] w-6 h-6 text-[#2D60FF]" />
          </div>
          <p className="text-2xl font-semibold text-[#232323]">$10,360.00</p>
          <p className="text-sm text-[#8BA3CB] mt-1">+0.8% from last month</p>
        </div>

        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-[#232323]">
              Total Investment
            </h3>
            <span className="icon-[mingcute--currency-dollar-fill] w-6 h-6 text-[#2D60FF]" />
          </div>
          <p className="text-2xl font-semibold text-[#232323]">$5,920.00</p>
          <p className="text-sm text-[#8BA3CB] mt-1">+4.5% from last month</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-[#232323]">
            Recent Activity
          </h2>
          <button className="text-[#2D60FF] font-medium">View All</button>
        </div>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between p-4 rounded-lg bg-[#F5F7FA]"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <span className="icon-[mingcute--arrow-down-fill] w-6 h-6 text-[#2D60FF]" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#232323]">
                    Online Payment
                  </h3>
                  <p className="text-sm text-[#8BA3CB]">
                    May 14, 2024 at 8:45 PM
                  </p>
                </div>
              </div>
              <p className="text-lg font-medium text-[#232323]">-$28.00</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card">
        <h2 className="text-2xl font-semibold text-[#232323] mb-6">
          Quick Actions
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Send Money", "Receive Money", "Pay Bills", "Top Up"].map(
            (action) => (
              <button
                key={action}
                className="p-4 rounded-lg bg-[#F5F7FA] text-[#232323] font-medium hover:bg-[#2D60FF] hover:text-white transition-colors"
              >
                {action}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}
