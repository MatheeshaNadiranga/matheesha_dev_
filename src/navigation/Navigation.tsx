
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import SideNav from "../components/SideNav";
import Home from "@/app/Home";
import About from "@/pages/About";
import DetailedProjects from "@/pages/DetailedProjects";
import Experience from "@/pages/Experience";
export default function Navigation() {
  const location = useLocation();

  return (
    <div className="relative min-h-[100svh] bg-transparent text-white selection:bg-cyan-500/30"
      style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 12px)" }}
    >
      <SideNav />

      <main className="w-full min-h-[100svh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<DetailedProjects />} />
              <Route path="/experience" element={<Experience />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}