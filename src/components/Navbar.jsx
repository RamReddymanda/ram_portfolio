import React, { useState } from "react";
import { Moon, Sun, FileDown, Menu, X } from "lucide-react";

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Navbar = ({ onToggleTheme, dark }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] md:w-[80%]">
      <div className="backdrop-blur-xl bg-white/70 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800/60 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
        <div className="flex items-center justify-between px-4 md:px-6 py-3">
          <button
            onClick={() => scrollToId("home")}
            className="font-semibold tracking-tight text-sm md:text-base"
          >
            Ram <span className="text-zinc-500">•</span>{" "}
            <span className="text-zinc-500">Full‑Stack & AI/ML</span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            {navLinks.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollToId(l.id)}
                className="hover:underline"
              >
                {l.label}
              </button>
            ))}

      <button
  aria-label="Current theme" onClick={onToggleTheme}
  className="inline-flex items-center gap-2 rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 px-3 py-1.5 cursor-default"
>
  {!dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
  <span className="hidden lg:inline">
    {dark ? "In Dark Mode" : "In Light Mode"}
  </span>
</button>


            <a
              href="https://drive.google.com/file/d/1QVmGmgItV0ox2uPMRffHusyQmtzEi3py/view?usp=drivesdk"
              className="inline-flex items-center gap-2 rounded-xl bg-black text-white dark:bg-white dark:text-black px-4 py-1.5 text-sm font-medium"
            >
              <FileDown className="h-4 w-4" /> Resume
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden flex flex-col gap-3 px-4 pb-4">
            {navLinks.map((l) => (
              <button
                key={l.id}
                onClick={() => {
                  scrollToId(l.id);
                  setMobileOpen(false);
                }}
                className="hover:underline text-left"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={onToggleTheme}
              className="flex items-center gap-2 rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 px-3 py-1.5 mt-2"
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />} Theme
            </button>
            <a
              href="https://drive.google.com/file/d/1QVmGmgItV0ox2uPMRffHusyQmtzEi3py/view?usp=drivesdk"
              className="inline-flex items-center gap-2 rounded-xl bg-black text-white dark:bg-white dark:text-black px-4 py-1.5 mt-2 text-sm font-medium"
            >
              <FileDown className="h-4 w-4" /> Resume
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
