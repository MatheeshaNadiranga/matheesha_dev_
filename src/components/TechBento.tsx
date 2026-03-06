"use client";
import { motion } from "framer-motion";
import { Code2, Cpu, Database, Figma, } from "lucide-react";

export default function TechBento() {
  const categories = [
    { title: "Frontend", icon: <Code2 />, skills: ["Next.js", "React", "Tailwind"], color: "text-blue-400" },
    { title: "Embedded", icon: <Cpu />, skills: ["C/C++", "Arduino", "ESP32"], color: "text-purple-400" },
    { title: "Backend", icon: <Database />, skills: ["Node.js", "Java", "SQL"], color: "text-emerald-400" },
    { title: "Design", icon: <Figma />, skills: ["Figma", "Canva", "PCB Layout"], color: "text-pink-400" },
  ];

  return (
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 tracking-tighter">Technical <span className="text-gray-500 italic">Stack.</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 bg-white/[0.02] border border-white/10 rounded-[2.5rem] flex flex-col items-center text-center transition-all hover:border-white/20"
            >
              <div className={`mb-4 ${cat.color}`}>{cat.icon}</div>
              <h3 className="text-white font-bold mb-3">{cat.title}</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {cat.skills.map(s => (
                  <span key={s} className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}