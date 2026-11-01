import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, BarChart3, Code2, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="hero-stage relative min-h-[760px] min-h-screen overflow-hidden px-6 pb-12 pt-32 text-white" id="about">
      <div className="hero-glow hero-glow-pink" />
      <div className="hero-glow hero-glow-blue" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-8rem)] max-w-7xl flex-col justify-center">
        <div className="grid flex-1 items-center gap-12 py-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 shadow-lg shadow-sky-950/10 backdrop-blur-md"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-pink-300 shadow-[0_0_12px_rgba(249,168,212,0.9)]" />
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/90">Electronics & CS engineering student</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-7 text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-white drop-shadow-sm sm:text-6xl md:text-7xl lg:text-[5.5rem]"
        >
          Building at the
          <br />
          intersection of
          <br />
          <span className="text-pink-200">tech & finance.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-9 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
        >
          I'm Jadon Rodricks—an engineering student creating analytical tools and thoughtful web experiences where technology meets the real world.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-start gap-4 sm:flex-row"
        >
          <a href="#projects" className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-sky-900 shadow-lg shadow-sky-950/10 transition-transform hover:-translate-y-0.5">
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="rounded-full border border-white/40 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/20">
            Get in touch
          </a>
        </motion.div>
      </div>

          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="relative mx-auto w-full max-w-md lg:ml-auto"
            aria-label="Portfolio highlights"
          >
            <div className="absolute -inset-8 rounded-[3rem] bg-pink-300/20 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/30 bg-sky-950/15 p-5 shadow-2xl shadow-sky-950/20 backdrop-blur-xl sm:p-7">
              <div className="mb-7 flex items-center justify-between border-b border-white/20 pb-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Portfolio snapshot</p>
                  <p className="mt-1 text-lg font-semibold">Ideas into impact</p>
                </div>
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-pink-300/20 text-pink-100">
                  <Sparkles className="h-5 w-5" />
                </div>
              </div>

              <div className="mb-4 rounded-2xl border border-white/20 bg-white/10 p-5">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-white/65">Featured project</p>
                    <h2 className="mt-1 text-2xl font-semibold">Safora</h2>
                  </div>
                  <span className="rounded-full bg-pink-300/20 px-3 py-1 text-xs font-medium text-pink-100">AI + safety</span>
                </div>
                <p className="text-sm leading-relaxed text-white/70">
                  A personal safety platform built around real-time tracking and emergency support.
                </p>
                <a href="#projects" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-pink-200">
                  Explore the work <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/20 bg-white/10 p-4">
                  <div className="mb-4 grid h-9 w-9 place-items-center rounded-xl bg-sky-200/20 text-sky-100">
                    <Code2 className="h-4 w-4" />
                  </div>
                  <p className="text-2xl font-semibold">04</p>
                  <p className="mt-1 text-xs text-white/65">Projects to explore</p>
                </div>
                <div className="rounded-2xl border border-white/20 bg-white/10 p-4">
                  <div className="mb-4 grid h-9 w-9 place-items-center rounded-xl bg-pink-200/20 text-pink-100">
                    <BarChart3 className="h-4 w-4" />
                  </div>
                  <p className="text-lg font-semibold">Tech × Finance</p>
                  <p className="mt-1 text-xs text-white/65">Where I like to build</p>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>

        <a href="#projects" className="group flex w-fit items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/65 transition-colors hover:text-white">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-white/30 bg-white/10 transition-colors group-hover:bg-white/20">
            <ArrowDown className="h-4 w-4" />
          </span>
          Scroll to explore
        </a>
      </div>
    </section>
  );
}
