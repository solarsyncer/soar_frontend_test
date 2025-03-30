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
        "min-w-[250px] md:min-w-[300px] w-full h-[170px] md:h-[235px] rounded-2xl",
        isDark
          ? "bg-[linear-gradient(107.38deg,_#5B5A6F_2.61%,_#000000_101.2%)]"
          : "bg-white border border-[#DFEAF2]"
      )}
    >
      <div className="h-[120px] md:h-[165px] flex flex-col px-6 justify-center gap-4 md:gap-6">
        <div className="flex justify-between items-center">
          <div>
            <p
              className={cn(
                "text-[10px] md:text-xs",
                isDark ? "text-white" : "text-[#718EBF]"
              )}
            >
              Balance
            </p>
            <p
              className={cn(
                "text-xl md:text-2xl font-semibold",
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
            className="w-[28px] h-[28px] md:w-[34.77px] md:h-[34.77px]"
          />
        </div>

        <div className="flex items-center gap-16 md:gap-24">
          <div>
            <p
              className={cn(
                "text-[10px] md:text-xs",
                isDark ? "text-gray-400" : "text-[#8BA3CB]"
              )}
            >
              CARD HOLDER
            </p>
            <p
              className={cn(
                "text-xs md:text-base font-medium",
                isDark ? "text-white" : "text-[#232323]"
              )}
            >
              {cardHolder}
            </p>
          </div>

          <div>
            <p
              className={cn(
                "text-[10px] md:text-xs",
                isDark ? "text-gray-400" : "text-[#8BA3CB]"
              )}
            >
              VALID THRU
            </p>
            <p
              className={cn(
                "text-sm md:text-base font-medium",
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
          "h-[50px] md:h-[70px] flex items-center justify-between px-6",
          isDark
            ? "bg-[linear-gradient(180deg,_rgba(255,255,255,0.15)_0%,_rgba(255,255,255,0)_100%)] rounded-bl-2xl rounded-br-2xl"
            : ""
        )}
      >
        <p
          className={cn(
            "font-medium tracking-widest text-sm md:text-[22px]",
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
          className="w-[36px] h-[24px] md:w-[44px] md:h-[30px]"
        />
      </div>
    </div>
  );
}
