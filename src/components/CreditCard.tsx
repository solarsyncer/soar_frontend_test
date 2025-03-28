import React from "react";

interface CreditCardProps {
  balance: string;
  cardHolder: string;
  cardNumber: string;
  validThru: string;
  variant?: "dark" | "light";
}

export function CreditCard({
  balance,
  cardHolder,
  cardNumber,
  validThru,
  variant = "dark",
}: CreditCardProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={`relative w-full p-6 rounded-2xl ${
        isDark ? "bg-[#232323]" : "bg-white"
      }`}
    >
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <p
              className={`text-xs mb-1 ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Balance
            </p>
            <p
              className={`text-2xl font-semibold ${
                isDark ? "text-white" : "text-[#232323]"
              }`}
            >
              ${balance}
            </p>
          </div>
          <div className="w-12 h-8">
            <div
              className={`w-10 h-8 rounded bg-white/10 ${
                isDark ? "bg-white/10" : "bg-gray-100"
              }`}
            />
          </div>
        </div>

        <div className="flex justify-between items-end">
          <div>
            <p
              className={`text-xs mb-1 ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            >
              CARD HOLDER
            </p>
            <p
              className={`font-medium ${
                isDark ? "text-white" : "text-[#232323]"
              }`}
            >
              {cardHolder}
            </p>
          </div>

          <div className="text-right">
            <p
              className={`text-xs mb-1 ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            >
              VALID THRU
            </p>
            <p
              className={`font-medium ${
                isDark ? "text-white" : "text-[#232323]"
              }`}
            >
              {validThru}
            </p>
          </div>
        </div>

        <div>
          <p
            className={`font-medium tracking-widest ${
              isDark ? "text-white" : "text-[#232323]"
            }`}
          >
            {cardNumber}
          </p>
          <div className="absolute bottom-6 right-6">
            <div className="flex gap-1">
              <div
                className={`w-6 h-4 rounded-full ${
                  isDark ? "bg-white/20" : "bg-gray-200"
                }`}
              />
              <div
                className={`w-6 h-4 rounded-full ${
                  isDark ? "bg-white/20" : "bg-gray-200"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
