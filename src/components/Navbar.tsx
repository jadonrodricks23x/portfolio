import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="absolute left-0 right-0 top-0 z-50 px-6 pt-5"
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4">
        <div className="flex items-center space-x-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/15 shadow-lg shadow-sky-950/10 backdrop-blur-md">
            <span className="text-white font-bold font-sans">J</span>
          </div>
          <span className="text-lg font-bold font-sans tracking-tight text-white sm:text-xl">Jadon<span className="text-pink-200">Rodricks</span></span>
        </div>
        
        <div className="hidden items-center gap-1 rounded-full border border-white/25 bg-white/10 p-1.5 shadow-lg shadow-sky-950/10 backdrop-blur-xl md:flex">
          <a href="#about" className="rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/25">About</a>
          <a href="#projects" className="rounded-full px-4 py-2 text-sm font-medium text-white/75 transition-colors hover:bg-white/15 hover:text-white">Projects</a>
          <a href="#skills" className="rounded-full px-4 py-2 text-sm font-medium text-white/75 transition-colors hover:bg-white/15 hover:text-white">Skills</a>
          <a href="#contact" className="rounded-full px-4 py-2 text-sm font-medium text-white/75 transition-colors hover:bg-white/15 hover:text-white">Contact</a>
        </div>
        
        <div className="flex items-center gap-4">
          <a href="https://github.com/jadonrodricks23x" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-white/80 transition-colors hover:text-white">
            <FaGithub className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/jadon-rodricks-bb7753389" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-white/80 transition-colors hover:text-pink-200">
            <FaLinkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
