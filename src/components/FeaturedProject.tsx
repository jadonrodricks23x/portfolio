import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import type { Project } from "../data/projects";

interface FeaturedProjectProps {
  project: Project;
  onViewDetails: () => void;
}

export function FeaturedProject({ project, onViewDetails }: FeaturedProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative rounded-3xl overflow-hidden glass-card group mb-16 grid grid-cols-1 lg:grid-cols-2 border border-brand-primary/20"
    >
      {/* Background ambient glow specific to featured */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-primary/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="relative h-64 lg:h-auto overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent lg:bg-gradient-to-r z-10" />
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        
        {/* Featured Badge */}
        <div className="absolute top-6 left-6 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 backdrop-blur-md border border-zinc-700">
          <Sparkles className="w-4 h-4 text-brand-primary" />
          <span className="text-xs font-bold text-white uppercase tracking-wider">Featured App</span>
        </div>
      </div>

      <div className="relative z-20 p-8 lg:p-12 flex flex-col justify-center">
        <h3 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white mb-4 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed transition-colors">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map(tag => (
            <span 
              key={tag} 
              className="text-sm font-medium px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/50 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        <div>
          <button
            onClick={onViewDetails}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors"
          >
            <span>View Full Features</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
