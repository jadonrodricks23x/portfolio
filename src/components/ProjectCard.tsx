import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col rounded-2xl glass-card overflow-hidden hover:-translate-y-2 transition-transform duration-300"
    >
      <div className="relative h-64 overflow-hidden">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
        
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        <div className="absolute top-4 right-4 z-20 flex gap-2">
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noreferrer"
              className="p-2 bg-white/90 backdrop-blur-md rounded-full text-zinc-600 hover:text-brand-accent hover:bg-pink-50 transition-colors shadow-sm"
            >
              <FaGithub className="w-4 h-4" />
            </a>
          )}
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noreferrer"
              className="p-2 bg-white/90 backdrop-blur-md rounded-full text-zinc-600 hover:text-brand-accent hover:bg-pink-50 transition-colors shadow-sm"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-zinc-900 mb-2 group-hover:text-brand-primary transition-colors">{project.title}</h3>
        <p className="text-zinc-600 text-sm mb-6 flex-grow leading-relaxed">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map(tag => (
            <span 
              key={tag} 
              className="text-xs font-medium px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 border border-sky-100"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
