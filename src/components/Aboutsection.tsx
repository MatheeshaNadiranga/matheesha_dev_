import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

/* ============================================================
   3D ELECTRONIC / EMBEDDED SYSTEM VISUAL
   ============================================================ */

function CircuitCore() {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.22;
      groupRef.current.rotation.z =
        Math.sin(state.clock.elapsedTime * 0.35) * 0.08;
    }
  });

  const nodes = useMemo(() => {
    const items = [];

    for (let i = 0; i < 28; i++) {
      const y = (i / 27) * 4.8 - 2.4;
      const angle = (i / 27) * Math.PI * 5.5;

      const radius = 0.9;

      const x1 = Math.cos(angle) * radius;
      const z1 = Math.sin(angle) * radius;

      const x2 = Math.cos(angle + Math.PI) * radius;
      const z2 = Math.sin(angle + Math.PI) * radius;

      items.push({
        y,
        x1,
        z1,
        x2,
        z2,
        angle,
      });
    }

    return items;
  }, []);

  return (
    <Float
      speed={1.1}
      rotationIntensity={0.15}
      floatIntensity={0.35}
    >
      <group ref={groupRef}>

        {/* Central processor / controller core */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.95, 0.7, 0.95]} />
          <meshStandardMaterial
            color="#101827"
            emissive="#062c35"
            emissiveIntensity={1.5}
            metalness={0.65}
            roughness={0.28}
          />
        </mesh>

        {/* Core glow */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.7, 0.5, 0.7]} />
          <meshBasicMaterial
            color="#06b6d4"
            transparent
            opacity={0.12}
          />
        </mesh>

        {/* Helical signal paths */}
        {nodes.map((node, i) => {
          const color1 = i % 2 === 0 ? "#06b6d4" : "#a855f7";
          const color2 = i % 2 === 0 ? "#a855f7" : "#06b6d4";

          return (
            <group key={i}>

              {/* Left signal node */}
              <mesh position={[node.x1, node.y, node.z1]}>
                <sphereGeometry args={[0.075, 10, 10]} />
                <meshStandardMaterial
                  color={color1}
                  emissive={color1}
                  emissiveIntensity={2.5}
                />
              </mesh>

              {/* Right signal node */}
              <mesh position={[node.x2, node.y, node.z2]}>
                <sphereGeometry args={[0.075, 10, 10]} />
                <meshStandardMaterial
                  color={color2}
                  emissive={color2}
                  emissiveIntensity={2.5}
                />
              </mesh>

              {/* Signal bridge */}
              {i % 3 === 0 && (
                <mesh
                  position={[
                    (node.x1 + node.x2) / 2,
                    node.y,
                    (node.z1 + node.z2) / 2,
                  ]}
                  rotation={[0, node.angle, 0]}
                >
                  <boxGeometry
                    args={[
                      1.75,
                      0.014,
                      0.014,
                    ]}
                  />

                  <meshBasicMaterial
                    color="#ffffff"
                    transparent
                    opacity={0.13}
                  />
                </mesh>
              )}
            </group>
          );
        })}

        {/* Circuit board style vertical rails */}
        <mesh position={[-1.28, 0, 0]}>
          <boxGeometry args={[0.025, 5.1, 0.025]} />
          <meshBasicMaterial
            color="#06b6d4"
            transparent
            opacity={0.35}
          />
        </mesh>

        <mesh position={[1.28, 0, 0]}>
          <boxGeometry args={[0.025, 5.1, 0.025]} />
          <meshBasicMaterial
            color="#a855f7"
            transparent
            opacity={0.35}
          />
        </mesh>

        {/* Small floating components */}
        {[
          [-1.6, 1.55, 0.25],
          [1.55, -1.15, 0.3],
          [-1.5, -1.55, -0.2],
          [1.55, 1.6, -0.25],
        ].map((position, index) => (
          <mesh key={index} position={position as [number, number, number]}>
            <boxGeometry args={[0.18, 0.18, 0.18]} />
            <meshStandardMaterial
              color={index % 2 === 0 ? "#06b6d4" : "#a855f7"}
              emissive={index % 2 === 0 ? "#06b6d4" : "#a855f7"}
              emissiveIntensity={1.8}
              metalness={0.5}
              roughness={0.3}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

/* ============================================================
   DATA
   ============================================================ */

const STATS = [
  {
    value: "6+",
    label: "Months Experience",
  },
  {
    value: "4+",
    label: "Engineering Projects",
  },
  {
    value: "5+",
    label: "MCU Families",
  },
  {
    value: "2",
    label: "PCB Platforms",
  },
];

const EXPERTISE = [
  "Embedded Systems",
  "PCB Design",
  "Analog Electronics",
  "Digital Electronics",
  "STM32",
  "ESP32",
  "AVR / ATmega",
  "PIC",
  "RS485",
  "UART",
  "SPI",
  "I²C",
  "Industrial Controllers",
  "Low Power Design",
  "SolidWorks",
  "Firmware Development",
];

/* ============================================================
   COMPONENT
   ============================================================ */

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.82, 1],
    [0, 1, 1, 0]
  );

  const helixX = useTransform(
    scrollYProgress,
    [0, 1],
    [25, -25]
  );

  const helixRotate = useTransform(
    scrollYProgress,
    [0, 1],
    [-4, 4]
  );

  return (
    <section
      ref={containerRef}
      className="
        relative
        w-full
        overflow-hidden
        py-20
        sm:py-24
        lg:py-28
        px-4
        sm:px-6
        lg:px-8
      "
    >
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          -top-32
          left-0
          w-72
          h-72
          sm:w-96
          sm:h-96
          rounded-full
          bg-cyan-500/8
          blur-[110px]
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
          sm:w-96
          sm:h-96
          rounded-full
          bg-purple-500/8
          blur-[110px]
        "
      />

      <motion.div
        style={{ opacity }}
        className="relative max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 md:gap-16 lg:gap-20 items-center">

          {/* ==================================================
              LEFT SIDE
          ================================================== */}

          <div className="w-full min-w-0">

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              className="
                text-[9px]
                sm:text-[10px]
                font-mono
                text-cyan-400
                uppercase
                tracking-[0.35em]
                sm:tracking-[0.45em]
                mb-5
              "
            >
              Engineering Profile
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: 0.1 }}
              className="
                text-5xl
                sm:text-6xl
                md:text-7xl
                lg:text-7xl
                xl:text-8xl
                font-black
                text-white
                tracking-[-0.05em]
                uppercase
                leading-[0.9]
                mb-8
              "
            >
              Hardware
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-500">
                Meets Code
              </span>
            </motion.h2>

            {/* Intro */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: 0.2 }}
              className="
                space-y-4
                text-white/50
                text-sm
                sm:text-[15px]
                leading-[1.8]
                mb-10
                max-w-2xl
              "
            >
              <p>
                I'm Matheesha Nadiranga De Silva, an Electronic Engineer
                focused on building practical embedded and electronic
                systems from the hardware level to firmware.
              </p>

              <p>
                My work spans analog and digital electronics, custom PCB
                development, microcontroller firmware, communication
                interfaces, industrial controller design, and low-power
                embedded systems.
              </p>

              <p>
                I currently work as an{" "}
                <span className="text-cyan-300 font-medium">
                  Electronic Engineer at Iconic Devices
                </span>{" "}
                while following a Pearson HND in Mechatronics.
              </p>
            </motion.div>

            {/* ==================================================
                STATS
            ================================================== */}

            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-10">
              {STATS.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    delay: 0.28 + index * 0.08,
                  }}
                  className="
                    min-w-0
                    p-4
                    sm:p-5
                    bg-white/[0.03]
                    border
                    border-white/[0.08]
                    rounded-2xl
                    hover:border-cyan-400/25
                    hover:bg-white/[0.045]
                    transition-all
                    duration-300
                  "
                >
                  <div className="
                    text-2xl
                    sm:text-3xl
                    font-black
                    text-transparent
                    bg-clip-text
                    bg-gradient-to-r
                    from-cyan-400
                    to-purple-500
                    mb-1
                  ">
                    {stat.value}
                  </div>

                  <div className="
                    text-[8px]
                    sm:text-[10px]
                    font-mono
                    text-white/30
                    uppercase
                    tracking-[0.18em]
                    sm:tracking-[0.25em]
                    leading-relaxed
                  ">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* ==================================================
                EXPERTISE
            ================================================== */}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: 0.45 }}
              className="flex flex-wrap gap-2"
            >
              {EXPERTISE.map((item, index) => (
                <motion.span
                  key={item}
                  initial={{
                    opacity: 0,
                    scale: 0.85,
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
                    delay: 0.45 + index * 0.035,
                  }}
                  className="
                    max-w-full
                    px-3
                    sm:px-4
                    py-1.5
                    bg-white/[0.035]
                    border
                    border-white/[0.08]
                    rounded-full
                    text-[9px]
                    sm:text-[10px]
                    font-mono
                    text-white/40
                    uppercase
                    tracking-wider
                    hover:border-cyan-500/30
                    hover:text-cyan-400/80
                    transition-all
                    duration-300
                    cursor-default
                  "
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>

          </div>

          {/* ==================================================
              RIGHT SIDE — 3D
          ================================================== */}

          <motion.div
            style={{
              x: helixX,
              rotate: helixRotate,
            }}
            className="
              relative
              w-full
              h-[360px]
              sm:h-[430px]
              md:h-[500px]
              lg:h-[560px]
              xl:h-[620px]
              min-w-0
              pointer-events-none
            "
          >
            {/* Glow behind object */}
            <div
              className="
                absolute
                inset-0
                rounded-full
                bg-cyan-500/5
                blur-[80px]
                pointer-events-none
              "
            />

            <Canvas
              dpr={[1, 1.5]}
              camera={{
                position: [0, 0, 6],
                fov: 45,
              }}
              gl={{
                alpha: true,
                antialias: true,
              }}
            >
              <ambientLight intensity={0.35} />

              <pointLight
                position={[4, 4, 5]}
                intensity={4}
                color="#06b6d4"
              />

              <pointLight
                position={[-4, -3, 4]}
                intensity={3}
                color="#a855f7"
              />

              <pointLight
                position={[0, 0, -4]}
                intensity={1.5}
                color="#ffffff"
              />

              <Suspense fallback={null}>
                <CircuitCore />

                <Stars
                  radius={8}
                  depth={5}
                  count={150}
                  factor={1.2}
                  saturation={0}
                  fade
                  speed={0.4}
                />
              </Suspense>

              <OrbitControls
                enableZoom={false}
                enablePan={false}
                enableRotate={false}
              />
            </Canvas>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}