import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const Header = () => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl border-b border-zinc-200/50 dark:border-zinc-800/50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <motion.h1
          className="text-lg font-bold cursor-pointer text-fuchsia-500"
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
        >
          MyPortfolio
        </motion.h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToId(item.id)}
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-fuchsia-500 transition"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white dark:bg-zinc-900 border-t border-zinc-200/50 dark:border-zinc-800/50 px-4 py-3 space-y-3"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToId(item.id)}
              className="block w-full text-left text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-fuchsia-500 transition"
            >
              {item.label}
            </button>
          ))}
        </motion.div>
      )}
    </header>
  );
};

export default Header;
