
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Html } from "@react-three/drei";
import * as THREE from "three";

/*
 * 1. YOUR REAL SKILLS DATA - Using Devicon original versions
 */
const SKILL_ROWS = [
  [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" }, // Removed wordmark for cleaner look
    { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
    { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" }
  ],
  [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "NextJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" }
  ],
];

// ... (HardwareSoftwareScene remains the same)
function HardwareSoftwareScene({ scrollProgress }: { scrollProgress: number }) {
  const groupRef = useRef<THREE.Group>(null!);
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = scrollProgress * Math.PI * 4;
    }
  });
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={groupRef}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.5, 1.5, 0.3]} />
          <meshStandardMaterial color="#111" metalness={1} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0, 0.16]}>
          <planeGeometry args={[0.8, 0.8]} />
          <meshBasicMaterial color="#06b6d4" />
        </mesh>
        {[...Array(8)].map((_, i) => (
          <mesh key={i} position={[Math.cos(i) * 1.5, Math.sin(i) * 1.5, 0]}>
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshBasicMaterial color={i % 2 === 0 ? "#06b6d4" : "#a855f7"} />
          </mesh>
        ))}
        <Html position={[0, -1.2, 0]} center transform occlude>
          <div className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/50 rounded text-[10px] font-mono text-cyan-400">
            EMBEDDED_CORE_ACTIVE
          </div>
        </Html>
      </group>
    </Float>
  );
}

export default function SkillsSpinner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollVal, setScrollVal] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => setScrollVal(latest));
  }, [scrollYProgress]);

  const row1X = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const row2X = useTransform(scrollYProgress, [0, 1], [-150, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative w-full py-12 flex flex-col items-center gap-12 bg-transparent overflow-hidden">

      <motion.div style={{ opacity }} className="text-center">
        <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase">
          Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Arsenal</span>
        </h2>
      </motion.div>

      <div className="w-full h-[350px] relative pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ alpha: true }}>
          <ambientLight intensity={1} />
          <pointLight position={[5, 5, 5]} intensity={2} color="#06b6d4" />
          <Suspense fallback={null}>
            <HardwareSoftwareScene scrollProgress={scrollVal} />
          </Suspense>
        </Canvas>
      </div>

      <div className="w-full space-y-8">
        {SKILL_ROWS.map((row, idx) => (
          <motion.div
            key={idx}
            style={{ x: idx === 0 ? row1X : row2X, opacity }}
            className="flex justify-center gap-6"
          >
            {row.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/**
 * FIXED SKILL CARD: Full color, no grayscale, no transparency on icons
 */
function SkillCard({ skill }: { skill: { name: string; icon: string } }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1, y: -5 }}
      className="group relative w-20 h-20 md:w-24 md:h-24 bg-white/[0.05] border border-white/10 rounded-[2rem] flex items-center justify-center backdrop-blur-xl transition-all hover:bg-white/[0.1] hover:border-white/20 shadow-2xl"
    >
      {/* REMOVED: filter grayscale and opacity-50 
        ADDED: full color and high opacity
      */}
      <img
        src={skill.icon}
        alt={skill.name}
        className="w-10 h-10 md:w-12 md:h-12 object-contain transition-transform duration-300 group-hover:scale-110"
      />

      {/* Tooltip on hover */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all bg-stone-900 border border-white/20 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest pointer-events-none shadow-xl">
        {skill.name}
      </div>
    </motion.div>
  );
}