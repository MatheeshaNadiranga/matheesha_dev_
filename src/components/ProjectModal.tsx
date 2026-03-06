
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Code } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

type Project = {
    title: string;
    category: string;
    description: string;
    tech: string[];
    image: string;
    link: string;
};

type ProjectModalProps = {
    project: Project | null;
    onClose: () => void;
};

const emptySubscribe = () => () => { };
function useIsClient() {
    return useSyncExternalStore(
        emptySubscribe,
        () => true,
        () => false
    );
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    const isClient = useIsClient();

    // Handle Body Scroll Lock
    useEffect(() => {
        if (project) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [project]);

    // Handle Escape Key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    // Safely return null if on server to prevent Hydration Mismatch
    if (!isClient) return null;

    return createPortal(
        <AnimatePresence>
            {project && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-xl"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative z-[10000] w-full max-w-5xl max-h-[90dvh] overflow-y-auto bg-stone-950/90 border border-white/10 rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden scrollbar-hide"
                    >
                        {/* Cyber Accent Line */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />

                        {/* Mobile Close */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-20 p-2 bg-black/50 backdrop-blur-md rounded-full text-white md:hidden border border-white/10"
                        >
                            <X size={20} />
                        </button>

                        {/* Left: Image Section */}
                        <div className="w-full md:w-[45%] h-64 md:h-auto relative bg-gray-900 overflow-hidden group">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                            <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                                {project.tech.slice(0, 3).map((t) => (
                                    <span key={t} className="px-2 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded text-[10px] text-cyan-300 font-mono uppercase tracking-wider">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Right: Info Section */}
                        <div className="w-full md:w-[55%] p-6 md:p-10 flex flex-col relative">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-cyan-400 mb-2 block">
                                        {project.category}
                                    </span>
                                    <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
                                        {project.title}
                                    </h2>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="hidden md:block p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-all"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-6" />

                            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 flex-grow">
                                {project.description}
                            </p>

                            <div className="mb-8 p-4 bg-white/5 rounded-xl border border-white/5">
                                <h3 className="text-xs font-semibold text-white/50 mb-3 flex items-center gap-2 uppercase tracking-widest">
                                    <Code size={14} /> Technology Stack
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t) => (
                                        <span key={t} className="px-3 py-1 bg-black/40 border border-white/10 rounded text-xs text-gray-300">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-auto flex gap-4">
                                <Link
                                    to={project.link}
                                    className="flex-1 bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/20 active:scale-95"
                                >
                                    Live Demo <ExternalLink size={18} />
                                </Link>
                                <Link
                                    to={project.link}
                                    className="flex-1 bg-white/5 border border-white/10 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-all active:scale-95"
                                >
                                    GitHub <Github size={18} />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
}