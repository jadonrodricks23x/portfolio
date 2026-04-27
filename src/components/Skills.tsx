import { motion } from "framer-motion";

const skills = [
  "Python", "C Programming", "HTML", "SQL", 
  "Data Analysis", "Business Management", "Finance & Investing", 
  "Analytical Thinking"
];

export function Skills() {
  return (
    <section className="py-24 relative bg-zinc-50 dark:bg-zinc-900/20 transition-colors" id="skills">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6 transition-colors"
          >
            Technical <span className="text-zinc-500">Arsenal</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto transition-colors"
          >
            A comprehensive list of technologies and tools I work with to build robust applications.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, type: "spring", stiffness: 100 }}
              className="px-6 py-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white transition-colors hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-[0_0_15px_rgba(139,92,246,0.1)] cursor-default shadow-sm dark:shadow-none"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
