
"use client";

import { motion } from "framer-motion";

import {
    CircuitBoard,
    Cpu,
    Code2,
    type LucideIcon,
} from "lucide-react";

/* ============================================================
   TYPES
============================================================ */

type SkillCategory = {
    title: string;
    description: string;
    icon: LucideIcon;
    skills: string[];
    color: string;
    glow: string;
    accent: string;
    hoverBorder: string;
};

/* ============================================================
   ENGINEERING CATEGORIES
============================================================ */

const CATEGORIES: SkillCategory[] = [

    /* ========================================================
       ELECTRONICS ENGINEERING
    ======================================================== */

    {
        title: "Electronics Engineering",

        description:
            "Electronic hardware design, circuit development, PCB engineering and power systems.",

        icon: CircuitBoard,

        skills: [
            "Analog Design",
            "Digital Design",
            "Circuit Design",
            "PCB Design",
            "Altium Designer",
            "KiCad",
            "Signal Conditioning",
            "Sensor Interfaces",
            "Power Electronics",
            "Battery Systems",
            "Industrial I/O",
            "0–10V / 4–20mA",
            "Instrumentation",
            "SolidWorks",
            "Hardware Prototyping",
        ],

        color: "text-cyan-400",
        glow: "bg-cyan-400",
        accent: "bg-cyan-400",
        hoverBorder: "hover:border-cyan-400/30",
    },

    /* ========================================================
       EMBEDDED SYSTEMS ENGINEERING
    ======================================================== */

    {
        title: "Embedded Systems Engineering",

        description:
            "Microcontroller programming, firmware development, hardware communication and IoT integration.",

        icon: Cpu,

        skills: [
            "STM32",
            "ESP32",
            "AVR / ATmega",
            "PIC",
            "Embedded C",
            "C / C++",
            "Firmware Development",
            "UART",
            "SPI",
            "I²C",
            "RS485",
            "MQTT",
            "Wi-Fi / IoT",
            "PlatformIO",
            "STM32CubeIDE",
        ],

        color: "text-purple-400",
        glow: "bg-purple-400",
        accent: "bg-purple-400",
        hoverBorder: "hover:border-purple-400/30",
    },

    /* ========================================================
       SOFTWARE ENGINEERING
    ======================================================== */

    {
        title: "Software Engineering",

        description:
            "Frontend and backend development, application architecture, databases and software integration.",

        icon: Code2,

        skills: [
            "JavaScript",
            "TypeScript",
            "React",
            "Node.js",
            "Express.js",
            "Java",
            "Spring Boot",
            "Python",
            "MySQL",
            "REST APIs",
            "Git",
            "GitHub",
            "Tailwind CSS",
            "Database Design",
            "DevOps",
        ],

        color: "text-blue-400",
        glow: "bg-blue-400",
        accent: "bg-blue-400",
        hoverBorder: "hover:border-blue-400/30",
    },
];

/* ============================================================
   SKILL CARD
============================================================ */

function SkillCard({
    category,
    index,
}: {
    category: SkillCategory;
    index: number;
}) {
    const Icon = category.icon;

    return (
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
                amount: 0.12,
            }}
            transition={{
                duration: 0.55,
                delay: index * 0.12,
            }}
            whileHover={{
                y: -6,
            }}
            className={`
                group
                relative
                isolate
                flex
                h-full
                min-h-[280px]
                flex-col
                overflow-hidden

                rounded-[1.75rem]
                border
                border-white/[0.08]

                bg-white/[0.025]
                p-5
                backdrop-blur-xl

                shadow-xl
                shadow-black/10

                transition-colors
                duration-300

                hover:bg-white/[0.045]

                sm:min-h-[300px]
                sm:rounded-[2rem]
                sm:p-7

                ${category.hoverBorder}
            `}
        >

            {/* ==============================================
                BACKGROUND GLOW
            ============================================== */}

            <div
                className={`
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16
                    -z-10

                    h-40
                    w-40
                    rounded-full
                    blur-[75px]

                    opacity-[0.04]

                    transition-opacity
                    duration-500

                    group-hover:opacity-20

                    ${category.glow}
                `}
            />

            {/* ==============================================
                HEADER
            ============================================== */}

            <div
                className="
                    relative
                    mb-6
                    flex
                    items-start
                    justify-between
                    gap-3
                "
            >

                {/* CATEGORY ICON */}

                <div
                    className={`
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center

                        rounded-2xl

                        border
                        border-white/[0.08]

                        bg-white/[0.04]

                        transition-all
                        duration-300

                        group-hover:scale-110
                        group-hover:bg-white/[0.07]

                        ${category.color}
                    `}
                >
                    <Icon
                        size={24}
                        strokeWidth={1.7}
                        aria-hidden="true"
                    />
                </div>

                {/* CATEGORY NUMBER */}

                <span
                    className="
                        pt-1
                        font-mono
                        text-[10px]
                        tracking-[0.2em]
                        text-white/20
                    "
                >
                    {String(index + 1).padStart(2, "0")}
                </span>

            </div>

            {/* ==============================================
                TITLE
            ============================================== */}

            <h3
                className="
                    mb-3
                    text-lg
                    font-bold
                    leading-tight
                    tracking-tight
                    text-white

                    sm:text-xl
                    md:text-2xl
                "
            >
                {category.title}
            </h3>

            {/* ==============================================
                DESCRIPTION
            ============================================== */}

            <p
                className="
                    mb-6
                    max-w-md
                    text-xs
                    leading-relaxed
                    text-white/35

                    sm:text-sm
                "
            >
                {category.description}
            </p>

            {/* ==============================================
                SKILLS
            ============================================== */}

            <div
                className="
                    flex
                    flex-wrap
                    content-start
                    gap-2
                "
            >
                {category.skills.map((skill) => (
                    <span
                        key={skill}
                        className={`
                            inline-flex
                            items-center

                            rounded-full

                            border
                            border-white/[0.07]

                            bg-white/[0.035]

                            px-2.5
                            py-1.5

                            font-mono
                            text-[8px]
                            uppercase
                            tracking-wide

                            text-white/40

                            transition-all
                            duration-200

                            group-hover:text-white/65

                            sm:px-3
                            sm:text-[9px]

                            ${category.color}
                        `}
                    >
                        <span
                            className={`
                                mr-1.5
                                h-1
                                w-1
                                shrink-0
                                rounded-full
                                opacity-60

                                ${category.accent}
                            `}
                        />

                        <span className="text-inherit">
                            {skill}
                        </span>
                    </span>
                ))}
            </div>

            {/* ==============================================
                BOTTOM ACCENT
            ============================================== */}

            <div
                className={`
                    pointer-events-none
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-full
                    origin-left
                    scale-x-0

                    transition-transform
                    duration-500

                    group-hover:scale-x-100

                    ${category.accent}
                `}
            />

        </motion.div>
    );
}

