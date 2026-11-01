
"use client";

import { motion } from "framer-motion";

import {
    Briefcase,
    Calendar,
    CheckCircle2,
    Zap,
    CircuitBoard,
    GraduationCap,
    Code2,
    
    type LucideIcon,
} from "lucide-react";

/* ============================================================
   TYPES
============================================================ */

type TimelineItem = {
    period: string;
    title: string;
    organization: string;
    icon: LucideIcon;
    color: "cyan" | "purple" | "blue" | "emerald";
    category: string;
    status: string;
    completed: boolean;
    description: string;
    tags: string[];
};

/* ============================================================
   PROFESSIONAL EXPERIENCE & ENGINEERING JOURNEY
============================================================ */

const TIMELINE: TimelineItem[] = [

    /* ========================================================
       COMPLETED INTERNSHIP
    ======================================================== */

    {
        period: "3-Month Internship",
        title: "Electronic Engineering Intern",
        organization: "Iconic Devices (Pvt) Ltd",
        icon: Briefcase,
        color: "cyan",
        category: "Professional Experience",
        status: "Internship Completed",
        completed: true,

        description:
            "Successfully completed a three-month electronic engineering internship, gaining practical experience in electronics and embedded-system development. Exposure included PCB design, embedded firmware, hardware integration, industrial controller development, electronic interfaces, testing, and debugging.",

        tags: [
            "Electronics",
            "PCB Design",
            "Embedded Systems",
            "STM32",
            "ESP32",
            "Analog Design",
            "Digital Design",
            "Industrial I/O",
            "Firmware",
            "Hardware Debugging",
        ],
    },

    /* ========================================================
       MECHATRONICS EDUCATION
    ======================================================== */

    {
        period: "2026 – Present",
        title: "Pearson BTEC HND",
        organization: "Mechatronics Engineering",
        icon: GraduationCap,
        color: "purple",
        category: "Education",
        status: "Currently Following",
        completed: false,

        description:
            "Following a Level 5 Pearson BTEC Higher National Diploma in Mechatronics Engineering while developing knowledge across electronics, embedded systems, control systems, instrumentation, electrical systems, and mechanical engineering.",

        tags: [
            "Mechatronics",
            "Electronics",
            "Embedded Systems",
            "Control Systems",
            "Instrumentation",
            "Engineering",
        ],
    },

    /* ========================================================
       SOFTWARE ENGINEERING EDUCATION
    ======================================================== */

    {
        period: "2026 – Present",
        title: "Higher Diploma",
        organization: "Software Engineering · ACPT Sri Lanka",
        icon: Code2,
        color: "blue",
        category: "Education",
        status: "Currently Following",
        completed: false,

        description:
            "Developing software engineering knowledge and practical development skills with an emphasis on programming, databases, application development, backend systems, software architecture, and full-stack development.",

        tags: [
            "Java",
            "JavaScript",
            "TypeScript",
            "React",
            "Node.js",
            "Spring Boot",
            "MySQL",
            "REST APIs",
            "Software Engineering",
        ],
    },

    /* ========================================================
       PERSONAL ENGINEERING PROJECTS
    ======================================================== */

    {
        period: "Ongoing",
        title: "Independent Engineering Projects",
        organization: "Personal Engineering Development",
        icon: CircuitBoard,
        color: "emerald",
        category: "Technical Projects",
        status: "Ongoing",
        completed: false,

        description:
            "Designing and developing independent electronics, embedded-system, and software projects, including industrial controllers, custom PCB prototypes, display interfaces, communication systems, low-power designs, motor-control concepts, wireless hardware, and integrated software applications.",

        tags: [
            "Altium",
            "KiCad",
            "STM32",
            "ESP32",
            "AVR",
            "PIC",
            "RS485",
            "UART",
            "SPI",
            "I²C",
            "React",
            "Node.js",
        ],
    },
];

/* ============================================================
   COLOR CONFIGURATION
============================================================ */

const COLOR_CLASSES = {
    cyan: {
        text: "text-cyan-400",
        border: "border-cyan-500",
        bg: "bg-cyan-500",
        softBg: "bg-cyan-500/10",
        softBorder: "border-cyan-500/20",
        glow: "shadow-[0_0_14px_rgba(6,182,212,0.35)]",
        hover: "hover:border-cyan-500/30",
    },

    purple: {
        text: "text-purple-400",
        border: "border-purple-500",
        bg: "bg-purple-500",
        softBg: "bg-purple-500/10",
        softBorder: "border-purple-500/20",
        glow: "shadow-[0_0_14px_rgba(168,85,247,0.35)]",
        hover: "hover:border-purple-500/30",
    },

    blue: {
        text: "text-blue-400",
        border: "border-blue-500",
        bg: "bg-blue-500",
        softBg: "bg-blue-500/10",
        softBorder: "border-blue-500/20",
        glow: "shadow-[0_0_14px_rgba(59,130,246,0.35)]",
        hover: "hover:border-blue-500/30",
    },

    emerald: {
        text: "text-emerald-400",
        border: "border-emerald-500",
        bg: "bg-emerald-500",
        softBg: "bg-emerald-500/10",
        softBorder: "border-emerald-500/20",
        glow: "shadow-[0_0_14px_rgba(16,185,129,0.35)]",
        hover: "hover:border-emerald-500/30",
    },
};

