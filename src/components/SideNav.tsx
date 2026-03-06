
import { NavLink } from "react-router-dom"; 
import { motion } from "framer-motion";
import {
    Home,
    User,
    Terminal,
    Briefcase, 

} from "lucide-react";

const navItems = [
    { name: "Home", path: "/", icon: <Home size={20} /> },
    { name: "About", path: "/about", icon: <User size={20} /> },
    { name: "Projects", path: "/projects", icon: <Terminal size={20} /> },
    { name: "Experience", path: "/experience", icon: <Briefcase size={20} /> },
]

export default function SideNav() {
    return (
        <motion.nav
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed z-50 
                       bottom-6 left-1/2 -translate-x-1/2 flex flex-row w-[calc(100%-3rem)] max-w-sm justify-between px-6 py-4 
                       md:top-1/2 md:bottom-auto md:left-8 md:-translate-y-1/2 md:-translate-x-0 md:flex-col md:w-auto md:h-auto md:px-4 md:py-8 md:gap-8 
                       bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl md:rounded-[2rem] rounded-full"
        >
            {navItems.map((item) => (
                <NavLink
                    key={item.name}
                    to={item.path}
                    className={({ isActive }) =>
                        `relative group flex items-center justify-center p-3 rounded-xl transition-all duration-300 
                        ${isActive ? "text-cyan-400" : "text-gray-500 group-hover:text-gray-200"}`
                    }
                >
                    {/* The NavLink "isActive" state automatically triggers the motion background */}
                    {({ isActive }) => (
                        <>
                            {isActive && (
                                <motion.div
                                    layoutId="navIndicator"
                                    className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-xl border border-white/10"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}

                            <div className="relative z-10">
                                {item.icon}
                            </div>

                            {/* Desktop Tooltip */}
                            <div className="absolute left-full ml-6 px-3 py-1.5 bg-white/10 text-white text-[10px] uppercase tracking-widest font-bold rounded-lg opacity-0 -translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hidden md:block backdrop-blur-md border border-white/10">
                                {item.name}
                            </div>
                        </>
                    )}
                </NavLink>
            ))}
        </motion.nav>
    );
}