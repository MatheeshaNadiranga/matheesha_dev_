
"use client";

import { motion } from "framer-motion";

import {
    Canvas,
    useFrame,
} from "@react-three/fiber";

import {
    Html,
    Line,
    OrbitControls,
} from "@react-three/drei";

import {
    Suspense,
    useMemo,
    useRef,
    useState,
} from "react";

import * as THREE from "three";

import {
    MapPin,
    Globe,
    Navigation,
    Orbit,
} from "lucide-react";

/* ============================================================
   CONFIGURATION
============================================================ */

const GLOBE_RADIUS = 2.2;
const ATMOSPHERE_RADIUS = 2.5;

type LocationData = {
    name: string;
    city: string;
    lat: number;
    lon: number;
    isHome: boolean;
    label: string;
};

/* ============================================================
   GLOBAL LOCATIONS
============================================================ */

const LOCATIONS: LocationData[] = [
    {
        name: "Sri Lanka",
        city: "Colombo",
        lat: 6.9271,
        lon: 79.8612,
        isHome: true,
        label: "🇱🇰 Home Base",
    },
    {
        name: "United States",
        city: "New York",
        lat: 40.7128,
        lon: -74.0060,
        isHome: false,
        label: "🗽 New York",
    },
    {
        name: "United Kingdom",
        city: "London",
        lat: 51.5074,
        lon: -0.1278,
        isHome: false,
        label: "🇬🇧 London",
    },
    {
        name: "Japan",
        city: "Tokyo",
        lat: 35.6762,
        lon: 139.6503,
        isHome: false,
        label: "🗼 Tokyo",
    },
    {
        name: "Australia",
        city: "Sydney",
        lat: -33.8688,
        lon: 151.2093,
        isHome: false,
        label: "🇦🇺 Sydney",
    },
    {
        name: "Germany",
        city: "Berlin",
        lat: 52.5200,
        lon: 13.4050,
        isHome: false,
        label: "🇩🇪 Berlin",
    },
    {
        name: "India",
        city: "Mumbai",
        lat: 19.0760,
        lon: 72.8777,
        isHome: false,
        label: "🇮🇳 Mumbai",
    },
    {
        name: "UAE",
        city: "Dubai",
        lat: 25.2048,
        lon: 55.2708,
        isHome: false,
        label: "🏙️ Dubai",
    },
    {
        name: "Singapore",
        city: "Singapore",
        lat: 1.3521,
        lon: 103.8198,
        isHome: false,
        label: "🇸🇬 Singapore",
    },
    {
        name: "Canada",
        city: "Toronto",
        lat: 43.6532,
        lon: -79.3832,
        isHome: false,
        label: "🇨🇦 Toronto",
    },
    {
        name: "Brazil",
        city: "São Paulo",
        lat: -23.5505,
        lon: -46.6333,
        isHome: false,
        label: "🇧🇷 São Paulo",
    },
    {
        name: "South Africa",
        city: "Cape Town",
        lat: -33.9249,
        lon: 18.4241,
        isHome: false,
        label: "🇿🇦 Cape Town",
    },
];

/* ============================================================
   LATITUDE / LONGITUDE TO 3D POSITION
============================================================ */

function latLonToVector3(
    lat: number,
    lon: number,
    radius: number
): THREE.Vector3 {

    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);

    return new THREE.Vector3(
        -radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
    );
}

/* ============================================================
   INITIAL ROTATION

   Sri Lanka is positioned towards the camera.
============================================================ */

const homePosition = latLonToVector3(
    LOCATIONS[0].lat,
    LOCATIONS[0].lon,
    1
);

const INITIAL_ROTATION = Math.atan2(
    -homePosition.x,
    homePosition.z
);

/* ============================================================
   DETERMINISTIC LAND REGIONS
============================================================ */

type Point = readonly [number, number];

type LandRegion = {
    bounds: readonly [
        number,
        number,
        number,
        number
    ];
    polygon: readonly Point[];
    samples: number;
};

