import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldAlert, WifiOff, Car, PhoneCall, Link, Languages, Map, Users, BellRing, CheckCircle2, ScanSearch, Image, Camera, ShieldCheck, FileSearch, LockKeyhole, CalendarDays, BookOpen, ClipboardCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Project } from "../data/projects";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const featureIcons: Record<string, LucideIcon> = {
  "AI Geofencing Safety Monitoring": ShieldAlert,
  "Offline Emergency Messaging using Mesh Network technology": WifiOff,
  "Travel Mode with Accident Detection system": Car,
  "Fake Call Feature for emergency escape situations": PhoneCall,
  "Live Tracking Link sharing for real-time location tracking": Link,
  "Multi-Language Support for accessibility": Languages,
  "Heatmap visualization of unsafe zones": Map,
  "Emergency Contacts management with SOS system": Users,
  "Real-Time Alerts and Notifications system": BellRing,
  "AI-powered content analysis": ScanSearch,
  "Scam and suspicious-content detection": ShieldAlert,
  "Image upload for analysis": Image,
  "Camera capture option": Camera,
  "AI-generated risk and trust assessment": ShieldCheck,
  "Gemini API integration": CheckCircle2,
  "User-friendly trust and risk results": CheckCircle2,
  "Responsive interface": CheckCircle2,
  "Document image analysis": FileSearch,
  "Identity and document screening": ScanSearch,
  "Suspicious-document detection": ShieldAlert,
  "AI-assisted verification": ShieldCheck,
  "Risk and verification assessment": ClipboardCheck,
  "Security-focused workflow": LockKeyhole,
  "Space and room availability": CalendarDays,
  "Booking management": BookOpen,
  "Classroom and lab scheduling": CalendarDays,
  "User-friendly booking interface": CheckCircle2,
  "Organized room management": ClipboardCheck,
  "Responsive web interface": CheckCircle2,
  "Income, asset, and liability inputs": ClipboardCheck,
  "Personal net worth calculation": CheckCircle2,
  "Structured financial summary": CheckCircle2,
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
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[calc(100%-1rem)] max-w-3xl max-h-[90vh] overflow-y-auto bg-white border border-sky-100 rounded-3xl shadow-2xl"
          >
            <div className="sticky top-0 right-0 z-10 flex justify-end p-4 pointer-events-none">
              <button
                onClick={onClose}
                aria-label="Close project details"
                className="pointer-events-auto grid h-11 w-11 place-items-center rounded-full bg-sky-50 text-zinc-500 transition-colors hover:text-brand-accent"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="-mt-10 px-5 pb-10 sm:px-8">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-brand-accent">{project.category}</p>
              <h2 id="project-modal-title" className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                {project.title}
              </h2>
              <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                {project.description}
              </p>

              {project.tags.length > 0 && (
                <div className="mb-8 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-md border border-sky-100 bg-sky-50 px-3 py-1.5 text-sm font-medium text-sky-800">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <h3 className="text-xl font-bold text-zinc-900 mb-6">
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
                      className="flex items-start gap-3 p-4 rounded-xl bg-sky-50/60 border border-sky-100"
                    >
                      <div className="p-2 rounded-lg bg-brand-primary/10 text-brand-primary shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-medium text-zinc-700 leading-snug pt-0.5">
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
