"use client";

import { cn } from "@/lib/utils";

type ShineBorderProps = {
  borderRadius?: number;
  borderWidth?: number;
  duration?: number;
  shineColor?: string | string[];
  className?: string;
  children?: React.ReactNode;
};

export function ShineBorder({
  borderRadius = 8,
  borderWidth = 1,
  duration = 14,
  shineColor = "#ffffff",
  className,
  children,
}: ShineBorderProps) {
  const colors =
    typeof shineColor === "string" ? [shineColor] : shineColor;

  return (
    <div
      style={
        {
          "--border-radius": `${borderRadius}px`,
        } as React.CSSProperties
      }
      className={cn(
        "relative block min-h-[60px] w-full rounded-[--border-radius] p-3 transition-all duration-300",
        "hover:shadow-xl hover:shadow-primary/5",
        className
      )}
    >
      <div
        style={
          {
            "--border-width": `${borderWidth}px`,
            "--border-radius": `${borderRadius}px`,
            "--duration": `${duration}s`,
            "--mask-linear-gradient": `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
            "--background-radial-gradient": `radial-gradient(transparent,transparent, ${colors instanceof Array ? colors.join(",") : colors},transparent,transparent)`,
          } as React.CSSProperties
        }
        className={`pointer-events-none before:bg-shine-size before:absolute before:inset-0 before:aspect-square before:size-full before:rounded-[--border-radius] before:p-[--border-width] before:will-change-[background-position] before:content-[""] before:![-webkit-mask-composite:xor] before:![mask-composite:exclude] before:[background-image:var(--background-radial-gradient)] before:[background-size:300%_300%] before:[mask:var(--mask-linear-gradient)] motion-safe:before:animate-shine`}
      />
      {children}
    </div>
  );
}
