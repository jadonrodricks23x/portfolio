export function Footer() {
  return (
    <footer className="py-12 border-t border-zinc-200 dark:border-zinc-900 relative z-10 bg-zinc-50 dark:bg-zinc-950 transition-colors" id="contact">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <span className="text-xl font-bold font-sans tracking-tight text-zinc-900 dark:text-white transition-colors">Jadon<span className="text-zinc-500">Rodricks</span></span>
        </div>
        
        <p className="text-zinc-500 text-sm">
          &copy; {new Date().getFullYear()} Jadon Dominic Rodricks. All rights reserved.
        </p>
        
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="mailto:jadon7650@gmail.com" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
            jadon7650@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
