import { motion } from "framer-motion";

const skills = [
  "Python", "C Programming", "HTML", "SQL", 
  "Data Analysis", "Business Management", "Finance & Investing", 
  "Analytical Thinking"
];

export function Skills() {
  return (
    <section className="py-24 relative bg-sky-50/70" id="skills">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6"
          >
            Technical <span className="text-zinc-500">Arsenal</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-600 max-w-2xl mx-auto"
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
              className="px-6 py-3 rounded-xl bg-white border border-sky-100 text-zinc-600 font-medium hover:bg-pink-50 hover:text-brand-accent transition-colors hover:border-brand-accent/40 hover:shadow-[0_0_15px_rgba(236,72,153,0.12)] cursor-default shadow-sm"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
