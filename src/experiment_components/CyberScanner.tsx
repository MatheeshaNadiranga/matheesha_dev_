"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
    ScanFace,
    Fingerprint,
    X,
    Sparkles,
    Terminal,
    Cpu,
    CircuitBoard,
    Radio,
    Zap,
    Factory,
    Wrench,
} from "lucide-react";

/* ============================================================
   QUESTIONS
============================================================ */

const QUESTION_OPTIONS = [
    {
        label: "Embedded",
        value: "embedded",
        icon: Cpu,
    },
    {
        label: "PCB Design",
        value: "pcb",
        icon: CircuitBoard,
    },
    {
        label: "Firmware",
        value: "firmware",
        icon: Terminal,
    },
    {
        label: "Industrial",
        value: "industrial",
        icon: Factory,
    },
    {
        label: "IoT",
        value: "iot",
        icon: Radio,
    },
    {
        label: "Power",
        value: "power",
        icon: Zap,
    },
    {
        label: "Hardware",
        value: "hardware",
        icon: Wrench,
    },
    {
        label: "Electronics",
        value: "electronics",
        icon: CircuitBoard,
    },
];

/* ============================================================
   IDENTITIES
============================================================ */

const IDENTITIES = {
    embedded: {
        title: "Embedded Systems Engineer",
        desc:
            "You think in microcontrollers, peripherals, firmware, timing, and real-world hardware.",
        color: "text-cyan-400",
    },

    pcb: {
        title: "PCB Design Engineer",
        desc:
            "You turn circuit ideas into practical boards through schematic capture, layout, routing, and hardware integration.",
        color: "text-purple-400",
    },

    firmware: {
        title: "Firmware Engineer",
        desc:
            "You bridge hardware and software through reliable embedded C/C++ firmware and low-level control.",
        color: "text-blue-400",
    },

    industrial: {
        title: "Industrial Systems Engineer",
        desc:
            "You build controllers and interfaces for real-world industrial systems, I/O, instrumentation, and automation.",
        color: "text-orange-400",
    },

    iot: {
        title: "IoT Systems Engineer",
        desc:
            "You connect embedded devices, communication interfaces, sensors, and networked systems into useful products.",
        color: "text-emerald-400",
    },

    power: {
        title: "Power Electronics Engineer",
        desc:
            "You work with efficient power delivery, low-power systems, battery applications, and power conversion concepts.",
        color: "text-yellow-400",
    },

    hardware: {
        title: "Hardware Engineer",
        desc:
            "You enjoy turning requirements into circuits, prototypes, interfaces, and complete electronic systems.",
        color: "text-pink-400",
    },

    electronics: {
        title: "Electronic Engineer",
        desc:
            "You work across analog, digital, embedded, PCB, instrumentation, and system-level electronics.",
        color: "text-cyan-300",
    },
} as const;

type IdentityKey = keyof typeof IDENTITIES;

type Step =
    | "intro"
    | "question"
    | "scanning"
    | "result";

/* ============================================================
   SCAN MESSAGES
============================================================ */

const SCAN_STEPS = [
    "Initializing engineering link...",
    "Analyzing technical profile...",
    "Mapping hardware capabilities...",
    "Calibrating embedded matrix...",
    "Checking engineering vectors...",
    "Profile match found!",
];

/* ============================================================
   COMPONENT
============================================================ */

