
"use client";

import {
    motion,
    useScroll,
    useTransform,
    type MotionValue,
} from "framer-motion";

import {
    Activity,
    AppWindow,
    BatteryCharging,
    Binary,
    Box,
    Braces,
    Cable,
    CircuitBoard,
    Cloud,
    Code2,
    Cpu,
    Database,
    GitBranch,
    Gauge,
    Globe,
    Layers,
    Network,
    Radio,
    Server,
    Terminal,
    Wifi,
    Wrench,
    Zap,
    Workflow,
    type LucideIcon,
} from "lucide-react";

import {
    Suspense,
    useRef,
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

type Skill = {
    name: string;
    Icon: LucideIcon;
};

type SkillGroup = {
    title: string;
    subtitle: string;
    Icon: LucideIcon;
    direction: "left" | "right";
    skills: Skill[];
};

/* ============================================================
   ENGINEERING SKILLS
============================================================ */

const SKILL_GROUPS: SkillGroup[] = [
    {
        title: "Electronics Engineering",
        subtitle: "Circuit Design • PCB Development • Power Electronics",
        Icon: CircuitBoard,
        direction: "left",

        skills: [
            {
                name: "Circuit Design",
                Icon: CircuitBoard,
            },
            {
                name: "PCB Design",
                Icon: Layers,
            },
            {
                name: "Altium Designer",
                Icon: CircuitBoard,
            },
            {
                name: "KiCad",
                Icon: Workflow,
            },
            {
                name: "Analog Design",
                Icon: Activity,
            },
            {
                name: "Power Electronics",
                Icon: Zap,
            },
            {
                name: "Battery Systems",
                Icon: BatteryCharging,
            },
            {
                name: "Industrial Control",
                Icon: Gauge,
            },
            {
                name: "SolidWorks",
                Icon: Box,
            },
            {
                name: "Prototyping",
                Icon: Wrench,
            },
            {
                name: "Test & Measurement",
                Icon: Cable,
            },
        ],
    },

    {
        title: "Embedded Systems Engineering",
        subtitle: "Microcontrollers • Firmware • Communication Protocols",
        Icon: Cpu,
        direction: "right",

        skills: [
            {
                name: "STM32",
                Icon: Cpu,
            },
            {
                name: "ESP32",
                Icon: Wifi,
            },
            {
                name: "AVR",
                Icon: Binary,
            },
            {
                name: "Embedded C",
                Icon: Code2,
            },
            {
                name: "C / C++",
                Icon: Braces,
            },
            {
                name: "Arduino",
                Icon: CircuitBoard,
            },
            {
                name: "UART / SPI / I2C",
                Icon: Network,
            },
            {
                name: "MQTT / IoT",
                Icon: Radio,
            },
            {
                name: "RTOS",
                Icon: Gauge,
            },
            {
                name: "Firmware Development",
                Icon: Terminal,
            },
        ],
    },

    {
        title: "Software Engineering",
        subtitle: "Application Development • Backend • Database Systems",
        Icon: Code2,
        direction: "left",

        skills: [
            {
                name: "JavaScript",
                Icon: Code2,
            },
            {
                name: "TypeScript",
                Icon: Braces,
            },
            {
                name: "React",
                Icon: AppWindow,
            },
            {
                name: "Node.js",
                Icon: Server,
            },
            {
                name: "Python",
                Icon: Terminal,
            },
            {
                name: "Java",
                Icon: Binary,
            },
            {
                name: "Spring Boot",
                Icon: Workflow,
            },
            {
                name: "MySQL",
                Icon: Database,
            },
            {
                name: "REST APIs",
                Icon: Globe,
            },
            {
                name: "Git / GitHub",
                Icon: GitBranch,
            },
            {
                name: "DevOps",
                Icon: Cloud,
            },
        ],
    },
];

/* ============================================================
   3D EMBEDDED CONTROLLER
============================================================ */

function EmbeddedCoreScene({
    scrollProgress,
}: {
    scrollProgress: MotionValue<number>;
}) {
    const groupRef = useRef<THREE.Group | null>(null);

    /* ========================================================
       3D ANIMATION

       Read MotionValue directly.
       This avoids updating React state during scrolling.
    ======================================================== */

    useFrame((state) => {
        const group = groupRef.current;

        if (!group) return;

        const progress = scrollProgress.get();

        group.rotation.y =
            progress * Math.PI * 3 +
            state.clock.elapsedTime * 0.12;

        group.rotation.x =
            Math.sin(state.clock.elapsedTime * 0.35) * 0.055;
    });

    const pins = Array.from(
        { length: 8 },
        (_, index) => index
    );

    const signalNodes = Array.from(
        { length: 12 },
        (_, index) => index
    );

    return (
        <Float
            speed={1.5}
            rotationIntensity={0.18}
            floatIntensity={0.35}
        >
            <group ref={groupRef}>

                {/* =========================================
                    OUTER CIRCUIT RING
                ========================================= */}

                <mesh>
                    <torusGeometry
                        args={[2.35, 0.012, 8, 100]}
                    />

                    <meshBasicMaterial
                        color="#06b6d4"
                        transparent
                        opacity={0.3}
                    />
                </mesh>

                {/* =========================================
                    MAIN MICROCONTROLLER PACKAGE
                ========================================= */}

                <mesh position={[0, 0, 0]}>
                    <boxGeometry
                        args={[1.7, 1.7, 0.45]}
                    />

                    <meshStandardMaterial
                        color="#111827"
                        metalness={0.85}
                        roughness={0.22}
                        emissive="#031b24"
                        emissiveIntensity={0.8}
                    />
                </mesh>

                {/* =========================================
                    MCU TOP SURFACE
                ========================================= */}

                <mesh position={[0, 0, 0.24]}>
                    <boxGeometry
                        args={[1.1, 1.1, 0.04]}
                    />

                    <meshStandardMaterial
                        color="#0b2330"
                        metalness={0.7}
                        roughness={0.25}
                    />
                </mesh>

                {/* =========================================
                    PROCESSOR CORE
                ========================================= */}

                <mesh position={[0, 0, 0.28]}>
                    <boxGeometry
                        args={[0.55, 0.55, 0.035]}
                    />

                    <meshBasicMaterial
                        color="#06b6d4"
                    />
                </mesh>

                {/* CORE GLOW */}

                <mesh position={[0, 0, 0.30]}>
                    <boxGeometry
                        args={[0.75, 0.75, 0.02]}
                    />

                    <meshBasicMaterial
                        color="#06b6d4"
                        transparent
                        opacity={0.09}
                    />
                </mesh>

                {/* =========================================
                    MICROCONTROLLER PINS
                ========================================= */}

                {pins.map((index) => {
                    const offset = -0.60 + index * 0.17;

                    const color =
                        index % 2 === 0
                            ? "#06b6d4"
                            : "#a855f7";

                    return (
                        <group key={`pin-${index}`}>

                            {/* LEFT PINS */}

                            <mesh
                                position={[-1.02, offset, 0]}
                            >
                                <boxGeometry
                                    args={[0.32, 0.035, 0.035]}
                                />

                                <meshBasicMaterial color={color} />
                            </mesh>

                            {/* RIGHT PINS */}

                            <mesh
                                position={[1.02, offset, 0]}
                            >
                                <boxGeometry
                                    args={[0.32, 0.035, 0.035]}
                                />

                                <meshBasicMaterial color={color} />
                            </mesh>

                            {/* TOP PINS */}

                            <mesh
                                position={[offset, 1.02, 0]}
                            >
                                <boxGeometry
                                    args={[0.035, 0.32, 0.035]}
                                />

                                <meshBasicMaterial color="#06b6d4" />
                            </mesh>

                            {/* BOTTOM PINS */}

                            <mesh
                                position={[offset, -1.02, 0]}
                            >
                                <boxGeometry
                                    args={[0.035, 0.32, 0.035]}
                                />

                                <meshBasicMaterial color="#a855f7" />
                            </mesh>

                        </group>
                    );
                })}

                {/* =========================================
                    SIGNAL NODES
                ========================================= */}

                {signalNodes.map((index) => {
                    const angle =
                        (index / signalNodes.length) *
                        Math.PI *
                        2;

                    const radius = 2.15;

                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;

                    const signalColor =
                        index % 2 === 0
                            ? "#06b6d4"
                            : "#a855f7";

                    return (
                        <group key={`signal-${index}`}>

                            {/* SIGNAL NODE */}

                            <mesh position={[x, y, 0]}>
                                <sphereGeometry
                                    args={[0.075, 12, 12]}
                                />

                                <meshStandardMaterial
                                    color={signalColor}
                                    emissive={signalColor}
                                    emissiveIntensity={2}
                                />
                            </mesh>

                            {/* SIGNAL CONNECTION */}

                            <mesh
                                position={[
                                    x * 0.78,
                                    y * 0.78,
                                    0,
                                ]}
                                rotation={[0, 0, angle]}
                            >
                                <boxGeometry
                                    args={[0.55, 0.018, 0.018]}
                                />

                                <meshBasicMaterial
                                    color={signalColor}
                                    transparent
                                    opacity={0.3}
                                />
                            </mesh>

                        </group>
                    );
                })}

                {/* =========================================
                    STATUS LABEL
                ========================================= */}

                <Html
                    position={[0, -1.85, 0]}
                    center
                    transform
                    distanceFactor={7}
                >
                    <div
                        className="
                            whitespace-nowrap
                            rounded-lg
                            border border-cyan-500/30
                            bg-black/90
                            px-3 py-1.5
                            font-mono
                            text-[8px]
                            tracking-wider
                            text-cyan-400
                            shadow-[0_0_25px_rgba(6,182,212,0.15)]
                            sm:px-4
                            sm:text-[9px]
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
    const Icon = skill.Icon;

    return (
        <motion.div
            whileHover={{
                scale: 1.055,
                y: -5,
            }}
            whileTap={{
                scale: 0.97,
            }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
            }}
            aria-label={skill.name}
            className="
                group
                flex
                h-[112px]
                w-[112px]
                shrink-0
                flex-col
                items-center
                justify-center
                gap-3

                rounded-2xl
                border border-white/[0.09]
                bg-white/[0.035]
                backdrop-blur-xl

                shadow-lg
                shadow-black/10

                transition-colors
                duration-300

                hover:border-cyan-400/30
                hover:bg-white/[0.075]

                sm:h-[124px]
                sm:w-[124px]
                sm:rounded-3xl

                md:h-[132px]
                md:w-[132px]
            "
        >

            {/* ICON */}

            <div
                className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center

                    rounded-xl
                    border border-cyan-400/10
                    bg-cyan-400/[0.06]

                    transition-all
                    duration-300

                    group-hover:border-cyan-400/30
                    group-hover:bg-cyan-400/[0.12]
                    group-hover:shadow-[0_0_22px_rgba(6,182,212,0.12)]

                    sm:h-12
                    sm:w-12
                "
            >
                <Icon
                    size={26}
                    strokeWidth={1.7}
                    aria-hidden="true"
                    className="
                        text-cyan-400
                        transition-all
                        duration-300
                        group-hover:scale-110
                        group-hover:text-cyan-300
                        sm:h-7
                        sm:w-7
                    "
                />
            </div>

            {/* SKILL NAME */}

            <span
                className="
                    max-w-full
                    px-2
                    text-center
                    text-[9px]
                    font-semibold
                    leading-tight
                    tracking-wide
                    text-white/55

                    transition-colors
                    duration-300

                    group-hover:text-white/90

                    sm:text-[10px]
                    md:text-[11px]
                "
            >
                {skill.name}
            </span>

        </motion.div>
    );
}

/* ============================================================
   SKILL TRACK
============================================================ */

function SkillTrack({
    group,
    index,
    scrollProgress,
}: {
    group: SkillGroup;
    index: number;
    scrollProgress: MotionValue<number>;
}) {
    const x = useTransform(
        scrollProgress,
        [0, 1],
        group.direction === "left"
            ? [35, -105]
            : [-35, 105]
    );

    const CategoryIcon = group.Icon;

    return (
        <div className="w-full min-w-0">

            {/* ==============================================
                CATEGORY HEADER
            ============================================== */}

            <div
                className="
                    mb-3
                    flex
                    flex-wrap
                    items-center
                    justify-between
                    gap-2

                    px-1
                    sm:mb-4
                "
            >
                <div className="flex min-w-0 items-center gap-3">

                    <div
                        className="
                            flex
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center

                            rounded-xl
                            border border-cyan-400/15
                            bg-cyan-400/[0.07]
                        "
                    >
                        <CategoryIcon
                            size={19}
                            strokeWidth={1.7}
                            className="text-cyan-400"
                            aria-hidden="true"
                        />
                    </div>

                    <div className="min-w-0">

                        <h3
                            className="
                                text-xs
                                font-bold
                                tracking-wide
                                text-white/85

                                sm:text-sm
                                md:text-base
                            "
                        >
                            {group.title}
                        </h3>

                        <p
                            className="
                                mt-0.5
                                text-[8px]
                                leading-relaxed
                                text-white/30

                                sm:text-[9px]
                            "
                        >
                            {group.subtitle}
                        </p>

                    </div>

                </div>

                <span
                    className="
                        shrink-0
                        font-mono
                        text-[9px]
                        tracking-widest
                        text-cyan-400/40
                    "
                >
                    0{index + 1}
                </span>

            </div>

            {/* ==============================================
                RESPONSIVE SKILL TRACK
            ============================================== */}

            <div
                className="
                    w-full
                    overflow-hidden
                "
                style={{
                    maskImage:
                        "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
                    WebkitMaskImage:
                        "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
                }}
                aria-label={`${group.title} skills`}
            >
                <motion.div
                    style={{ x }}
                    className="
                        flex
                        w-max
                        items-center
                        gap-3
                        py-4

                        sm:gap-4
                    "
                >

                    {/* Duplicate the track to prevent empty space */}

                    {[0, 1].map((copy) => (
                        <div
                            key={`track-${copy}`}
                            className="
                                flex
                                shrink-0
                                items-center
                                gap-3

                                sm:gap-4
                            "
                            aria-hidden={copy === 1}
                        >
                            {group.skills.map((skill) => (
                                <SkillCard
                                    key={`${copy}-${skill.name}`}
                                    skill={skill}
                                />
                            ))}
                        </div>
                    ))}

                </motion.div>
            </div>

        </div>
    );
}

/* ============================================================
   MAIN COMPONENT
============================================================ */

export default function SkillsSpinner() {
    const containerRef = useRef<HTMLElement | null>(null);

    /* ========================================================
       SCROLL PROGRESS
    ======================================================== */

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: [
            "start end",
            "end start",
        ],
    });

    /* ========================================================
       SECTION OPACITY
    ======================================================== */

    const opacity = useTransform(
        scrollYProgress,
        [0, 0.08, 0.92, 1],
        [0, 1, 1, 0]
    );

    /* ========================================================
       3D CONTROLLER MOVEMENT
    ======================================================== */

    const coreY = useTransform(
        scrollYProgress,
        [0, 1],
        [14, -14]
    );

    return (
        <section
            ref={containerRef}
            className="
                relative
                isolate
                w-full
                overflow-hidden

                bg-transparent

                px-4
                

                sm:px-6
                
                pt-20
                pb-4

                sm:pt-24
                sm:pb-6

                lg:pt-32
                lg:pb-8
                lg:px-8
                
            "
        >

            {/* =================================================
                BACKGROUND GLOW
            ================================================= */}

            <div
                className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-[30%]
                    -z-10
                    h-[280px]
                    w-[280px]
                    -translate-x-1/2
                    rounded-full
                    bg-cyan-500/[0.07]
                    blur-[100px]

                    sm:h-[450px]
                    sm:w-[450px]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    bottom-0
                    right-0
                    -z-10
                    h-72
                    w-72
                    rounded-full
                    bg-purple-500/[0.055]
                    blur-[100px]
                "
            />

            {/* =================================================
                MAIN CONTENT
            ================================================= */}

            <motion.div
                style={{ opacity }}
                className="
                    relative
                    mx-auto
                    flex
                    w-full
                    max-w-7xl
                    flex-col
                    items-center

                    gap-10

                    sm:gap-12
                    lg:gap-14
                "
            >

                {/* =================================================
                    HEADER
                ================================================= */}

                <div className="w-full text-center">

                    <motion.p
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
                            amount: 0.5,
                        }}
                        transition={{
                            duration: 0.6,
                        }}
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
                    </motion.p>

                    <motion.h2
                        initial={{
                            opacity: 0,
                            y: 22,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.5,
                        }}
                        transition={{
                            duration: 0.7,
                            delay: 0.08,
                        }}
                        className="
                            text-4xl
                            font-black
                            uppercase
                            leading-[0.95]
                            tracking-[-0.055em]
                            text-white

                            sm:text-5xl
                            md:text-7xl
                            lg:text-8xl
                        "
                    >
                        Engineering{" "}

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
                            Arsenal
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{
                            once: true,
                            amount: 0.5,
                        }}
                        transition={{
                            duration: 0.7,
                            delay: 0.18,
                        }}
                        className="
                            mx-auto
                            mt-5
                            max-w-2xl
                            text-xs
                            leading-relaxed
                            text-white/40

                            sm:text-sm
                            md:text-base
                        "
                    >
                        Bridging electronics, embedded systems,
                        and software engineering to design,
                        develop, and integrate intelligent
                        hardware and software solutions.
                    </motion.p>

                </div>

                {/* =================================================
                    3D MICROCONTROLLER
                ================================================= */}

                <motion.div
                    style={{ y: coreY }}
                    className="
                        pointer-events-none
                        relative
                        mx-auto
                        h-[260px]
                        w-full
                        max-w-3xl

                        sm:h-[330px]
                        md:h-[390px]
                        lg:h-[440px]
                    "
                >

                    <Canvas
                        dpr={[1, 1.5]}
                        camera={{
                            position: [0, 0, 7.4],
                            fov: 42,
                        }}
                        gl={{
                            alpha: true,
                            antialias: true,
                            powerPreference: "high-performance",
                        }}
                    >

                        {/* LIGHTING */}

                        <ambientLight intensity={0.65} />

                        <pointLight
                            position={[4, 4, 5]}
                            intensity={3.5}
                            color="#06b6d4"
                        />

                        <pointLight
                            position={[-4, -3, 4]}
                            intensity={3}
                            color="#a855f7"
                        />

                        <pointLight
                            position={[0, 0, 5]}
                            intensity={1.5}
                            color="#ffffff"
                        />

                        <Suspense fallback={null}>
                            <EmbeddedCoreScene
                                scrollProgress={scrollYProgress}
                            />
                        </Suspense>

                    </Canvas>

                </motion.div>

                {/* =================================================
                    ENGINEERING SKILL CATEGORIES
                ================================================= */}

                <div
                    className="
                        w-full
                        min-w-0
                        space-y-7

                        sm:space-y-9
                        lg:space-y-10
                    "
                >

                    {SKILL_GROUPS.map((group, index) => (
                        <motion.div
                            key={group.title}
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
                                amount: 0.15,
                            }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.08,
                            }}
                            className="w-full min-w-0"
                        >
                            <SkillTrack
                                group={group}
                                index={index}
                                scrollProgress={scrollYProgress}
                            />
                        </motion.div>
                    ))}

                </div>

                {/* =================================================
                    BOTTOM ENGINEERING LABELS
                ================================================= */}

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="
                        flex
                        flex-wrap
                        items-center
                        justify-center

                        gap-x-3
                        gap-y-2

                        pt-2

                        font-mono
                        text-[8px]
                        uppercase
                        tracking-[0.16em]
                        text-white/25

                        sm:gap-x-4
                        sm:text-[9px]
                        sm:tracking-[0.2em]
                    "
                >
                    <span>Design</span>

                    <span className="text-cyan-500/50">•</span>

                    <span>Develop</span>

                    <span className="text-cyan-500/50">•</span>

                    <span>Program</span>

                    <span className="text-cyan-500/50">•</span>

                    <span>Integrate</span>

                    <span className="text-cyan-500/50">•</span>

                    <span>Innovate</span>
                </motion.div>

            </motion.div>
        </section>
    );
}
