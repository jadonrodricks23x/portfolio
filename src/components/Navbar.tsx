import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-nav"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-primary to-brand-accent flex items-center justify-center shadow-lg shadow-brand-primary/20">
            <span className="text-white font-bold font-sans">J</span>
          </div>
          <span className="text-xl font-bold font-sans tracking-tight text-zinc-900 dark:text-white transition-colors">Jadon<span className="text-zinc-500">Rodricks</span></span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">About</a>
          <a href="#projects" className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">Projects</a>
          <a href="#skills" className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">Skills</a>
          <a href="#contact" className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">Contact</a>
        </div>
        
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          
          <div className="w-px h-6 bg-zinc-200 dark:bg-zinc-800 mx-2"></div>
          
          <a href="https://github.com/jadonrodricks23x" target="_blank" rel="noreferrer" className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
            <FaGithub className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/jadon-rodricks-bb7753389" target="_blank" rel="noreferrer" className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
            <FaLinkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
