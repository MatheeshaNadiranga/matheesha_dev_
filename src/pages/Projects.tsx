
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import ProjectModal from "@/components/ProjectModal";
import { PROJECTS,type Project } from "@/data/projects";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="relative text-white p-8 font-sans overflow-hidden">
      
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] -z-10" />

      <header className="max-w-6xl mx-auto mb-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
            Selected Works
          </h1>
          <p className="text-stone-400 text-lg font-light tracking-wide">
            Explore the intersection of hardware and software.
          </p>
        </motion.div>
      </header>

      <main className="my-0 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 relative">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => setSelectedProject(project)}
            /* Glassmorphism Classes: bg-white/[0.02], backdrop-blur-md, border-white/10 */
            className="group relative cursor-pointer overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-md transition-all duration-500 hover:border-cyan-500/40 hover:bg-white/[0.05] hover:shadow-[0_0_40px_-15px_rgba(6,182,212,0.2)]"
          >
            {/* Image Container */}
            <div className="aspect-video overflow-hidden relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60" />
            </div>

            {/* Content Area */}
            <div className="p-8">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-cyan-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-3xl font-bold tracking-tight group-hover:text-cyan-100 transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <div className="mb-1 p-3 bg-white/5 border border-white/10 rounded-2xl group-hover:bg-cyan-500 group-hover:text-black group-hover:border-cyan-500 transition-all duration-300">
                  <ExternalLink size={20} />
                </div>
              </div>
              
              {/* Subtle Tech Pills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.slice(0, 3).map((t) => (
                  <span key={t} className="text-[10px] px-3 py-1 bg-white/5 border border-white/5 rounded-full text-stone-400 font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </main>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}