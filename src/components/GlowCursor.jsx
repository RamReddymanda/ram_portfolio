import { useEffect, useRef } from "react";

const GlowCursor = () => {
  const ref = useRef(null);

  useEffect(() => {
    const move = (e) => {
      const el = ref.current;
      if (!el) return;
      const x = e.clientX - window.innerWidth / 2;
      const y = e.clientY - window.innerHeight / 2;
      el.animate(
        { transform: `translate(${x * 0.02}px, ${y * 0.02}px)` },
        { duration: 3000, fill: "forwards" }
      );
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div ref={ref} className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] rounded-full blur-3xl opacity-40 dark:opacity-30 bg-gradient-to-tr from-fuchsia-500/20 via-cyan-500/20 to-emerald-400/20" />
    </div>
  );
};

export default GlowCursor;
