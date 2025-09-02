import { motion } from "framer-motion";

const Card = ({ children, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.25 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className={`rounded-2xl p-5 md:p-6 bg-white/70 dark:bg-zinc-900/60 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-zinc-200/60 dark:border-zinc-800/60 backdrop-blur-xl ${className}`}
  >
    {children}
  </motion.div>
);

export default Card;
