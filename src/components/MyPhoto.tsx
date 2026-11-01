
"use client";

import { motion } from "framer-motion";

import {
    MapPin,
    Zap,
    CircuitBoard,
    Cpu,
    Code2,
} from "lucide-react";

import profilePic from "../assets/profile.png";

const SPECIALIZATIONS = [
    {
        title: "Electronics",
        subtitle: "Hardware Design",
        Icon: CircuitBoard,
        color: "text-cyan-400",
        border: "border-cyan-400/15",
        bg: "bg-cyan-400/[0.045]",
    },
    {
        title: "Embedded",
        subtitle: "Firmware",
        Icon: Cpu,
        color: "text-purple-400",
        border: "border-purple-400/15",
        bg: "bg-purple-400/[0.045]",
    },
    {
        title: "Software",
        subtitle: "Development",
        Icon: Code2,
        color: "text-blue-400",
        border: "border-blue-400/15",
        bg: "bg-blue-400/[0.045]",
    },
];

export default function MyPhoto() {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 20,
                scale: 0.98,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
            }}
            viewport={{
                once: true,
                amount: 0.2,
            }}
            transition={{
                duration: 0.65,
            }}
            className="
                group
                relative

                mx-auto
                w-full
                max-w-5xl

                overflow-hidden

                rounded-[2rem]
                border
                border-white/[0.09]

                bg-[#080b10]

                p-3

                shadow-2xl
                shadow-black/30

                transition-colors
                duration-500

                hover:border-cyan-400/20

                sm:rounded-[2.5rem]
                sm:p-4

                lg:grid
                lg:grid-cols-[260px_minmax(0,1fr)]
                lg:items-center
                lg:gap-6
            "
        >

            {/* ================================================
                SUBTLE BACKGROUND EFFECTS
            ================================================ */}

            <div
                className="
                    pointer-events-none
                    absolute
                    -right-32
                    -top-32

                    h-80
                    w-80

                    rounded-full
                    bg-cyan-500/[0.055]
                    blur-[110px]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    -bottom-32
                    right-1/4

                    h-72
                    w-72

                    rounded-full
                    bg-purple-500/[0.045]
                    blur-[110px]
                "
            />

            {/* ================================================
                PROFILE PHOTO
            ================================================ */}

            <div
                className="
                    relative
                    z-10

                    mx-auto

                    aspect-square
                    w-full
                    max-w-[320px]

                    overflow-hidden

                    rounded-[1.5rem]
                    border
                    border-white/10

                    bg-[#101820]

                    sm:rounded-[2rem]

                    lg:m-0
                    lg:h-[280px]
                    lg:w-[260px]
                    lg:max-w-none
                "
            >

                <img
                    src={profilePic}
                    alt="Matheesha Nadiranga"
                    className="
                        h-full
                        w-full

                        object-cover
                        object-center

                        grayscale-[0.3]

                        transition-all
                        duration-700

                        group-hover:scale-[1.04]
                        group-hover:grayscale-0
                    "
                />

                {/* IMAGE SHADE */}

                <div
                    className="
                        pointer-events-none
                        absolute
                        inset-0

                        bg-gradient-to-t
                        from-black/70
                        via-transparent
                        to-black/10
                    "
                />

                {/* ONLINE INDICATOR */}

                <div
                    className="
                        absolute
                        right-3
                        top-3

                        flex
                        items-center
                        gap-2

                        rounded-full
                        border
                        border-white/10

                        bg-black/60
                        px-3
                        py-1.5

                        backdrop-blur-xl
                    "
                >
                    <span
                        className="
                            h-1.5
                            w-1.5

                            animate-pulse
                            rounded-full

                            bg-emerald-400
                        "
                    />

                    <span
                        className="
                            font-mono
                            text-[9px]
                            font-bold
                            uppercase
                            tracking-widest

                            text-emerald-400
                        "
                    >
                        Online
                    </span>
                </div>

                {/* PHOTO LABEL */}

                <div
                    className="
                        absolute
                        bottom-4
                        left-4

                        font-mono
                        text-[8px]
                        uppercase
                        tracking-[0.22em]

                        text-white/45
                    "
                >
                    ENGINEERING PROFILE
                </div>

            </div>

            {/* ================================================
                PROFILE INFORMATION
            ================================================ */}

            <div
                className="
                    relative
                    z-10

                    flex
                    min-w-0
                    flex-col
                    justify-center

                    px-3
                    pb-3
                    pt-6

                    text-center

                    sm:px-5
                    sm:pb-4

                    lg:px-2
                    lg:py-5
                    lg:text-left
                "
            >

                {/* NAME */}

                <div>

                    <p
                        className="
                            mb-2

                            font-mono
                            text-[9px]
                            uppercase
                            tracking-[0.3em]

                            text-cyan-400/80
                        "
                    >
                        Electronics • Embedded • Software
                    </p>

                    <h3
                        className="
                            text-2xl
                            font-black
                            leading-tight
                            tracking-[-0.04em]

                            text-white

                            sm:text-3xl
                            lg:text-3xl
                            xl:text-4xl
                        "
                    >
                        Matheesha Nadiranga
                    </h3>

                    <p
                        className="
                            mt-3

                            max-w-xl
                            mx-auto

                            text-xs
                            font-light
                            leading-relaxed

                            text-white/45

                            sm:text-sm

                            lg:mx-0
                        "
                    >
                        Building intelligent, connected products
                        through electronic hardware design,
                        embedded systems, and software engineering.
                    </p>

                </div>

                {/* SPECIALIZATIONS */}

                <div
                    className="
                        mt-6

                        grid
                        grid-cols-3
                        gap-2

                        sm:gap-3
                        lg:mt-7
                    "
                >

                    {SPECIALIZATIONS.map((item) => {
                        const Icon = item.Icon;

                        return (
                            <div
                                key={item.title}
                                className={`
                                    flex
                                    min-w-0
                                    flex-col
                                    items-center
                                    justify-center

                                    rounded-xl
                                    border

                                    px-1
                                    py-3

                                    transition-colors
                                    duration-300

                                    hover:bg-white/[0.045]

                                    sm:rounded-2xl
                                    sm:py-4

                                    lg:items-start
                                    lg:px-3

                                    ${item.bg}
                                    ${item.border}
                                `}
                            >

                                <Icon
                                    size={19}
                                    strokeWidth={1.8}
                                    className={`
                                        mb-2
                                        ${item.color}
                                    `}
                                />

                                <span
                                    className="
                                        text-[9px]
                                        font-bold
                                        text-white/80

                                        sm:text-[10px]
                                    "
                                >
                                    {item.title}
                                </span>

                                <span
                                    className="
                                        mt-1
                                        hidden

                                        text-[8px]
                                        text-white/30

                                        sm:block
                                    "
                                >
                                    {item.subtitle}
                                </span>

                            </div>
                        );
                    })}

                </div>

                {/* LOCATION AND STATUS */}

                <div
                    className="
                        mt-5

                        flex
                        flex-wrap
                        items-center
                        justify-center

                        gap-x-5
                        gap-y-2

                        border-t
                        border-white/[0.07]

                        pt-4

                        text-[10px]
                        font-medium

                        text-white/40

                        sm:mt-6
                        sm:pt-5

                        lg:justify-start
                    "
                >

                    <span
                        className="
                            flex
                            items-center
                            gap-2

                            transition-colors
                            hover:text-cyan-300
                        "
                    >
                        <MapPin
                            size={14}
                            className="text-cyan-400/70"
                        />

                        Sri Lanka
                    </span>

                    <span
                        className="
                            h-1
                            w-1
                            rounded-full
                            bg-white/20
                        "
                    />

                    <span
                        className="
                            flex
                            items-center
                            gap-2

                            transition-colors
                            hover:text-purple-300
                        "
                    >
                        <Zap
                            size={14}
                            className="text-purple-400/70"
                        />

                        Innovating
                    </span>

                </div>

            </div>

        </motion.div>
    );
}
