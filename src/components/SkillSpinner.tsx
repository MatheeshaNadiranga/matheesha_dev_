import {
    motion,
    useScroll,
    useTransform,
} from "framer-motion";

import {
   
    CircuitBoard,
    type LucideIcon,
} from "lucide-react";

import {
    Suspense,
    useEffect,
    useRef,
    useState,
} from "react";

import {
    Canvas,
    useFrame,
} from "@react-three/fiber";

import {
    Float,
    Html,
} from "@react-three/drei";

import * as THREE from "three";

/* ============================================================
   TYPES
============================================================ */

type SkillIconType =
    | "image"
    | "label"
    | "lucide";

type Skill = {
    name: string;
    iconType: SkillIconType;
    icon?: string;
    Icon?: LucideIcon;
    badge?: string;
};

/* ============================================================
   SKILLS
============================================================ */

const SKILL_ROWS: Skill[][] = [
    [
        {
            name: "STM32",
            iconType: "label",
            badge: "STM",
        },
        {
            name: "ESP32",
            iconType: "label",
            badge: "ESP",
        },
        {
            name: "AVR",
            iconType: "label",
            badge: "AVR",
        },
        {
            name: "C",
            iconType: "image",
            icon:
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
        },
        {
            name: "C++",
            iconType: "image",
            icon:
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        },
        {
            name: "Python",
            iconType: "image",
            icon:
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
            name: "Git",
            iconType: "image",
            icon:
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
    ],

    [
        {
            name: "Altium Designer",
            iconType: "label",
            badge: "ALT",
        },
        {
            name: "KiCad",
            iconType: "label",
            badge: "KIC",
        },
        {
            name: "SolidWorks",
            iconType: "label",
            badge: "SW",
        },
        {
            name: "PlatformIO",
            iconType: "label",
            badge: "PIO",
        },
        {
            name: "VS Code",
            iconType: "image",
            icon:
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        },
        {
            name: "GitHub",
            iconType: "image",
            icon:
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
        {
            name: "Electronics",
            iconType: "lucide",
            Icon: CircuitBoard,
        },
    ],
];

/* ============================================================
   3D EMBEDDED CONTROLLER
============================================================ */

function EmbeddedCoreScene({
    scrollProgress,
}: {
    scrollProgress: number;
}) {
    const groupRef = useRef<THREE.Group | null>(null);

    useFrame((state) => {
        const group = groupRef.current;

        if (!group) return;

        group.rotation.y =
            scrollProgress * Math.PI * 3.5 +
            state.clock.elapsedTime * 0.12;

        group.rotation.x =
            Math.sin(
                state.clock.elapsedTime * 0.35
            ) * 0.06;
    });

    const pins = Array.from({
        length: 8,
    });

    const signalNodes = Array.from({
        length: 12,
    });

    return (
        <Float
            speed={1.6}
            rotationIntensity={0.25}
            floatIntensity={0.6}
        >
            <group ref={groupRef}>

                {/* =========================================
                    MAIN MCU PACKAGE
                ========================================= */}

                <mesh position={[0, 0, 0]}>
                    <boxGeometry
                        args={[1.7, 1.7, 0.45]}
                    />

                    <meshStandardMaterial
                        color="#111827"
                        metalness={0.9}
                        roughness={0.22}
                        emissive="#031b24"
                        emissiveIntensity={1.2}
                    />
                </mesh>

                {/* =========================================
                    MCU TOP
                ========================================= */}

                <mesh position={[0, 0, 0.24]}>
                    <boxGeometry
                        args={[1.05, 1.05, 0.04]}
                    />

                    <meshStandardMaterial
                        color="#0b2330"
                        metalness={0.7}
                        roughness={0.25}
                    />
                </mesh>

                {/* =========================================
                    GLOWING PROCESSOR CORE
                ========================================= */}

                <mesh position={[0, 0, 0.28]}>
                    <boxGeometry
                        args={[0.55, 0.55, 0.03]}
                    />

                    <meshBasicMaterial
                        color="#06b6d4"
                    />
                </mesh>

                <mesh position={[0, 0, 0.30]}>
                    <boxGeometry
                        args={[0.70, 0.70, 0.02]}
                    />

                    <meshBasicMaterial
                        color="#06b6d4"
                        transparent
                        opacity={0.08}
                    />
                </mesh>

                {/* =========================================
                    MCU PINS
                ========================================= */}

                {pins.map((_, i) => {
                    const offset =
                        -0.60 + i * 0.17;

                    return (
                        <group key={`pin-${i}`}>

                            {/* LEFT */}

                            <mesh
                                position={[
                                    -1.02,
                                    offset,
                                    0,
                                ]}
                            >
                                <boxGeometry
                                    args={[
                                        0.32,
                                        0.035,
                                        0.035,
                                    ]}
                                />

                                <meshBasicMaterial
                                    color={
                                        i % 2 === 0
                                            ? "#06b6d4"
                                            : "#a855f7"
                                    }
                                />
                            </mesh>

                            {/* RIGHT */}

                            <mesh
                                position={[
                                    1.02,
                                    offset,
                                    0,
                                ]}
                            >
                                <boxGeometry
                                    args={[
                                        0.32,
                                        0.035,
                                        0.035,
                                    ]}
                                />

                                <meshBasicMaterial
                                    color={
                                        i % 2 === 0
                                            ? "#a855f7"
                                            : "#06b6d4"
                                    }
                                />
                            </mesh>

                            {/* TOP */}

                            <mesh
                                position={[
                                    offset,
                                    1.02,
                                    0,
                                ]}
                            >
                                <boxGeometry
                                    args={[
                                        0.035,
                                        0.32,
                                        0.035,
                                    ]}
                                />

                                <meshBasicMaterial
                                    color="#06b6d4"
                                />
                            </mesh>

                            {/* BOTTOM */}

                            <mesh
                                position={[
                                    offset,
                                    -1.02,
                                    0,
                                ]}
                            >
                                <boxGeometry
                                    args={[
                                        0.035,
                                        0.32,
                                        0.035,
                                    ]}
                                />

                                <meshBasicMaterial
                                    color="#a855f7"
                                />
                            </mesh>

                        </group>
                    );
                })}

                {/* =========================================
                    SIGNAL NODES
                ========================================= */}

                {signalNodes.map((_, i) => {
                    const angle =
                        (i / signalNodes.length) *
                        Math.PI *
                        2;

                    const radius = 2.15;

                    const x =
                        Math.cos(angle) * radius;

                    const y =
                        Math.sin(angle) * radius;

                    const signalColor =
                        i % 2 === 0
                            ? "#06b6d4"
                            : "#a855f7";

                    return (
                        <group
                            key={`signal-${i}`}
                        >

                            <mesh
                                position={[
                                    x,
                                    y,
                                    0,
                                ]}
                            >
                                <sphereGeometry
                                    args={[
                                        0.075,
                                        12,
                                        12,
                                    ]}
                                />

                                <meshStandardMaterial
                                    color={signalColor}
                                    emissive={signalColor}
                                    emissiveIntensity={2}
                                />
                            </mesh>

                            <mesh
                                position={[
                                    x * 0.78,
                                    y * 0.78,
                                    0,
                                ]}
                                rotation={[
                                    0,
                                    0,
                                    angle,
                                ]}
                            >
                                <boxGeometry
                                    args={[
                                        0.55,
                                        0.018,
                                        0.018,
                                    ]}
                                />

                                <meshBasicMaterial
                                    color={signalColor}
                                    transparent
                                    opacity={0.30}
                                />
                            </mesh>

                        </group>
                    );
                })}

                {/* =========================================
                    3D STATUS LABEL
                ========================================= */}

                <Html
                    position={[0, -1.8, 0]}
                    center
                    transform
                >
                    <div
                        className="
                            px-3
                            sm:px-4
                            py-1.5
                            bg-black/85
                            border
                            border-cyan-500/30
                            rounded-lg
                            text-[8px]
                            sm:text-[9px]
                            font-mono
                            text-cyan-400
                            tracking-wider
                            whitespace-nowrap
                            shadow-[0_0_25px_rgba(6,182,212,0.12)]
                        "
                    >
                        EMBEDDED_CONTROLLER // ONLINE
                    </div>
                </Html>

            </group>
        </Float>
    );
}

/* ============================================================
   SKILL CARD
============================================================ */

function SkillCard({
    skill,
}: {
    skill: Skill;
}) {
    return (
        <motion.div
            whileHover={{
                scale: 1.08,
                y: -6,
            }}
            whileTap={{
                scale: 0.97,
            }}
            className="
                group
                relative
                shrink-0

                w-[84px]
                h-[84px]

                sm:w-[92px]
                sm:h-[92px]

                md:w-24
                md:h-24

                lg:w-28
                lg:h-28

                bg-white/[0.045]
                border
                border-white/10

                rounded-[1.5rem]
                sm:rounded-[1.75rem]
                md:rounded-[2rem]

                flex
                items-center
                justify-center

                backdrop-blur-xl

                transition-all
                duration-300

                hover:bg-white/[0.08]
                hover:border-cyan-400/25

                shadow-2xl

                cursor-default
            "
        >

            {/* ==============================================
                DEVICON IMAGE
            ============================================== */}

            {skill.iconType === "image" &&
                skill.icon && (
                    <img
                        src={skill.icon}
                        alt={skill.name}
                        loading="lazy"
                        className="
                            w-9
                            h-9

                            sm:w-10
                            sm:h-10

                            md:w-12
                            md:h-12

                            lg:w-14
                            lg:h-14

                            object-contain

                            transition-transform
                            duration-300

                            group-hover:scale-110
                        "
                    />
                )}

            {/* ==============================================
                HARDWARE / SOFTWARE BADGE
            ============================================== */}

            {skill.iconType === "label" && (
                <div
                    className="
                        flex
                        flex-col
                        items-center
                        justify-center
                        text-center
                        px-2
                    "
                >

                    <div
                        className="
                            text-xl
                            sm:text-2xl
                            md:text-3xl

                            font-black
                            tracking-tighter

                            text-transparent
                            bg-clip-text
                            bg-gradient-to-br
                            from-cyan-300
                            to-purple-500

                            transition-transform
                            duration-300

                            group-hover:scale-110
                        "
                    >
                        {skill.badge}
                    </div>

                    <div
                        className="
                            text-[7px]
                            sm:text-[8px]

                            font-mono
                            text-white/30

                            mt-1

                            uppercase
                            tracking-wider

                            leading-tight
                        "
                    >
                        {skill.name}
                    </div>

                </div>
            )}

            {/* ==============================================
                LUCIDE ICON
            ============================================== */}

            {skill.iconType === "lucide" &&
                skill.Icon && (
                    <skill.Icon
                        size={42}
                        className="
                            text-cyan-400

                            transition-transform
                            duration-300

                            group-hover:scale-110
                        "
                    />
                )}

            {/* ==============================================
                TOOLTIP
            ============================================== */}

            <div
                className="
                    absolute

                    -bottom-9
                    sm:-bottom-10

                    left-1/2
                    -translate-x-1/2

                    opacity-0
                    group-hover:opacity-100

                    transition-all
                    duration-200

                    bg-stone-900/95

                    border
                    border-white/15

                    text-white

                    text-[8px]
                    sm:text-[9px]

                    font-bold

                    px-2.5
                    sm:px-3

                    py-1

                    rounded-full

                    uppercase
                    tracking-wider

                    whitespace-nowrap

                    pointer-events-none

                    shadow-xl

                    z-30
                "
            >
                {skill.name}
            </div>

        </motion.div>
    );
}

/* ============================================================
   MAIN COMPONENT
============================================================ */

export default function SkillsSpinner() {
    const containerRef =
        useRef<HTMLDivElement>(null);

    const [scrollVal, setScrollVal] =
        useState(0);

    const {
        scrollYProgress,
    } = useScroll({
        target: containerRef,
        offset: [
            "start end",
            "end start",
        ],
    });

    /* ========================================================
       SCROLL LISTENER
    ======================================================== */

    useEffect(() => {
        const unsubscribe =
            scrollYProgress.on(
                "change",
                (latest) => {
                    setScrollVal(latest);
                }
            );

        return () => {
            unsubscribe();
        };
    }, [scrollYProgress]);

    /* ========================================================
       ROW MOVEMENT
    ======================================================== */

    const row1X = useTransform(
        scrollYProgress,
        [0, 1],
        [80, -80]
    );

    const row2X = useTransform(
        scrollYProgress,
        [0, 1],
        [-80, 80]
    );

    /* ========================================================
       SECTION OPACITY
    ======================================================== */

    const opacity = useTransform(
        scrollYProgress,
        [0, 0.15, 0.85, 1],
        [0, 1, 1, 0]
    );

    /* ========================================================
       3D CORE MOVEMENT
    ======================================================== */

    const coreY = useTransform(
        scrollYProgress,
        [0, 1],
        [15, -15]
    );

    return (
        <section
            ref={containerRef}
            className="
                relative
                w-full
                overflow-hidden

                bg-transparent

                pt-24
                sm:pt-28
                lg:pt-32

                pb-16
                sm:pb-20
                lg:pb-24

                px-4
                sm:px-6

                lg:pl-28
                lg:pr-8
            "
        >

            {/* =================================================
                BACKGROUND GLOW
            ================================================= */}

            <div
                className="
                    pointer-events-none
                    absolute

                    top-1/3
                    left-1/2

                    -translate-x-1/2

                    w-[450px]
                    sm:w-[650px]
                    lg:w-[850px]

                    h-[300px]

                    bg-cyan-500/5

                    blur-[110px]

                    rounded-full
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute

                    bottom-0
                    right-0

                    w-72
                    h-72

                    bg-purple-500/5

                    blur-[100px]

                    rounded-full
                "
            />

            <motion.div
                style={{
                    opacity,
                }}
                className="
                    relative
                    w-full
                    max-w-7xl
                    mx-auto

                    flex
                    flex-col
                    items-center

                    gap-8
                    sm:gap-10
                    lg:gap-12
                "
            >

                {/* =================================================
                    HEADER
                ================================================= */}

                <div
                    className="
                        w-full
                        text-center
                    "
                >

                    <motion.p
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
                        }}
                        className="
                            text-[9px]
                            sm:text-[10px]

                            font-mono

                            text-cyan-400

                            uppercase

                            tracking-[0.3em]
                            sm:tracking-[0.45em]

                            mb-4
                        "
                    >
                        Hardware + Firmware
                    </motion.p>

                    <motion.h2
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
                        }}
                        transition={{
                            delay: 0.08,
                        }}
                        className="
                            text-4xl
                            sm:text-5xl
                            md:text-7xl
                            lg:text-8xl

                            font-black

                            text-white

                            tracking-[-0.05em]

                            uppercase

                            leading-[0.9]
                        "
                    >
                        Engineering{" "}

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
                            Arsenal
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
                        }}
                        transition={{
                            delay: 0.15,
                        }}
                        className="
                            max-w-2xl
                            mx-auto

                            mt-5

                            text-xs
                            sm:text-sm
                            md:text-base

                            text-white/35

                            leading-relaxed
                        "
                    >
                        Electronics, embedded firmware,
                        PCB design, industrial control,
                        communication interfaces, power
                        systems, and hardware development.
                    </motion.p>

                </div>

                {/* =================================================
                    3D CONTROLLER
                ================================================= */}

                <motion.div
                    style={{
                        y: coreY,
                    }}
                    className="
                        relative
                        w-full

                        h-[300px]
                        sm:h-[360px]
                        md:h-[420px]
                        lg:h-[470px]

                        pointer-events-none
                    "
                >

                    <Canvas
                        dpr={[1, 1.5]}
                        camera={{
                            position: [
                                0,
                                0,
                                6,
                            ],
                            fov: 44,
                        }}
                        gl={{
                            alpha: true,
                            antialias: true,
                        }}
                    >

                        <ambientLight
                            intensity={0.4}
                        />

                        <pointLight
                            position={[
                                4,
                                4,
                                5,
                            ]}
                            intensity={4}
                            color="#06b6d4"
                        />

                        <pointLight
                            position={[
                                -4,
                                -3,
                                4,
                            ]}
                            intensity={3}
                            color="#a855f7"
                        />

                        <Suspense fallback={null}>
                            <EmbeddedCoreScene
                                scrollProgress={
                                    scrollVal
                                }
                            />
                        </Suspense>

                    </Canvas>

                </motion.div>

                {/* =================================================
                    SKILL ROWS
                ================================================= */}

                <div
                    className="
                        w-full
                        space-y-6
                    "
                >

                    {/* =============================================
                        ROW 1
                    ============================================= */}

                    <div
                        className="
                            relative
                            w-full
                            overflow-visible
                        "
                    >

                        {/* Left Fade */}

                        <div
                            className="
                                absolute
                                left-0
                                top-0
                                bottom-0

                                w-8
                                sm:w-16
                                md:w-24

                                z-10

                                pointer-events-none

                                bg-gradient-to-r
                                from-stone-950
                                to-transparent
                            "
                        />

                        {/* Right Fade */}

                        <div
                            className="
                                absolute
                                right-0
                                top-0
                                bottom-0

                                w-8
                                sm:w-16
                                md:w-24

                                z-10

                                pointer-events-none

                                bg-gradient-to-l
                                from-stone-950
                                to-transparent
                            "
                        />

                        <motion.div
                            style={{
                                x: row1X,
                            }}
                            className="
                                flex

                                justify-center

                                gap-3
                                sm:gap-4

                                w-max

                                pb-10
                            "
                        >
                            {SKILL_ROWS[0].map(
                                (skill) => (
                                    <SkillCard
                                        key={skill.name}
                                        skill={skill}
                                    />
                                )
                            )}
                        </motion.div>

                    </div>

                    {/* =============================================
                        ROW 2
                    ============================================= */}

                    <div
                        className="
                            relative
                            w-full
                            overflow-visible
                        "
                    >

                        {/* Left Fade */}

                        <div
                            className="
                                absolute
                                left-0
                                top-0
                                bottom-0

                                w-8
                                sm:w-16
                                md:w-24

                                z-10

                                pointer-events-none

                                bg-gradient-to-r
                                from-stone-950
                                to-transparent
                            "
                        />

                        {/* Right Fade */}

                        <div
                            className="
                                absolute
                                right-0
                                top-0
                                bottom-0

                                w-8
                                sm:w-16
                                md:w-24

                                z-10

                                pointer-events-none

                                bg-gradient-to-l
                                from-stone-950
                                to-transparent
                            "
                        />

                        <motion.div
                            style={{
                                x: row2X,
                            }}
                            className="
                                flex

                                justify-center

                                gap-3
                                sm:gap-4

                                w-max

                                pb-10
                            "
                        >
                            {[
                                ...SKILL_ROWS[1],
                            ]
                                .reverse()
                                .map(
                                    (skill) => (
                                        <SkillCard
                                            key={
                                                skill.name
                                            }
                                            skill={
                                                skill
                                            }
                                        />
                                    )
                                )}
                        </motion.div>

                    </div>

                </div>

                {/* =================================================
                    CATEGORIES
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
                    className="
                        flex
                        flex-wrap
                        justify-center
                        items-center

                        gap-x-3
                        sm:gap-x-4

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
                    <span>
                        Embedded
                    </span>

                    <span className="text-cyan-500/30">
                        •
                    </span>

                    <span>
                        PCB
                    </span>

                    <span className="text-cyan-500/30">
                        •
                    </span>

                    <span>
                        Firmware
                    </span>

                    <span className="text-cyan-500/30">
                        •
                    </span>

                    <span>
                        Industrial
                    </span>

                    <span className="text-cyan-500/30">
                        •
                    </span>

                    <span>
                        IoT
                    </span>

                    <span className="text-cyan-500/30">
                        •
                    </span>

                    <span>
                        Power
                    </span>

                    <span className="text-cyan-500/30">
                        •
                    </span>

                    <span>
                        Automation
                    </span>
                </motion.div>

            </motion.div>
        </section>
    );
}