const LAND_REGIONS: LandRegion[] = [

    /* NORTH AMERICA */

    {
        bounds: [-168, 5, -50, 76],
        polygon: [
            [-168, 65],
            [-150, 72],
            [-130, 70],
            [-118, 75],
            [-95, 72],
            [-75, 60],
            [-55, 48],
            [-62, 25],
            [-80, 8],
            [-100, 15],
            [-115, 28],
            [-130, 48],
            [-155, 55],
        ],
        samples: 280,
    },

    /* SOUTH AMERICA */

    {
        bounds: [-82, -56, -34, 13],
        polygon: [
            [-81, 12],
            [-70, 10],
            [-50, 5],
            [-35, -8],
            [-50, -30],
            [-68, -56],
            [-76, -35],
            [-80, -10],
        ],
        samples: 200,
    },

    /* EUROPE AND ASIA */

    {
        bounds: [-12, 5, 160, 78],
        polygon: [
            [-10, 36],
            [0, 45],
            [10, 55],
            [25, 60],
            [40, 68],
            [70, 75],
            [105, 72],
            [130, 60],
            [155, 55],
            [145, 42],
            [125, 30],
            [110, 15],
            [95, 5],
            [80, 8],
            [70, 20],
            [55, 25],
            [45, 35],
            [30, 40],
            [20, 35],
            [10, 36],
        ],
        samples: 430,
    },

    /* AFRICA */

    {
        bounds: [-18, -35, 52, 38],
        polygon: [
            [-17, 35],
            [5, 37],
            [35, 31],
            [50, 12],
            [42, -12],
            [30, -35],
            [18, -35],
            [5, -25],
            [-5, -5],
            [-15, 15],
        ],
        samples: 280,
    },

    /* AUSTRALIA */

    {
        bounds: [110, -45, 155, -10],
        polygon: [
            [112, -11],
            [130, -10],
            [153, -25],
            [145, -39],
            [115, -34],
        ],
        samples: 100,
    },

    /* GREENLAND */

    {
        bounds: [-54, 59, -20, 84],
        polygon: [
            [-52, 83],
            [-30, 82],
            [-20, 72],
            [-42, 59],
            [-52, 65],
        ],
        samples: 65,
    },
];

/* ============================================================
   SEEDED RANDOM GENERATOR
============================================================ */

function seededRandom(seed: number) {

    let value = seed >>> 0;

    return () => {

        value = (
            value * 1664525 + 1013904223
        ) >>> 0;

        return value / 4294967296;
    };
}

/* ============================================================
   POINT IN POLYGON
============================================================ */

function pointInPolygon(
    lon: number,
    lat: number,
    polygon: readonly Point[]
): boolean {

    let inside = false;

    for (
        let i = 0, j = polygon.length - 1;
        i < polygon.length;
        j = i++
    ) {

        const [xi, yi] = polygon[i];
        const [xj, yj] = polygon[j];

        const intersects =
            ((yi > lat) !== (yj > lat)) &&
            (
                lon <
                ((xj - xi) * (lat - yi)) /
                    (yj - yi) +
                    xi
            );

        if (intersects) {
            inside = !inside;
        }
    }

    return inside;
}

/* ============================================================
   GENERATE CONTINENT DOTS

   Deterministic: no Math.random() during React rendering.
============================================================ */

function generateLandPositions(): Float32Array {

    const positions: number[] = [];

    LAND_REGIONS.forEach((region, regionIndex) => {

        const random = seededRandom(
            20261101 + regionIndex * 997
        );

        const [
            minLon,
            minLat,
            maxLon,
            maxLat,
        ] = region.bounds;

        let accepted = 0;
        let attempts = 0;

        while (
            accepted < region.samples &&
            attempts < region.samples * 60
        ) {

            const lon =
                minLon + random() * (maxLon - minLon);

            const lat =
                minLat + random() * (maxLat - minLat);

            if (
                pointInPolygon(
                    lon,
                    lat,
                    region.polygon
                )
            ) {

                const point = latLonToVector3(
                    lat,
                    lon,
                    GLOBE_RADIUS + 0.025
                );

                positions.push(
                    point.x,
                    point.y,
                    point.z
                );

                accepted++;
            }

            attempts++;
        }
    });

    return new Float32Array(positions);
}

