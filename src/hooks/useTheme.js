import { useEffect, useState } from "react";

export const useTheme = () => {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      // const savedTheme = localStorage.getItem("theme");
      // console.log("Saved theme:", window.matchMedia,savedTheme);
      // if (savedTheme) return savedTheme === "dark";
      // console.log(window.matchMedia , window.matchMedia("(prefers-color-scheme: dark)");)
      return window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return { dark, setDark };
};
