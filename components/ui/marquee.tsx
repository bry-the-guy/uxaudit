"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export type MarqueeProps = React.HTMLAttributes<HTMLDivElement> & {
  /** px/s; higher = faster */
  speed?: number
  /** pause animation on hover */
  pauseOnHover?: boolean
  /** reverse scroll direction */
  reverse?: boolean
  /** duplicate count (for density) */
  repeat?: number
}

/**
 * Seamless horizontal marquee.
 * Usage: <Marquee><Logo/></Marquee>
 * NOTE: This file exports a **named** Marquee to match: import { Marquee } from "@/components/ui/marquee"
 */
export function Marquee({
  className,
  children,
  speed = 30,
  pauseOnHover = false,
  reverse = false,
  repeat = 2,
  ...props
}: MarqueeProps) {
  // Duplicate children inline to make a perfect loop
  const items = React.Children.toArray(children)
  const sequence = React.useMemo(
    () => Array.from({ length: repeat }, () => items).flat(),
    [items, repeat]
  )

  const style: React.CSSProperties = {
    // Duration proportional to speed; 1000px logical distance / speed(px/s)
    animationDuration: `${Math.max(10, Math.round(1000 / speed))}s`
  }

  return (
    <div
      className={cn(
        "marquee-viewport overflow-hidden relative",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "marquee-track flex w-max will-change-transform whitespace-nowrap",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={style}
      >
        {sequence.map((child, i) => (
          <div key={i} className="flex items-center">
            {child}
          </div>
        ))}
      </div>
    </div>
  )
}

/* Keyframes via Tailwind’s arbitrary styles (no global CSS required)
   If you already define animate-marquee in CSS, keep it; otherwise these utility fallbacks work with Tailwind JIT.
*/
/* Example Tailwind inlined styles you might already have:
   .animate-marquee { animation: marquee linear infinite; }
   .animate-marquee-reverse { animation: marquee-reverse linear infinite; }
   @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
   @keyframes marquee-reverse { from { transform: translateX(-50%); } to { transform: translateX(0); } }
*/
