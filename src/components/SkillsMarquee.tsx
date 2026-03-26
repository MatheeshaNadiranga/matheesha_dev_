
import { motion } from "framer-motion";
import {
    Code2,
    Database,
    Terminal,
    Cpu,
    GitBranch,
    Smartphone,
    Layers,
    Server,
    Zap,
    Settings2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const skills = [
    { name: "React", icon: Code2, color: "#61DAFB" },
    { name: "React Native", icon: Smartphone, color: "#61DAFB" },
    { name: "Python", icon: Terminal, color: "#3776AB" },
    { name: "Spring Boot", icon: Layers, color: "#6DB33F" },
    { name: "C/C++", icon: Settings2, color: "#00599C" },
    { name: "Express.js", icon: Server, color: "#FFFFFF" },
    { name: "Node.js", icon: Server, color: "#339933" },
    { name: "JavaFX/EE", icon: Database, color: "#ED8B00" },
    { name: "Git/GitHub", icon: GitBranch, color: "#F05032" },
    { name: "MySQL", icon: Database, color: "#4479A1" },
    { name: "TypeScript", icon: Terminal, color: "#3178C6" },
    { name: "RestAPI", icon: Zap, color: "#FF6C37" },
    { name: "Electronics", icon: Zap, color: "#FBBF24" },
    { name: "Embedded System", icon: Cpu, color: "#10B981" },
    { name: "MongoDB", icon: Database, color: "#47A248" },
    { name: "Angular", icon: Terminal, color: "#F44336" }
];

function SkillPill({ name, icon: Icon, color }: { name: string; icon: LucideIcon; color: string }) {
    return (
        <div className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full whitespace-nowrap hover:bg-white/10 hover:border-white/20 transition-all group cursor-default select-none backdrop-blur-sm">
            <Icon size={20} style={{ color }} className="group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors uppercase tracking-wider">{name}</span>
        </div>
    )
}

export default function SkillsMarquee() {
    const allSkills = [...skills, ...skills];

    return (

        <section className="w-full py-14 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-10">

                {/* Header */}
                <div className="text-center mb-12">
                    <span className="text-xs font-bold tracking-[0.4em] uppercase text-cyan-400 mb-2 block">
                        Technical Stack
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">
                        The Arsenal
                    </h2>
                </div>

                {/* Marquee Container */}
                <div className="space-y-6">
                    {/* Row 1 — scrolls left */}
                    <div className="relative overflow-hidden group">
                        {/* Subtle Fade Edges */}
                        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-stone-950 to-transparent z-10 pointer-events-none" />
                        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-stone-950 to-transparent z-10 pointer-events-none" />

                        <motion.div
                            className="flex gap-4 w-max"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{
                                x: { repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" }
                            }}
                        >
                            {allSkills.map((skill, i) => (
                                <SkillPill key={`row1-${i}`} {...skill} />
                            ))}
                        </motion.div>
                    </div>

                    {/* Row 2 — scrolls right */}
                    <div className="relative overflow-hidden group">
                        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-stone-950 to-transparent z-10 pointer-events-none" />
                        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-stone-950 to-transparent z-10 pointer-events-none" />

                        <motion.div
                            className="flex gap-4 w-max"
                            animate={{ x: ["-50%", "0%"] }}
                            transition={{
                                x: { repeat: Infinity, repeatType: "loop", duration: 45, ease: "linear" }
                            }}
                        >
                            {[...allSkills].reverse().map((skill, i) => (
                                <SkillPill key={`row2-${i}`} {...skill} />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}