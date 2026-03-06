
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Youtube,
  Twitter,
  Instagram,
  Facebook,
  MessageCircle,
  Send,
  Mail,
  ArrowUpRight
} from "lucide-react";
const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
const githubURL = import.meta.env.VITE_GITHUB_URL;
const linkedinURL = import.meta.env.VITE_LINKEDIN_URL;
const twitterURL = import.meta.env.VITE_TWITTER_URL;
const SOCIALS = [
  { name: "WhatsApp", icon: <MessageCircle size={24} />, link: `https://wa.me/${whatsappNumber}`, color: "hover:text-green-400" },
  { name: "LinkedIn", icon: <Linkedin size={24} />, link: linkedinURL, color: "hover:text-blue-400" },
  { name: "GitHub", icon: <Github size={24} />, link: githubURL, color: "hover:text-white" },
  { name: "Telegram", icon: <Send size={24} />, link: "#", color: "hover:text-sky-400" },
  { name: "Twitter (X)", icon: <Twitter size={24} />, link: twitterURL, color: "hover:text-stone-200" },
  { name: "Instagram", icon: <Instagram size={24} />, link: "#", color: "hover:text-pink-400" },
  { name: "Facebook", icon: <Facebook size={24} />, link: "#", color: "hover:text-blue-600" },
  { name: "YouTube", icon: <Youtube size={24} />, link: "#", color: "hover:text-red-500" },
];

export default function ContactMe() {
  return (
    <section className="relative p-6 md:p-12 flex items-center justify-center overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/5 blur-[120px] -z-10" />

      <div className="max-w-6xl w-full">
        <header className="mb-12 text-center md:text-left">
          <motion.h4
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-cyan-400 font-mono tracking-[0.4em] uppercase text-xs mb-4"
          >
            Transmission
          </motion.h4>
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white">
            Get in <span className="text-white/20 italic">Touch.</span>
          </h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Main Direct Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-1 p-8 bg-white/[0.03] border border-white/10 rounded-[2.5rem] backdrop-blur-xl flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 bg-cyan-500/20 rounded-2xl flex items-center justify-center text-cyan-400 mb-6">
                <Mail size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Direct Mail</h3>
              <p className="text-gray-400 font-light mb-8">
                For official inquiries and project collaborations.
              </p>
              <a
                href="mailto:matheeshanadiranga14@gmail.com"
                className="text-lg font-medium text-white hover:text-cyan-400 transition-colors break-all"
              >
                matheeshanadiranga14@gmail.com
              </a>
            </div>

            <div className="mt-12 p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl text-xs text-cyan-200 font-mono text-center">
              ESTABLISHED 2005 // LK
            </div>
          </motion.div>

          {/* Socials Grid Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 p-8 bg-white/[0.03] border border-white/10 rounded-[2.5rem] backdrop-blur-xl"
          >
            <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
              <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
              Social Network
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {SOCIALS.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="flex flex-col items-center justify-center p-6 bg-white/5 border border-white/5 rounded-3xl transition-all hover:bg-white/10 hover:border-white/20 group relative"
                >
                  <div className={`transition-colors duration-300 ${social.color} text-gray-400`}>
                    {social.icon}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-gray-500 mt-4 font-bold group-hover:text-white transition-colors">
                    {social.name}
                  </span>
                  <ArrowUpRight size={12} className="absolute top-4 right-4 text-gray-600 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          className="mt-16 text-center text-xs font-mono tracking-widest uppercase text-gray-500"
        >
          Designed & Built by Matheesha Nadiranga // 2026
        </motion.div>
      </div>
    </section>
  );
}