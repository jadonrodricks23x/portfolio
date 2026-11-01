import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sectionLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="absolute left-0 right-0 top-0 z-50 px-4 pt-5 sm:px-6"
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4">
        <div className="flex items-center space-x-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/15 shadow-lg shadow-sky-950/10 backdrop-blur-md">
            <span className="text-white font-bold font-sans">J</span>
          </div>
          <span className="text-lg font-bold font-sans tracking-tight text-white sm:text-xl">Jadon<span className="text-pink-200">Rodricks</span></span>
        </div>
        
        <div className="hidden items-center gap-1 rounded-full border border-white/25 bg-white/10 p-1.5 shadow-lg shadow-sky-950/10 backdrop-blur-xl md:flex">
          {sectionLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                index === 0
                  ? "bg-white/15 text-white hover:bg-white/25"
                  : "text-white/75 hover:bg-white/15 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
        
        <div className="flex items-center gap-4">
          <a href="https://github.com/jadonrodricks23x" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-white/80 transition-colors hover:text-white">
            <FaGithub className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/jadon-rodricks-bb7753389" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-white/80 transition-colors hover:text-pink-200">
            <FaLinkedin className="w-5 h-5" />
          </a>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 md:hidden"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="absolute left-6 right-6 top-[4.75rem] flex flex-col gap-1 rounded-2xl border border-white/25 bg-sky-950/85 p-2 shadow-xl shadow-sky-950/20 backdrop-blur-xl md:hidden"
        >
          {sectionLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-white/90 transition-colors hover:bg-white/15 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
}
