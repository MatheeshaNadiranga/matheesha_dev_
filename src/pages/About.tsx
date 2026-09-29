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
    Radio,
    Factory,
    Box,
} from "lucide-react";

import MyPhoto from "../components/MyPhoto";

/* ============================================================
   PROFILE SKILLS
============================================================ */

const SKILLS = [
    {
        name: "Embedded Systems",
        icon: <Cpu size={16} />,
        color: "text-cyan-400",
        bg: "hover:bg-cyan-500/10",
    },
    {
        name: "PCB Design",
        icon: <CircuitBoard size={16} />,
        color: "text-purple-400",
        bg: "hover:bg-purple-500/10",
    },
    {
        name: "Industrial Control",
        icon: <Factory size={16} />,
        color: "text-orange-400",
        bg: "hover:bg-orange-500/10",
    },
    {
        name: "IoT & Communications",
        icon: <Radio size={16} />,
        color: "text-emerald-400",
        bg: "hover:bg-emerald-500/10",
    },
];

/* ============================================================
   APPROACH
============================================================ */

const APPROACH = [
    {
        text: "Hardware-first system design",
        icon: <CircuitBoard size={14} />,
    },
    {
        text: "Reliable embedded firmware",
        icon: <Code2 size={14} />,
    },
    {
        text: "Practical PCB development",
        icon: <Layers size={14} />,
    },
    {
        text: "Industrial interface integration",
        icon: <Factory size={14} />,
    },
    {
        text: "Low-power and efficient designs",
        icon: <Zap size={14} />,
    },
    {
        text: "Hardware and firmware debugging",
        icon: <Wrench size={14} />,
    },
];

/* ============================================================
   COMPONENT
============================================================ */

