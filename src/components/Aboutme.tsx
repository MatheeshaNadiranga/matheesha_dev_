
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
    User,
    Mail,
    Cake,
    Cpu,
    Terminal,
    Sparkles,
    Briefcase,
    CircuitBoard,
    Wrench,
    Zap,
} from "lucide-react";

const ROLES = [
    "Electronic Engineer",
    "Embedded Systems Engineer",
    "PCB Design Engineer",
    "Industrial Controller Designer",
];

export default function AboutMe() {
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }, 2200);

        return () => clearInterval(interval);
    }, []);

    const details = [
        {
            icon: <User size={18} />,
            label: "Name",
            value: "Matheesha Nadiranga De Silva",
        },
        {
            icon: <Cake size={18} />,
            label: "Birthday",
            value: "2005/03/18",
        },
        {
            icon: <Mail size={18} />,
            label: "Email",
            value: "matheeshanadiranga14@gmail.com",
            email: true,
        },
        {
            icon: <Briefcase size={18} />,
            label: "Current Role",
            value: "Electronic Engineer at Iconic Devices",
        },
    ];

    return (
        <section className="relative min-h-[100dvh] w-full overflow-x-hidden bg-transparent px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-16 sm:pb-20 text-white flex flex-col justify-center items-center">

            {/* ================= BACKGROUND EFFECTS ================= */}

            <div
                className="absolute top-[15%] left-[5%] sm:left-[15%] w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full bg-cyan-500/10 blur-[100px] lg:blur-[120px] pointer-events-none -z-10"
                aria-hidden="true"
            />

            <div
                className="absolute bottom-[10%] right-[5%] sm:right-[15%] w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full bg-purple-500/10 blur-[100px] lg:blur-[120px] pointer-events-none -z-10"
                aria-hidden="true"
            />

            {/* ================= MAIN CONTAINER ================= */}

            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">

                {/* =========================================================
                    LEFT SIDE
                ========================================================= */}

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-7 w-full space-y-7 sm:space-y-8"
                >
                    {/* Heading */}
                    <div className="w-full">
                        <h4 className="text-cyan-400 font-mono tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[10px] sm:text-xs mb-4 flex items-center gap-2">
                            <Sparkles size={13} className="shrink-0" />
                            Electronic & Embedded Engineer
                        </h4>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.05]">
                            I am a
                        </h1>

                        {/* Rotating Role */}
                        <div className="relative mt-3 w-full min-h-[3.2rem] sm:min-h-[4rem] md:min-h-[4.5rem] lg:min-h-[5.5rem] overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={ROLES[roleIndex]}
                                    initial={{
                                        opacity: 0,
                                        y: 15,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        y: -15,
                                    }}
                                    transition={{
                                        duration: 0.35,
                                    }}
                                    className="
                                        block
                                        max-w-full
                                        text-3xl
                                        sm:text-4xl
                                        md:text-5xl
                                        lg:text-6xl
                                        font-bold
                                        tracking-tight
                                        leading-tight
                                        text-transparent
                                        bg-clip-text
                                        bg-gradient-to-r
                                        from-cyan-400
                                        via-white
                                        to-purple-500
                                        break-words
                                        pr-2
                                    "
                                >
                                    {ROLES[roleIndex]}
                                </motion.span>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-4 max-w-2xl">
                        <p className="text-gray-300/85 text-base sm:text-lg leading-relaxed font-light">
                            I am an Electronic Engineer focused on designing and
                            developing
                            <span className="text-cyan-300 font-medium">
                                {" "}embedded systems, industrial controllers,
                                and custom PCBs.
                            </span>
                        </p>

                        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                            My work combines electronics, embedded programming,
                            hardware architecture, PCB design, industrial
                            communication, low-power design, and mechanical
                            engineering to develop practical real-world products.
                        </p>

                        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                            Currently working as an
                            <span className="text-gray-200 font-medium">
                                {" "}Electronic Engineer at Iconic Devices
                            </span>,
                            with hands-on experience across STM32, ESP32,
                            AVR, ATmega, PIC and other embedded platforms.
                        </p>
                    </div>

                    {/* ================= SKILL TAGS ================= */}

                    <div className="flex flex-wrap gap-2.5 sm:gap-3 pt-1">

                        <div className="flex items-center gap-2 px-3.5 sm:px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] sm:text-xs font-mono backdrop-blur-md hover:bg-white/10 transition-colors">
                            <CircuitBoard
                                size={14}
                                className="text-cyan-400 shrink-0"
                            />
                            PCB Design
                        </div>

                        <div className="flex items-center gap-2 px-3.5 sm:px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] sm:text-xs font-mono backdrop-blur-md hover:bg-white/10 transition-colors">
                            <Cpu
                                size={14}
                                className="text-purple-400 shrink-0"
                            />
                            Embedded Systems
                        </div>

                        <div className="flex items-center gap-2 px-3.5 sm:px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] sm:text-xs font-mono backdrop-blur-md hover:bg-white/10 transition-colors">
                            <Zap
                                size={14}
                                className="text-yellow-400 shrink-0"
                            />
                            Low Power
                        </div>

                        <div className="flex items-center gap-2 px-3.5 sm:px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] sm:text-xs font-mono backdrop-blur-md hover:bg-white/10 transition-colors">
                            <Wrench
                                size={14}
                                className="text-orange-400 shrink-0"
                            />
                            Industrial Control
                        </div>

                        <div className="flex items-center gap-2 px-3.5 sm:px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] sm:text-xs font-mono backdrop-blur-md hover:bg-white/10 transition-colors">
                            <Terminal
                                size={14}
                                className="text-green-400 shrink-0"
                            />
                            Firmware Development
                        </div>
                    </div>
                </motion.div>

                {/* =========================================================
                    RIGHT SIDE
                ========================================================= */}

                <div className="lg:col-span-5 w-full flex flex-col gap-5 sm:gap-6">

                    {/* ================= PROFILE CARD ================= */}

                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            delay: 0.1,
                            duration: 0.6,
                        }}
                        className="
                            w-full
                            p-5
                            sm:p-6
                            md:p-8
                            bg-white/[0.03]
                            border
                            border-white/10
                            hover:border-cyan-400/30
                            transition-colors
                            duration-300
                            rounded-[1.5rem]
                            sm:rounded-[2rem]
                            backdrop-blur-xl
                            shadow-lg
                        "
                    >
                        <h3 className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] sm:tracking-widest mb-5 sm:mb-6 text-gray-500 flex items-center gap-2">
                            <div className="w-5 sm:w-6 h-[1px] bg-cyan-500 shrink-0" />
                            Profile
                        </h3>

                        <div className="space-y-5 sm:space-y-6">

                            {details.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 sm:gap-4 min-w-0"
                                >
                                    {/* Icon */}
                                    <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center shrink-0 bg-white/5 rounded-xl text-cyan-400 border border-white/10">
                                        {item.icon}
                                    </div>

                                    {/* Text */}
                                    <div className="min-w-0 flex-1">
                                        <p className="text-[8px] sm:text-[9px] uppercase tracking-[0.15em] sm:tracking-widest text-gray-500 leading-none mb-1.5">
                                            {item.label}
                                        </p>

                                        <p
                                            className={`text-xs sm:text-sm md:text-base font-medium text-gray-200 leading-relaxed ${
                                                item.email
                                                    ? "break-all"
                                                    : "break-words"
                                            }`}
                                        >
                                            {item.value}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* ================= EDUCATION CARD ================= */}

                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            delay: 0.2,
                            duration: 0.6,
                        }}
                        className="
                            w-full
                            p-5
                            sm:p-6
                            md:p-8
                            bg-white/[0.03]
                            border
                            border-white/10
                            hover:border-purple-400/30
                            transition-colors
                            duration-300
                            rounded-[1.5rem]
                            sm:rounded-[2rem]
                            backdrop-blur-xl
                            shadow-lg
                        "
                    >
                        <h3 className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] sm:tracking-widest mb-5 sm:mb-6 text-gray-500 flex items-center gap-2">
                            <div className="w-5 sm:w-6 h-[1px] bg-purple-500 shrink-0" />
                            Education
                        </h3>

                        <div className="space-y-6">

                            <div className="relative pl-5 sm:pl-6 border-l border-white/10">

                                <div className="absolute -left-[4.5px] top-1.5 w-2 h-2 bg-purple-500 rounded-full" />

                                <h4 className="text-gray-200 font-semibold text-sm sm:text-base leading-tight">
                                    Pearson HND in Mechatronics
                                </h4>

                                <p className="text-[9px] sm:text-xs text-gray-500 uppercase mt-1.5 tracking-wider">
                                    Currently Following
                                </p>
                            </div>

                        </div>
                    </motion.div>

                    {/* ================= TECHNICAL EXPERTISE ================= */}

                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            delay: 0.3,
                            duration: 0.6,
                        }}
                        className="
                            w-full
                            p-5
                            sm:p-6
                            md:p-8
                            bg-white/[0.03]
                            border
                            border-white/10
                            hover:border-cyan-400/30
                            transition-colors
                            duration-300
                            rounded-[1.5rem]
                            sm:rounded-[2rem]
                            backdrop-blur-xl
                            shadow-lg
                        "
                    >
                        <h3 className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] sm:tracking-widest mb-5 sm:mb-6 text-gray-500 flex items-center gap-2">
                            <div className="w-5 sm:w-6 h-[1px] bg-cyan-500 shrink-0" />
                            Technical Expertise
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">

                            {/* Electronics */}
                            <div className="min-w-0">
                                <p className="text-xs sm:text-sm text-gray-300 font-medium">
                                    Electronics
                                </p>

                                <p className="text-[10px] sm:text-xs text-gray-500 mt-1 leading-relaxed">
                                    Analog & Digital Design
                                </p>
                            </div>

                            {/* PCB */}
                            <div className="min-w-0">
                                <p className="text-xs sm:text-sm text-gray-300 font-medium">
                                    PCB Design
                                </p>

                                <p className="text-[10px] sm:text-xs text-gray-500 mt-1 leading-relaxed">
                                    Altium & KiCad
                                </p>
                            </div>

                            {/* Embedded */}
                            <div className="min-w-0">
                                <p className="text-xs sm:text-sm text-gray-300 font-medium">
                                    Embedded Systems
                                </p>

                                <p className="text-[10px] sm:text-xs text-gray-500 mt-1 leading-relaxed">
                                    STM32 · ESP32
                                </p>
                            </div>

                            {/* Microcontrollers */}
                            <div className="min-w-0">
                                <p className="text-xs sm:text-sm text-gray-300 font-medium">
                                    Microcontrollers
                                </p>

                                <p className="text-[10px] sm:text-xs text-gray-500 mt-1 leading-relaxed">
                                    AVR · ATmega · PIC
                                </p>
                            </div>

                            {/* Communication */}
                            <div className="min-w-0">
                                <p className="text-xs sm:text-sm text-gray-300 font-medium">
                                    Communication
                                </p>

                                <p className="text-[10px] sm:text-xs text-gray-500 mt-1 leading-relaxed">
                                    UART · SPI · I²C · RS485
                                </p>
                            </div>

                            {/* Industrial */}
                            <div className="min-w-0">
                                <p className="text-xs sm:text-sm text-gray-300 font-medium">
                                    Industrial Systems
                                </p>

                                <p className="text-[10px] sm:text-xs text-gray-500 mt-1 leading-relaxed">
                                    Controller & I/O Design
                                </p>
                            </div>

                            {/* Low Power */}
                            <div className="min-w-0">
                                <p className="text-xs sm:text-sm text-gray-300 font-medium">
                                    Power Design
                                </p>

                                <p className="text-[10px] sm:text-xs text-gray-500 mt-1 leading-relaxed">
                                    Low-Power Electronics
                                </p>
                            </div>

                            {/* Mechanical */}
                            <div className="min-w-0">
                                <p className="text-xs sm:text-sm text-gray-300 font-medium">
                                    Mechanical CAD
                                </p>

                                <p className="text-[10px] sm:text-xs text-gray-500 mt-1 leading-relaxed">
                                    SolidWorks
                                </p>
                            </div>

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}


