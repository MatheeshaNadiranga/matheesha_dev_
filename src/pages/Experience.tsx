
import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2, Zap } from "lucide-react";

const TIMELINE = [
  {
    year: "2026 - Present",
    title: "Software Engineering Student (Higher Diploma)",
    company: "ACPT Sri Lanka",
    description: "Developing core competencies in Java, JavaScript, and Database Management. Focusing on building scalable desktop,Mobile and web applications.",
    tags: ["Springboot", "MySQL", "React", "ExpressJS","React Native","DevOps"]
  },
  {
    year: "2026 - Ongoing",
    title: "Electronic and Electrical Engineering Student (HND)",
    company: "Pearson BTEC",
    description: "Specializing in circuit design, microcontroller programming, and embedded systems.",
    tags: ["Embedded C", "Arduino", "Circuit Design", "IoT","Proteus","Electronics"]
  },
  {
    year: "Ongoing",
    title: "Independent Developer & Engineer",
    company: "Freelance / Personal Projects",
    description: "Designing custom PCB layouts and building full-stack web solutions for local clients and hobbyist projects.",
    tags: ["React.js", "Springboot", "ExpressJS", "NodeJS","IoT","Python"]
  }
];

export default function Experience() {
  return (
    <section className="relative min-h-screen pt-24 pb-32 px-6 ">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-20 text-center"
        >
          <h2 className="text-sm font-mono tracking-[0.3em] text-cyan-500 uppercase mb-4">Journey</h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">Timeline <span className="text-gray-500 italic">&</span> Exp.</h1>
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-12 space-y-16">
          {TIMELINE.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-10 group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-black border-2 border-cyan-500 group-hover:scale-125 group-hover:bg-cyan-500 transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
              
              {/* Content Card */}
              <div className="p-8 bg-white/[0.02] border border-white/10 rounded-[2rem] backdrop-blur-md hover:border-white/20 transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-cyan-400 font-medium flex items-center gap-2">
                      <Briefcase size={14} /> {item.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-1.5 bg-white/5 rounded-full text-xs font-mono text-gray-400 border border-white/5">
                    <Calendar size={14} /> {item.year}
                  </div>
                </div>

                <p className="text-gray-400 font-light leading-relaxed mb-8">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-cyan-500/5 text-cyan-400/80 border border-cyan-500/10 rounded-lg text-[10px] font-mono">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Achievement Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-20 p-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-6 text-center md:text-left"
        >
          <div className="p-4 bg-cyan-500/20 rounded-2xl text-cyan-400">
            <Zap size={32} />
          </div>
          <div>
            <h4 className="text-white font-bold text-xl mb-1">Continuous Learning</h4>
            <p className="text-gray-400 text-sm">Currently mastering Cloud Architecture and Advanced PCB Prototyping alongside my academic studies.</p>
          </div>
          <div className="ml-auto">
             <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-widest bg-emerald-500/10 px-4 py-2 rounded-full">
               <CheckCircle2 size={14} /> Active
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}