import { motion } from "framer-motion";
import {
    Cpu,
    CircuitBoard,
    Terminal,
    GitBranch,
    Layers,
    Zap,
    Settings2,
    Radio,
    Cable,
    Database,
    Monitor,
    Gauge,
    BatteryCharging,
    Cog,
    Wrench,
    Box,
    HardDrive,
    Usb,
    Rss,
    Code,
    Activity,
    Factory,
    Network,
    ShieldCheck,
    RotateCw,
    Server,
    Cloud,
    Container,
    Bot,
    BrainCircuit,
    MessageSquare,
    Workflow,
    Braces,
    Palette,
    Smartphone,
    Lock,
    Boxes,
    Bug,
    Binary,
    Sparkles,
    Globe,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

/* ============================================================
   TYPES
   ============================================================ */

type Skill = {
    name: string;
    icon: LucideIcon;
    color: string;
};

/* ============================================================
   ROW 1: ELECTRONICS / EMBEDDED / HARDWARE
   ============================================================ */

const hardwareSkills: Skill[] = [

    /* ===================== ELECTRONICS ===================== */

    { name: "Analog Electronics", icon: CircuitBoard, color: "#06b6d4" },
    { name: "Digital Electronics", icon: CircuitBoard, color: "#22d3ee" },
    { name: "Circuit Design", icon: Settings2, color: "#38bdf8" },
    { name: "Signal Conditioning", icon: Activity, color: "#60a5fa" },
    { name: "Op-Amp Circuits", icon: Zap, color: "#fbbf24" },
    { name: "Transistor Circuits", icon: Settings2, color: "#f59e0b" },
    { name: "Sensor Interfaces", icon: Gauge, color: "#34d399" },

    /* ======================= PCB ========================== */

    { name: "PCB Design", icon: CircuitBoard, color: "#06b6d4" },
    { name: "Altium Designer", icon: CircuitBoard, color: "#8b5cf6" },
    { name: "KiCad", icon: CircuitBoard, color: "#3b82f6" },
    { name: "Schematic Design", icon: Layers, color: "#22d3ee" },
    { name: "PCB Layout", icon: Layers, color: "#a78bfa" },
    { name: "Multilayer PCB", icon: CircuitBoard, color: "#f472b6" },
    { name: "PCB Manufacturing", icon: Factory, color: "#fb923c" },
    { name: "DFM", icon: Settings2, color: "#facc15" },

    /* ==================== EMBEDDED ======================== */

    { name: "Embedded Systems", icon: Cpu, color: "#10b981" },
    { name: "Embedded C", icon: Code, color: "#22c55e" },
    { name: "Embedded C++", icon: Code, color: "#3b82f6" },
    { name: "Firmware Development", icon: Terminal, color: "#a855f7" },
    { name: "STM32", icon: Cpu, color: "#06b6d4" },
    { name: "ESP32", icon: Cpu, color: "#f97316" },
    { name: "AVR", icon: Cpu, color: "#60a5fa" },
    { name: "ATmega", icon: Cpu, color: "#38bdf8" },
    { name: "PIC", icon: Cpu, color: "#22c55e" },

    /* ================= COMMUNICATION ====================== */

    { name: "UART", icon: Cable, color: "#06b6d4" },
    { name: "SPI", icon: Cable, color: "#8b5cf6" },
    { name: "I²C", icon: Cable, color: "#a855f7" },
    { name: "RS485", icon: Network, color: "#14b8a6" },
    { name: "USB", icon: Usb, color: "#3b82f6" },
    { name: "Wireless IoT", icon: Radio, color: "#06b6d4" },
    { name: "Wi-Fi", icon: Rss, color: "#38bdf8" },

    /* ===================== INDUSTRIAL ===================== */

    { name: "Industrial Controllers", icon: Factory, color: "#f97316" },
    { name: "Industrial I/O", icon: Network, color: "#fb923c" },
    { name: "Digital Inputs", icon: Cable, color: "#22c55e" },
    { name: "Digital Outputs", icon: Cable, color: "#84cc16" },
    { name: "Analog Inputs", icon: Activity, color: "#06b6d4" },
    { name: "0–10V Input", icon: Gauge, color: "#38bdf8" },
    { name: "4–20mA Input", icon: Gauge, color: "#a855f7" },
    { name: "Transistor Outputs", icon: Zap, color: "#f59e0b" },

    /* ================= DISPLAY / STORAGE ================== */

    { name: "OLED Displays", icon: Monitor, color: "#22d3ee" },
    { name: "TFT / LCD", icon: Monitor, color: "#60a5fa" },
    { name: "SD Card", icon: HardDrive, color: "#10b981" },
    { name: "SPI Peripherals", icon: Layers, color: "#a855f7" },
    { name: "USB Devices", icon: Usb, color: "#3b82f6" },

    /* ================= POWER / BATTERY ==================== */

    { name: "Power Electronics", icon: Zap, color: "#fbbf24" },
    { name: "Low Power Design", icon: BatteryCharging, color: "#22c55e" },
    { name: "Power Supply Design", icon: BatteryCharging, color: "#f59e0b" },
    { name: "DC-DC Concepts", icon: Zap, color: "#f97316" },
    { name: "Battery Systems", icon: BatteryCharging, color: "#84cc16" },
    { name: "MPPT Concepts", icon: Gauge, color: "#eab308" },

    /* ===================== DEBUGGING ======================= */

    { name: "Hardware Debugging", icon: Wrench, color: "#f97316" },
    { name: "Firmware Debugging", icon: Terminal, color: "#a855f7" },
    { name: "Serial Debugging", icon: Terminal, color: "#06b6d4" },
    { name: "Logic Analysis", icon: Activity, color: "#22d3ee" },
    { name: "Oscilloscope", icon: Activity, color: "#10b981" },
    { name: "Multimeter", icon: Gauge, color: "#facc15" },

    /* ===================== ENGINEERING ===================== */

    { name: "Hardware Prototyping", icon: Wrench, color: "#fb923c" },
    { name: "System Architecture", icon: Layers, color: "#8b5cf6" },
    { name: "Embedded Architecture", icon: Cpu, color: "#06b6d4" },
    { name: "Interface Design", icon: Network, color: "#14b8a6" },
    { name: "Technical Documentation", icon: Database, color: "#94a3b8" },
    { name: "Design Verification", icon: ShieldCheck, color: "#22c55e" },

    /* ======================== CAD ========================== */

    { name: "SolidWorks", icon: Box, color: "#ef4444" },
    { name: "Mechanical CAD", icon: Cog, color: "#f97316" },
    { name: "3D Printing", icon: Box, color: "#a855f7" },
    { name: "Enclosure Design", icon: Box, color: "#06b6d4" },

    /* ====================== CONTROL ======================== */

    { name: "Control Systems", icon: Settings2, color: "#8b5cf6" },
    { name: "Motor Control", icon: RotateCw, color: "#f97316" },
    { name: "BLDC Concepts", icon: RotateCw, color: "#ef4444" },

    /* ===================== HARDWARE TOOLS ================== */

    { name: "STM32CubeIDE", icon: Terminal, color: "#06b6d4" },
];

/* ============================================================
   ROW 2: SOFTWARE ENGINEERING
   ============================================================ */

const softwareSkills: Skill[] = [

    /* ===================== FRONTEND ======================== */

    { name: "React", icon: Code, color: "#61dafb" },
    { name: "TypeScript", icon: Braces, color: "#3178c6" },
    { name: "JavaScript", icon: Braces, color: "#facc15" },
    { name: "HTML & CSS", icon: Palette, color: "#f97316" },
    { name: "Tailwind CSS", icon: Palette, color: "#38bdf8" },
    { name: "Framer Motion", icon: Sparkles, color: "#a855f7" },
    { name: "Three.js", icon: Box, color: "#e5e7eb" },
    { name: "Responsive UI", icon: Smartphone, color: "#22d3ee" },

    /* ===================== BACKEND ========================= */

    { name: "Node.js", icon: Server, color: "#84cc16" },
    { name: "Python", icon: Code, color: "#facc15" },
    { name: "REST APIs", icon: Network, color: "#06b6d4" },
    { name: "Databases", icon: Database, color: "#22c55e" },
    { name: "Authentication", icon: Lock, color: "#f59e0b" },
    { name: "WebSockets", icon: Radio, color: "#38bdf8" },
    { name: "MQTT", icon: Rss, color: "#a855f7" },

    /* ===================== DEVOPS ========================== */

    { name: "Git", icon: GitBranch, color: "#f05032" },
    { name: "GitHub", icon: GitBranch, color: "#ffffff" },
    { name: "CI/CD Pipelines", icon: Workflow, color: "#22c55e" },
    { name: "Docker", icon: Container, color: "#2496ed" },
    { name: "Linux", icon: Terminal, color: "#facc15" },
    { name: "Cloud Deployment", icon: Cloud, color: "#38bdf8" },
    { name: "Logging & Monitoring", icon: Activity, color: "#f97316" },

    /* ================== AI INTEGRATION ===================== */

    { name: "AI Integration", icon: BrainCircuit, color: "#a855f7" },
    { name: "LLM APIs", icon: Bot, color: "#06b6d4" },
    { name: "Prompt Engineering", icon: MessageSquare, color: "#f472b6" },
    { name: "AI Agents", icon: Bot, color: "#8b5cf6" },
    { name: "RAG Pipelines", icon: Layers, color: "#22d3ee" },
    { name: "AI-Assisted Coding", icon: Sparkles, color: "#fbbf24" },

    /* ===================== SOFTWARE CRAFT ================== */

    { name: "Software Architecture", icon: Layers, color: "#8b5cf6" },
    { name: "Object-Oriented Design", icon: Boxes, color: "#60a5fa" },
    { name: "Data Structures & Algorithms", icon: Binary, color: "#94a3b8" },
    { name: "Testing & Debugging", icon: Bug, color: "#ef4444" },
    { name: "IoT Dashboards", icon: Monitor, color: "#22d3ee" },
    { name: "OTA Firmware Updates", icon: RotateCw, color: "#84cc16" },
    { name: "Web Apps", icon: Globe, color: "#06b6d4" },
    { name: "VS Code", icon: Code, color: "#3b82f6" },
];

/* ============================================================
   SKILL PILL
   ============================================================ */

function SkillPill({ name, icon: Icon, color }: Skill) {
    return (
        <div
            className="
                flex
                items-center
                gap-2.5
                sm:gap-3
                px-4
                sm:px-5
                py-2.5
                sm:py-3
                bg-white/[0.04]
                border
                border-white/[0.08]
                rounded-full
                whitespace-nowrap
                hover:bg-white/[0.08]
                hover:border-white/20
                transition-all
                duration-300
                group
                cursor-default
                select-none
            "
        >
            <Icon
                size={17}
                className="
                    sm:w-5
                    sm:h-5
                    group-hover:scale-110
                    transition-transform
                    duration-300
                    shrink-0
                "
                style={{
                    color,
                }}
            />

            <span
                className="
                    text-[10px]
                    sm:text-xs
                    md:text-sm
                    font-medium
                    text-gray-400
                    group-hover:text-white
                    transition-colors
                    uppercase
                    tracking-wider
                "
            >
                {name}
            </span>
        </div>
    );
}

/* ============================================================
   MARQUEE ROW
   - Each pill carries its own right margin (not flex gap), so one
     full set is exactly half the track and the loop has no jump.
   - Duration scales with the number of pills, so both rows scroll
     at the same speed however many skills they hold.
   ============================================================ */

const SECONDS_PER_PILL = 0.9;

function MarqueeRow({
    label,
    skills,
    reverse = false,
}: {
    label: string;
    skills: Skill[];
    reverse?: boolean;
}) {
    const loop = [...skills, ...skills];
    const duration = skills.length * SECONDS_PER_PILL;

    return (
        <div>
            <p
                className="
                    mb-3
                    text-center
                    text-[9px]
                    sm:text-[10px]
                    font-mono
                    uppercase
                    tracking-[0.25em]
                    text-white/30
                "
            >
                {label}
            </p>

            <div className="relative overflow-hidden">

                {/* Left fade */}

                <div
                    className="
                        absolute
                        left-0
                        top-0
                        bottom-0
                        w-10
                        sm:w-16
                        md:w-24
                        bg-gradient-to-r
                        from-stone-950
                        to-transparent
                        z-10
                        pointer-events-none
                    "
                />

                {/* Right fade */}

                <div
                    className="
                        absolute
                        right-0
                        top-0
                        bottom-0
                        w-10
                        sm:w-16
                        md:w-24
                        bg-gradient-to-l
                        from-stone-950
                        to-transparent
                        z-10
                        pointer-events-none
                    "
                />

                <motion.div
                    className="flex w-max"
                    style={{ willChange: "transform" }}
                    animate={{
                        x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration,
                            ease: "linear",
                        },
                    }}
                >
                    {loop.map((skill, index) => (
                        <div
                            key={`${label}-${index}`}
                            className="mr-2 sm:mr-3 md:mr-4"
                        >
                            <SkillPill {...skill} />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

/* ============================================================
   COMPONENT
   ============================================================ */

const CATEGORIES = [
    "Analog",
    "Digital",
    "Embedded",
    "PCB",
    "Industrial",
    "Firmware",
    "Power",
    "IoT",
    "Backend",
    "Frontend",
    "DevOps",
    "AI",
];

export default function SkillsMarquee() {
    return (
        <section
            className="
                relative
                w-full
                overflow-hidden
                py-12
                sm:py-16
                lg:py-20
                px-4
                sm:px-6
                lg:px-8
            "
        >
            {/* =================================================
                BACKGROUND GLOW (gradients are cheaper than blur)
            ================================================= */}

            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    top-1/2
                    left-1/2
                    -translate-x-1/2
                    -translate-y-1/2
                    w-[500px]
                    sm:w-[700px]
                    lg:w-[900px]
                    h-[280px]
                    sm:h-[350px]
                "
                style={{
                    background:
                        "radial-gradient(ellipse at center, rgba(6, 182, 212, 0.08) 0%, rgba(6, 182, 212, 0) 70%)",
                }}
            />

            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    -bottom-32
                    right-0
                    w-80
                    h-80
                    rounded-full
                "
                style={{
                    background:
                        "radial-gradient(circle, rgba(168, 85, 247, 0.08) 0%, rgba(168, 85, 247, 0) 70%)",
                }}
            />

            <div
                className="
                    relative
                    max-w-7xl
                    mx-auto
                "
            >

                {/* =================================================
                    HEADER
                ================================================= */}

                <div className="text-center mb-10 sm:mb-12">

                    <motion.span
                        initial={{
                            opacity: 0,
                            y: 10,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        className="
                            text-[9px]
                            sm:text-[10px]
                            font-bold
                            tracking-[0.3em]
                            sm:tracking-[0.4em]
                            uppercase
                            text-cyan-400
                            mb-3
                            block
                        "
                    >
                        Engineering Skillset
                    </motion.span>

                    <motion.h2
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            delay: 0.08,
                        }}
                        className="
                            text-3xl
                            sm:text-4xl
                            md:text-5xl
                            lg:text-6xl
                            font-bold
                            text-white
                            tracking-[-0.04em]
                            leading-tight
                        "
                    >
                        The Engineering{" "}

                        <span
                            className="
                                text-transparent
                                bg-clip-text
                                bg-gradient-to-r
                                from-cyan-400
                                to-purple-500
                            "
                        >
                            Stack
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{
                            opacity: 0,
                        }}
                        whileInView={{
                            opacity: 1,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            delay: 0.15,
                        }}
                        className="
                            max-w-2xl
                            mx-auto
                            mt-4
                            text-xs
                            sm:text-sm
                            md:text-base
                            leading-relaxed
                            text-white/35
                        "
                    >
                        From PCB design and embedded firmware to frontend,
                        backend, DevOps, and AI integration.
                    </motion.p>

                </div>

                {/* =================================================
                    MARQUEE ROWS
                ================================================= */}

                <div className="space-y-6 sm:space-y-8">
                    <MarqueeRow
                        label="Electronics & Embedded"
                        skills={hardwareSkills}
                    />

                    <MarqueeRow
                        label="Software Engineering"
                        skills={softwareSkills}
                        reverse
                    />
                </div>

                {/* =================================================
                    BOTTOM CATEGORY LINE
                ================================================= */}

                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    whileInView={{
                        opacity: 1,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        delay: 0.3,
                    }}
                    className="
                        mt-8
                        sm:mt-10
                        flex
                        flex-wrap
                        items-center
                        justify-center
                        gap-x-4
                        gap-y-2
                        text-[8px]
                        sm:text-[9px]
                        font-mono
                        uppercase
                        tracking-[0.15em]
                        sm:tracking-[0.2em]
                        text-white/20
                    "
                >
                    {CATEGORIES.map((category, index) => (
                        <span
                            key={category}
                            className="flex items-center gap-x-4"
                        >
                            {index > 0 && (
                                <span className="text-cyan-500/30">•</span>
                            )}
                            {category}
                        </span>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}