export default function About() {
    return (
        <section
            id="about"
            className="
                relative
                min-h-[100dvh]
                w-full
                overflow-hidden
                bg-white/[0.02]
                pt-28
                sm:pt-32
                lg:pt-36
                pb-20
                sm:pb-28
                lg:pb-32
                px-4
                sm:px-6
                lg:px-12
            "
        >
            {/* =================================================
                BACKGROUND
            ================================================= */}

            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    -z-10
                "
            >
                <div
                    className="
                        absolute
                        top-[-5%]
                        left-[-5%]
                        w-[45%]
                        h-[35%]
                        bg-cyan-500/10
                        blur-[110px]
                        rounded-full
                    "
                />

                <div
                    className="
                        absolute
                        bottom-[-5%]
                        right-[-5%]
                        w-[45%]
                        h-[35%]
                        bg-purple-500/10
                        blur-[110px]
                        rounded-full
                    "
                />

                <div
                    className="
                        absolute
                        top-1/2
                        left-1/2
                        -translate-x-1/2
                        -translate-y-1/2
                        w-[500px]
                        h-[300px]
                        bg-cyan-500/[0.025]
                        blur-[100px]
                        rounded-full
                    "
                />
            </div>

            <div className="relative max-w-7xl mx-auto">

                {/* =================================================
                    HEADER
                ================================================= */}

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
                        amount: 0.2,
                    }}
                    transition={{
                        duration: 0.6,
                    }}
                    className="mb-10 sm:mb-14 lg:mb-16"
                >
                    <h2
                        className="
                            text-[9px]
                            sm:text-[10px]
                            font-mono
                            tracking-[0.3em]
                            sm:tracking-[0.4em]
                            text-cyan-400
                            uppercase
                            mb-3
                            flex
                            items-center
                            gap-2
                        "
                    >
                        <span className="w-6 sm:w-8 h-px bg-cyan-500" />
                        Engineering Profile
                    </h2>

                    <h1
                        className="
                            text-4xl
                            sm:text-5xl
                            md:text-6xl
                            lg:text-7xl
                            font-black
                            tracking-[-0.05em]
                            text-white
                            leading-[0.95]
                        "
                    >
                        About{" "}

                        <span
                            className="
                                text-transparent
                                bg-clip-text
                                bg-gradient-to-r
                                from-cyan-400
                                via-white
                                to-purple-500
                            "
                        >
                            Me.
                        </span>
                    </h1>

                    <p
                        className="
                            mt-5
                            max-w-2xl
                            text-sm
                            sm:text-base
                            leading-relaxed
                            text-white/35
                        "
                    >
                        Electronic Engineer focused on embedded systems,
                        PCB design, firmware development, industrial
                        controllers, and practical hardware engineering.
                    </p>
                </motion.div>

                {/* =================================================
                    MAIN GRID
                ================================================= */}

                <div
                    className="
                        grid
                        grid-cols-1
                        lg:grid-cols-12
                        gap-6
                        sm:gap-8
                        items-start
                    "
                >

                    {/* =================================================
                        LEFT — PHOTO
                    ================================================= */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -25,
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
                            lg:col-span-4
                            w-full
                            lg:sticky
                            lg:top-28
                        "
                    >
                        <div
                            className="
                                relative
                                w-full
                                overflow-hidden
                                rounded-[1.75rem]
                                sm:rounded-[2.25rem]
                                border
                                border-white/10
                                bg-white/[0.02]
                                backdrop-blur-xl
                                p-2
                                sm:p-3
                            "
                        >
                            <MyPhoto />

                            {/* Bottom identity strip */}

                            <div
                                className="
                                    absolute
                                    left-4
                                    right-4
                                    bottom-4
                                    sm:left-6
                                    sm:right-6
                                    sm:bottom-6
                                    p-3
                                    sm:p-4
                                    rounded-2xl
                                    bg-black/60
                                    border
                                    border-white/10
                                    backdrop-blur-xl
                                "
                            >
                                <p
                                    className="
                                        text-[8px]
                                        sm:text-[9px]
                                        font-mono
                                        uppercase
                                        tracking-[0.2em]
                                        text-cyan-400
                                    "
                                >
                                    Electronic Engineer
                                </p>

                                <p
                                    className="
                                        mt-1
                                        text-xs
                                        sm:text-sm
                                        text-white/60
                                    "
                                >
                                    Matheesha Nadiranga De Silva
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* =================================================
                        RIGHT CONTENT
                    ================================================= */}

                    <div
                        className="
                            lg:col-span-8
                            grid
                            grid-cols-1
                            md:grid-cols-2
                            gap-5
                            sm:gap-6
                        "
                    >

                        {/* =================================================
                            TECHNICAL PROFILE
                        ================================================= */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 25,
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
                                y: -5,
                            }}
                            className="
                                md:col-span-2
                                p-6
                                sm:p-8
                                bg-white/[0.025]
                                border
                                border-white/10
                                rounded-[1.75rem]
                                sm:rounded-[2.25rem]
                                backdrop-blur-xl
                                hover:border-cyan-500/30
                                transition-all
                                duration-300
                                group
                            "
                        >
                            {/* Header */}

                            <div
                                className="
                                    flex
                                    items-start
                                    justify-between
                                    gap-4
                                    mb-6
                                "
                            >
                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-3
                                        text-cyan-400
                                        min-w-0
                                    "
                                >
                                    <div
                                        className="
                                            w-10
                                            h-10
                                            rounded-xl
                                            bg-cyan-500/10
                                            border
                                            border-cyan-500/15
                                            flex
                                            items-center
                                            justify-center
                                            shrink-0
                                        "
                                    >
                                        <Cpu size={20} />
                                    </div>

                                    <div>
                                        <p
                                            className="
                                                text-[8px]
                                                sm:text-[9px]
                                                font-mono
                                                uppercase
                                                tracking-[0.2em]
                                                text-cyan-400/60
                                            "
                                        >
                                            Core Identity
                                        </p>

                                        <h3
                                            className="
                                                text-lg
                                                sm:text-xl
                                                font-semibold
                                                text-white
                                            "
                                        >
                                            Technical Profile
                                        </h3>
                                    </div>
                                </div>

                                <ArrowUpRight
                                    className="
                                        text-gray-700
                                        group-hover:text-cyan-400
                                        transition-colors
                                        shrink-0
                                    "
                                    size={20}
                                />
                            </div>

                            {/* Description */}

                            <div
                                className="
                                    space-y-4
                                    text-sm
                                    sm:text-base
                                    md:text-lg
                                    text-gray-400
                                    leading-relaxed
                                    font-light
                                "
                            >
                                <p>
                                    I am{" "}
                                    <span className="text-white font-medium">
                                        Matheesha Nadiranga De Silva
                                    </span>
                                    , an Electronic Engineer currently
                                    working at{" "}
                                    <span className="text-cyan-300">
                                        Iconic Devices
                                    </span>
                                    .
                                </p>

                                <p>
                                    My work focuses on the development of
                                    electronic and embedded systems,
                                    combining{" "}
                                    <span className="text-white">
                                        hardware design
                                    </span>
                                    ,{" "}
                                    <span className="text-white">
                                        firmware
                                    </span>
                                    ,{" "}
                                    <span className="text-white">
                                        PCB development
                                    </span>
                                    , and{" "}
                                    <span className="text-white">
                                        industrial interfaces
                                    </span>
                                    .
                                </p>

                                <p>
                                    I work with STM32, ESP32, AVR / ATmega,
                                    PIC and related embedded platforms,
                                    together with analog and digital
                                    electronics, communication interfaces,
                                    low-power design, and hardware
                                    prototyping.
                                </p>
                            </div>

                            {/* Skills */}

                            <div
                                className="
                                    grid
                                    grid-cols-1
                                    sm:grid-cols-2
                                    lg:grid-cols-4
                                    gap-3
                                    mt-8
                                "
                            >
                                {SKILLS.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className={`
                                            min-w-0
                                            flex
                                            flex-col
                                            gap-3
                                            p-4
                                            bg-white/[0.035]
                                            border
                                            border-white/[0.06]
                                            rounded-2xl
                                            transition-all
                                            duration-300
                                            ${skill.bg}
                                            cursor-default
                                        `}
                                    >
                                        <div
                                            className={
                                                skill.color
                                            }
                                        >
                                            {skill.icon}
                                        </div>

                                        <span
                                            className="
                                                text-[10px]
                                                sm:text-xs
                                                font-medium
                                                text-gray-300
                                                leading-relaxed
                                            "
                                        >
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* =================================================
                            EDUCATION
                        ================================================= */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 25,
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
                                y: -5,
                            }}
                            className="
                                p-6
                                sm:p-8
                                bg-white/[0.025]
                                border
                                border-white/10
                                rounded-[1.75rem]
                                sm:rounded-[2.25rem]
                                backdrop-blur-xl
                                hover:border-purple-500/30
                                transition-all
                                duration-300
                            "
                        >
                            <div
                                className="
                                    flex
                                    items-center
                                    gap-3
                                    mb-7
                                    text-purple-400
                                "
                            >
                                <GraduationCap size={23} />

                                <h3
                                    className="
                                        text-lg
                                        sm:text-xl
                                        font-semibold
                                        text-white
                                    "
                                >
                                    Education
                                </h3>
                            </div>

                            <div className="space-y-7">

                                {/* HND */}

                                <div
                                    className="
                                        relative
                                        pl-5
                                        sm:pl-6
                                        border-l
                                        border-white/10
                                    "
                                >
                                    <div
                                        className="
                                            absolute
                                            -left-[5px]
                                            top-1
                                            w-2.5
                                            h-2.5
                                            bg-purple-500
                                            rounded-full
                                            shadow-[0_0_8px_#a855f7]
                                        "
                                    />

                                    <h4
                                        className="
                                            text-sm
                                            sm:text-base
                                            text-white
                                            font-bold
                                            leading-tight
                                        "
                                    >
                                        Pearson HND in Mechatronics
                                    </h4>

                                    <p
                                        className="
                                            text-xs
                                            sm:text-sm
                                            text-gray-400
                                            mt-2
                                        "
                                    >
                                        Currently Following
                                    </p>

                                    <p
                                        className="
                                            text-[9px]
                                            sm:text-[10px]
                                            text-purple-400/70
                                            font-mono
                                            mt-2
                                            tracking-wider
                                            uppercase
                                        "
                                    >
                                        Mechatronics Engineering
                                    </p>
                                </div>

                            </div>
                        </motion.div>

                        {/* =================================================
                            ENGINEERING APPROACH
                        ================================================= */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 25,
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
                                y: -5,
                            }}
                            className="
                                p-6
                                sm:p-8
                                bg-white/[0.025]
                                border
                                border-white/10
                                rounded-[1.75rem]
                                sm:rounded-[2.25rem]
                                backdrop-blur-xl
                                hover:border-orange-500/30
                                transition-all
                                duration-300
                            "
                        >
                            <div
                                className="
                                    flex
                                    items-center
                                    gap-3
                                    mb-7
                                    text-orange-400
                                "
                            >
                                <Milestone size={23} />

                                <h3
                                    className="
                                        text-lg
                                        sm:text-xl
                                        font-semibold
                                        text-white
                                    "
                                >
                                    Engineering Approach
                                </h3>
                            </div>

                            <div className="space-y-4">

                                {APPROACH.map(
                                    (item) => (
                                        <div
                                            key={item.text}
                                            className="
                                                flex
                                                items-start
                                                gap-3
                                                text-xs
                                                sm:text-sm
                                                text-gray-400
                                                group
                                            "
                                        >
                                            <div
                                                className="
                                                    mt-0.5
                                                    w-7
                                                    h-7
                                                    rounded-lg
                                                    bg-white/[0.04]
                                                    border
                                                    border-white/[0.06]
                                                    flex
                                                    items-center
                                                    justify-center
                                                    text-orange-400/60
                                                    group-hover:text-orange-400
                                                    shrink-0
                                                    transition-colors
                                                "
                                            >
                                                {item.icon}
                                            </div>

                                            <span
                                                className="
                                                    group-hover:text-white
                                                    transition-colors
                                                    leading-relaxed
                                                "
                                            >
                                                {item.text}
                                            </span>
                                        </div>
                                    )
                                )}

                            </div>
                        </motion.div>

                        {/* =================================================
                            CURRENT FOCUS
                        ================================================= */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 25,
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
                            whileHover={{
                                y: -5,
                            }}
                            className="
                                md:col-span-2
                                p-6
                                sm:p-8
                                bg-white/[0.025]
                                border
                                border-white/10
                                rounded-[1.75rem]
                                sm:rounded-[2.25rem]
                                backdrop-blur-xl
                                hover:border-cyan-500/20
                                transition-all
                                duration-300
                            "
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-3
                                    "
                                >
                                    <div
                                        className="
                                            w-10
                                            h-10
                                            rounded-xl
                                            bg-cyan-500/10
                                            border
                                            border-cyan-500/15
                                            flex
                                            items-center
                                            justify-center
                                            text-cyan-400
                                        "
                                    >
                                        <Box size={20} />
                                    </div>

                                    <div>
                                        <p
                                            className="
                                                text-[8px]
                                                sm:text-[9px]
                                                font-mono
                                                uppercase
                                                tracking-[0.2em]
                                                text-cyan-400/50
                                            "
                                        >
                                            Current Focus
                                        </p>

                                        <h3
                                            className="
                                                text-base
                                                sm:text-lg
                                                font-semibold
                                                text-white
                                            "
                                        >
                                            Building Real-World Embedded Systems
                                        </h3>
                                    </div>
                                </div>

                                <div
                                    className="
                                        self-start
                                        sm:self-auto
                                        px-3
                                        py-1.5
                                        rounded-full
                                        bg-emerald-500/10
                                        border
                                        border-emerald-500/20
                                        text-[8px]
                                        sm:text-[9px]
                                        font-mono
                                        uppercase
                                        tracking-wider
                                        text-emerald-400
                                    "
                                >
                                    Active
                                </div>

                            </div>

                            <p
                                className="
                                    mt-5
                                    text-sm
                                    text-white/35
                                    leading-relaxed
                                    max-w-3xl
                                "
                            >
                                Combining electronic hardware, embedded
                                firmware, PCB design, industrial
                                communication and mechanical integration
                                to create reliable engineering solutions.
                            </p>
                        </motion.div>

                        {/* =================================================
                            RESUME BUTTON
                        ================================================= */}

                        <div
                            className="
                                md:col-span-2
                                flex
                                justify-center
                                pt-1
                                sm:pt-3
                            "
                        >
                            <motion.a
                                href="/resume.pdf"
                                download
                                whileHover={{
                                    scale: 1.04,
                                }}
                                whileTap={{
                                    scale: 0.97,
                                }}
                                className="
                                    relative
                                    overflow-hidden
                                    group
                                    w-full
                                    sm:w-auto
                                    px-7
                                    sm:px-8
                                    py-3.5
                                    sm:py-4
                                    bg-white
                                    text-black
                                    rounded-full
                                    font-bold
                                    text-xs
                                    sm:text-sm
                                    flex
                                    items-center
                                    justify-center
                                    gap-2
                                    transition-all
                                    hover:bg-cyan-400
                                "
                            >
                                {/* Shimmer */}

                                <div
                                    className="
                                        absolute
                                        inset-0
                                        w-1/2
                                        h-full
                                        bg-gradient-to-r
                                        from-transparent
                                        via-white/40
                                        to-transparent
                                        -skew-x-[45deg]
                                        -translate-x-full
                                        group-hover:animate-[shimmer_1.5s_infinite]
                                    "
                                />

                                <Download
                                    size={17}
                                    className="relative z-10"
                                />

                                <span
                                    className="
                                        relative
                                        z-10
                                    "
                                >
                                    Download Full Resume
                                </span>
                            </motion.a>
                        </div>

                    </div>
                </div>
            </div>

            {/* ============================================================
                SHIMMER ANIMATION
            ============================================================ */}

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