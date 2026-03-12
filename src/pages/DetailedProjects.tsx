
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Github, 
  ExternalLink, 
  Code2, 
  Search,
  CircuitBoard
} from "lucide-react";
import {DETAILED_PROJECTS,type Projects} from "@/data/projects";
// Project Data
const PROJECTS: Projects[] = DETAILED_PROJECTS;

const CATEGORIES = ["All", "Software", "Electronics"];

export default function DetailedProjects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = PROJECTS.filter(p => 
    filter === "All" || p.category === filter
  );

  return (
    <section className="bg-transparent relative min-h-[100dvh] pt-24 pb-32 px-6 lg:px-12">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-sm font-mono tracking-[0.3em] text-purple-500 uppercase mb-2">Portfolio</h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">My <span className="text-gray-500 italic">Work.</span></h1>
          </motion.div>

          {/* Category Filter */}
          <div className="flex bg-white/5 p-1 rounded-2xl border border-white/10 backdrop-blur-md">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  filter === cat 
                    ? "bg-cyan-500 text-black shadow-[0_0_20px_rgba(6,182,212,0.4)]" 
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative flex flex-col p-8 bg-white/[0.02] border border-white/10 rounded-[2.5rem] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-500 shadow-2xl overflow-hidden"
              >
                {/* Status Badge */}
                <div className="absolute top-6 right-8 flex items-center gap-2">
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{project.status}</span>
                  <div className={`w-1.5 h-1.5 rounded-full ${project.status === 'Completed' ? 'bg-emerald-500 shadow-[0_0_8px_#10b981]' : 'bg-orange-500'}`} />
                </div>

                {/* Category Icon */}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-500 ${
                  project.category === 'Software' ? 'bg-purple-500/10 text-purple-400' : 'bg-cyan-500/10 text-cyan-400'
                }`}>
                  {project.category === 'Software' ? <Code2 size={24} /> : <CircuitBoard size={24} />}
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 border border-white/5 rounded-lg text-[10px] font-mono text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-6 border-t border-white/5 pt-6 mt-auto">
                  <a href={project.github} className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                    <Github size={18} /> Code
                  </a>
                  <a href={project.demo} className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>

                {/* Decorative background glow on hover */}
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-cyan-500/10 blur-[80px] rounded-full group-hover:bg-purple-500/10 transition-colors duration-700" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-gray-500">
            <Search size={48} className="mb-4 opacity-20" />
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}