/* ============================================================
   MAIN COMPONENT
============================================================ */

export default function TechBento() {

    return (
        <section
            className="
                relative
                isolate
                w-full
                overflow-hidden

                px-4

                pt-16
                pb-4

                sm:px-6
                sm:pt-20
                sm:pb-6

                lg:px-8
                lg:pl-28
                lg:pt-24
                lg:pb-8
            "
        >

            {/* =================================================
                BACKGROUND GLOW
            ================================================= */}

            <div
                className="
                    pointer-events-none
                    absolute
                    -z-10

                    left-1/4
                    top-20

                    h-72
                    w-72

                    rounded-full
                    bg-cyan-500/[0.05]
                    blur-[110px]

                    sm:h-96
                    sm:w-96
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    -z-10

                    bottom-0
                    right-1/4

                    h-72
                    w-72

                    rounded-full
                    bg-purple-500/[0.05]
                    blur-[110px]

                    sm:h-96
                    sm:w-96
                "
            />

            {/* =================================================
                MAIN CONTENT
            ================================================= */}

            <div
                className="
                    relative
                    mx-auto
                    w-full
                    max-w-7xl
                "
            >

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
                        amount: 0.3,
                    }}
                    transition={{
                        duration: 0.6,
                    }}
                    className="
                        mx-auto
                        mb-10
                        max-w-3xl
                        text-center

                        sm:mb-12
                    "
                >

                    {/* EYEBROW */}

                    <p
                        className="
                            mb-4

                            font-mono
                            text-[9px]
                            font-medium
                            uppercase
                            tracking-[0.3em]

                            text-cyan-400

                            sm:text-[10px]
                            sm:tracking-[0.45em]
                        "
                    >
                        Electronics + Embedded + Software
                    </p>

                    {/* TITLE */}

                    <h2
                        className="
                            text-4xl
                            font-black
                            uppercase
                            leading-[0.95]
                            tracking-[-0.055em]

                            text-white

                            sm:text-5xl
                            md:text-6xl
                            lg:text-7xl
                        "
                    >
                        Technical{" "}

                        <span
                            className="
                                bg-gradient-to-r
                                from-cyan-400
                                via-white
                                to-purple-500

                                bg-clip-text
                                text-transparent
                            "
                        >
                            Stack.
                        </span>
                    </h2>

                    {/* DESCRIPTION */}

                    <p
                        className="
                            mx-auto
                            mt-5
                            max-w-2xl

                            text-xs
                            leading-relaxed

                            text-white/35

                            sm:text-sm
                            md:text-base
                        "
                    >
                        Combining electronics engineering,
                        embedded systems, and software
                        development to build intelligent,
                        connected hardware and software solutions.
                    </p>

                </motion.div>

                {/* =================================================
                    ENGINEERING BENTO GRID
                ================================================= */}

                <div
                    className="
                        grid
                        grid-cols-1

                        gap-4

                        md:grid-cols-2
                        md:gap-5

                        xl:grid-cols-3
                    "
                >
                    {CATEGORIES.map((category, index) => (
                        <SkillCard
                            key={category.title}
                            category={category}
                            index={index}
                        />
                    ))}
                </div>

                {/* =================================================
                    BOTTOM LABEL
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
                        duration: 0.6,
                        delay: 0.2,
                    }}
                    className="
                        mt-6

                        flex
                        flex-wrap
                        items-center
                        justify-center

                        gap-x-3
                        gap-y-2

                        font-mono
                        text-[8px]
                        uppercase
                        tracking-[0.16em]

                        text-white/20

                        sm:mt-8
                        sm:gap-x-4
                        sm:text-[9px]
                        sm:tracking-[0.2em]
                    "
                >
                    <span>Electronics</span>

                    <span className="text-cyan-500/40">•</span>

                    <span>Embedded Systems</span>

                    <span className="text-cyan-500/40">•</span>

                    <span>Software</span>

                    <span className="text-cyan-500/40">•</span>

                    <span>Integration</span>
                </motion.div>

            </div>

        </section>
    );
}
