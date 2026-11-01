
"use client";

import { motion } from "framer-motion";

import {
    Code2,
    Cpu,
    GraduationCap,
    Layers,
    Milestone,
    ArrowUpRight,
    Download,
    CircuitBoard,
    Zap,
    Wrench,
    Factory,
    Box,
    Database,
    Workflow,
    type LucideIcon,
} from "lucide-react";

import MyPhoto from "../components/MyPhoto";

/* ============================================================
   ENGINEERING SKILLS
============================================================ */

const SKILLS: {
    name: string;
    description: string;
    icon: LucideIcon;
    color: string;
    bg: string;
    border: string;
}[] = [
    {
        name: "Electronics Engineering",
        description: "Circuit & PCB Design",
        icon: CircuitBoard,
        color: "text-cyan-400",
        bg: "bg-cyan-500/[0.08]",
        border: "border-cyan-500/15",
    },
    {
        name: "Embedded Systems",
        description: "Microcontrollers & Firmware",
        icon: Cpu,
        color: "text-purple-400",
        bg: "bg-purple-500/[0.08]",
        border: "border-purple-500/15",
    },
    {
        name: "Software Engineering",
        description: "Frontend & Backend",
        icon: Code2,
        color: "text-blue-400",
        bg: "bg-blue-500/[0.08]",
        border: "border-blue-500/15",
    },
];

/* ============================================================
   ENGINEERING APPROACH
============================================================ */

const APPROACH: {
    text: string;
    icon: LucideIcon;
}[] = [
    {
        text: "Hardware-first system design",
        icon: CircuitBoard,
    },
    {
        text: "Reliable embedded firmware development",
        icon: Code2,
    },
    {
        text: "Practical PCB design and prototyping",
        icon: Layers,
    },
    {
        text: "Industrial communication and automation",
        icon: Factory,
    },
    {
        text: "Low-power and efficient electronic systems",
        icon: Zap,
    },
    {
        text: "Hardware testing and debugging",
        icon: Wrench,
    },
    {
        text: "Software architecture and API development",
        icon: Workflow,
    },
    {
        text: "Database design and system integration",
        icon: Database,
    },
];

/* ============================================================
   EDUCATION
============================================================ */

const EDUCATION = [
    {
        title: "Pearson BTEC HND",
        field: "Mechatronics Engineering",
        institution: "Level 5 Higher National Diploma",
        status: "Currently Following",
        color: "bg-purple-500",
        glow: "shadow-[0_0_8px_#a855f7]",
    },
    {
        title: "Higher Diploma",
        field: "Software Engineering",
        institution: "ACPT Sri Lanka",
        status: "2026 – Present",
        color: "bg-cyan-500",
        glow: "shadow-[0_0_8px_#06b6d4]",
    },
];

/* ============================================================
   REUSABLE SECTION TITLE
============================================================ */

function CardHeading({
    icon: Icon,
    eyebrow,
    title,
    color = "text-cyan-400",
}: {
    icon: LucideIcon;
    eyebrow: string;
    title: string;
    color?: string;
}) {
    return (
        <div className="mb-6 flex items-center gap-3">

            <div
                className={`
                    flex h-10 w-10 shrink-0 items-center
                    justify-center rounded-xl border
                    border-white/[0.08] bg-white/[0.04]
                    ${color}
                `}
            >
                <Icon size={20} strokeWidth={1.7} />
            </div>

            <div className="min-w-0">
                <p
                    className={`
                        mb-0.5 font-mono text-[8px]
                        uppercase tracking-[0.2em]
                        opacity-60 sm:text-[9px]
                        ${color}
                    `}
                >
                    {eyebrow}
                </p>

                <h3 className="
                    text-base font-bold tracking-tight
                    text-white sm:text-lg
                ">
                    {title}
                </h3>
            </div>

        </div>
    );
}

/* ============================================================
   EDUCATION ITEM
============================================================ */

function EducationItem({
    item,
}: {
    item: typeof EDUCATION[number];
}) {
    return (
        <div className="
            relative ml-1 border-l border-white/10
            pb-1 pl-5
        ">
            <span
                className={`
                    absolute -left-[5px] top-1.5
                    h-2.5 w-2.5 rounded-full
                    ${item.color} ${item.glow}
                `}
            />

            <h4 className="
                text-sm font-bold text-white
                sm:text-base
            ">
                {item.title}
            </h4>

            <p className="
                mt-1 text-xs font-medium
                text-gray-300 sm:text-sm
            ">
                {item.field}
            </p>

            <p className="
                mt-1.5 text-[10px]
                leading-relaxed text-white/35
            ">
                {item.institution}
            </p>

            <p className="
                mt-2 font-mono text-[9px]
                uppercase tracking-wider
                text-cyan-400/70
            ">
                {item.status}
            </p>
        </div>
    );
}

