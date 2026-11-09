// Luciérnagas decorativas con posiciones fijas (deterministas para el prerender).
const dots = [
  { top: "12%", left: "8%", delay: "0s", size: "size-1.5" },
  { top: "28%", left: "82%", delay: "1.2s", size: "size-2" },
  { top: "64%", left: "14%", delay: "2.4s", size: "size-1" },
  { top: "72%", left: "68%", delay: "0.6s", size: "size-1.5" },
  { top: "40%", left: "46%", delay: "3.1s", size: "size-1" },
  { top: "18%", left: "58%", delay: "1.8s", size: "size-1" },
  { top: "84%", left: "88%", delay: "2.9s", size: "size-2" },
  { top: "50%", left: "28%", delay: "4s", size: "size-1" },
];

export function Fireflies() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((dot, i) => (
        <span
          key={i}
          className={`animate-float absolute rounded-full bg-glow-300 shadow-[0_0_12px_3px_var(--color-glow-400)] ${dot.size}`}
          style={{ top: dot.top, left: dot.left, animationDelay: dot.delay }}
        />
      ))}
    </div>
  );
}
