
import { motion } from "framer-motion";
import { 
  Globe, 
  Wifi, 
  Video, 
  Clock, 
  Zap, 
  ShieldCheck, 
  MapPin 
} from "lucide-react";

export default function RemoteReady() {
  const stats = [
    { icon: <Wifi size={18} />, label: "Connectivity", value: "High-Speed Fiber" },
    { icon: <Clock size={18} />, label: "Timezone", value: "UTC +5:30" },
    { icon: <Video size={18} />, label: "Availability", value: "Sync & Async" },
    { icon: <ShieldCheck size={18} />, label: "Setup", value: "Secure & Private" },
  ];

  return (
    <section className="relative p-6 md:p-12 flex items-center justify-center overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/5 blur-[120px] -z-10" />

      <div className="max-w-5xl w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative p-8 md:p-12 bg-white/[0.02] border border-white/10 rounded-[2.5rem] backdrop-blur-xl overflow-hidden"
        >
          {/* Status Indicator */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-400 font-mono text-xs uppercase tracking-[0.3em]">
                  Available for Remote Ops
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
                Remote Work <span className="text-white/40">Ready.</span>
              </h2>
              
              <p className="text-gray-400 max-w-md leading-relaxed font-light">
                Equipped with a professional-grade lab and high-bandwidth infrastructure 
                to collaborate seamlessly across borders. 
              </p>

              <div className="flex items-center gap-2 text-sm text-stone-500 font-mono">
                <MapPin size={14} /> Based in Galle, Sri Lanka
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
              {stats.map((stat, i) => (
                <div 
                  key={i} 
                  className="p-4 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/[0.08] transition-colors group"
                >
                  <div className="text-emerald-500 mb-2 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <p className="text-[10px] uppercase tracking-widest text-stone-500 mb-1">
                    {stat.label}
                  </p>
                  <p className="text-sm font-semibold text-gray-200">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Infrastructure Bar */}
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             <div className="flex items-center gap-2 text-xs font-bold tracking-widest">
                <Globe size={16} /> GLOBAL COLLABORATION
             </div>
             <div className="flex items-center gap-2 text-xs font-bold tracking-widest">
                <Zap size={16} /> AGILE WORKFLOW
             </div>
             <div className="hidden md:block h-1 w-1 bg-white/20 rounded-full" />
             <p className="text-[10px] font-mono italic">
                Slack • Zoom • GitHub • Jira • Docker • VPN Secured
             </p>
          </div>

          {/* Decorative Corner Accent */}
          <div className="absolute top-0 right-0 p-4 opacity-20">
            <div className="w-16 h-16 border-t-2 border-r-2 border-emerald-500 rounded-tr-3xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}