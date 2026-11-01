import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, ScanSearch, Sparkles } from "lucide-react";
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
      
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-sky-100 via-white to-pink-100 lg:h-auto lg:min-h-[28rem]">
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={`${project.title} project preview`}
            className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
        ) : (
          <div className="relative grid h-full min-h-[16rem] place-items-center overflow-hidden">
            <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-sky-300/50 blur-3xl" />
            <div className="absolute -bottom-16 -right-10 h-72 w-72 rounded-full bg-pink-300/50 blur-3xl" />
            <div className="absolute inset-0 opacity-30 [background-image:repeating-linear-gradient(90deg,transparent_0,transparent_28px,white_30px,transparent_33px)]" />
            <div className="relative grid h-40 w-40 place-items-center rounded-[2.5rem] border border-white/80 bg-white/60 shadow-2xl shadow-sky-900/10 backdrop-blur-md">
              <ScanSearch className="h-20 w-20 text-sky-600" strokeWidth={1.25} />
              <span className="absolute -bottom-3 rounded-full border border-white/80 bg-white/90 px-4 py-1 text-xs font-bold tracking-[0.25em] text-pink-600 shadow-md">
                TRUSTLENS
              </span>
            </div>
          </div>
        )}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-sky-950/20 to-transparent" />
        
        {/* Featured Badge */}
        <div className="absolute top-6 left-6 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-sky-100 shadow-sm">
          <Sparkles className="w-4 h-4 text-brand-accent" />
          <span className="text-xs font-bold text-sky-900 uppercase tracking-wider">Featured Project</span>
        </div>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${project.title} live demo`}
            className="absolute right-6 top-6 z-20 rounded-full bg-white/90 p-2.5 text-zinc-600 shadow-sm backdrop-blur-md transition-colors hover:bg-pink-50 hover:text-brand-accent"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        )}
      </div>

      <div className="relative z-20 p-8 lg:p-12 flex flex-col justify-center">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-brand-accent">{project.category}</p>
        <h3 className="text-3xl md:text-4xl font-extrabold text-zinc-900 mb-4">
          {project.title}
        </h3>
        
        <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
          {project.description}
        </p>

        <div className="mb-8 flex flex-wrap gap-2">
          {project.tags.length > 0 ? project.tags.map(tag => (
            <span 
              key={tag} 
              className="text-sm font-medium px-3 py-1.5 rounded-lg bg-sky-50 text-sky-800 border border-sky-100"
            >
              {tag}
            </span>
          )) : (
            <span className="text-sm text-zinc-500">Technology details not listed</span>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={onViewDetails}
            className="flex items-center gap-2 rounded-full bg-brand-accent px-6 py-3 font-semibold text-white shadow-lg shadow-pink-500/20 transition-colors hover:bg-pink-600"
          >
            <span>View Details</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-sky-200 px-5 py-3 font-semibold text-sky-800 transition-colors hover:bg-sky-50"
            >
              GitHub <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
