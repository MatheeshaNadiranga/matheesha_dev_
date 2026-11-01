
"use client";

import {
    motion,
    useScroll,
    useTransform,
} from "framer-motion";

import {
    useRef,
    Suspense,
    useMemo,
} from "react";

import {
    Canvas,
    useFrame,
} from "@react-three/fiber";

import {
    Float,
    Html,
    Line,
    Stars,
} from "@react-three/drei";

import * as THREE from "three";

// import {
//     Code2,
//     Cpu,
//     GraduationCap,
//     Layers,
//     Milestone,
//     ArrowUpRight,
//     Download,
//     CircuitBoard,
//     Zap,
//     Wrench,
//     Radio,
//     Factory,
//     Box,
//     Database,
//     Workflow,
//     Wifi,
//     Terminal,
//     Network,
//     type LucideIcon,
// } from "lucide-react";

/* ============================================================
   3D PCB CONFIGURATION
============================================================ */

const BOARD_WIDTH = 4.2;
const BOARD_DEPTH = 3.0;

/* ============================================================
   PCB TRACE DATA

   Coordinates are relative to the PCB surface.
============================================================ */

const PCB_TRACES: Array<Array<[number, number]>> = [
    [[-0.58, 0.15], [-0.9, 0.15], [-0.9, 0.55], [-1.25, 0.55]],
    [[-0.58, -0.12], [-0.85, -0.12], [-0.85, -0.7], [-1.25, -0.7]],
    [[0.58, 0.15], [0.95, 0.15], [0.95, 0.65], [1.35, 0.65]],
    [[0.58, -0.12], [0.82, -0.12], [0.82, -0.72], [1.3, -0.72]],

    [[-0.25, 0.52], [-0.25, 0.8], [-0.7, 0.8], [-0.7, 1.12]],
    [[0.25, 0.52], [0.25, 0.85], [0.75, 0.85], [0.75, 1.15]],

    [[-0.25, -0.52], [-0.25, -0.85], [-0.7, -0.85], [-0.7, -1.15]],
    [[0.25, -0.52], [0.25, -0.85], [0.7, -0.85], [0.7, -1.15]],

    [[-0.7, 0.05], [-1.1, 0.05], [-1.1, 1.1], [-1.7, 1.1]],
    [[0.7, 0.05], [1.1, 0.05], [1.1, 1.1], [1.7, 1.1]],

    [[-0.2, 0.5], [-0.2, 1.0], [0, 1.0], [0, 1.35]],
    [[0.2, -0.5], [0.2, -1.0], [0, -1.0], [0, -1.35]],
];

/* ============================================================
   SMALL PCB COMPONENT DATA
============================================================ */

const SMD_COMPONENTS = [
    { x: -1.4, z: 0.15, rotation: 0 },
    { x: -1.4, z: -0.1, rotation: 0 },
    { x: -1.05, z: 1.0, rotation: Math.PI / 2 },
    { x: 1.35, z: 0.1, rotation: Math.PI / 2 },
    { x: 1.4, z: -0.15, rotation: 0 },
    { x: -0.75, z: -1.0, rotation: Math.PI / 2 },
    { x: 0.85, z: -1.0, rotation: 0 },
    { x: 0.9, z: 0.95, rotation: Math.PI / 2 },
    { x: -1.0, z: -0.95, rotation: 0 },
    { x: 1.1, z: 0.95, rotation: 0 },
];

/* ============================================================
   MICROCONTROLLER PIN POSITIONS
============================================================ */

const MCU_PIN_OFFSETS = Array.from(
    { length: 8 },
    (_, index) => -0.34 + index * 0.097
);

/* ============================================================
   3D PCB COMPONENT
============================================================ */