/* ============================================================
   LOCATION MARKER
============================================================ */

function LocationMarker({
    location,
    isActive,
    onHover,
    onSelect,
}: {
    location: LocationData;
    isActive: boolean;
    onHover: (name: string | null) => void;
    onSelect: (name: string) => void;
}) {

    const markerRef = useRef<THREE.Group>(null!);

    const position = useMemo(
        () => latLonToVector3(
            location.lat,
            location.lon,
            GLOBE_RADIUS + 0.035
        ),
        [location.lat, location.lon]
    );

    const ringQuaternion = useMemo(() => {

        const normal = position.clone().normalize();

        return new THREE.Quaternion().setFromUnitVectors(
            new THREE.Vector3(0, 0, 1),
            normal
        );

    }, [position]);

    /* MARKER ANIMATION */

    useFrame((state) => {

        if (!markerRef.current) return;

        const intensity = location.isHome
            ? 0.12
            : isActive
                ? 0.10
                : 0.045;

        const pulse =
            1 +
            Math.sin(
                state.clock.elapsedTime *
                (location.isHome ? 3 : 2)
            ) * intensity;

        markerRef.current.scale.setScalar(pulse);
    });

    const markerColor = location.isHome
        ? "#22d3ee"
        : isActive
            ? "#c084fc"
            : "#06b6d4";

    return (
        <group position={position}>

            {/* INTERACTION AREA */}

            <mesh
                onPointerOver={(event) => {
                    event.stopPropagation();
                    onHover(location.name);
                }}
                onPointerOut={(event) => {
                    event.stopPropagation();
                    onHover(null);
                }}
                onClick={(event) => {
                    event.stopPropagation();
                    onSelect(location.name);
                }}
            >
                <sphereGeometry args={[0.17, 16, 16]} />

                <meshBasicMaterial
                    transparent
                    opacity={0}
                    depthWrite={false}
                />
            </mesh>

            {/* VISIBLE MARKER */}

            <group ref={markerRef}>

                <mesh>
                    <sphereGeometry
                        args={[
                            location.isHome ? 0.085 : 0.055,
                            20,
                            20,
                        ]}
                    />

                    <meshBasicMaterial color={markerColor} />
                </mesh>

                {/* ORIENTED RINGS */}

                <group quaternion={ringQuaternion}>

                    <mesh>
                        <ringGeometry
                            args={[
                                location.isHome ? 0.11 : 0.08,
                                location.isHome ? 0.15 : 0.11,
                                40,
                            ]}
                        />

                        <meshBasicMaterial
                            color={
                                location.isHome
                                    ? "#06b6d4"
                                    : "#a855f7"
                            }
                            transparent
                            opacity={isActive ? 0.7 : 0.35}
                            side={THREE.DoubleSide}
                            depthWrite={false}
                        />
                    </mesh>

                    <mesh position={[0, 0, -0.002]}>
                        <ringGeometry
                            args={[0.17, 0.185, 40]}
                        />

                        <meshBasicMaterial
                            color="#06b6d4"
                            transparent
                            opacity={isActive ? 0.45 : 0.12}
                            side={THREE.DoubleSide}
                            depthWrite={false}
                        />
                    </mesh>

                </group>

            </group>

            {/* LOCATION LABEL */}

            {isActive && (
                <Html
                    position={[0, 0.30, 0]}
                    center
                    distanceFactor={8}
                    occlude
                    zIndexRange={[100, 0]}
                >
                    <div className="
                        rounded-xl
                        border border-cyan-400/30
                        bg-black/90
                        px-3 py-2
                        text-center
                        shadow-[0_0_25px_rgba(6,182,212,0.15)]
                        backdrop-blur-xl
                    ">

                        <p className="
                            whitespace-nowrap
                            text-[11px]
                            font-bold
                            text-white
                        ">
                            {location.label}
                        </p>

                        <p className="
                            mt-1
                            text-[9px]
                            text-cyan-400
                        ">
                            {location.city}
                        </p>

                    </div>
                </Html>
            )}

        </group>
    );
}

