import { ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "glass";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  icon?: ReactNode;
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
  icon,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 active:scale-[0.98] disabled:opacity-50 group cursor-pointer";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm md:text-base px-6 py-3 gap-2",
    lg: "text-base md:text-lg px-8 py-4 gap-2.5 shadow-lg",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-[#FF5023] to-[#FF7A1A] text-white hover:from-[#E84318] hover:to-[#FF6B00] shadow-[0_10px_25px_-5px_rgba(255,80,35,0.4)] hover:shadow-[0_14px_30px_-5px_rgba(255,80,35,0.5)] border border-white/20",
    secondary:
      "bg-[#141210] text-white hover:bg-[#282420] shadow-[0_10px_25px_-5px_rgba(20,18,16,0.25)] border border-white/10",
    outline:
      "bg-white/70 backdrop-blur-md text-[#141210] border border-[#E2DAD0] hover:border-[#FF5023] hover:text-[#FF5023] hover:bg-white shadow-sm",
    glass:
      "bg-white/80 backdrop-blur-lg text-[#141210] border border-white/80 hover:bg-white hover:shadow-md shadow-sm",
  };

  const combinedClasses = clsx(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
        {icon && (
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            {icon}
          </span>
        )}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
      {icon && (
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </button>
  );
}