function CircuitCore() {

    const groupRef = useRef<THREE.Group>(null!);

    /* ================================================
       TRACE GEOMETRY
    ================================================ */

    const tracePaths = useMemo(() => {

        return PCB_TRACES.map((path) => {

            return path.map(([x, z]) => (
                new THREE.Vector3(
                    x,
                    0.094,
                    z
                )
            ));

        });

    }, []);

    /* ================================================
       BOARD OUTLINE
    ================================================ */

    const boardOutline = useMemo(() => {

        const x = BOARD_WIDTH / 2 - 0.06;
        const z = BOARD_DEPTH / 2 - 0.06;

        return [
            new THREE.Vector3(-x, 0.098, -z),
            new THREE.Vector3(x, 0.098, -z),
            new THREE.Vector3(x, 0.098, z),
            new THREE.Vector3(-x, 0.098, z),
            new THREE.Vector3(-x, 0.098, -z),
        ];

    }, []);

    /* ================================================
       3D ROTATION

       Subtle floating hardware animation.
    ================================================ */

    useFrame((state) => {

        const group = groupRef.current;

        if (!group) return;

        const time = state.clock.elapsedTime;

        group.rotation.y = time * 0.16;

        group.rotation.x =
            -0.10 + Math.sin(time * 0.35) * 0.035;

    });

    return (
        <Float
            speed={1.0}
            rotationIntensity={0.06}
            floatIntensity={0.16}
        >
            <group ref={groupRef}>

                {/* ==========================================
                    OUTER CIRCUIT ORBIT
                ========================================== */}

                <mesh
                    position={[0, -0.13, 0]}
                    rotation={[Math.PI / 2, 0, 0]}
                >
                    <torusGeometry
                        args={[2.55, 0.009, 8, 120]}
                    />

                    <meshBasicMaterial
                        color="#06b6d4"
                        transparent
                        opacity={0.45}
                    />
                </mesh>

                <mesh
                    position={[0, -0.15, 0]}
                    rotation={[Math.PI / 2, 0, 0]}
                >
                    <torusGeometry
                        args={[2.72, 0.005, 8, 120]}
                    />

                    <meshBasicMaterial
                        color="#a855f7"
                        transparent
                        opacity={0.22}
                    />
                </mesh>

                {/* ==========================================
                    MAIN PCB BODY
                ========================================== */}

                <mesh position={[0, 0, 0]}>

                    <boxGeometry
                        args={[
                            BOARD_WIDTH,
                            0.16,
                            BOARD_DEPTH,
                        ]}
                    />

                    <meshStandardMaterial
                        color="#0b3027"
                        metalness={0.55}
                        roughness={0.42}
                        emissive="#031a14"
                        emissiveIntensity={0.4}
                    />

                </mesh>

                {/* PCB EDGE LAYER */}

                <mesh position={[0, -0.045, 0]}>
                    <boxGeometry
                        args={[
                            BOARD_WIDTH + 0.025,
                            0.045,
                            BOARD_DEPTH + 0.025,
                        ]}
                    />

                    <meshStandardMaterial
                        color="#05251e"
                        metalness={0.65}
                        roughness={0.5}
                    />
                </mesh>

                {/* BOARD OUTLINE */}

                <Line
                    points={boardOutline}
                    color="#22c55e"
                    lineWidth={1.1}
                    transparent
                    opacity={0.65}
                />

                {/* ==========================================
                    PCB MOUNTING HOLES
                ========================================== */}

                {[
                    [-1.88, -1.28],
                    [1.88, -1.28],
                    [-1.88, 1.28],
                    [1.88, 1.28],
                ].map(([x, z], index) => (

                    <group
                        key={`mount-${index}`}
                        position={[x, 0.095, z]}
                    >

                        <mesh
                            rotation={[Math.PI / 2, 0, 0]}
                        >
                            <torusGeometry
                                args={[0.09, 0.025, 8, 20]}
                            />

                            <meshStandardMaterial
                                color="#94a3b8"
                                metalness={0.95}
                                roughness={0.25}
                            />
                        </mesh>

                        <mesh>
                            <cylinderGeometry
                                args={[0.055, 0.055, 0.012, 24]}
                            />

                            <meshBasicMaterial
                                color="#020817"
                            />
                        </mesh>

                    </group>

                ))}

                {/* ==========================================
                    COPPER TRACKS
                ========================================== */}

                {tracePaths.map((points, index) => (

                    <group key={`trace-${index}`}>

                        <Line
                            points={points}
                            color={
                                index % 3 === 0
                                    ? "#f59e0b"
                                    : "#06b6d4"
                            }
                            lineWidth={1.4}
                            transparent
                            opacity={0.78}
                        />

                    </group>

                ))}

                {/* TRACK CONNECTION PADS */}

                {PCB_TRACES.map((path, pathIndex) => (

                    <group key={`pads-${pathIndex}`}>

                        {[path[0], path[path.length - 1]].map(
                            ([x, z], pointIndex) => (

                                <mesh
                                    key={`pad-${pointIndex}`}
                                    position={[x, 0.105, z]}
                                >
                                    <cylinderGeometry
                                        args={[0.055, 0.055, 0.025, 16]}
                                    />

                                    <meshStandardMaterial
                                        color="#d6a647"
                                        metalness={0.95}
                                        roughness={0.25}
                                    />
                                </mesh>

                            )
                        )}

                    </group>

                ))}

                {/* ==========================================
                    MAIN MICROCONTROLLER PACKAGE
                ========================================== */}

                {/* MCU BODY */}

                <mesh position={[0, 0.23, 0]}>

                    <boxGeometry
                        args={[1.12, 0.24, 0.94]}
                    />

                    <meshStandardMaterial
                        color="#080e18"
                        metalness={0.8}
                        roughness={0.25}
                        emissive="#071d28"
                        emissiveIntensity={0.65}
                    />

                </mesh>

                {/* MCU TOP PLATE */}

                <mesh position={[0, 0.365, 0]}>

                    <boxGeometry
                        args={[0.83, 0.045, 0.69]}
                    />

                    <meshStandardMaterial
                        color="#122333"
                        metalness={0.75}
                        roughness={0.25}
                    />

                </mesh>

                {/* PROCESSOR CORE */}

                <mesh position={[0, 0.393, 0]}>

                    <boxGeometry
                        args={[0.38, 0.018, 0.32]}
                    />

                    <meshBasicMaterial
                        color="#06b6d4"
                    />

                </mesh>

                {/* CORE GLOW */}

                <mesh position={[0, 0.405, 0]}>

                    <boxGeometry
                        args={[0.51, 0.01, 0.43]}
                    />

                    <meshBasicMaterial
                        color="#06b6d4"
                        transparent
                        opacity={0.10}
                    />

                </mesh>

                {/* ==========================================
                    MCU SILKSCREEN LABEL
                ========================================== */}

                <Html
                    position={[0, 0.47, -0.02]}
                    center
                    distanceFactor={8}
                    transform
                    pointerEvents="none"
                >
                    <div className="
                        rounded-md
                        border border-cyan-400/25
                        bg-black/90
                        px-2.5 py-1

                        font-mono
                        text-[8px]
                        font-bold
                        tracking-widest
                        text-cyan-300

                        whitespace-nowrap
                    ">
                        MCU // CORE
                    </div>
                </Html>

                {/* ==========================================
                    MCU SOLDER PINS
                ========================================== */}

                {MCU_PIN_OFFSETS.map((offset, index) => (

                    <group key={`mcu-pins-${index}`}>

                        {/* LEFT */}

                        <mesh
                            position={[-0.61, 0.22, offset]}
                        >
                            <boxGeometry
                                args={[0.16, 0.035, 0.055]}
                            />

                            <meshStandardMaterial
                                color="#d6b36a"
                                metalness={0.9}
                                roughness={0.22}
                            />
                        </mesh>

                        {/* RIGHT */}

                        <mesh
                            position={[0.61, 0.22, offset]}
                        >
                            <boxGeometry
                                args={[0.16, 0.035, 0.055]}
                            />

                            <meshStandardMaterial
                                color="#d6b36a"
                                metalness={0.9}
                                roughness={0.22}
                            />
                        </mesh>

                        {/* FRONT */}

                        <mesh
                            position={[offset, 0.22, 0.53]}
                        >
                            <boxGeometry
                                args={[0.055, 0.035, 0.16]}
                            />

                            <meshStandardMaterial
                                color="#d6b36a"
                                metalness={0.9}
                                roughness={0.22}
                            />
                        </mesh>

                        {/* BACK */}

                        <mesh
                            position={[offset, 0.22, -0.53]}
                        >
                            <boxGeometry
                                args={[0.055, 0.035, 0.16]}
                            />

                            <meshStandardMaterial
                                color="#d6b36a"
                                metalness={0.9}
                                roughness={0.22}
                            />
                        </mesh>

                    </group>

                ))}

                {/* ==========================================
                    SECONDARY IC - POWER MANAGEMENT
                ========================================== */}

                <group position={[-1.30, 0, -0.55]}>

                    <mesh position={[0, 0.17, 0]}>

                        <boxGeometry
                            args={[0.52, 0.17, 0.43]}
                        />

                        <meshStandardMaterial
                            color="#111827"
                            metalness={0.75}
                            roughness={0.3}
                        />

                    </mesh>

                    {Array.from({ length: 4 }, (_, index) => (

                        <group key={index}>

                            <mesh
                                position={[
                                    -0.29,
                                    0.15,
                                    -0.15 + index * 0.1,
                                ]}
                            >
                                <boxGeometry
                                    args={[0.12, 0.025, 0.04]}
                                />

                                <meshStandardMaterial
                                    color="#d6b36a"
                                    metalness={0.9}
                                />
                            </mesh>

                            <mesh
                                position={[
                                    0.29,
                                    0.15,
                                    -0.15 + index * 0.1,
                                ]}
                            >
                                <boxGeometry
                                    args={[0.12, 0.025, 0.04]}
                                />

                                <meshStandardMaterial
                                    color="#d6b36a"
                                    metalness={0.9}
                                />
                            </mesh>

                        </group>

                    ))}

                </group>

                {/* ==========================================
                    VOLTAGE REGULATOR / DRIVER IC
                ========================================== */}

                <mesh position={[1.35, 0.17, 0.55]}>
                    <boxGeometry
                        args={[0.56, 0.16, 0.43]}
                    />

                    <meshStandardMaterial
                        color="#121a25"
                        metalness={0.8}
                        roughness={0.28}
                    />
                </mesh>

                <mesh position={[1.35, 0.265, 0.55]}>
                    <boxGeometry
                        args={[0.36, 0.035, 0.25]}
                    />

                    <meshStandardMaterial
                        color="#334155"
                        metalness={0.85}
                        roughness={0.25}
                    />
                </mesh>

                {/* ==========================================
                    ESP32 / WIRELESS MODULE
                ========================================== */}

                <group position={[1.25, 0, -0.72]}>

                    {/* MODULE BODY */}

                    <mesh position={[0, 0.19, 0]}>

                        <boxGeometry
                            args={[0.88, 0.17, 0.58]}
                        />

                        <meshStandardMaterial
                            color="#0d1722"
                            metalness={0.7}
                            roughness={0.32}
                        />

                    </mesh>

                    {/* SHIELD */}

                    <mesh position={[0, 0.29, 0]}>

                        <boxGeometry
                            args={[0.69, 0.045, 0.42]}
                        />

                        <meshStandardMaterial
                            color="#64748b"
                            metalness={0.9}
                            roughness={0.22}
                        />

                    </mesh>

                    {/* ANTENNA TRACK */}

                    <Line
                        points={[
                            new THREE.Vector3(0.3, 0.318, -0.16),
                            new THREE.Vector3(0.4, 0.318, -0.16),
                            new THREE.Vector3(0.4, 0.318, 0.16),
                            new THREE.Vector3(0.3, 0.318, 0.16),
                        ]}
                        color="#fbbf24"
                        lineWidth={2}
                    />

                </group>

                {/* ==========================================
                    ELECTROLYTIC CAPACITORS
                ========================================== */}

                {[
                    [-1.55, 0.24, -0.95],
                    [-1.65, 0.24, -0.52],
                    [1.68, 0.24, -0.2],
                ].map(([x, y, z], index) => (

                    <group
                        key={`capacitor-${index}`}
                        position={[x, y, z]}
                    >

                        <mesh>
                            <cylinderGeometry
                                args={[0.13, 0.13, 0.27, 24]}
                            />

                            <meshStandardMaterial
                                color="#0e2433"
                                metalness={0.55}
                                roughness={0.3}
                            />
                        </mesh>

                        {/* METAL CAP */}

                        <mesh position={[0, 0.145, 0]}>
                            <cylinderGeometry
                                args={[0.115, 0.115, 0.025, 24]}
                            />

                            <meshStandardMaterial
                                color="#94a3b8"
                                metalness={0.95}
                                roughness={0.2}
                            />
                        </mesh>

                    </group>

                ))}

                {/* ==========================================
                    INDUCTOR
                ========================================== */}

                <group position={[1.45, 0.19, 1.0]}>

                    <mesh>
                        <boxGeometry
                            args={[0.47, 0.24, 0.43]}
                        />

                        <meshStandardMaterial
                            color="#1e293b"
                            metalness={0.65}
                            roughness={0.35}
                        />
                    </mesh>

                    <mesh position={[0, 0.13, 0]}>
                        <boxGeometry
                            args={[0.3, 0.025, 0.26]}
                        />

                        <meshStandardMaterial
                            color="#94a3b8"
                            metalness={0.95}
                            roughness={0.2}
                        />
                    </mesh>

                </group>

                {/* ==========================================
                    SMD RESISTORS AND CAPACITORS
                ========================================== */}

                {SMD_COMPONENTS.map((component, index) => (

                    <group
                        key={`smd-${index}`}
                        position={[
                            component.x,
                            0.13,
                            component.z,
                        ]}
                        rotation={[
                            0,
                            component.rotation,
                            0,
                        ]}
                    >

                        {/* BODY */}

                        <mesh position={[0, 0.045, 0]}>
                            <boxGeometry
                                args={[0.17, 0.09, 0.12]}
                            />

                            <meshStandardMaterial
                                color={
                                    index % 2 === 0
                                        ? "#1e293b"
                                        : "#334155"
                                }
                                metalness={0.45}
                                roughness={0.35}
                            />
                        </mesh>

                        {/* END TERMINALS */}

                        {[-0.09, 0.09].map((x, terminalIndex) => (

                            <mesh
                                key={terminalIndex}
                                position={[x, 0.045, 0]}
                            >
                                <boxGeometry
                                    args={[0.025, 0.075, 0.125]}
                                />

                                <meshStandardMaterial
                                    color="#d6b36a"
                                    metalness={0.95}
                                    roughness={0.2}
                                />
                            </mesh>

                        ))}

                    </group>

                ))}

                {/* ==========================================
                    CRYSTAL OSCILLATOR
                ========================================== */}

                <group position={[-0.95, 0.17, -0.15]}>

                    <mesh>
                        <boxGeometry
                            args={[0.43, 0.15, 0.28]}
                        />

                        <meshStandardMaterial
                            color="#94a3b8"
                            metalness={0.95}
                            roughness={0.2}
                        />
                    </mesh>

                    <mesh position={[0, 0.08, 0]}>
                        <boxGeometry
                            args={[0.31, 0.025, 0.19]}
                        />

                        <meshStandardMaterial
                            color="#cbd5e1"
                            metalness={0.98}
                            roughness={0.15}
                        />
                    </mesh>

                </group>

                {/* ==========================================
                    USB-C CONNECTOR
                ========================================== */}

                <group position={[0, 0.24, 1.43]}>

                    {/* METAL BODY */}

                    <mesh>
                        <boxGeometry
                            args={[0.67, 0.25, 0.29]}
                        />

                        <meshStandardMaterial
                            color="#94a3b8"
                            metalness={0.98}
                            roughness={0.19}
                        />
                    </mesh>

                    {/* USB OPENING */}

                    <mesh position={[0, 0, 0.15]}>
                        <boxGeometry
                            args={[0.42, 0.12, 0.02]}
                        />

                        <meshBasicMaterial
                            color="#020617"
                        />
                    </mesh>

                    {/* INNER CONTACT */}

                    <mesh position={[0, -0.015, 0.164]}>
                        <boxGeometry
                            args={[0.28, 0.018, 0.008]}
                        />

                        <meshBasicMaterial
                            color="#d6b36a"
                        />
                    </mesh>

                </group>

                {/* ==========================================
                    SCREW TERMINAL CONNECTORS
                ========================================== */}

                {[
                    [-1.65, 0.55],
                    [-1.65, 1.1],
                ].map(([x, z], index) => (

                    <group
                        key={`terminal-${index}`}
                        position={[x, 0.23, z]}
                    >

                        <mesh>
                            <boxGeometry
                                args={[0.46, 0.32, 0.43]}
                            />

                            <meshStandardMaterial
                                color="#166534"
                                metalness={0.45}
                                roughness={0.42}
                            />
                        </mesh>

                        {[-0.13, 0.13].map((offset, screwIndex) => (

                            <mesh
                                key={screwIndex}
                                position={[offset, 0.175, 0]}
                            >
                                <cylinderGeometry
                                    args={[0.055, 0.055, 0.035, 16]}
                                />

                                <meshStandardMaterial
                                    color="#d1d5db"
                                    metalness={0.98}
                                    roughness={0.2}
                                />
                            </mesh>

                        ))}

                    </group>

                ))}

                {/* ==========================================
                    GPIO PIN HEADERS
                ========================================== */}

                {[-1.20, -1.02].map((z, rowIndex) => (

                    <group key={`header-${rowIndex}`}>

                        <mesh
                            position={[0, 0.14, z]}
                        >
                            <boxGeometry
                                args={[1.85, 0.13, 0.13]}
                            />

                            <meshStandardMaterial
                                color="#111827"
                                metalness={0.4}
                                roughness={0.4}
                            />
                        </mesh>

                        {Array.from({ length: 10 }, (_, index) => {

                            const x = -0.82 + index * 0.18;

                            return (
                                <mesh
                                    key={index}
                                    position={[x, 0.25, z]}
                                >
                                    <boxGeometry
                                        args={[0.045, 0.25, 0.045]}
                                    />

                                    <meshStandardMaterial
                                        color="#d6b36a"
                                        metalness={0.95}
                                        roughness={0.2}
                                    />
                                </mesh>
                            );
                        })}

                    </group>

                ))}

                {/* ==========================================
                    STATUS LEDS
                ========================================== */}

                {[
                    {
                        x: -1.7,
                        z: -1.05,
                        color: "#22d3ee",
                    },
                    {
                        x: -1.4,
                        z: 1.25,
                        color: "#a855f7",
                    },
                    {
                        x: 1.85,
                        z: -0.85,
                        color: "#22c55e",
                    },
                ].map((led, index) => (

                    <group
                        key={`led-${index}`}
                        position={[led.x, 0.2, led.z]}
                    >

                        <mesh>
                            <cylinderGeometry
                                args={[0.08, 0.08, 0.06, 16]}
                            />

                            <meshStandardMaterial
                                color="#334155"
                                metalness={0.65}
                                roughness={0.3}
                            />
                        </mesh>

                        <mesh
                            position={[0, 0.065, 0]}
                        >
                            <sphereGeometry
                                args={[0.045, 16, 16]}
                            />

                            <meshStandardMaterial
                                color={led.color}
                                emissive={led.color}
                                emissiveIntensity={2.2}
                            />
                        </mesh>

                    </group>

                ))}

                {/* ==========================================
                    SMALL BOARD LABEL
                ========================================== */}

                <Html
                    position={[1.3, 0.16, 1.28]}
                    center
                    distanceFactor={9}
                    transform
                    pointerEvents="none"
                >
                    <div className="
                        whitespace-nowrap
                        font-mono
                        text-[7px]
                        font-bold
                        tracking-widest
                        text-emerald-300/80
                    ">
                        VOLT // CTRL
                    </div>
                </Html>

                {/* ==========================================
                    BOARD STATUS LABEL
                ========================================== */}

                <Html
                    position={[0, 0.25, -1.57]}
                    center
                    distanceFactor={8}
                    pointerEvents="none"
                >
                    <div className="
                        rounded-md
                        border border-cyan-500/30
                        bg-black/85
                        px-3 py-1.5

                        font-mono
                        text-[8px]
                        tracking-wider
                        text-cyan-400

                        whitespace-nowrap
                    ">
                        HARDWARE SYSTEM // ONLINE
                    </div>
                </Html>

            </group>
        </Float>
    );
}

