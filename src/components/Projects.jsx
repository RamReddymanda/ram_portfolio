import Section from "./Section";
import Card from "./Card";
import { projectsData } from "../data/projects";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  const [tab, setTab] = useState("All");
  const tabs = ["All", "Frontend", "Full Stack", "AI/ML"];
  const list = useMemo(
    () => projectsData.filter((p) => (tab === "All" ? true : p.type === tab)),
    [tab]
  );

  return (
    <Section id="projects" title="Selected Projects" kicker="Work">
      <div className="flex items-center gap-2 mb-6">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-3 py-1.5 rounded-xl text-sm border transition ${
              tab === t
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "bg-white/60 dark:bg-zinc-900/60 border-zinc-200/60 dark:border-zinc-800/60"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-5 md:gap-6">
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <ProjectCard p={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
};

export default Projects;
