"use client"

import { useEffect, useRef, useState, useMemo } from "react"
import { motion, useSpring, useTransform } from "framer-motion"

// Braavi tones
const YELLOW = "255,195,0"   // #FFC300
const PURPLE = "82,39,255"   // #5227FF

export default function SmoothCursor() {
  const [enabled, setEnabled] = useState(true)
  const [hidden, setHidden] = useState(false)

  // Follow springs
  const x = useSpring(0, { damping: 40, stiffness: 350, mass: 0.9, restDelta: 0.001 })
  const y = useSpring(0, { damping: 40, stiffness: 350, mass: 0.9, restDelta: 0.001 })

  // Speed → glow intensity
  const glow = useSpring(0, { damping: 25, stiffness: 180 })
  const last = useRef<{ x: number; y: number; t: number } | null>(null)

  useEffect(() => {
    const fine = typeof window !== "undefined" && window.matchMedia?.("(pointer: fine)")?.matches
    setEnabled(Boolean(fine))
    if (!fine) return

    const INTERACTIVE =
      "button, a, input, textarea, select, [role='button'], [data-cursor='hide']"

    const onMove = (e: MouseEvent) => {
      const now = performance.now()
      x.set(e.clientX)
      y.set(e.clientY)

      // calculate speed in px/ms
      if (last.current) {
        const dt = Math.max(1, now - last.current.t)
        const dx = e.clientX - last.current.x
        const dy = e.clientY - last.current.y
        const v = Math.hypot(dx, dy) / dt
        const mapped = Math.max(0, Math.min(1, (v - 0.02) / (0.6 - 0.02)))
        glow.set(mapped)
      }
      last.current = { x: e.clientX, y: e.clientY, t: now }

      const el = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null
      setHidden(Boolean(el?.closest(INTERACTIVE)))
    }

    const onLeave = () => {
      setHidden(false)
      glow.set(0)
    }

    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseleave", onLeave)
    return () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseleave", onLeave)
    }
  }, [x, y, glow])

  if (!enabled) return null

  // Animate glow filter
  const filterMV = useTransform(glow, (g) => {
    const yRad = 6 + g * 18
    const pRad = 4 + g * 12
    const yA = 0.18 + g * 0.42
    const pA = 0.12 + g * 0.30
    return `drop-shadow(0 0 ${yRad}px rgba(${YELLOW}, ${yA})) drop-shadow(0 0 ${pRad}px rgba(${PURPLE}, ${pA}))`
  })

  // --- Circle node (default cursor shape) ---
  const node = useMemo(
    () => (
      <div
        className="pointer-events-none"
        style={{
          width: 14,
          height: 14,
          borderRadius: "50%",
          background: "rgba(255,195,0,0.9)",
          boxShadow: "0 0 16px rgba(255,195,0,0.35)",
        }}
      />
    ),
    []
  )

  return (
    <motion.div
      className="fixed left-0 top-0 z-[9999] pointer-events-none"
      style={{
        x,
        y,
        translateX: -7,
        translateY: -7,
        opacity: hidden ? 0 : 1,
        scale: hidden ? 0.85 : 1,
        filter: filterMV,
      }}
      transition={{ duration: 0.16, ease: "easeOut" }}
      aria-hidden
    >
      {node}
    </motion.div>
  )
}
