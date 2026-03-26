import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

/* ─── 3D: Double helix ─── */
function HelixScene() {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.35;
    }
  });

  const STRANDS = 32;

  return (
    <Float speed={1} floatIntensity={0.35}>
      <group ref={groupRef}>
        {[...Array(STRANDS)].map((_, i) => {
          const t  = (i / STRANDS) * Math.PI * 5;
          const y  = (i / STRANDS) * 4.5 - 2.25;
          const x1 = Math.cos(t) * 0.9;
          const z1 = Math.sin(t) * 0.9;
          const x2 = Math.cos(t + Math.PI) * 0.9;
          const z2 = Math.sin(t + Math.PI) * 0.9;
          const col1 = i % 3 === 0 ? "#06b6d4" : "#a855f7";
          const col2 = i % 3 === 0 ? "#a855f7" : "#06b6d4";
          return (
            <group key={i}>
              <mesh position={[x1, y, z1]}>
                <sphereGeometry args={[0.07, 8, 8]} />
                <meshBasicMaterial color={col1} />
              </mesh>
              <mesh position={[x2, y, z2]}>
                <sphereGeometry args={[0.07, 8, 8]} />
                <meshBasicMaterial color={col2} />
              </mesh>
              {i % 4 === 0 && (
                /* cross-bridge */
                <mesh position={[(x1 + x2) / 2, y, (z1 + z2) / 2]}>
                  <boxGeometry args={[Math.abs(x1 - x2) * 1.1, 0.012, 0.012]} />
                  <meshBasicMaterial color="#ffffff" transparent opacity={0.12} />
                </mesh>
              )}
            </group>
          );
        })}
      </group>
    </Float>
  );
}

/* ─── Data ─── */
const STATS = [
  { value: "6+",   label: "Months Exp."  },
  { value: "4+",  label: "Projects"    },
  { value: "4+",   label: "Tech Stack"  },
  { value: "100%", label: "Remote Ready" },
];

const PASSIONS = [
  "System Design",
  "Clean APIs",
  "Performance",
  "Open Source",
  "Developer UX",
  "Mobile Dev",
];

/* ─── Component ─── */
export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const opacity  = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const helixX   = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={containerRef} className="relative w-full py-12 overflow-hidden">
      <motion.div style={{ opacity }} className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

          {/* ── Left: text ── */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10px] font-mono text-cyan-400 uppercase tracking-[0.45em] mb-5"
            >
              Who I Am
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-white tracking-[-0.04em] uppercase leading-none mb-8"
            >
              Code Is
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Craft
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4 text-white/45 text-sm leading-[1.8] mb-12"
            >
              <p>
                I'm a full-stack developer who obsesses over the architecture behind systems
                and the pixels in front of users. Great software lives at the intersection
                of technical rigor and thoughtful design.
              </p>
              <p>
                From REST APIs and databases to responsive UIs and cross-platform mobile apps —
                I build things that are fast, reliable, and genuinely enjoyable to use.
              </p>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="p-5 bg-white/[0.03] border border-white/[0.08] rounded-2xl group hover:border-white/15 transition-all"
                >
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-1">
                    {s.value}
                  </div>
                  <div className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em]">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Passion tags */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-2"
            >
              {PASSIONS.map((p, i) => (
                <motion.span
                  key={p}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.06 }}
                  className="px-4 py-1.5 bg-white/[0.04] border border-white/[0.08] rounded-full text-[10px] font-mono text-white/40 uppercase tracking-wider hover:border-cyan-500/30 hover:text-cyan-400/70 transition-all cursor-default"
                >
                  {p}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* ── Right: 3D ── */}
          <motion.div
            style={{ x: helixX }}
            className="w-full h-[520px] pointer-events-none"
          >
            <Canvas camera={{ position: [0, 0, 4.5], fov: 50 }} gl={{ alpha: true }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[5, 5, 5]} intensity={3.5} color="#06b6d4" />
              <pointLight position={[-5, -5, 5]} intensity={2} color="#a855f7" />
              <Suspense fallback={null}>
                <HelixScene />
              </Suspense>
            </Canvas>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}