/* ============================================================
   GLOBE COMPONENT
============================================================ */

function GlobeScene({
    selectedLocation,
    onSelectLocation,
}: {
    selectedLocation: string;
    onSelectLocation: (name: string) => void;
}) {

    const groupRef = useRef<THREE.Group>(null!);

    const [hoveredLocation, setHoveredLocation] =
        useState<string | null>(null);

    const activeLocation =
        hoveredLocation ?? selectedLocation;

    /* GRID LINES */

    const gridLines = useMemo(() => {

        const lines: THREE.Vector3[][] = [];

        const radius = GLOBE_RADIUS + 0.012;

        // Latitude

        for (
            let lat = -80;
            lat <= 80;
            lat += 20
        ) {

            const points: THREE.Vector3[] = [];

            for (
                let lon = -180;
                lon <= 180;
                lon += 5
            ) {
                points.push(
                    latLonToVector3(lat, lon, radius)
                );
            }

            lines.push(points);
        }

        // Longitude

        for (
            let lon = -180;
            lon < 180;
            lon += 30
        ) {

            const points: THREE.Vector3[] = [];

            for (
                let lat = -90;
                lat <= 90;
                lat += 5
            ) {
                points.push(
                    latLonToVector3(lat, lon, radius)
                );
            }

            lines.push(points);
        }

        return lines;

    }, []);

    /* LAND POINTS */

    const landPositions = useMemo(
        () => generateLandPositions(),
        []
    );

    /* CONNECTION ARCS */

    const arcs = useMemo(() => {

        const home = LOCATIONS[0];

        const start = latLonToVector3(
            home.lat,
            home.lon,
            GLOBE_RADIUS + 0.025
        );

        return LOCATIONS
            .filter((location) => !location.isHome)
            .map((location) => {

                const end = latLonToVector3(
                    location.lat,
                    location.lon,
                    GLOBE_RADIUS + 0.025
                );

                const mid = start
                    .clone()
                    .add(end)
                    .normalize()
                    .multiplyScalar(GLOBE_RADIUS + 1.0);

                const curve =
                    new THREE.QuadraticBezierCurve3(
                        start,
                        mid,
                        end
                    );

                return {
                    name: location.name,
                    points: curve.getPoints(48),
                };
            });

    }, []);

    /* AUTO ROTATION */

    useFrame((_, delta) => {

        if (!groupRef.current) return;

        groupRef.current.rotation.y += delta * 0.055;

    });

    return (
        <group
            ref={groupRef}
            rotation={[0, INITIAL_ROTATION, 0]}
        >

            {/* BASE GLOBE */}

            <mesh>
                <sphereGeometry
                    args={[GLOBE_RADIUS, 64, 64]}
                />

                <meshStandardMaterial
                    color="#071722"
                    metalness={0.2}
                    roughness={0.85}
                />
            </mesh>

            {/* GRID */}

            {gridLines.map((points, index) => (
                <Line
                    key={`grid-${index}`}
                    points={points}
                    color="#06b6d4"
                    transparent
                    opacity={0.15}
                    lineWidth={0.65}
                />
            ))}

            {/* LAND DOTS */}

            <points>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        args={[landPositions, 3]}
                    />
                </bufferGeometry>

                <pointsMaterial
                    size={0.032}
                    color="#22d3ee"
                    transparent
                    opacity={0.8}
                    sizeAttenuation
                    depthWrite={false}
                />
            </points>

            {/* CONNECTION ARCS */}

            {arcs.map((arc) => {

                const active =
                    activeLocation === arc.name;

                return (
                    <Line
                        key={arc.name}
                        points={arc.points}
                        color={
                            active
                                ? "#c084fc"
                                : "#06b6d4"
                        }
                        transparent
                        opacity={active ? 0.85 : 0.18}
                        lineWidth={active ? 1.5 : 0.7}
                    />
                );
            })}

            {/* LOCATION MARKERS */}

            {LOCATIONS.map((location) => (
                <LocationMarker
                    key={location.name}
                    location={location}
                    isActive={
                        activeLocation === location.name
                    }
                    onHover={setHoveredLocation}
                    onSelect={onSelectLocation}
                />
            ))}

            {/* ATMOSPHERE */}

            <mesh>
                <sphereGeometry
                    args={[ATMOSPHERE_RADIUS, 48, 48]}
                />

                <meshBasicMaterial
                    color="#06b6d4"
                    transparent
                    opacity={0.045}
                    side={THREE.BackSide}
                    depthWrite={false}
                />
            </mesh>

        </group>
    );
}

