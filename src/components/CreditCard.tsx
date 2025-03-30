import Image from "next/image";
import { cn } from "@/lib/utils";

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
      className={cn(
        "min-w-[300px] w-full h-[235px] rounded-2xl",
        isDark
          ? "bg-[linear-gradient(107.38deg,_#5B5A6F_2.61%,_#000000_101.2%)]"
          : "bg-white border border-[#DFEAF2]"
      )}
    >
      <div className="h-[165px] flex flex-col px-6 justify-center gap-6">
        <div className="flex justify-between items-center">
          <div>
            <p
              className={cn(
                "text-xs",
                isDark ? "text-white" : "text-[#718EBF]"
              )}
            >
              Balance
            </p>
            <p
              className={cn(
                "text-2xl font-semibold",
                isDark ? "text-white" : "text-[#232323]"
              )}
            >
              ${balance}
            </p>
          </div>
          <Image
            src={
              isDark ? "/images/Chip_Card_dark.png" : "/images/Chip_Card.png"
            }
            alt="chip"
            width={34.77}
            height={34.77}
          />
        </div>

        <div className="flex items-center gap-24">
          <div>
            <p
              className={cn(
                "text-xs",
                isDark ? "text-gray-400" : "text-[#8BA3CB]"
              )}
            >
              CARD HOLDER
            </p>
            <p
              className={cn(
                "font-medium",
                isDark ? "text-white" : "text-[#232323]"
              )}
            >
              {cardHolder}
            </p>
          </div>

          <div>
            <p
              className={cn(
                "text-xs",
                isDark ? "text-gray-400" : "text-[#8BA3CB]"
              )}
            >
              VALID THRU
            </p>
            <p
              className={cn(
                "font-medium",
                isDark ? "text-white" : "text-[#232323]"
              )}
            >
              {validThru}
            </p>
          </div>
        </div>
      </div>

      {!isDark && <hr className="w-full bg-[#DFEAF2]" />}

      <div
        className={cn(
          "h-[70px] flex items-center justify-between px-6",
          isDark
            ? "bg-[linear-gradient(180deg,_rgba(255,255,255,0.15)_0%,_rgba(255,255,255,0)_100%)] rounded-bl-2xl rounded-br-2xl"
            : ""
        )}
      >
        <p
          className={cn(
            "font-medium tracking-widest text-[22px]",
            isDark ? "text-white" : "text-[#343C6A]"
          )}
        >
          {cardNumber}
        </p>
        <Image
          src="/icons/card/placeholder.svg"
          alt="card"
          width={44}
          height={30}
        />
      </div>
    </div>
  );
}