export default function CyberScanner() {
    const [isOpen, setIsOpen] =
        useState(false);

    const [step, setStep] =
        useState<Step>("intro");

    const [scanProgress, setScanProgress] =
        useState(0);

    const [selectedOption, setSelectedOption] =
        useState<IdentityKey | null>(null);

    /* ========================================================
       DERIVE RESULT
       No separate result state needed.
    ======================================================== */

    const result =
        selectedOption !== null
            ? IDENTITIES[selectedOption]
            : null;

    /* ========================================================
       START
    ======================================================== */

    const startProcess = () => {
        setStep("question");
        setScanProgress(0);
        setSelectedOption(null);
    };

    /* ========================================================
       ANSWER
    ======================================================== */

    const handleAnswer = (
        value: string
    ) => {
        if (
            !(value in IDENTITIES)
        ) {
            return;
        }

        setSelectedOption(
            value as IdentityKey
        );

        setScanProgress(0);
        setStep("scanning");
    };

    /* ========================================================
       SCAN TIMER
       
       This effect only synchronizes the scan
       timer with the current scanning state.
    ======================================================== */

    useEffect(() => {
        if (step !== "scanning") {
            return;
        }

        const timeout = window.setTimeout(() => {
            setScanProgress((current) => {
                if (
                    current >=
                    SCAN_STEPS.length
                ) {
                    return current;
                }

                return current + 1;
            });
        }, 650);

        return () => {
            window.clearTimeout(timeout);
        };
    }, [step, scanProgress]);

    /* ========================================================
       COMPLETE SCAN

       When progress reaches the end, move to result.
       No result state is updated here.
    ======================================================== */

    useEffect(() => {
        if (
            step === "scanning" &&
            scanProgress >=
                SCAN_STEPS.length
        ) {
            const timeout =
                window.setTimeout(() => {
                    setStep("result");
                }, 250);

            return () =>
                window.clearTimeout(
                    timeout
                );
        }
    }, [
        step,
        scanProgress,
    ]);

    /* ========================================================
       RESET
    ======================================================== */

    const reset = () => {
        setStep("intro");
        setScanProgress(0);
        setSelectedOption(null);
    };

    /* ========================================================
       CLOSE
    ======================================================== */

    const closeScanner = () => {
        setIsOpen(false);
        reset();
    };

    /* ========================================================
       RENDER
    ======================================================== */

    return (
        <>
            {/* ==================================================
                FLOATING BUTTON
            ================================================== */}

            <motion.button
                type="button"
                whileHover={{
                    scale: 1.08,
                    rotate: 4,
                }}
                whileTap={{
                    scale: 0.92,
                }}
                onClick={() =>
                    setIsOpen(true)
                }
                aria-label="Open engineering profile scanner"
                className="
                    fixed
                    bottom-5
                    left-4
                    sm:left-6
                    sm:bottom-6
                    z-40
                    w-12
                    h-12
                    sm:w-14
                    sm:h-14
                    bg-black/60
                    backdrop-blur-md
                    border
                    border-cyan-500/30
                    rounded-full
                    flex
                    items-center
                    justify-center
                    group
                    shadow-[0_0_20px_rgba(6,182,212,0.2)]
                    hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]
                    transition-all
                "
            >
                <div
                    className="
                        absolute
                        inset-0
                        bg-cyan-500/10
                        rounded-full
                        animate-ping
                        opacity-20
                    "
                />

                <ScanFace
                    className="
                        relative
                        z-10
                        text-cyan-400
                        group-hover:text-white
                        transition-colors
                    "
                    size={25}
                />

                <span
                    className="
                        hidden
                        sm:block
                        absolute
                        left-16
                        bg-black/90
                        text-cyan-400
                        text-[10px]
                        font-bold
                        px-3
                        py-1.5
                        rounded-lg
                        opacity-0
                        group-hover:opacity-100
                        transition-all
                        whitespace-nowrap
                        border
                        border-cyan-500/20
                        translate-x-2
                        group-hover:translate-x-0
                        duration-300
                        pointer-events-none
                    "
                >
                    Identify Engineering Profile
                </span>
            </motion.button>

            {/* ==================================================
                MODAL
            ================================================== */}

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{
                            opacity: 0,
                        }}
                        className="
                            fixed
                            inset-0
                            z-50
                            flex
                            items-center
                            justify-center
                            p-3
                            sm:p-4
                            bg-black/80
                            backdrop-blur-sm
                            overflow-y-auto
                        "
                    >
                        {/* Backdrop */}

                        <button
                            type="button"
                            aria-label="Close scanner"
                            onClick={
                                closeScanner
                            }
                            className="
                                absolute
                                inset-0
                                w-full
                                h-full
                                cursor-default
                            "
                        />

                        {/* ==================================================
                            MODAL CONTENT
                        ================================================== */}

                        <motion.div
                            initial={{
                                scale: 0.94,
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                scale: 1,
                                opacity: 1,
                                y: 0,
                            }}
                            exit={{
                                scale: 0.94,
                                opacity: 0,
                                y: 20,
                            }}
                            transition={{
                                duration: 0.3,
                            }}
                            onClick={(event) =>
                                event.stopPropagation()
                            }
                            className="
                                relative
                                w-full
                                max-w-md
                                sm:max-w-xl
                                max-h-[90dvh]
                                bg-black
                                border
                                border-cyan-500/30
                                rounded-2xl
                                sm:rounded-3xl
                                overflow-hidden
                                shadow-[0_0_60px_rgba(6,182,212,0.12)]
                            "
                        >

                            {/* ==================================================
                                HEADER
                            ================================================== */}

                            <div
                                className="
                                    bg-cyan-500/5
                                    px-4
                                    sm:px-6
                                    py-3.5
                                    sm:py-4
                                    border-b
                                    border-cyan-500/20
                                    flex
                                    items-center
                                    justify-between
                                    gap-4
                                "
                            >
                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-2
                                        min-w-0
                                    "
                                >
                                    <Terminal
                                        size={15}
                                        className="
                                            text-cyan-500
                                            shrink-0
                                        "
                                    />

                                    <span
                                        className="
                                            text-[8px]
                                            sm:text-[10px]
                                            font-mono
                                            text-cyan-400
                                            tracking-[0.12em]
                                            sm:tracking-widest
                                            uppercase
                                            truncate
                                        "
                                    >
                                        ENGINEERING_SCANNER_V3.0
                                    </span>
                                </div>

                                <button
                                    type="button"
                                    onClick={
                                        closeScanner
                                    }
                                    aria-label="Close"
                                    className="
                                        shrink-0
                                        w-8
                                        h-8
                                        rounded-lg
                                        flex
                                        items-center
                                        justify-center
                                        text-gray-500
                                        hover:text-white
                                        hover:bg-white/5
                                        transition-all
                                    "
                                >
                                    <X size={17} />
                                </button>
                            </div>

                            {/* ==================================================
                                BODY
                            ================================================== */}

                            <div
                                className="
                                    p-5
                                    sm:p-8
                                    flex
                                    flex-col
                                    items-center
                                    justify-center
                                    min-h-[380px]
                                    sm:min-h-[420px]
                                    max-h-[calc(90dvh-60px)]
                                    overflow-y-auto
                                "
                            >

                                {/* =================================================
                                    INTRO
                                ================================================= */}

                                {step ===
                                    "intro" && (
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                        }}
                                        animate={{
                                            opacity: 1,
                                        }}
                                        className="
                                            w-full
                                            text-center
                                            space-y-5
                                            sm:space-y-6
                                        "
                                    >
                                        <div
                                            className="
                                                relative
                                                w-28
                                                h-28
                                                sm:w-32
                                                sm:h-32
                                                mx-auto
                                            "
                                        >
                                            <div
                                                className="
                                                    absolute
                                                    inset-0
                                                    border-2
                                                    border-dashed
                                                    border-cyan-500/30
                                                    rounded-full
                                                    animate-[spin_10s_linear_infinite]
                                                "
                                            />

                                            <div
                                                className="
                                                    absolute
                                                    inset-2
                                                    border-2
                                                    border-cyan-500/50
                                                    rounded-full
                                                    animate-ping
                                                    opacity-20
                                                "
                                            />

                                            <button
                                                type="button"
                                                onClick={
                                                    startProcess
                                                }
                                                aria-label="Start engineering scan"
                                                className="
                                                    absolute
                                                    inset-3
                                                    flex
                                                    items-center
                                                    justify-center
                                                    text-cyan-400
                                                    hover:text-white
                                                    hover:scale-105
                                                    transition-all
                                                    bg-cyan-500/10
                                                    rounded-full
                                                    hover:bg-cyan-500/20
                                                "
                                            >
                                                <Fingerprint
                                                    size={
                                                        42
                                                    }
                                                    className="
                                                        sm:w-12
                                                        sm:h-12
                                                    "
                                                />
                                            </button>
                                        </div>

                                        <div>
                                            <h3
                                                className="
                                                    text-xl
                                                    sm:text-2xl
                                                    font-bold
                                                    text-white
                                                "
                                            >
                                                Identify Your
                                                Engineering
                                                Profile
                                            </h3>

                                            <p
                                                className="
                                                    mt-2
                                                    text-gray-400
                                                    text-xs
                                                    sm:text-sm
                                                    leading-relaxed
                                                    max-w-sm
                                                    mx-auto
                                                "
                                            >
                                                Select the
                                                engineering
                                                area that
                                                best matches
                                                how you think
                                                and build.
                                            </p>
                                        </div>

                                        <button
                                            type="button"
                                            onClick={
                                                startProcess
                                            }
                                            className="
                                                px-6
                                                sm:px-8
                                                py-3
                                                bg-cyan-600
                                                hover:bg-cyan-500
                                                text-white
                                                text-xs
                                                sm:text-sm
                                                font-bold
                                                rounded-xl
                                                shadow-lg
                                                shadow-cyan-500/20
                                                transition-all
                                                active:scale-95
                                            "
                                        >
                                            BEGIN ANALYSIS
                                        </button>
                                    </motion.div>
                                )}

                                {/* =================================================
                                    QUESTION
                                ================================================= */}

                                {step ===
                                    "question" && (
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            x: 20,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            x: 0,
                                        }}
                                        className="
                                            w-full
                                            space-y-5
                                            sm:space-y-6
                                        "
                                    >
                                        <div className="text-center">

                                            <p
                                                className="
                                                    text-[8px]
                                                    sm:text-[9px]
                                                    font-mono
                                                    uppercase
                                                    tracking-[0.2em]
                                                    text-cyan-400/50
                                                    mb-2
                                                "
                                            >
                                                Profile Analysis
                                            </p>

                                            <h3
                                                className="
                                                    text-lg
                                                    sm:text-xl
                                                    font-bold
                                                    text-white
                                                "
                                            >
                                                Select Your
                                                Engineering
                                                Domain
                                            </h3>

                                        </div>

                                        <div
                                            className="
                                                grid
                                                grid-cols-2
                                                sm:grid-cols-4
                                                gap-2.5
                                                sm:gap-3
                                            "
                                        >
                                            {QUESTION_OPTIONS.map(
                                                (option) => {
                                                    const Icon =
                                                        option.icon;

                                                    return (
                                                        <button
                                                            type="button"
                                                            key={
                                                                option.value
                                                            }
                                                            onClick={() =>
                                                                handleAnswer(
                                                                    option.value
                                                                )
                                                            }
                                                            className="
                                                                group
                                                                flex
                                                                flex-col
                                                                items-center
                                                                justify-center
                                                                gap-2
                                                                p-3
                                                                sm:p-4
                                                                min-h-[90px]
                                                                sm:min-h-[105px]
                                                                bg-white/[0.04]
                                                                border
                                                                border-white/10
                                                                rounded-xl
                                                                sm:rounded-2xl
                                                                hover:bg-cyan-500/10
                                                                hover:border-cyan-500/50
                                                                transition-all
                                                                duration-300
                                                            "
                                                        >
                                                            <Icon
                                                                size={20}
                                                                className="
                                                                    text-gray-500
                                                                    group-hover:text-cyan-400
                                                                    transition-colors
                                                                "
                                                            />

                                                            <span
                                                                className="
                                                                    text-[9px]
                                                                    sm:text-[10px]
                                                                    font-medium
                                                                    text-gray-300
                                                                    group-hover:text-white
                                                                    text-center
                                                                "
                                                            >
                                                                {
                                                                    option.label
                                                                }
                                                            </span>
                                                        </button>
                                                    );
                                                }
                                            )}
                                        </div>
                                    </motion.div>
                                )}

                                {/* =================================================
                                    SCANNING
                                ================================================= */}

                                {step ===
                                    "scanning" && (
                                    <div
                                        className="
                                            text-center
                                            space-y-6
                                            sm:space-y-8
                                            w-full
                                        "
                                    >
                                        <div
                                            className="
                                                relative
                                                w-full
                                                h-36
                                                sm:h-40
                                                bg-cyan-900/10
                                                rounded-xl
                                                overflow-hidden
                                                border
                                                border-cyan-500/30
                                            "
                                        >
                                            <div
                                                className="
                                                    absolute
                                                    inset-0
                                                    opacity-20
                                                "
                                                style={{
                                                    backgroundImage:
                                                        "linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)",
                                                    backgroundSize:
                                                        "20px 20px",
                                                }}
                                            />

                                            <motion.div
                                                animate={{
                                                    top: [
                                                        "0%",
                                                        "100%",
                                                        "0%",
                                                    ],
                                                }}
                                                transition={{
                                                    duration:
                                                        2,
                                                    repeat:
                                                        Infinity,
                                                    ease: "linear",
                                                }}
                                                className="
                                                    absolute
                                                    left-0
                                                    w-full
                                                    h-1
                                                    bg-cyan-400
                                                    shadow-[0_0_20px_rgba(6,182,212,1)]
                                                    z-10
                                                "
                                            />

                                            <div
                                                className="
                                                    absolute
                                                    inset-0
                                                    flex
                                                    items-center
                                                    justify-center
                                                    opacity-50
                                                "
                                            >
                                                <ScanFace
                                                    size={
                                                        76
                                                    }
                                                    className="
                                                        text-cyan-500/40
                                                        sm:w-20
                                                        sm:h-20
                                                    "
                                                />
                                            </div>
                                        </div>

                                        <motion.div
                                            key={
                                                scanProgress
                                            }
                                            initial={{
                                                opacity: 0,
                                                y: 10,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                            }}
                                            className="
                                                text-cyan-400
                                                font-mono
                                                text-xs
                                                sm:text-sm
                                                tracking-wider
                                                min-h-5
                                            "
                                        >
                                            {
                                                SCAN_STEPS[
                                                    Math.min(
                                                        scanProgress,
                                                        SCAN_STEPS.length -
                                                            1
                                                    )
                                                ]
                                            }

                                            <span className="animate-pulse">
                                                _
                                            </span>
                                        </motion.div>

                                        <div
                                            className="
                                                w-full
                                                max-w-sm
                                                mx-auto
                                                h-1
                                                bg-white/5
                                                rounded-full
                                                overflow-hidden
                                            "
                                        >
                                            <motion.div
                                                animate={{
                                                    width: `${Math.min(
                                                        (scanProgress /
                                                            SCAN_STEPS.length) *
                                                            100,
                                                        100
                                                    )}%`,
                                                }}
                                                className="
                                                    h-full
                                                    bg-gradient-to-r
                                                    from-cyan-400
                                                    to-purple-500
                                                "
                                            />
                                        </div>
                                    </div>
                                )}

                                {/* =================================================
                                    RESULT
                                ================================================= */}

                                {step ===
                                    "result" &&
                                    result && (
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            scale: 0.9,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            scale: 1,
                                        }}
                                        className="
                                            w-full
                                            text-center
                                            space-y-5
                                            sm:space-y-6
                                        "
                                    >
                                        <div
                                            className="
                                                relative
                                                w-20
                                                h-20
                                                sm:w-24
                                                sm:h-24
                                                mx-auto
                                            "
                                        >
                                            <div
                                                className="
                                                    absolute
                                                    inset-0
                                                    rounded-full
                                                    bg-cyan-500/10
                                                    blur-xl
                                                "
                                            />

                                            <div
                                                className="
                                                    relative
                                                    w-full
                                                    h-full
                                                    bg-gradient-to-br
                                                    from-cyan-500/20
                                                    to-purple-500/20
                                                    rounded-full
                                                    flex
                                                    items-center
                                                    justify-center
                                                    border-2
                                                    border-cyan-500/50
                                                    shadow-[0_0_30px_rgba(6,182,212,0.3)]
                                                "
                                            >
                                                <Sparkles
                                                    size={36}
                                                    className="text-cyan-400"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">

                                            <p
                                                className="
                                                    text-gray-400
                                                    text-[8px]
                                                    sm:text-[9px]
                                                    font-bold
                                                    uppercase
                                                    tracking-[0.2em]
                                                "
                                            >
                                                Engineering
                                                Profile Match
                                            </p>

                                            <h2
                                                className={`
                                                    text-2xl
                                                    sm:text-3xl
                                                    md:text-4xl
                                                    font-bold
                                                    ${result.color}
                                                `}
                                            >
                                                {result.title}
                                            </h2>

                                            <p
                                                className="
                                                    max-w-md
                                                    mx-auto
                                                    text-gray-300
                                                    text-sm
                                                    sm:text-base
                                                    leading-relaxed
                                                "
                                            >
                                                {result.desc}
                                            </p>

                                        </div>

                                        <button
                                            type="button"
                                            onClick={
                                                reset
                                            }
                                            className="
                                                px-5
                                                sm:px-6
                                                py-2
                                                border
                                                border-white/10
                                                hover:bg-white/5
                                                rounded-lg
                                                text-xs
                                                text-gray-400
                                                hover:text-white
                                                transition-all
                                            "
                                        >
                                            Scan Another
                                        </button>

                                    </motion.div>
                                )}

                            </div>

                            {/* ==================================================
                                CORNER ACCENTS
                            ================================================== */}

                            <div
                                className="
                                    absolute
                                    top-0
                                    left-0
                                    w-4
                                    h-4
                                    border-t-2
                                    border-l-2
                                    border-cyan-500
                                    pointer-events-none
                                "
                            />

                            <div
                                className="
                                    absolute
                                    top-0
                                    right-0
                                    w-4
                                    h-4
                                    border-t-2
                                    border-r-2
                                    border-cyan-500
                                    pointer-events-none
                                "
                            />

                            <div
                                className="
                                    absolute
                                    bottom-0
                                    left-0
                                    w-4
                                    h-4
                                    border-b-2
                                    border-l-2
                                    border-cyan-500
                                    pointer-events-none
                                "
                            />

                            <div
                                className="
                                    absolute
                                    bottom-0
                                    right-0
                                    w-4
                                    h-4
                                    border-b-2
                                    border-r-2
                                    border-cyan-500
                                    pointer-events-none
                                "
                            />

                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}