import { motion } from "framer-motion";
import { CalendarDays, ExternalLink, ScanSearch, ShieldCheck, Wallet } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  isFeatured?: boolean;
  onViewDetails: () => void;
}

const projectVisuals: Record<string, { icon: LucideIcon; mark: string }> = {
  "ai-document-screening": { icon: ShieldCheck, mark: "VERIFY" },
  bookspace: { icon: CalendarDays, mark: "BOOK" },
  "net-worth-calculator": { icon: Wallet, mark: "GROW" },
};

export function ProjectCard({ project, index, isFeatured = false, onViewDetails }: ProjectCardProps) {
  const visual = projectVisuals[project.id] ?? { icon: ScanSearch, mark: "ANALYZE" };
  const VisualIcon = visual.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border glass-card transition-transform duration-300 hover:-translate-y-2 ${
        isFeatured ? "border-brand-primary/40 shadow-lg shadow-sky-500/10" : "border-transparent"
      }`}
    >
      <div className="relative h-64 overflow-hidden">
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={`${project.title} project preview`}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="relative flex h-full items-center justify-center overflow-hidden bg-gradient-to-br from-sky-100 via-white to-pink-100">
            <div className="absolute -left-12 -top-20 h-56 w-56 rounded-full bg-sky-300/40 blur-3xl" />
            <div className="absolute -bottom-24 -right-10 h-56 w-56 rounded-full bg-pink-300/40 blur-3xl" />
            <div className="relative flex flex-col items-center gap-3 text-sky-900">
              <div className="grid h-20 w-20 place-items-center rounded-3xl border border-white/80 bg-white/70 shadow-xl shadow-sky-900/10 backdrop-blur">
                <VisualIcon className="h-9 w-9 text-brand-primary" />
              </div>
              <span className="text-xs font-bold tracking-[0.3em] text-sky-800/70">{visual.mark}</span>
            </div>
          </div>
        )}

        <div className="absolute inset-0 z-10 bg-brand-primary/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {isFeatured && (
          <span className="absolute left-4 top-4 z-20 rounded-full border border-white/80 bg-white/90 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-sky-900 shadow-sm backdrop-blur-md">
            Featured
          </span>
        )}
        
        <div className="absolute top-4 right-4 z-20 flex gap-2">
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              className="grid min-h-11 min-w-11 place-items-center rounded-full bg-white/90 p-2 text-zinc-600 shadow-sm backdrop-blur-md transition-colors hover:bg-pink-50 hover:text-brand-accent"
            >
              <FaGithub className="w-4 h-4" />
            </a>
          )}
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noreferrer"
              aria-label={`View ${project.title} live demo`}
              className="grid min-h-11 min-w-11 place-items-center rounded-full bg-white/90 p-2 text-zinc-600 shadow-sm backdrop-blur-md transition-colors hover:bg-pink-50 hover:text-brand-accent"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-brand-accent">{project.category}</p>
        <h3 className="mb-2 text-xl font-bold text-zinc-900 transition-colors group-hover:text-brand-primary">{project.title}</h3>
        <p className="text-zinc-600 text-sm mb-6 flex-grow leading-relaxed">{project.description}</p>
        
        <div className="mb-5 flex flex-wrap gap-2">
          {project.tags.length > 0 ? project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 border border-sky-100"
            >
              {tag}
            </span>
          )) : (
            <span className="text-xs text-zinc-500">Technology details not listed</span>
          )}
        </div>

        <button
          type="button"
          onClick={onViewDetails}
          className="mt-auto inline-flex min-h-11 w-fit items-center gap-2 rounded-full border border-sky-200 px-4 py-2 text-sm font-semibold text-sky-800 transition-colors hover:border-pink-300 hover:bg-pink-50 hover:text-pink-700"
        >
          View details <ExternalLink className="h-4 w-4" />
        </button>
      </div>
    </motion.div>
  );
}