/* ============================================================
   DATA
============================================================ */

const STATS = [
    {
        value: "3 Months",
        label: "Completed Internship",
    },
    {
        value: "4+",
        label: "Engineering Projects",
    },
    {
        value: "4+",
        label: "MCU Platforms",
    },
    {
        value: "2",
        label: "PCB Design Tools",
    },
];

/* ============================================================
   EXPERTISE
============================================================ */

const EXPERTISE = [
    "Software Engineering",
    "Application Development",
    "Full-Stack Development",
    "Embedded Systems",
    "Firmware Development",
    "PCB Design",
    "Analog Electronics",
    "Digital Electronics",
    "STM32",
    "ESP32",
    "AVR / ATmega",
    "PIC",
    "C / C++",
    "Python",
    "React",
    "Node.js",
    "Spring Boot",
    "MySQL",
    "REST APIs",
    "RS485",
    "UART",
    "SPI",
    "I²C",
    "Industrial Controllers",
    "Low Power Design",
    "SolidWorks",
];

const FEATURED = new Set([
    "Software Engineering",
    "Application Development",
    "Embedded Systems",
    "PCB Design",
]);

/* ============================================================
   MAIN COMPONENT
============================================================ */

export default function AboutSection() {

    const containerRef = useRef<HTMLElement>(null);

    /* ================================================
       SCROLL PROGRESS
    ================================================ */

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: [
            "start end",
            "end start",
        ],
    });

    const opacity = useTransform(
        scrollYProgress,
        [0, 0.10, 0.90, 1],
        [0, 1, 1, 0]
    );

    return (
        <section
            ref={containerRef}
            className="
                relative
                isolate
                w-full
                overflow-hidden

                px-4

                pt-12
                pb-4

                sm:px-6
                sm:pt-16
                sm:pb-6

                lg:px-8
                lg:pt-20
                lg:pb-8
            "
        >

            {/* ================================================
                BACKGROUND GLOW
            ================================================ */}

            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    -left-24
                    -top-32
                    -z-10

                    h-96
                    w-96

                    rounded-full
                "
                style={{
                    background:
                        "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)",
                }}
            />

            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    -bottom-24
                    -right-24
                    -z-10

                    h-96
                    w-96

                    rounded-full
                "
                style={{
                    background:
                        "radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)",
                }}
            />

            {/* ================================================
                MAIN CONTENT
            ================================================ */}

            <motion.div
                style={{ opacity }}
                className="
                    relative
                    mx-auto
                    w-full
                    max-w-7xl
                "
            >

                <div className="
                    grid
                    grid-cols-1
                    items-center

                    gap-10

                    lg:gap-12

                    xl:grid-cols-2
                    xl:gap-14
                ">

                    {/* ========================================
                        LEFT SIDE — INTRODUCTION
                    ======================================== */}

                    <div className="
                        w-full
                        min-w-0
                    ">

                        {/* EYEBROW */}

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
                                amount: 0.25,
                            }}
                            className="
                                mb-5

                                font-mono
                                text-[9px]
                                uppercase
                                tracking-[0.2em]
                                leading-relaxed

                                text-cyan-400

                                sm:text-[10px]
                                sm:tracking-[0.3em]
                            "
                        >
                            Electronics + Embedded + Software Engineering
                        </motion.p>

                        {/* MAIN HEADING */}

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
                                amount: 0.25,
                            }}
                            transition={{
                                delay: 0.1,
                            }}
                            className="
                                mb-7

                                text-5xl
                                font-black
                                uppercase
                                leading-[0.9]
                                tracking-[-0.055em]

                                text-white

                                sm:text-6xl
                                md:text-7xl
                                lg:text-7xl
                                xl:text-8xl
                            "
                        >
                            Hardware

                            <br />

                            <span className="
                                bg-gradient-to-r
                                from-cyan-400
                                via-white
                                to-purple-500

                                bg-clip-text
                                text-transparent
                            ">
                                Meets Code
                            </span>
                        </motion.h2>

                        {/* INTRODUCTION */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 18,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.25,
                            }}
                            transition={{
                                delay: 0.2,
                            }}
                            className="
                                mb-8

                                max-w-2xl
                                space-y-4

                                text-sm
                                font-light
                                leading-[1.85]

                                text-white/50

                                sm:text-[15px]
                            "
                        >

                            <p>
                                I'm{" "}

                                <span className="
                                    font-medium
                                    text-white
                                ">
                                    Matheesha Nadiranga De Silva
                                </span>
                                , an engineering student and
                                multidisciplinary developer
                                interested in building practical
                                systems across hardware and software.
                            </p>

                            <p>
                                I am currently following a{" "}

                                <span className="
                                    font-medium
                                    text-cyan-300
                                ">
                                    Level 5 Pearson BTEC HND in
                                    Mechatronics Engineering
                                </span>

                                {" "}and a{" "}

                                <span className="
                                    font-medium
                                    text-purple-300
                                ">
                                    Higher Diploma in Software
                                    Engineering at ACPT Sri Lanka
                                </span>
                                .
                            </p>

                            <p>
                                I have completed a{" "}

                                <span className="
                                    font-medium
                                    text-cyan-300
                                ">
                                    three-month Electronic Engineering
                                    internship at Iconic Devices
                                    (Pvt) Ltd
                                </span>
                                , gaining practical exposure to
                                electronics, embedded systems,
                                PCB development, hardware integration,
                                testing, and debugging.
                            </p>

                            <p>
                                My interests include embedded
                                platforms such as STM32, ESP32,
                                AVR and PIC, alongside application
                                development, databases, communication
                                interfaces, and industrial controllers.
                            </p>

                        </motion.div>

                        {/* =====================================
                            STATS
                        ===================================== */}

                        <div className="
                            mb-8

                            grid
                            grid-cols-2

                            gap-3
                            sm:gap-4
                        ">

                            {STATS.map((stat, index) => (

                                <motion.div
                                    key={stat.label}
                                    initial={{
                                        opacity: 0,
                                        y: 18,
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
                                        delay: 0.2 + index * 0.07,
                                    }}
                                    className="
                                        min-w-0

                                        rounded-2xl
                                        border border-white/[0.08]

                                        bg-white/[0.03]

                                        p-4

                                        transition-all
                                        duration-300

                                        hover:border-cyan-400/25
                                        hover:bg-white/[0.045]

                                        sm:p-5
                                    "
                                >

                                    <div className="
                                        mb-1

                                        text-2xl
                                        font-black

                                        bg-gradient-to-r
                                        from-cyan-400
                                        to-purple-500

                                        bg-clip-text
                                        text-transparent

                                        sm:text-3xl
                                    ">
                                        {stat.value}
                                    </div>

                                    <div className="
                                        font-mono
                                        text-[8px]
                                        uppercase
                                        tracking-[0.16em]
                                        leading-relaxed

                                        text-white/35

                                        sm:text-[9px]
                                        sm:tracking-[0.2em]
                                    ">
                                        {stat.label}
                                    </div>

                                </motion.div>

                            ))}

                        </div>

                        {/* =====================================
                            EXPERTISE
                        ===================================== */}

                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            whileInView={{
                                opacity: 1,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.15,
                            }}
                            transition={{
                                delay: 0.35,
                            }}
                            className="
                                flex
                                flex-wrap
                                gap-2
                            "
                        >

                            {EXPERTISE.map((item, index) => (

                                <motion.span
                                    key={item}
                                    initial={{
                                        opacity: 0,
                                        scale: 0.9,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        scale: 1,
                                    }}
                                    viewport={{
                                        once: true,
                                        amount: 0.1,
                                    }}
                                    transition={{
                                        delay: 0.35 + index * 0.025,
                                    }}
                                    className={`
                                        max-w-full

                                        rounded-full
                                        border

                                        px-3
                                        py-1.5

                                        font-mono
                                        text-[8px]
                                        uppercase
                                        tracking-wider

                                        transition-all
                                        duration-300

                                        cursor-default

                                        sm:px-3.5
                                        sm:text-[9px]

                                        ${
                                            FEATURED.has(item)
                                                ? `
                                                    border-cyan-400/30
                                                    bg-cyan-400/10
                                                    text-cyan-300
                                                    hover:bg-cyan-400/20
                                                `
                                                : `
                                                    border-white/[0.08]
                                                    bg-white/[0.035]
                                                    text-white/40
                                                    hover:border-cyan-500/30
                                                    hover:text-cyan-400/80
                                                `
                                        }
                                    `}
                                >
                                    {item}
                                </motion.span>

                            ))}

                        </motion.div>

                    </div>

                    {/* ========================================
                        RIGHT SIDE — 3D ELECTRONIC CONTROLLER
                    ======================================== */}

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
                            amount: 0.15,
                        }}
                        transition={{
                            duration: 0.7,
                        }}
                        className="
                            relative

                            mx-auto
                            w-full
                            min-w-0

                            h-[350px]

                            sm:h-[440px]
                            md:h-[500px]

                            lg:h-[540px]
                            xl:h-[590px]
                        "
                    >

                        {/* BACKGROUND GLOW */}

                        <div
                            aria-hidden="true"
                            className="
                                pointer-events-none
                                absolute
                                inset-0
                                rounded-full
                            "
                            style={{
                                background:
                                    "radial-gradient(circle, rgba(6,182,212,0.10) 0%, transparent 65%)",
                            }}
                        />

                        {/* 3D CANVAS */}

                        <Canvas
                            dpr={[1, 1.5]}
                            camera={{
                                position: [4.7, 4.0, 7.0],
                                fov: 39,
                                near: 0.1,
                                far: 100,
                            }}
                            gl={{
                                alpha: true,
                                antialias: true,
                                powerPreference: "high-performance",
                            }}
                        >

                            {/* LIGHTING */}

                            <ambientLight intensity={0.7} />

                            <directionalLight
                                position={[4, 5, 5]}
                                intensity={3}
                                color="#67e8f9"
                            />

                            <pointLight
                                position={[-4, -2, 4]}
                                intensity={2.5}
                                color="#a855f7"
                            />

                            <pointLight
                                position={[0, 4, -4]}
                                intensity={1.5}
                                color="#ffffff"
                            />

                            {/* BACKGROUND STARS */}

                            <Suspense fallback={null}>
                                <Stars
                                    radius={8}
                                    depth={5}
                                    count={110}
                                    factor={1.1}
                                    saturation={0}
                                    fade
                                    speed={0.25}
                                />

                                {/* COMPLETE PCB ASSEMBLY */}

                                <CircuitCore />
                            </Suspense>

                        </Canvas>

                        {/* MODEL CAPTION */}

                        <div className="
                            pointer-events-none

                            absolute
                            bottom-3
                            left-1/2
                            -translate-x-1/2

                            whitespace-nowrap

                            rounded-full
                            border border-cyan-500/20

                            bg-black/65
                            px-3
                            py-1.5

                            font-mono
                            text-[8px]
                            uppercase
                            tracking-[0.18em]

                            text-cyan-400/65

                            backdrop-blur-md

                            sm:bottom-5
                            sm:px-4
                            sm:text-[9px]
                        ">
                            Embedded Controller // PCB Assembly
                        </div>

                    </motion.div>

                </div>

            </motion.div>

        </section>
    );
}
