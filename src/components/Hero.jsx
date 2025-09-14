import { useTypewriter } from "../hooks/useTypewriter";
import { scrollToId } from "../utils/scroll";
import { motion } from "framer-motion";
import Badge from "./Badge";
import { Mail, Linkedin, Github, ArrowRight, Sparkles } from "lucide-react";
const Hero = () => {
  const text = useTypewriter([
    "Full‑Stack Developer",
    "Frontend Specialist",
    "AI/ML Engineer",
  ]);
  return (
    <section id="home" className="relative pt-36 md:pt-40 pb-12 md:pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge>Open to Opportunities</Badge>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-4 text-3xl md:text-6xl font-extrabold leading-tight tracking-tight"
            >
              Building slick UIs, robust APIs, and smart ML systems.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 text-zinc-600 dark:text-zinc-300 text-base md:text-lg"
            >
              I craft performant web apps with delightful micro‑interactions and
              ship ML features that make products smarter.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-6 flex items-center gap-3"
            >
              <button
                onClick={() => scrollToId("projects")}
                className="inline-flex items-center gap-2 rounded-xl bg-black text-white dark:bg-white dark:text-black px-5 py-2 text-sm font-semibold"
              >
                View Projects <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="mailto:ramreddymandha87@gmail.com"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 px-5 py-2 text-sm font-semibold"
              >
                <Mail className="h-4 w-4" /> Contact
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-zinc-500"
            >
              <span className="text-sm">I am a </span>
              <span className="font-mono text-sm md:text-base">{text}</span>
            </motion.div>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://github.com/ramreddymanda"
                className="inline-flex items-center gap-2 text-sm hover:underline"
              >
                <Github className="h-5 w-5" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ram-reddy-a6a25325a"
                className="inline-flex items-center gap-2 text-sm hover:underline"
              >
                <Linkedin className="h-5 w-5" /> LinkedIn
              </a>
            </div>
          </div>
          <div className="relative">
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="relative rounded-[2rem] aspect-square md:aspect-[4/5] bg-white bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-zinc-900 dark:to-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden"
>
  <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(1000px_500px_at_120%_-10%,rgba(99,102,241,0.08),transparent),radial-gradient(800px_400px_at_-20%_110%,rgba(16,185,129,0.08),transparent)]" />
  {/* Content */}


              <div className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_120%_-10%,rgba(99,102,241,0.15),transparent),radial-gradient(800px_400px_at_-20%_110%,rgba(16,185,129,0.15),transparent)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-6">
                  <div className="mx-auto mb-4 h-16 w-16 rounded-2xl bg-zinc-100/60 dark:bg-zinc-900/60 border border-zinc-800/60 dark:border-zinc-800/60 flex items-center justify-center backdrop-blur-xl">
                    <Sparkles className="h-7 w-7  text-zinc-600 dark:text-zinc-100" />
                  </div>
                    <h3 className="font-semibold text-xl text-zinc-600 dark:text-zinc-100">Backend brilliance</h3>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                      Scalable architecture, secure APIs, and efficient data handling.
                    </p>

                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;