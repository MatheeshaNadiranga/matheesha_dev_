/* eslint-disable react-hooks/purity */
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls, Line } from "@react-three/drei";
import { Suspense, useRef, useMemo, useState, } from "react";
import * as THREE from "three";

// ─── Constants ─────────────────────────────────────────────────────────────
const GLOBE_RADIUS = 2.2; // Increased from 2.0
const ATMOSPHERE_RADIUS = 2.5;

const LOCATIONS = [
  { name: "Sri Lanka",     city: "Colombo",   lat: 7.8731,   lon: 80.7718,   isHome: true,  label: "🏠 Home Base" },
  { name: "United States", city: "New York",  lat: 40.7128,  lon: -74.0060,  isHome: false, label: "🗽 New York"  },
  { name: "United Kingdom",city: "London",    lat: 51.5074,  lon: -0.1278,   isHome: false, label: "🇬🇧 London"   },
  { name: "Japan",         city: "Tokyo",     lat: 35.6762,  lon: 139.6503,  isHome: false, label: "🗼 Tokyo"     },
  { name: "Australia",     city: "Sydney",    lat: -33.8688, lon: 151.2093,  isHome: false, label: "🇦🇺 Sydney"   },
  { name: "Germany",       city: "Berlin",    lat: 52.5200,  lon: 13.4050,   isHome: false, label: "🇩🇪 Berlin"   },
  { name: "India",         city: "Mumbai",    lat: 19.0760,  lon: 72.8777,   isHome: false, label: "🇮🇳 Mumbai"   },
  { name: "UAE",           city: "Dubai",     lat: 25.2048,  lon: 55.2708,   isHome: false, label: "🏙️ Dubai"    },
  { name: "Singapore",     city: "Singapore", lat: 1.3521,   lon: 103.8198,  isHome: false, label: "🇸🇬 Singapore"},
  { name: "Canada",        city: "Toronto",   lat: 43.6532,  lon: -79.3832,  isHome: false, label: "🇨🇦 Toronto"  },
  { name: "Brazil",        city: "São Paulo", lat: -23.5505, lon: -46.6333,  isHome: false, label: "🇧🇷 São Paulo"},
  { name: "South Africa",  city: "Cape Town", lat: -33.9249, lon: 18.4241,   isHome: false, label: "🇿🇦 Cape Town"},
];

// ─── Utility ───────────────────────────────────────────────────────────────────
function latLonToVector3(lat: number, lon: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -(radius * Math.sin(phi) * Math.cos(theta)),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

// ─── Location Marker ───────────────────────────────────────────────────────────
function LocationMarker({
  location, isActive, onHover, onClick,
}: {
  location: typeof LOCATIONS[0];
  isActive: boolean;
  onHover: (name: string | null) => void;
  onClick: (name: string) => void;
}) {
  const markerRef = useRef<THREE.Group>(null!);
  const ring1Ref = useRef<THREE.Mesh>(null!);
  const ring2Ref = useRef<THREE.Mesh>(null!);

  const pos = useMemo(() => latLonToVector3(location.lat, location.lon, GLOBE_RADIUS + 0.05), [location]);
  const outDir = useMemo(() => pos.clone().normalize(), [pos]);
  const isHome = location.isHome;

  useFrame((state) => {
    if (markerRef.current) {
      const s = 1 + Math.sin(state.clock.elapsedTime * (isHome ? 3 : 2)) * 0.15;
      markerRef.current.scale.setScalar(s);
    }
    if (ring1Ref.current) ring1Ref.current.lookAt(pos.clone().add(outDir));
    if (ring2Ref.current) ring2Ref.current.lookAt(pos.clone().add(outDir));
  });

  return (
    <group position={pos}>
      <mesh
        onPointerOver={(e) => { e.stopPropagation(); onHover(location.name); document.body.style.cursor = "pointer"; }}
        onPointerOut={(e) => { e.stopPropagation(); onHover(null); document.body.style.cursor = "auto"; }}
        onClick={(e) => { e.stopPropagation(); onClick(location.name); }}
      >
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshBasicMaterial transparent opacity={0} depthWrite={false} />
      </mesh>

      <group ref={markerRef}>
        <mesh>
          <sphereGeometry args={[isHome ? 0.08 : 0.05, 16, 16]} />
          <meshBasicMaterial color={isHome ? "#22d3ee" : isActive ? "#c084fc" : "#06b6d4"} />
        </mesh>
        <mesh ref={ring1Ref}>
          <ringGeometry args={[isHome ? 0.1 : 0.07, isHome ? 0.14 : 0.1, 32]} />
          <meshBasicMaterial color={isHome ? "#06b6d4" : "#a855f7"} transparent opacity={0.4} side={THREE.DoubleSide} />
        </mesh>
      </group>

      {isActive && (
        <Html position={[0, 0.3, 0]} center zIndexRange={[100, 0]}>
          <div style={{
            background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)", border: "1px solid rgba(34,211,238,0.3)",
            borderRadius: "8px", padding: "8px 12px", whiteSpace: "nowrap", color: "white", fontSize: "12px", textAlign: "center"
          }}>
            <strong>{location.label}</strong>
            <div style={{ color: "#22d3ee", fontSize: "10px", marginTop: "2px" }}>
              {location.city}
            </div>
          </div>
        </Html>
      )}
    </group>
  );
}

