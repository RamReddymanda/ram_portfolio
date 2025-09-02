import { motion } from "framer-motion";
import Badge from "./Badge";

const Section = ({ id, title, kicker, children }) => (
  <section id={id} className="scroll-mt-24 py-14 md:py-20">
    <div className="max-w-6xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mb-8 md:mb-12"
      >
        {kicker && <Badge>{kicker}</Badge>}
        <h2 className="mt-3 text-2xl md:text-4xl font-bold tracking-tight">
          {title}
        </h2>
      </motion.div>
      {children}
    </div>
  </section>
);

export default Section;
