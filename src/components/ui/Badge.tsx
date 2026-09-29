import { ReactNode } from "react";
import clsx from "clsx";

interface BadgeProps {
  children: ReactNode;
  variant?: "orange" | "emerald" | "amber" | "dark" | "outline";
  className?: string;
  icon?: ReactNode;
  pulse?: boolean;
}

export default function Badge({
  children,
  variant = "orange",
  className,
  icon,
  pulse = false,
}: BadgeProps) {
  const variantStyles = {
    orange:
      "bg-[#FFF2EE] text-[#FF5023] border-[#FFDCD2] shadow-[0_2px_10px_rgba(255,80,35,0.08)]",
    emerald:
      "bg-[#ECFDF5] text-[#059669] border-[#A7F3D0] shadow-[0_2px_10px_rgba(5,150,105,0.08)]",
    amber:
      "bg-[#FFFBEB] text-[#D97706] border-[#FDE68A] shadow-[0_2px_10px_rgba(217,119,6,0.08)]",
    dark: "bg-[#1C1A17] text-[#FAF8F5] border-[#38332D]",
    outline: "bg-white/80 text-[#57524A] border-[#E2DAD0] backdrop-blur-sm",
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border transition-all duration-300",
        variantStyles[variant],
        className
      )}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5023] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5023]"></span>
        </span>
      )}
      {icon && <span className="text-sm">{icon}</span>}
      {children}
    </span>
  );
}