// ─── Globe ─────────────────────────────────────────────────────────────────────
function Globe() {
  const groupRef = useRef<THREE.Group>(null!);
  const [activeLocation, setActiveLocation] = useState<string | null>("Sri Lanka");

  const gridLines = useMemo(() => {
    const lines: THREE.Vector3[][] = [];
    const radius = GLOBE_RADIUS + 0.01;
    for (let lat = -80; lat <= 80; lat += 20) {
      const pts = [];
      for (let lon = 0; lon <= 360; lon += 5) pts.push(latLonToVector3(lat, lon, radius));
      lines.push(pts);
    }
    for (let lon = 0; lon < 360; lon += 30) {
      const pts = [];
      for (let lat = -90; lat <= 90; lat += 5) pts.push(latLonToVector3(lat, lon, radius));
      lines.push(pts);
    }
    return lines;
  }, []);

  const landPositions = useMemo(() => {
    const vecs: THREE.Vector3[] = [];
    const regions = [
      { latRange: [10, 60], lonRange: [60, 140], density: 250 },
      { latRange: [35, 70], lonRange: [-10, 40], density: 150 },
      { latRange: [-35, 35], lonRange: [-20, 50], density: 200 },
      { latRange: [15, 70], lonRange: [-170, -50], density: 200 },
      { latRange: [-55, 12], lonRange: [-80, -35], density: 150 },
      { latRange: [-40, -12], lonRange: [110, 155], density: 100 },
      { latRange: [6, 10], lonRange: [79, 82], density: 40 },
    ];
    regions.forEach((r) => {
      for (let i = 0; i < r.density; i++) {
        const lat = r.latRange[0] + Math.random() * (r.latRange[1] - r.latRange[0]);
        const lon = r.lonRange[0] + Math.random() * (r.lonRange[1] - r.lonRange[0]);
        vecs.push(latLonToVector3(lat, lon, GLOBE_RADIUS + 0.02));
      }
    });
    const arr = new Float32Array(vecs.length * 3);
    vecs.forEach((v, i) => { arr[i * 3] = v.x; arr[i * 3 + 1] = v.y; arr[i * 3 + 2] = v.z; });
    return arr;
  }, []);

  const arcs = useMemo(() => {
    const home = LOCATIONS[0];
    const start = latLonToVector3(home.lat, home.lon, GLOBE_RADIUS + 0.03);
    return LOCATIONS.filter(l => !l.isHome).map(loc => {
      const end = latLonToVector3(loc.lat, loc.lon, GLOBE_RADIUS + 0.03);
      const mid = start.clone().add(end).multiplyScalar(0.5).normalize().multiplyScalar(GLOBE_RADIUS + 1.2);
      return { name: loc.name, points: new THREE.QuadraticBezierCurve3(start, mid, end).getPoints(50) };
    });
  }, []);

  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.1;
  });

  return (
    <group ref={groupRef}>
      {/* Base Globe */}
      <mesh>
        <sphereGeometry args={[GLOBE_RADIUS, 64, 64]} />
        <meshBasicMaterial color="#06b6d4" transparent opacity={0.05} />
      </mesh>

      {/* Grid */}
      {gridLines.map((pts, i) => (
        <Line key={i} points={pts} color="#06b6d4" transparent opacity={0.1} lineWidth={0.5} />
      ))}

      {/* Land Dots */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[landPositions, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.04} color="#06b6d4" transparent opacity={0.6} sizeAttenuation />
      </points>

      {/* Connection Arcs */}
      {arcs.map((arc) => (
        <Line 
          key={arc.name} 
          points={arc.points} 
          color={activeLocation === arc.name ? "#a855f7" : "#06b6d4"} 
          transparent 
          opacity={activeLocation === arc.name ? 0.8 : 0.15} 
          lineWidth={activeLocation === arc.name ? 1.5 : 0.5} 
        />
      ))}

      {/* Markers */}
      {LOCATIONS.map((loc) => (
        <LocationMarker 
          key={loc.name} 
          location={loc} 
          isActive={activeLocation === loc.name} 
          onHover={setActiveLocation} 
          onClick={setActiveLocation} 
        />
      ))}

      {/* Atmosphere Glow */}
      <mesh>
        <sphereGeometry args={[ATMOSPHERE_RADIUS, 32, 32]} />
        <meshBasicMaterial color="#06b6d4" transparent opacity={0.03} side={THREE.BackSide} />
      </mesh>
    </group>
  );
}

// ─── Main Export ───────────────────────────────────────────────────────────────
export default function Earth() {
  return (
    <div style={{ width: "fit-to-conten", height: "500px", minHeight: "500px", position: "relative" }}>
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 38 }} // Narrower FOV + closer Z makes it look much larger
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.5} />
        <OrbitControls 
          enableZoom={true} 
          enablePan={false} 
          minDistance={3.5} 
          maxDistance={7} 
          rotateSpeed={0.6}
        />
        <Suspense fallback={null}>
          <Globe />
        </Suspense>
      </Canvas>
    </div>
  );
}