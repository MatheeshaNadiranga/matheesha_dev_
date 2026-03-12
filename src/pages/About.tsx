
import { motion } from "framer-motion";
import { 
  Code2, 
  Cpu, 
  Globe, 
  GraduationCap, 
  Layers, 
  Milestone, 
  Terminal,
  ArrowUpRight,
  Download
} from "lucide-react";
import MyPhoto from "../components/MyPhoto";

const SKILLS = [
  { name: "Full-Stack Dev", icon: <Terminal size={16} />, color: "text-cyan-400", bg: "hover:bg-cyan-500/10" },
  { name: "Embedded Systems", icon: <Cpu size={16} />, color: "text-purple-400", bg: "hover:bg-purple-500/10" },
  { name: "IoT Architecture", icon: <Globe size={16} />, color: "text-emerald-400", bg: "hover:bg-emerald-500/10" },
  { name: "PCB Design", icon: <Layers size={16} />, color: "text-orange-400", bg: "hover:bg-orange-500/10" },
];

export default function About() {
  return (
    <section className="relative min-h-[100dvh] pt-24 pb-32 px-6 lg:px-12 overflow-hidden bg-white/[0.03]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-[-5%] left-[-5%] w-[30%] h-[30%] bg-cyan-500/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[30%] h-[30%] bg-purple-500/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-sm font-mono tracking-[0.3em] text-cyan-500 uppercase mb-2 flex items-center gap-2">
            <span className="w-8 h-[1px] bg-cyan-500" /> Discovery
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">About <span className="text-gray-500 italic">Me.</span></h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: The Identity Card */}
          <div className="lg:col-span-4 sticky lg:top-24 transition-transform duration-500">
            <MyPhoto />
          </div>

          {/* RIGHT: Detailed Information Bento Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Professional Summary Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-2 p-8 bg-white/[0.02] border border-white/10 rounded-[2.5rem] backdrop-blur-md hover:border-cyan-500/30 transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3 text-cyan-400">
                  <Code2 size={24} />
                  <h3 className="text-xl font-semibold">Technical Profile</h3>
                </div>
                <ArrowUpRight className="text-gray-600 group-hover:text-cyan-400 transition-colors" size={20} />
              </div>
              <p className="text-gray-400 leading-relaxed text-lg font-light">
                I am <span className="text-white font-medium">Matheesha Nadiranga</span>, 
                a <span className="text-cyan-300">Software & Electronic Engineering</span> HND Graduate Preparing for BSc/BEng (Topups). 
                I specialize in developing high-performance applications and hardware interfaces, focusing on the seamless integration of <span className="text-white">firmware</span> and <span className="text-white">web technologies</span>.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {SKILLS.map((skill, i) => (
                  <div key={i} className={`flex flex-col gap-3 p-4 bg-white/5 border border-white/5 rounded-2xl transition-all duration-300 ${skill.bg} cursor-default`}>
                    <div className={skill.color}>{skill.icon}</div>
                    <span className="text-xs font-medium text-gray-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 bg-white/[0.02] border border-white/10 rounded-[2.5rem] backdrop-blur-md hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-8 text-purple-400">
                <GraduationCap size={24} />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              
              <div className="space-y-8">
                <div className="relative pl-6 border-l border-white/10 group">
                  <div className="absolute -left-[5.5px] top-1 w-2.5 h-2.5 bg-purple-500 rounded-full group-hover:scale-150 transition-transform shadow-[0_0_8px_#a855f7]" />
                  <h4 className="text-white font-bold leading-none">Higher Diploma </h4>
                  <p className="text-sm text-gray-400 mt-2 italic">Software Engineering</p>
                  <p className="text-[11px] text-gray-500 mt-1">ACPT - Sri Lanka</p>
                  <span className="text-[9px] text-purple-400/70 font-mono mt-2 block tracking-widest uppercase">Completed 2026 - Present</span>
                </div>

                <div className="relative pl-6 border-l border-white/10 group">
                  <div className="absolute -left-[5.5px] top-1 w-2.5 h-2.5 bg-cyan-500 rounded-full group-hover:scale-150 transition-transform shadow-[0_0_8px_#06b6d4]" />
                  <h4 className="text-white font-bold leading-none">Higher National Diploma (HND)</h4>
                  <p className="text-sm text-gray-400 mt-2 italic">Electronic and Electrical Engineering</p>
                  <p className="text-[11px] text-gray-500 mt-1">Pearson Level 5 Program</p>
                  <span className="text-[9px] text-cyan-400/70 font-mono mt-2 block tracking-widest uppercase">Completing 2027 - Ongoing</span>
                </div>
              </div>
            </motion.div>

            {/* Approach Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 bg-white/[0.02] border border-white/10 rounded-[2.5rem] backdrop-blur-md hover:border-orange-500/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-8 text-orange-400">
                <Milestone size={24} />
                <h3 className="text-xl font-semibold">Approach</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Optimized firmware performance",
                  "Scalable IoT infrastructure",
                  "Clean, maintainable codebase",
                  "Cross-platform integration"
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-400 group cursor-default">
                    <div className="w-1.5 h-1.5 bg-orange-500/30 group-hover:bg-orange-500 rounded-full transition-colors" />
                    <span className="group-hover:text-white transition-colors">{text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Shimmer Button Section */}
            <div className="md:col-span-2 flex justify-center pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden group px-8 py-4 bg-white text-black rounded-full font-bold flex items-center gap-2 transition-all"
              >
                {/* Shimmer Effect */}
                <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-[45deg] -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                
                <Download size={18} />
                Download Full Resume
              </motion.button>
            </div>

          </div>
        </div>
      </div>

      {/* Tailwind Custom Keyframe in Style Tag (if needed) */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-150%) skewX(-45deg); }
          100% { transform: translateX(250%) skewX(-45deg); }
        }
      `}</style>
    </section>
  );
}