/* ============================================================
   MAIN COMPONENT
============================================================ */

export default function About() {

    return (
        <section
            id="about"
            className="
                relative isolate w-full overflow-hidden
                bg-white/[0.015]

                px-4
                pt-16 pb-4

                sm:px-6
                sm:pt-20 sm:pb-6

                lg:pr-8
                lg:pt-24 lg:pb-8

                xl:pl-28
            "
        >

            {/* =================================================
                BACKGROUND EFFECTS
            ================================================= */}

            <div className="
                pointer-events-none absolute inset-0 -z-10
            ">

                <div className="
                    absolute -left-[5%] top-[-5%]
                    h-[300px] w-[45%]
                    rounded-full bg-cyan-500/[0.07]
                    blur-[110px]
                " />

                <div className="
                    absolute -bottom-[5%] -right-[5%]
                    h-[300px] w-[45%]
                    rounded-full bg-purple-500/[0.07]
                    blur-[110px]
                " />

                <div className="
                    absolute left-1/2 top-1/2
                    h-[350px] w-[350px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full bg-cyan-500/[0.025]
                    blur-[110px]
                " />

            </div>

            {/* =================================================
                MAIN CONTAINER
            ================================================= */}

            <div className="
                relative mx-auto w-full max-w-7xl
            ">

                {/* =================================================
                    HEADER
                ================================================= */}

                <motion.header
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
                        duration: 0.6,
                    }}
                    className="mb-8 sm:mb-10 lg:mb-12"
                >

                    <p className="
                        mb-3 flex items-center gap-2
                        font-mono text-[9px]
                        uppercase tracking-[0.3em]
                        text-cyan-400
                        sm:text-[10px]
                        sm:tracking-[0.4em]
                    ">
                        <span className="
                            h-px w-6 bg-cyan-500 sm:w-8
                        " />

                        Engineering Profile
                    </p>

                    <h1 className="
                        text-4xl font-black
                        leading-[0.95]
                        tracking-[-0.055em]
                        text-white

                        sm:text-5xl
                        md:text-6xl
                        lg:text-7xl
                    ">
                        About{" "}

                        <span className="
                            bg-gradient-to-r
                            from-cyan-400
                            via-white
                            to-purple-500
                            bg-clip-text
                            text-transparent
                        ">
                            Me.
                        </span>
                    </h1>

                    <p className="
                        mt-5 max-w-2xl
                        text-xs leading-relaxed
                        text-white/40
                        sm:text-sm md:text-base
                    ">
                        A multidisciplinary engineering profile
                        combining electronics, embedded systems,
                        and software development to build
                        intelligent and connected solutions.
                    </p>

                </motion.header>

                {/* =================================================
                    MAIN RESPONSIVE GRID

                    Laptop: Full-width photo card above content.
                    XL: Balanced 50/50 two-column layout.
                ================================================= */}

                <div className="
                    grid grid-cols-1 items-start
                    gap-6 sm:gap-7

                    xl:grid-cols-12
                    xl:gap-7
                ">

                    {/* =================================================
                        PROFILE PHOTO
                    ================================================= */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -20,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.15,
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                        className="
                            min-w-0 w-full

                            xl:col-span-6
                            xl:sticky xl:top-28
                        "
                    >
                        {/* MyPhoto contains its own card.
                            No additional border, wrapper or overlay. */}

                        <MyPhoto />
                    </motion.div>

                    {/* =================================================
                        RIGHT CONTENT
                    ================================================= */}

                    <div className="
                        grid min-w-0 grid-cols-1
                        gap-4 sm:gap-5

                        md:grid-cols-2

                        xl:col-span-6
                    ">

                        {/* =========================================
                            TECHNICAL PROFILE
                        ========================================= */}

                        <motion.div
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
                                amount: 0.1,
                            }}
                            transition={{
                                duration: 0.6,
                            }}
                            whileHover={{
                                y: -4,
                            }}
                            className="
                                group min-w-0
                                rounded-[1.75rem]
                                border border-white/10
                                bg-white/[0.025]
                                p-5 backdrop-blur-xl

                                transition-all duration-300
                                hover:border-cyan-500/25

                                sm:rounded-[2rem]
                                sm:p-6

                                md:col-span-2
                                lg:p-7
                            "
                        >

                            <CardHeading
                                icon={Cpu}
                                eyebrow="Core Identity"
                                title="Technical Profile"
                            />

                            <div className="
                                space-y-3 text-xs
                                font-light leading-relaxed
                                text-gray-400

                                sm:text-sm
                            ">
                                <p>
                                    I am{" "}
                                    <span className="
                                        font-medium text-white
                                    ">
                                        Matheesha Nadiranga De Silva
                                    </span>
                                    , an engineering and software
                                    development student with an
                                    interest in designing and
                                    developing complete technology
                                    solutions.
                                </p>

                                <p>
                                    My technical interests span{" "}
                                    <span className="text-cyan-300">
                                        electronics hardware
                                    </span>
                                    ,{" "}
                                    <span className="text-purple-300">
                                        embedded firmware
                                    </span>
                                    ,{" "}
                                    <span className="text-blue-300">
                                        software development
                                    </span>
                                    , PCB engineering, industrial
                                    interfaces, and system integration.
                                </p>

                                <p>
                                    I work with platforms such as
                                    STM32, ESP32, AVR / ATmega, and
                                    PIC, alongside modern software
                                    development technologies,
                                    databases, and communication
                                    interfaces.
                                </p>
                            </div>

                            {/* ENGINEERING DISCIPLINES */}

                            <div className="
                                mt-6 grid grid-cols-1
                                gap-2.5 sm:grid-cols-3
                            ">
                                {SKILLS.map((skill) => {
                                    const Icon = skill.icon;

                                    return (
                                        <div
                                            key={skill.name}
                                            className={`
                                                min-w-0 rounded-xl
                                                border p-3

                                                transition-all
                                                duration-300

                                                hover:bg-white/[0.04]

                                                ${skill.bg}
                                                ${skill.border}
                                            `}
                                        >

                                            <Icon
                                                size={19}
                                                className={`
                                                    mb-3
                                                    ${skill.color}
                                                `}
                                                aria-hidden="true"
                                            />

                                            <h4 className="
                                                text-[10px]
                                                font-bold
                                                leading-snug
                                                text-white/85
                                            ">
                                                {skill.name}
                                            </h4>

                                            <p className="
                                                mt-1 text-[8px]
                                                leading-relaxed
                                                text-white/35
                                            ">
                                                {skill.description}
                                            </p>

                                        </div>
                                    );
                                })}
                            </div>

                        </motion.div>

                        {/* =========================================
                            EDUCATION
                        ========================================= */}

                        <motion.div
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
                                amount: 0.1,
                            }}
                            transition={{
                                duration: 0.6,
                                delay: 0.05,
                            }}
                            whileHover={{
                                y: -4,
                            }}
                            className="
                                min-w-0 rounded-[1.75rem]
                                border border-white/10
                                bg-white/[0.025]
                                p-5 backdrop-blur-xl

                                transition-all duration-300
                                hover:border-purple-500/30

                                sm:rounded-[2rem]
                                sm:p-6
                                lg:p-7
                            "
                        >

                            <CardHeading
                                icon={GraduationCap}
                                eyebrow="Academic Background"
                                title="Education"
                                color="text-purple-400"
                            />

                            <div className="space-y-7">
                                {EDUCATION.map((item) => (
                                    <EducationItem
                                        key={item.title}
                                        item={item}
                                    />
                                ))}
                            </div>

                        </motion.div>

                        {/* =========================================
                            ENGINEERING APPROACH
                        ========================================= */}

                        <motion.div
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
                                amount: 0.1,
                            }}
                            transition={{
                                duration: 0.6,
                                delay: 0.1,
                            }}
                            whileHover={{
                                y: -4,
                            }}
                            className="
                                min-w-0 rounded-[1.75rem]
                                border border-white/10
                                bg-white/[0.025]
                                p-5 backdrop-blur-xl

                                transition-all duration-300
                                hover:border-orange-500/25

                                sm:rounded-[2rem]
                                sm:p-6
                                lg:p-7
                            "
                        >

                            <CardHeading
                                icon={Milestone}
                                eyebrow="Development Philosophy"
                                title="Engineering Approach"
                                color="text-orange-400"
                            />

                            <div className="space-y-3.5">

                                {APPROACH.map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <div
                                            key={item.text}
                                            className="
                                                group/item flex
                                                items-start gap-3
                                            "
                                        >

                                            <div className="
                                                mt-0.5 flex h-7
                                                w-7 shrink-0
                                                items-center justify-center

                                                rounded-lg
                                                border border-white/[0.07]
                                                bg-white/[0.035]

                                                text-orange-400/65

                                                transition-colors
                                                group-hover/item:text-orange-400
                                            ">
                                                <Icon size={14} />
                                            </div>

                                            <span className="
                                                pt-1 text-[11px]
                                                leading-relaxed
                                                text-white/45

                                                transition-colors
                                                group-hover/item:text-white/80

                                                sm:text-xs
                                            ">
                                                {item.text}
                                            </span>

                                        </div>
                                    );
                                })}

                            </div>

                        </motion.div>

                        {/* =========================================
                            CURRENT FOCUS
                        ========================================= */}

                        <motion.div
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
                                amount: 0.1,
                            }}
                            transition={{
                                duration: 0.6,
                                delay: 0.15,
                            }}
                            className="
                                md:col-span-2
                                min-w-0 overflow-hidden

                                rounded-[1.75rem]
                                border border-white/10
                                bg-white/[0.025]
                                p-5 backdrop-blur-xl

                                transition-colors duration-300
                                hover:border-cyan-500/25

                                sm:rounded-[2rem]
                                sm:p-6
                                lg:p-7
                            "
                        >

                            <div className="
                                flex flex-col gap-3

                                sm:flex-row
                                sm:items-center
                                sm:justify-between
                            ">

                                <div className="
                                    flex min-w-0
                                    items-center gap-3
                                ">

                                    <div className="
                                        flex h-10 w-10
                                        shrink-0 items-center
                                        justify-center

                                        rounded-xl
                                        border border-cyan-500/15
                                        bg-cyan-500/10
                                        text-cyan-400
                                    ">
                                        <Box size={20} />
                                    </div>

                                    <div className="min-w-0">

                                        <p className="
                                            mb-1 font-mono
                                            text-[8px]
                                            uppercase
                                            tracking-[0.2em]
                                            text-cyan-400/60
                                        ">
                                            Current Focus
                                        </p>

                                        <h3 className="
                                            text-sm font-bold
                                            leading-snug text-white

                                            sm:text-base
                                        ">
                                            Integrated Engineering Solutions
                                        </h3>

                                    </div>

                                </div>

                                <span className="
                                    self-start rounded-full
                                    border border-emerald-500/20
                                    bg-emerald-500/[0.08]

                                    px-3 py-1.5

                                    font-mono text-[8px]
                                    uppercase tracking-wider
                                    text-emerald-400

                                    sm:self-center
                                ">
                                    Active
                                </span>

                            </div>

                            <p className="
                                mt-5 max-w-2xl
                                text-xs leading-relaxed
                                text-white/40

                                sm:text-sm
                            ">
                                Exploring the integration of
                                electronic hardware, embedded
                                firmware, PCB design, industrial
                                communication, and software
                                applications to create complete,
                                reliable engineering systems.
                            </p>

                            <div className="
                                mt-5 flex flex-wrap gap-2
                            ">
                                {[
                                    "Hardware",
                                    "Firmware",
                                    "PCB",
                                    "Software",
                                    "System Integration",
                                ].map((tag) => (
                                    <span
                                        key={tag}
                                        className="
                                            rounded-full
                                            border border-white/[0.07]
                                            bg-white/[0.025]
                                            px-2.5 py-1.5

                                            font-mono text-[8px]
                                            uppercase tracking-wider
                                            text-white/40
                                        "
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                        </motion.div>

                        {/* =========================================
                            RESUME BUTTON
                        ========================================= */}

                        <div className="
                            flex justify-center
                            pt-1 sm:pt-2
                            md:col-span-2
                        ">

                            <motion.a
                                href="/resume.pdf"
                                download
                                whileHover={{
                                    scale: 1.035,
                                }}
                                whileTap={{
                                    scale: 0.97,
                                }}
                                className="
                                    group relative
                                    flex w-full
                                    items-center justify-center
                                    gap-2 overflow-hidden

                                    rounded-full
                                    bg-white px-7 py-3.5

                                    text-xs font-bold
                                    text-black

                                    transition-colors
                                    hover:bg-cyan-400

                                    focus:outline-none
                                    focus-visible:ring-2
                                    focus-visible:ring-cyan-400/70

                                    sm:w-auto
                                    sm:px-8 sm:py-4
                                    sm:text-sm
                                "
                            >

                                {/* SHIMMER */}

                                <div className="
                                    pointer-events-none
                                    absolute inset-0
                                    h-full w-1/2

                                    -translate-x-[150%]
                                    -skew-x-[45deg]

                                    bg-gradient-to-r
                                    from-transparent
                                    via-white/40
                                    to-transparent

                                    group-hover:animate-[shimmer_1.5s_infinite]
                                " />

                                <Download
                                    size={17}
                                    className="relative z-10"
                                />

                                <span className="relative z-10">
                                    Download Full Resume
                                </span>

                                <ArrowUpRight
                                    size={15}
                                    className="
                                        relative z-10
                                        transition-transform
                                        group-hover:-translate-y-0.5
                                        group-hover:translate-x-0.5
                                    "
                                />

                            </motion.a>

                        </div>

                    </div>

                </div>

            </div>

            {/* =================================================
                SHIMMER ANIMATION
            ================================================= */}

            <style>{`
                @keyframes shimmer {
                    0% {
                        transform: translateX(-150%) skewX(-45deg);
                    }

                    100% {
                        transform: translateX(250%) skewX(-45deg);
                    }
                }
            `}</style>

        </section>
    );
}
