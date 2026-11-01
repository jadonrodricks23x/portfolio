import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { FeaturedProject } from "./FeaturedProject";
import { ProjectModal } from "./ProjectModal";
import type { Project } from "../data/projects";

export function Projects() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Separate featured from standard projects
  const featuredProject = projects.find(p => p.isFeatured);
  const standardProjects = projects.filter(p => !p.isFeatured);

  // Extract unique tags from ALL projects for the filter
  const allTags = ["All", ...Array.from(new Set(projects.flatMap(p => p.tags)))].slice(0, 6);

  const filteredProjects = filter === "All" 
    ? standardProjects 
    : standardProjects.filter(p => p.tags.includes(filter));

  return (
    <section className="py-24 relative" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6"
          >
            Featured <span className="text-zinc-500">Work</span>
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap gap-3"
          >
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === tag 
                    ? "bg-brand-primary text-white shadow-md shadow-sky-500/20"
                      : "bg-white text-zinc-600 border border-sky-100 hover:border-brand-accent/40 hover:text-brand-accent hover:bg-pink-50"
                }`}
              >
                {tag}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Featured Project */}
        {(filter === "All" || (featuredProject && featuredProject.tags.includes(filter))) && featuredProject && (
          <FeaturedProject 
            project={featuredProject} 
            onViewDetails={() => setSelectedProject(featuredProject)} 
          />
        )}

        {/* Standard Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Interactive Features Modal */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
