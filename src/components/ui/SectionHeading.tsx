import { ReactNode } from "react";
import clsx from "clsx";
import Badge from "./Badge";

interface SectionHeadingProps {
  badge?: string;
  badgeVariant?: "orange" | "emerald" | "amber" | "dark" | "outline";
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center" | "right";
  className?: string;
  dark?: boolean;
}

export default function SectionHeading({
  badge,
  badgeVariant = "orange",
  title,
  subtitle,
  align = "center",
  className,
  dark = false,
}: SectionHeadingProps) {
  const alignStyles = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div
      className={clsx(
        "flex flex-col max-w-3xl mb-12 md:mb-16",
        alignStyles[align],
        className
      )}
    >
      {badge && (
        <div className="mb-4">
          <Badge variant={badgeVariant} pulse={badgeVariant === "orange"}>
            {badge}
          </Badge>
        </div>
      )}
      <h2
        className={clsx(
          "font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.12] mb-5",
          dark ? "text-white" : "text-[#141210]"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={clsx(
            "text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl",
            dark ? "text-[#B8B2A7]" : "text-[#57524A]"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
