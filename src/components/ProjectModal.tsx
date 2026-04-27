import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldAlert, WifiOff, Car, PhoneCall, Link, Languages, Map, Users, BellRing, CheckCircle2 } from "lucide-react";
import type { Project } from "../data/projects";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const featureIcons: Record<string, any> = {
  "AI Geofencing Safety Monitoring": ShieldAlert,
  "Offline Emergency Messaging using Mesh Network technology": WifiOff,
  "Travel Mode with Accident Detection system": Car,
  "Fake Call Feature for emergency escape situations": PhoneCall,
  "Live Tracking Link sharing for real-time location tracking": Link,
  "Multi-Language Support for accessibility": Languages,
  "Heatmap visualization of unsafe zones": Map,
  "Emergency Contacts management with SOS system": Users,
  "Real-Time Alerts and Notifications system": BellRing,
};

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-2xl transition-colors"
          >
            <div className="sticky top-0 right-0 z-10 flex justify-end p-4 pointer-events-none">
              <button
                onClick={onClose}
                className="pointer-events-auto p-2 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="px-8 pb-10 -mt-10">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4 transition-colors">
                {project.title}
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed transition-colors">
                {project.description}
              </p>

              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6 transition-colors">
                Key Features
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features?.map((feature, index) => {
                  const Icon = featureIcons[feature] || CheckCircle2;
                  return (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800/50 transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-brand-primary/10 text-brand-primary shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 transition-colors leading-snug pt-0.5">
                        {feature}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
