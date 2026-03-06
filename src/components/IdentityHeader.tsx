
import { motion } from "framer-motion";
import { Terminal, Cpu, Zap, Globe } from "lucide-react";

export default function IdentityHeader() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[100] p-3 md:p-6 pointer-events-none">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="max-w-7xl mx-auto flex items-center justify-between"
      >
        {/* Identity Pill */}
        <div className="flex items-center gap-2 md:gap-3 px-3 py-2 md:px-4 md:py-2 bg-black/60 backdrop-blur-2xl border border-white/10 rounded-xl md:rounded-2xl pointer-events-auto shadow-2xl">
          <div className="relative">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg md:rounded-xl flex items-center justify-center text-white">
              <Terminal size={16} className="md:w-5 md:h-5" />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 border-2 border-stone-950 rounded-full animate-pulse" />
          </div>

          <div className="flex flex-col">
            <h1 className="text-white font-bold tracking-tighter leading-none text-xs md:text-base">
              Matheesha Nadiranga
            </h1>
            <p className="text-[7px] md:text-[10px] font-mono text-cyan-400 uppercase tracking-widest mt-0.5 md:mt-1 flex items-center gap-1">
              <Cpu size={8} className="md:w-3 md:h-3" /> Software & Electronic Engineer
            </p>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-4 px-5 py-2.5 bg-white/[0.03] border border-white/10 rounded-2xl backdrop-blur-xl text-white/40 font-mono text-[10px] uppercase tracking-[0.2em] pointer-events-auto">
            <div className="flex items-center gap-2">
                <Globe size={12} className="text-purple-500" /> Galle, LK
            </div>
            <div className="w-[1px] h-3 bg-white/10" />
            <div className="flex items-center gap-2">
                <Zap size={12} className="text-cyan-400" /> System_Online
            </div>
        </div>
      </motion.div>
    </div>
  );
}