/* ============================================================
   MAIN EARTH SECTION
============================================================ */

export default function Earth() {

    const [selectedLocation, setSelectedLocation] =
        useState("Sri Lanka");

    const selected = LOCATIONS.find(
        (location) => location.name === selectedLocation
    ) ?? LOCATIONS[0];

    const destinations = LOCATIONS.filter(
        (location) => !location.isHome
    );

    return (
        <section
            id="global-connectivity"
            className="
                relative
                isolate
                w-full
                overflow-hidden

                px-4
                pt-16 pb-4

                sm:px-6
                sm:pt-20 sm:pb-6

                lg:px-8
                lg:pl-28
                lg:pt-24 lg:pb-8
            "
        >

            {/* BACKGROUND GLOW */}

            <div className="
                pointer-events-none
                absolute -z-10
                left-1/4 top-1/4
                h-80 w-80
                rounded-full
                bg-cyan-500/[0.055]
                blur-[110px]
            " />

            <div className="
                pointer-events-none
                absolute -z-10
                bottom-0 right-0
                h-72 w-72
                rounded-full
                bg-purple-500/[0.05]
                blur-[110px]
            " />

            <div className="
                relative mx-auto
                w-full max-w-7xl
            ">

                {/* HEADER */}

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
                    className="
                        mb-7 text-center
                        sm:mb-10
                        lg:mb-12
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
                        Global Connectivity
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
                        Beyond{" "}

                        <span className="
                            bg-gradient-to-r
                            from-cyan-400
                            via-white
                            to-purple-500
                            bg-clip-text
                            text-transparent
                        ">
                            Borders.
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
                        Based in Sri Lanka, with a global
                        outlook on engineering, technology,
                        innovation, and collaboration.
                    </p>

                </motion.div>

                {/* GLOBE + LOCATION PANEL */}

                <div className="
                    grid
                    grid-cols-1
                    items-center
                    gap-5

                    lg:grid-cols-[minmax(0,1.25fr)_minmax(280px,0.75fr)]
                    lg:gap-8
                ">

                    {/* 3D GLOBE */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.96,
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
                            duration: 0.8,
                        }}
                        className="
                            relative
                            min-w-0
                            w-full

                            h-[310px]
                            sm:h-[420px]
                            md:h-[480px]
                            lg:h-[510px]
                        "
                    >

                        <Canvas
                            dpr={[1, 1.5]}
                            camera={{
                                position: [0, 0, 7.2],
                                fov: 40,
                                near: 0.1,
                                far: 100,
                            }}
                            gl={{
                                alpha: true,
                                antialias: true,
                                powerPreference: "high-performance",
                            }}
                        >

                            <ambientLight intensity={1.1} />

                            <directionalLight
                                position={[4, 5, 5]}
                                intensity={2.2}
                                color="#67e8f9"
                            />

                            <pointLight
                                position={[-4, -2, 4]}
                                intensity={1.5}
                                color="#a855f7"
                            />

                            <Suspense fallback={null}>
                                <GlobeScene
                                    selectedLocation={selectedLocation}
                                    onSelectLocation={setSelectedLocation}
                                />
                            </Suspense>

                            <OrbitControls
                                enableZoom={false}
                                enablePan={false}
                                enableRotate
                                enableDamping
                                dampingFactor={0.06}
                                rotateSpeed={0.5}
                            />

                        </Canvas>

                        {/* INTERACTION HINT */}

                        <div className="
                            pointer-events-none
                            absolute
                            bottom-3
                            left-1/2
                            -translate-x-1/2

                            flex
                            items-center
                            gap-2
                            whitespace-nowrap

                            rounded-full
                            border border-white/[0.07]
                            bg-black/40
                            px-3 py-1.5
                            font-mono
                            text-[8px]
                            uppercase
                            tracking-wider
                            text-white/35
                            backdrop-blur-md
                        ">
                            <Orbit size={12} className="text-cyan-400" />
                            Drag to rotate the globe
                        </div>

                    </motion.div>

                    {/* LOCATION PANEL */}

                    <motion.aside
                        initial={{
                            opacity: 0,
                            x: 20,
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
                            delay: 0.1,
                        }}
                        className="
                            min-w-0

                            rounded-[1.75rem]
                            border border-white/10
                            bg-white/[0.025]
                            p-5
                            backdrop-blur-xl

                            sm:rounded-[2rem]
                            sm:p-6

                            lg:p-7
                        "
                    >

                        {/* PANEL HEADER */}

                        <div className="
                            mb-6
                            flex
                            items-center
                            justify-between
                            gap-3
                        ">

                            <div>
                                <p className="
                                    mb-1
                                    font-mono
                                    text-[8px]
                                    uppercase
                                    tracking-[0.2em]
                                    text-cyan-400/65
                                ">
                                    Global Network
                                </p>

                                <h3 className="
                                    text-lg
                                    font-bold
                                    text-white
                                    sm:text-xl
                                ">
                                    Explore Locations
                                </h3>
                            </div>

                            <div className="
                                flex
                                h-10
                                w-10
                                shrink-0
                                items-center
                                justify-center
                                rounded-xl
                                border border-cyan-500/15
                                bg-cyan-500/[0.07]
                                text-cyan-400
                            ">
                                <Globe size={21} />
                            </div>

                        </div>

                        {/* HOME BASE */}

                        <div className="
                            mb-5
                            rounded-2xl
                            border border-cyan-500/20
                            bg-cyan-500/[0.055]
                            p-4
                        ">

                            <div className="
                                flex
                                items-center
                                justify-between
                                gap-2
                            ">

                                <span className="
                                    font-mono
                                    text-[8px]
                                    uppercase
                                    tracking-[0.2em]
                                    text-cyan-400/60
                                ">
                                    Home Base
                                </span>

                                <span className="
                                    flex
                                    items-center
                                    gap-1.5
                                    text-[8px]
                                    font-mono
                                    uppercase
                                    tracking-wider
                                    text-emerald-400
                                ">
                                    <span className="
                                        h-1.5 w-1.5
                                        rounded-full
                                        bg-emerald-400
                                    " />
                                    Primary
                                </span>

                            </div>

                            <div className="
                                mt-3
                                flex
                                items-center
                                gap-3
                            ">

                                <div className="
                                    flex
                                    h-10 w-10
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-cyan-400/10
                                    text-cyan-400
                                ">
                                    <MapPin size={20} />
                                </div>

                                <div>
                                    <h4 className="
                                        text-sm
                                        font-bold
                                        text-white
                                    ">
                                        Sri Lanka
                                    </h4>

                                    <p className="
                                        mt-0.5
                                        text-[10px]
                                        text-white/40
                                    ">
                                        Colombo
                                    </p>
                                </div>

                            </div>

                        </div>

                        {/* SELECTED LOCATION */}

                        <div className="
                            mb-5
                            rounded-xl
                            border border-white/[0.07]
                            bg-white/[0.025]
                            p-3
                        ">

                            <p className="
                                mb-1
                                font-mono
                                text-[8px]
                                uppercase
                                tracking-[0.2em]
                                text-white/30
                            ">
                                Selected Location
                            </p>

                            <div className="
                                flex
                                items-center
                                justify-between
                                gap-2
                            ">
                                <span className="
                                    text-xs
                                    font-semibold
                                    text-white
                                ">
                                    {selected.city}
                                </span>

                                <Navigation
                                    size={14}
                                    className="text-purple-400"
                                />
                            </div>

                        </div>

                        {/* DESTINATION LIST */}

                        <p className="
                            mb-3
                            font-mono
                            text-[8px]
                            uppercase
                            tracking-[0.2em]
                            text-white/30
                        ">
                            Global Reference Points
                        </p>

                        <div className="
                            grid
                            grid-cols-2
                            gap-2
                        ">

                            {destinations.map((location) => {

                                const active =
                                    selectedLocation === location.name;

                                return (
                                    <button
                                        key={location.name}
                                        type="button"
                                        onClick={() =>
                                            setSelectedLocation(location.name)
                                        }
                                        aria-pressed={active}
                                        className={`
                                            flex
                                            min-w-0
                                            items-center
                                            gap-2

                                            rounded-xl
                                            border
                                            px-2.5
                                            py-3
                                            text-left

                                            transition-all
                                            duration-200

                                            ${
                                                active
                                                    ? `
                                                        border-purple-400/30
                                                        bg-purple-400/[0.09]
                                                    `
                                                    : `
                                                        border-white/[0.06]
                                                        bg-white/[0.02]
                                                        hover:border-cyan-400/20
                                                        hover:bg-white/[0.05]
                                                    `
                                            }
                                        `}
                                    >

                                        <span className={`
                                            h-1.5
                                            w-1.5
                                            shrink-0
                                            rounded-full

                                            ${
                                                active
                                                    ? "bg-purple-400"
                                                    : "bg-cyan-500/50"
                                            }
                                        `} />

                                        <span className={`
                                            truncate
                                            text-[9px]
                                            font-medium

                                            ${
                                                active
                                                    ? "text-purple-300"
                                                    : "text-white/55"
                                            }
                                        `}>
                                            {location.city}
                                        </span>

                                    </button>
                                );
                            })}

                        </div>

                        {/* DISCLAIMER */}

                        <p className="
                            mt-5
                            border-t border-white/[0.06]
                            pt-4
                            text-[9px]
                            leading-relaxed
                            text-white/25
                        ">
                            A visual representation of selected
                            global technology hubs, with Sri Lanka
                            as the home base. These reference points
                            do not imply physical presence in every
                            listed location.
                        </p>

                    </motion.aside>

                </div>

                {/* BOTTOM LABEL */}

                <div className="
                    mt-7
                    flex
                    flex-wrap
                    items-center
                    justify-center
                    gap-x-3
                    gap-y-2

                    font-mono
                    text-[8px]
                    uppercase
                    tracking-[0.17em]
                    text-white/20

                    sm:mt-9
                    sm:gap-x-4
                    sm:text-[9px]
                ">

                    <span>Global Technology</span>

                    <span className="text-cyan-500/40">•</span>

                    <span>Engineering</span>

                    <span className="text-cyan-500/40">•</span>

                    <span>Innovation</span>

                    <span className="text-cyan-500/40">•</span>

                    <span>Collaboration</span>

                </div>

            </div>

        </section>
    );
}
