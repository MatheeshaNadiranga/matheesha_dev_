
import { motion } from "framer-motion";
import { MapPin, Send, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Connect() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setIsSuccess(true);
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="relative w-full py-12 px-6 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

          {/* Left Side: Location Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-8 md:p-12 bg-white/[0.02] border border-white/10 rounded-[2.5rem] backdrop-blur-xl flex flex-col justify-between"
          >
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-cyan-500/10 blur-[100px] -z-10" />

            <div>
              <span className="text-xs font-bold tracking-[0.4em] uppercase text-cyan-400 mb-4 block">Deployment Base</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-6">
                Based in <span className="text-white/30 italic">Galle, SL</span>
              </h2>

              <div className="space-y-6 mt-8">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-500/50 transition-colors">
                    <MapPin size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-stone-500">Location</p>
                    <p className="text-sm font-medium text-white">Southern Province, Sri Lanka</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-purple-500/50 transition-colors">
                    <Clock size={20} className="text-purple-400" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-stone-500">Local Time</p>
                    <p className="text-sm font-medium text-white">UTC +5:30 (IST)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 relative h-40 w-full rounded-2xl bg-black/40 border border-white/5 overflow-hidden">
              <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
              <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-cyan-500 rounded-full blur-2xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_#fff]" />
              <div className="absolute bottom-3 left-4 text-[9px] font-mono text-stone-600 uppercase">Coord: 6.0535° N, 80.2210° E</div>
            </div>
          </motion.div>

          {/* Right Side: Working Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 bg-white/[0.02] border border-white/10 rounded-[2.5rem] backdrop-blur-xl relative"
          >
            <AnimatePresence>
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-stone-950/50 backdrop-blur-md rounded-[2.5rem] text-center p-6"
                >
                  <div className="w-20 h-20 bg-emerald-500/20 border border-emerald-500/50 rounded-full flex items-center justify-center mb-4 text-emerald-400">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Transmission Received</h3>
                  <p className="text-stone-400 text-sm">Thank you, Matheesha. I'll get back to you shortly.</p>
                  <button onClick={() => setIsSuccess(false)} className="mt-6 text-xs text-stone-500 underline uppercase tracking-widest">Send another</button>
                </motion.div>
              ) : null}
            </AnimatePresence>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                Send a Message <Send size={20} className="text-purple-500" />
              </h3>
              <p className="text-gray-400 text-sm font-light">Available for software development and hardware prototyping.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-stone-500 ml-2">Your Name</label>
                <input required name="name" type="text" placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-500/50 transition-all placeholder:text-stone-800" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-stone-500 ml-2">Email Address</label>
                <input required name="email" type="email" placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-500/50 transition-all placeholder:text-stone-800" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-stone-500 ml-2">Message</label>
                <textarea required name="message" rows={4} placeholder="Let's discuss your next big idea..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple-500/50 transition-all placeholder:text-stone-800 resize-none" />
              </div>

              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full group relative overflow-hidden bg-white text-black font-black uppercase text-xs tracking-widest py-5 rounded-2xl transition-all hover:bg-cyan-400 active:scale-95 disabled:opacity-50"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? "Processing..." : "Initialize Transmission"} <ArrowRight size={16} />
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
import { AnimatePresence } from "framer-motion";