import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const ProjectCard = ({ p }) => {
  if (!p) return null; // Prevent crash if no project data

  const { title, summary, highlight, demo, repo, tech } = p;

  return (
    <motion.div
      className="rounded-2xl p-5 bg-white/70 dark:bg-zinc-900/60 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-zinc-200/60 dark:border-zinc-800/60 backdrop-blur-xl hover:shadow-xl hover:scale-[1.02] transition-transform"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5 }}
    >
      {/* Project Title */}
      <h3 className="text-lg font-semibold mb-2">{title}</h3>

      {/* Summary */}
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">{summary}</p>

      {/* Highlight */}
      {highlight && (
        <p className="text-xs italic text-fuchsia-500 mb-3">{highlight}</p>
      )}

      {/* Tech Stack */}
      {Array.isArray(tech) && tech.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs rounded-full bg-zinc-200/60 dark:bg-zinc-800/60"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-3">
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-fuchsia-500 text-white text-sm hover:bg-fuchsia-600 transition"
          >
            Demo <ExternalLink size={14} />
          </a>
        )}
        {repo && (
          <a
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-zinc-800 text-white text-sm hover:bg-zinc-700 transition"
          >
            Code <Github size={14} />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
