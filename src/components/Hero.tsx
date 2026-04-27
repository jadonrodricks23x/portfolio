import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" id="about">
      {/* Background glowing blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/20 rounded-full blur-[120px] animate-blob mix-blend-screen pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[28rem] h-[28rem] bg-brand-accent/20 rounded-full blur-[120px] animate-blob mix-blend-screen pointer-events-none" style={{ animationDelay: '2s' }} />
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-brand-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm mb-8 shadow-sm dark:shadow-none"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-xs font-medium text-zinc-600 dark:text-zinc-300 tracking-wide uppercase transition-colors">Available for work</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 text-zinc-900 dark:text-white transition-colors"
        >
          Jadon <span className="text-gradient">Rodricks</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mb-10 leading-relaxed transition-colors"
        >
          I'm an Electronics & CS engineering student passionate about the intersection of finance and technology, building analytical tools and web applications.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a href="#projects" className="group flex items-center space-x-2 bg-zinc-900 dark:bg-white text-white dark:text-black px-6 py-3 rounded-full font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors">
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="px-6 py-3 rounded-full font-semibold border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-transparent hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-zinc-900 dark:text-white">
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
