const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-zinc-200/60 dark:border-zinc-700/60 bg-white/60 dark:bg-zinc-900/40 px-3 py-1 text-xs tracking-wide shadow-sm backdrop-blur-xl">
    {children}
  </span>
);

export default Badge;