/* ============================================================
   STATUS BADGE
============================================================ */

function StatusBadge({
    completed,
    status,
}: {
    completed: boolean;
    status: string;
}) {
    return (
        <div
            className={`
                inline-flex
                shrink-0
                items-center
                gap-1.5

                rounded-full
                border

                px-3
                py-1.5

                font-mono
                text-[8px]
                uppercase
                tracking-wider

                sm:text-[9px]

                ${
                    completed
                        ? `
                            border-emerald-500/20
                            bg-emerald-500/[0.07]
                            text-emerald-400
                        `
                        : `
                            border-cyan-500/15
                            bg-cyan-500/[0.06]
                            text-cyan-400
                        `
                }
            `}
        >
            {completed ? (
                <CheckCircle2 size={12} />
            ) : (
                <span className="
                    h-1.5 w-1.5 rounded-full
                    bg-current animate-pulse
                " />
            )}

            {status}
        </div>
    );
}

/* ============================================================
   TIMELINE CARD
============================================================ */

function TimelineCard({
    item,
    index,
}: {
    item: TimelineItem;
    index: number;
}) {
    const colors = COLOR_CLASSES[item.color];
    const Icon = item.icon;

    return (
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
                amount: 0.12,
            }}
            transition={{
                delay: index * 0.07,
                duration: 0.55,
            }}
            className="
                relative
                pl-7

                sm:pl-10
                md:pl-12
            "
        >

            {/* ==============================================
                TIMELINE NODE
            ============================================== */}

            <div
                className={`
                    absolute
                    -left-[7px]
                    top-6

                    h-3
                    w-3

                    rounded-full

                    border-2
                    border-stone-950

                    ${colors.bg}
                    ${colors.glow}

                    sm:-left-[8px]
                    sm:h-4
                    sm:w-4
                `}
            />

            {/* ==============================================
                EXPERIENCE CARD
            ============================================== */}

            <motion.div
                whileHover={{
                    y: -4,
                }}
                className={`
                    group
                    relative
                    min-w-0
                    overflow-hidden

                    rounded-[1.5rem]
                    border
                    border-white/10

                    bg-white/[0.025]
                    p-5
                    backdrop-blur-xl

                    shadow-xl
                    shadow-black/10

                    transition-colors
                    duration-300

                    ${colors.hover}

                    sm:rounded-[2rem]
                    sm:p-6

                    lg:p-8
                `}
            >

                {/* TOP ACCENT */}

                <div
                    className={`
                        absolute
                        left-0
                        top-0

                        h-px
                        w-0

                        transition-all
                        duration-500

                        group-hover:w-full

                        ${colors.bg}
                    `}
                />

                {/* ==========================================
                    HEADER
                ========================================== */}

                <div
                    className="
                        flex
                        min-w-0
                        flex-col
                        gap-4

                        sm:flex-row
                        sm:items-start
                        sm:justify-between
                    "
                >

                    {/* TITLE AND ORGANIZATION */}

                    <div className="min-w-0">

                        <div className="
                            mb-3
                            flex
                            items-center
                            gap-3
                        ">

                            {/* ICON */}

                            <div
                                className={`
                                    flex
                                    h-10
                                    w-10
                                    shrink-0
                                    items-center
                                    justify-center

                                    rounded-xl
                                    border

                                    ${colors.softBg}
                                    ${colors.softBorder}
                                    ${colors.text}
                                `}
                            >
                                <Icon
                                    size={19}
                                    strokeWidth={1.7}
                                />
                            </div>

                            {/* CATEGORY */}

                            <div className="min-w-0">

                                <p className="
                                    mb-1
                                    font-mono
                                    text-[8px]
                                    uppercase
                                    tracking-[0.2em]
                                    text-white/30

                                    sm:text-[9px]
                                ">
                                    {item.category}
                                </p>

                                <p className={`
                                    text-[10px]
                                    font-medium
                                    ${colors.text}
                                    sm:text-xs
                                `}>
                                    {item.organization}
                                </p>

                            </div>

                        </div>

                        {/* POSITION / QUALIFICATION */}

                        <h3 className="
                            text-lg
                            font-bold
                            leading-tight
                            tracking-tight
                            text-white

                            sm:text-xl
                            md:text-2xl
                        ">
                            {item.title}
                        </h3>

                    </div>

                    {/* PERIOD */}

                    <div className="
                        flex
                        shrink-0
                        flex-wrap
                        items-center
                        gap-2
                        sm:flex-col
                        sm:items-end
                    ">

                        <div className="
                            inline-flex
                            items-center
                            gap-2

                            rounded-full
                            border
                            border-white/[0.07]

                            bg-white/[0.035]

                            px-3
                            py-1.5

                            font-mono
                            text-[8px]
                            text-gray-400

                            sm:text-[9px]
                        ">
                            <Calendar size={12} />

                            {item.period}
                        </div>

                        <StatusBadge
                            completed={item.completed}
                            status={item.status}
                        />

                    </div>

                </div>

                {/* ==========================================
                    DESCRIPTION
                ========================================== */}

                <p className="
                    mt-5
                    max-w-3xl

                    text-xs
                    font-light
                    leading-[1.8]

                    text-gray-400

                    sm:mt-6
                    sm:text-sm
                ">
                    {item.description}
                </p>

                {/* ==========================================
                    TECHNICAL TAGS
                ========================================== */}

                <div className="
                    mt-5
                    flex
                    flex-wrap
                    gap-2

                    sm:mt-6
                ">
                    {item.tags.map((tag) => (
                        <span
                            key={tag}
                            className={`
                                inline-flex
                                items-center

                                rounded-lg
                                border

                                px-2.5
                                py-1

                                font-mono
                                text-[8px]
                                uppercase
                                tracking-wider

                                ${colors.softBg}
                                ${colors.softBorder}
                                ${colors.text}

                                sm:px-3
                                sm:text-[9px]
                            `}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

            </motion.div>

        </motion.div>
    );
}

/* ============================================================
   MAIN COMPONENT
============================================================ */

export default function Experience() {
    return (
        <section
            id="experience"
            className="
                relative
                isolate
                w-full
                overflow-hidden

                bg-transparent

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

            {/* ================================================
                BACKGROUND GLOW
            ================================================ */}

            <div className="
                pointer-events-none
                absolute
                -z-10

                left-0
                top-0

                h-72
                w-72

                rounded-full
                bg-cyan-500/[0.05]
                blur-[110px]

                sm:h-96
                sm:w-96
            " />

            <div className="
                pointer-events-none
                absolute
                -z-10

                bottom-0
                right-0

                h-72
                w-72

                rounded-full
                bg-purple-500/[0.05]
                blur-[110px]

                sm:h-96
                sm:w-96
            " />

            {/* ================================================
                MAIN CONTAINER
            ================================================ */}

            <div className="
                relative
                mx-auto
                w-full
                max-w-5xl
            ">

                {/* ============================================
                    HEADER
                ============================================ */}

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
                    className="
                        mb-9
                        text-center

                        sm:mb-12
                        lg:mb-14
                    "
                >

                    <p className="
                        mb-4

                        font-mono
                        text-[9px]
                        uppercase
                        tracking-[0.3em]

                        text-cyan-400

                        sm:text-[10px]
                        sm:tracking-[0.4em]
                    ">
                        Electronics + Embedded + Software
                    </p>

                    <h2 className="
                        text-4xl
                        font-black
                        leading-[0.95]
                        tracking-[-0.055em]

                        text-white

                        sm:text-5xl
                        md:text-6xl
                        lg:text-7xl
                    ">
                        Experience{" "}

                        <span className="
                            bg-gradient-to-r
                            from-cyan-400
                            via-white
                            to-purple-500

                            bg-clip-text
                            text-transparent
                        ">
                            & Journey.
                        </span>
                    </h2>

                    <p className="
                        mx-auto
                        mt-5
                        max-w-2xl

                        text-xs
                        leading-relaxed
                        text-white/40

                        sm:text-sm
                        md:text-base
                    ">
                        My journey through professional engineering
                        experience, academic development, and
                        independent projects across electronics,
                        embedded systems, and software engineering.
                    </p>

                </motion.header>

                {/* ============================================
                    EXPERIENCE SUMMARY
                ============================================ */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 12,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.5,
                    }}
                    className="
                        mb-8
                        grid
                        grid-cols-1
                        gap-3

                        sm:grid-cols-3
                        sm:gap-4
                    "
                >

                    <div className="
                        flex
                        items-center
                        gap-3

                        rounded-2xl
                        border
                        border-emerald-500/15

                        bg-emerald-500/[0.035]
                        p-4
                    ">
                        <CheckCircle2
                            size={19}
                            className="shrink-0 text-emerald-400"
                        />

                        <div>
                            <p className="
                                text-sm
                                font-bold
                                text-white
                            ">
                                3 Months
                            </p>

                            <p className="
                                mt-0.5
                                text-[9px]
                                text-white/35
                            ">
                                Completed Internship
                            </p>
                        </div>
                    </div>

                    <div className="
                        flex
                        items-center
                        gap-3

                        rounded-2xl
                        border
                        border-purple-500/15

                        bg-purple-500/[0.035]
                        p-4
                    ">
                        <GraduationCap
                            size={20}
                            className="shrink-0 text-purple-400"
                        />

                        <div>
                            <p className="
                                text-sm
                                font-bold
                                text-white
                            ">
                                Mechatronics
                            </p>

                            <p className="
                                mt-0.5
                                text-[9px]
                                text-white/35
                            ">
                                Pearson BTEC HND
                            </p>
                        </div>
                    </div>

                    <div className="
                        flex
                        items-center
                        gap-3

                        rounded-2xl
                        border
                        border-blue-500/15

                        bg-blue-500/[0.035]
                        p-4
                    ">
                        <Code2
                            size={19}
                            className="shrink-0 text-blue-400"
                        />

                        <div>
                            <p className="
                                text-sm
                                font-bold
                                text-white
                            ">
                                Software
                            </p>

                            <p className="
                                mt-0.5
                                text-[9px]
                                text-white/35
                            ">
                                Higher Diploma
                            </p>
                        </div>
                    </div>

                </motion.div>

                {/* ============================================
                    TIMELINE
                ============================================ */}

                <div className="
                    relative
                    ml-2

                    space-y-7

                    border-l
                    border-white/10

                    sm:ml-4
                    sm:space-y-9

                    md:ml-5
                    lg:space-y-10
                ">

                    {TIMELINE.map((item, index) => (
                        <TimelineCard
                            key={`${item.title}-${index}`}
                            item={item}
                            index={index}
                        />
                    ))}

                </div>

                {/* ============================================
                    CLOSING DIRECTION
                ============================================ */}

                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0.98,
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.15,
                    }}
                    transition={{
                        duration: 0.6,
                    }}
                    className="
                        mt-9

                        flex
                        flex-col
                        gap-4

                        rounded-[1.5rem]
                        border
                        border-white/10

                        bg-gradient-to-r
                        from-cyan-500/[0.08]
                        to-purple-500/[0.08]

                        p-5

                        sm:mt-12
                        sm:flex-row
                        sm:items-center
                        sm:gap-5
                        sm:rounded-[2rem]
                        sm:p-7

                        md:p-8
                    "
                >

                    {/* ICON */}

                    <div className="
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center

                        rounded-2xl
                        border
                        border-cyan-500/20

                        bg-cyan-500/10

                        text-cyan-400

                        sm:h-14
                        sm:w-14
                    ">
                        <Zap size={25} />
                    </div>

                    {/* CONTENT */}

                    <div className="min-w-0 flex-1">

                        <p className="
                            mb-1
                            font-mono
                            text-[8px]
                            uppercase
                            tracking-[0.2em]
                            text-cyan-400/70

                            sm:text-[9px]
                        ">
                            Current Direction
                        </p>

                        <h3 className="
                            text-base
                            font-bold
                            text-white

                            sm:text-xl
                        ">
                            Building Integrated Engineering Solutions
                        </h3>

                        <p className="
                            mt-2
                            max-w-3xl

                            text-xs
                            leading-relaxed
                            text-white/40

                            sm:text-sm
                        ">
                            Continuing to develop expertise in
                            electronic hardware, embedded firmware,
                            PCB design, industrial systems, and
                            software development while building
                            practical engineering solutions.
                        </p>

                    </div>

                    {/* STATUS */}

                    <div className="
                        inline-flex
                        shrink-0
                        self-start
                        items-center
                        gap-2

                        rounded-full
                        border
                        border-emerald-500/15

                        bg-emerald-500/[0.07]

                        px-3
                        py-2

                        font-mono
                        text-[8px]
                        font-bold
                        uppercase
                        tracking-widest

                        text-emerald-400

                        sm:self-center
                    ">
                        <span className="
                            h-1.5
                            w-1.5
                            animate-pulse
                            rounded-full
                            bg-emerald-400
                        " />

                        Ongoing
                    </div>

                </motion.div>

            </div>

        </section>
    );
}
