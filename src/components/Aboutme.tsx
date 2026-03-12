
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { User, Mail, Cake, Cpu, Terminal, Sparkles } from "lucide-react";

const ROLES = ["Software Engineer", "Embedded Developer", "Electronic Designer"];

export default function AboutMe() {
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const details = [
        { icon: <User size={18} />, label: "Name", value: "Matheesha Nadiranga" },
        { icon: <Cake size={18} />, label: "Birthday", value: "2005/03/18" },
        { icon: <Mail size={18} />, label: "Email", value: "matheeshanadiranga14@gmail.com" },
    ];

    return (
        <section className="bg-transparent min-h-[100dvh] relative min-h-screen text-white p-6 overflow-hidden flex flex-col justify-center items-center pt-32 pb-20">

            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full -z-10 pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full -z-10 pointer-events-none" />

            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                {/* Left Side: Text Content (Takes 7 out of 12 columns on large screens) */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:col-span-7 space-y-8"
                >
                    <div>
                        <h4 className="text-cyan-400 font-mono tracking-[0.3em] uppercase text-xs mb-4 flex items-center gap-2">
                            <Sparkles size={14} /> Introduction
                        </h4>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-tight">
                            I am a <br />
                            <span className="relative inline-block mt-2 min-h-[1.2em] w-full">
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={ROLES[roleIndex]}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="absolute left-0 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-500 whitespace-nowrap"
                                    >
                                        {ROLES[roleIndex]}
                                    </motion.span>
                                </AnimatePresence>
                            </span>
                        </h1>
                    </div>

                    <p className="text-gray-300/80 text-base md:text-lg leading-relaxed max-w-xl font-light">
                        I bridge the gap between hardware and software—crafting seamless
                        Full-stack web applications and complex Embedded Systems with a focus on
                        <span className="text-cyan-300 font-medium"> AI and IoT</span>.
                    </p>

                    <div className="flex flex-wrap gap-3 pt-2">
                        <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-mono backdrop-blur-md transition-colors hover:bg-white/10 cursor-default">
                            <Cpu size={14} className="text-cyan-400" /> IoT Ecosystems
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-mono backdrop-blur-md transition-colors hover:bg-white/10 cursor-default">
                            <Terminal size={14} className="text-purple-400" /> Full Stack Dev
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Information Cards (Takes 5 out of 12 columns on large screens) */}
                <div className="lg:col-span-5 flex flex-col gap-6 w-full">
                    
                    {/* Bio Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="p-6 md:p-8 bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors duration-300 rounded-[2rem] backdrop-blur-xl shadow-lg w-full"
                    >
                        <h3 className="text-[10px] font-bold uppercase tracking-widest mb-6 text-gray-500 flex items-center gap-2">
                            <div className="w-6 h-[1px] bg-cyan-500" /> Biography
                        </h3>
                        <div className="space-y-6">
                            {details.map((item, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="w-10 h-10 flex items-center justify-center shrink-0 bg-white/5 rounded-xl text-cyan-400 border border-white/10">
                                        {item.icon}
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="text-[9px] uppercase tracking-widest text-gray-500 leading-none mb-1.5">{item.label}</p>
                                        {/* break-all ensures long emails wrap to the next line safely on small screens */}
                                        <p className="text-sm md:text-base font-medium text-gray-200 break-all">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Education Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="p-6 md:p-8 bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors duration-300 rounded-[2rem] backdrop-blur-xl shadow-lg w-full"
                    >
                        <h3 className="text-[10px] font-bold uppercase tracking-widest mb-6 text-gray-500 flex items-center gap-2">
                            <div className="w-6 h-[1px] bg-purple-500" /> Education
                        </h3>
                        <div className="space-y-6">
                            <div className="relative pl-6 border-l border-white/10">
                                <div className="absolute -left-[4.5px] top-1.5 w-2 h-2 bg-purple-500 rounded-full" />
                                <h4 className="text-gray-200 font-semibold text-sm md:text-base leading-tight">Software Engineering</h4>
                                <p className="text-[10px] md:text-xs text-gray-500 uppercase mt-1.5 tracking-wider">ACPT - HDSE</p>
                            </div>
                            <div className="relative pl-6 border-l border-white/10">
                                <div className="absolute -left-[4.5px] top-1.5 w-2 h-2 bg-cyan-500 rounded-full" />
                                <h4 className="text-gray-200 font-semibold text-sm md:text-base leading-tight">Electronic Engineering</h4>
                                <p className="text-[10px] md:text-xs text-gray-500 uppercase mt-1.5 tracking-wider">Pearson HND</p>
                            </div>
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}