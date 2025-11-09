// /components/ui/particles.tsx
"use client";

import { useEffect, useRef, useState } from "react";

interface ParticlesProps {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  size?: number;
  refresh?: boolean;
  color?: string;
  vx?: number;
  vy?: number;
}

function hexToRgb(hex: string): number[] {
  hex = hex.replace("#", "");
  const hexInt = parseInt(hex, 16);
  return [(hexInt >> 16) & 255, (hexInt >> 8) & 255, hexInt & 255];
}

export default function Particles({
  className = "",
  quantity = 100,
  staticity = 50,
  ease = 50,
  size = 0.4,
  refresh = false,
  color = "#ffffff",
  vx = 0,
  vy = 0,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const circlesRef = useRef<Circle[]>([]);
  const mouse = useRef({ x: 0, y: 0 });
  const [dim, setDim] = useState({ w: 0, h: 0 });
  const rgb = hexToRgb(color);

  // keep DPR fresh on resize/zoom
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;

  useEffect(() => {
    if (canvasRef.current) ctxRef.current = canvasRef.current.getContext("2d");
    init();
    const onResize = () => init();
    const onMouseMove = (e: MouseEvent) => {
      // store mouse relative to canvas
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
    };
    // re-init when color changes so fillStyle updates
  }, [color]);

  useEffect(() => {
    init();
  }, [refresh]);

  useEffect(() => {
    // kick animation loop once
    let raf = 0;
    const loop = () => {
      drawFrame();
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [dim.w, dim.h, ease, staticity, vx, vy, color, quantity, size]);

  function init() {
    resize();
    seed();
  }

function resize() {
  if (!wrapRef.current || !canvasRef.current || !ctxRef.current) return;
  circlesRef.current.length = 0;
  const w = wrapRef.current.offsetWidth;
  const h = wrapRef.current.offsetHeight;

  // NEW: start attraction at center so particles don't clump at top-left
  mouse.current.x = w / 2;
  mouse.current.y = h / 2;

  setDim({ w, h });
  canvasRef.current.width = Math.max(1, Math.floor(w * dpr));
  canvasRef.current.height = Math.max(1, Math.floor(h * dpr));
  canvasRef.current.style.width = `${w}px`;
  canvasRef.current.style.height = `${h}px`;
  ctxRef.current.setTransform(dpr, 0, 0, dpr, 0, 0);
}

  type Circle = {
    x: number;
    y: number;
    tx: number;
    ty: number;
    r: number;
    a: number;
    ta: number;
    dx: number;
    dy: number;
    m: number;
  };

  function makeCircle(): Circle {
    const x = Math.random() * dim.w;
    const y = Math.random() * dim.h;
    const r = Math.random() * 2 + size;
    const ta = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1));
    const dx = (Math.random() - 0.5) * 0.1;
    const dy = (Math.random() - 0.5) * 0.1;
    const m = 0.1 + Math.random() * 4;
    return { x, y, tx: 0, ty: 0, r, a: 0, ta, dx, dy, m };
  }

  function seed() {
    clear();
    for (let i = 0; i < quantity; i++) {
      const c = makeCircle();
      drawCircle(c); // push happens inside drawCircle when update=false
    }
  }

  function clear() {
    const ctx = ctxRef.current;
    if (!ctx) return;
    ctx.clearRect(0, 0, dim.w, dim.h);
  }

  function drawCircle(c: Circle, update = false) {
    const ctx = ctxRef.current;
    if (!ctx) return;
    ctx.translate(c.tx, c.ty);
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${rgb.join(",")}, ${c.a})`;
    ctx.fill();
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (!update) circlesRef.current.push(c);
  }

  function remap(v: number, a1: number, a2: number, b1: number, b2: number) {
    const n = ((v - a1) * (b2 - b1)) / (a2 - a1) + b1;
    return n > 0 ? n : 0;
  }

  function drawFrame() {
    clear();
    const cs = circlesRef.current;
    for (let i = cs.length - 1; i >= 0; i--) {
      const c = cs[i];

      // fade by proximity to edges
      const edge = [
        c.x + c.tx - c.r,
        dim.w - c.x - c.tx - c.r,
        c.y + c.ty - c.r,
        dim.h - c.y - c.ty - c.r,
      ];
      const closest = edge.reduce((a, b) => Math.min(a, b));
      const f = parseFloat(remap(closest, 0, 20, 0, 1).toFixed(2));
      if (f > 1) {
        c.a += 0.02;
        if (c.a > c.ta) c.a = c.ta;
      } else {
        c.a = c.ta * f;
      }

      // drift + optional constant velocity
      c.x += c.dx + vx;
      c.y += c.dy + vy;

      // gentle attraction to mouse
      const s = staticity / c.m;
      c.tx += (mouse.current.x / s - c.tx) / ease;
      c.ty += (mouse.current.y / s - c.ty) / ease;

      // recycle when out of bounds
      if (
        c.x < -c.r ||
        c.x > dim.w + c.r ||
        c.y < -c.r ||
        c.y > dim.h + c.r
      ) {
        cs.splice(i, 1);
        drawCircle(makeCircle());
      } else {
        drawCircle(c, true);
      }
    }
  }

  return (
    <div className={className} ref={wrapRef} aria-hidden="true">
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}
