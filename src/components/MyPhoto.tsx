
import { motion } from "framer-motion";
import { MapPin, Zap } from "lucide-react";
import profilePic from "../assets/profile.png"; 

export default function MyPhoto() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            
            className="relative group w-full max-w-sm mx-auto flex flex-col p-3 bg-white/[0.03] border border-white/10 rounded-[2.5rem] backdrop-blur-xl shadow-2xl hover:border-white/20 transition-colors duration-500"
        >
            
            <div className="relative aspect-square w-full overflow-hidden rounded-[2rem] border border-white/5 bg-black/20">
                <img
                    src={profilePic}
                    alt="Matheesha Nadiranga"
                    
                    className="w-full h-full object-cover object-center grayscale-[0.4] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
                
                
                <div className="absolute top-4 right-4 px-3 py-1.5 bg-black/40 backdrop-blur-md border border-white/10 rounded-full flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-widest font-bold">Online</span>
                </div>
            </div>

            
            <div className="pt-6 pb-4 px-4 text-center">
                <h3 className="text-xl font-bold text-white tracking-tight mb-1">
                    Matheesha Nadiranga
                </h3>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-xs font-mono uppercase tracking-widest mb-4 font-bold">
                    Hardware ✖ Software
                </p>
                
                <p className="text-sm text-gray-400 font-light leading-relaxed mb-6 px-2">
                    Architecting intelligent, connected solutions by pushing the boundaries of Embedded Systems and Full-Stack Engineering.
                </p>

                
                <div className="flex items-center justify-center gap-4 text-xs font-medium text-gray-500 border-t border-white/5 pt-5">
                    <span className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors cursor-default">
                        <MapPin size={14} /> Sri Lanka
                    </span>
                    <div className="w-1 h-1 bg-white/20 rounded-full" />
                    <span className="flex items-center gap-1.5 hover:text-purple-300 transition-colors cursor-default">
                        <Zap size={14} /> Innovating
                    </span>
                </div>
            </div>
        </motion.div>
    );
}