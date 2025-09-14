import React from "react";
import { useTheme } from "./hooks/useTheme"; // Make sure this path is correct
import Navbar from "./components/Navbar";
import GlowCursor from "./components/GlowCursor";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const { dark, setDark } = useTheme();
  console.log("Current theme is dark:", dark);
  return (
    // <div className={`min-h-screen transition-colors duration-500 ease-in-out ${dark ? "bg-black text-white" : "bg-white text-zinc-900"}`}></div>
    <div className="bg-zin-900 dark:bg-black text-black dark:text-white min-h-screen transition-colors duration-300">
      <GlowCursor />
      <Navbar dark={dark} onToggleTheme={() => setDark(!dark)} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;