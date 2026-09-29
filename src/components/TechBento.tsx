"use client";

import { motion } from "framer-motion";
import {
  CircuitBoard,
  Cpu,
  Code2,
  Radio,
  Zap,
  Factory,
  Box,
  Settings2,
  Gauge,
  Wrench,
  Layers,
} from "lucide-react";

export default function TechBento() {
  const categories = [
    {
      title: "Electronics",
      icon: CircuitBoard,
      skills: [
        "Analog Design",
        "Digital Design",
        "Signal Conditioning",
        "Sensor Interfaces",
      ],
      color: "text-cyan-400",
      glow: "hover:border-cyan-400/30",
    },

    {
      title: "Embedded Systems",
      icon: Cpu,
      skills: [
        "STM32",
        "ESP32",
        "AVR / ATmega",
        "PIC",
      ],
      color: "text-purple-400",
      glow: "hover:border-purple-400/30",
    },

    {
      title: "Firmware",
      icon: Code2,
      skills: [
        "Embedded C",
        "C++",
        "Firmware Development",
        "Debugging",
      ],
      color: "text-blue-400",
      glow: "hover:border-blue-400/30",
    },

    {
      title: "Communication",
      icon: Radio,
      skills: [
        "UART",
        "SPI",
        "I²C",
        "RS485",
      ],
      color: "text-sky-400",
      glow: "hover:border-sky-400/30",
    },

    {
      title: "PCB Design",
      icon: Layers,
      skills: [
        "Altium Designer",
        "KiCad",
        "Schematic Design",
        "PCB Layout",
      ],
      color: "text-orange-400",
      glow: "hover:border-orange-400/30",
    },

    {
      title: "Industrial",
      icon: Factory,
      skills: [
        "Industrial I/O",
        "Controller Design",
        "0–10V",
        "4–20mA",
      ],
      color: "text-emerald-400",
      glow: "hover:border-emerald-400/30",
    },

    {
      title: "Power Systems",
      icon: Zap,
      skills: [
        "Low Power Design",
        "Power Electronics",
        "Power Supplies",
        "MPPT Concepts",
      ],
      color: "text-yellow-400",
      glow: "hover:border-yellow-400/30",
    },

    {
      title: "CAD & Hardware",
      icon: Box,
      skills: [
        "SolidWorks",
        "Enclosure Design",
        "3D Printing",
        "Hardware Prototyping",
      ],
      color: "text-pink-400",
      glow: "hover:border-pink-400/30",
    },

    {
      title: "Instrumentation",
      icon: Gauge,
      skills: [
        "Oscilloscope",
        "Multimeter",
        "Logic Analysis",
        "Hardware Debugging",
      ],
      color: "text-indigo-400",
      glow: "hover:border-indigo-400/30",
    },

    {
      title: "Engineering Tools",
      icon: Settings2,
      skills: [
        "STM32CubeIDE",
        "VS Code",
        "Git",
        "GitHub",
      ],
      color: "text-violet-400",
      glow: "hover:border-violet-400/30",
    },

    {
      title: "IoT Systems",
      icon: Radio,
      skills: [
        "Wi-Fi",
        "IoT Devices",
        "Wireless Systems",
        "Cloud Connectivity",
      ],
      color: "text-teal-400",
      glow: "hover:border-teal-400/30",
    },

    {
      title: "Control Systems",
      icon: Wrench,
      skills: [
        "Motor Control",
        "BLDC Concepts",
        "Automation",
        "System Integration",
      ],
      color: "text-red-400",
      glow: "hover:border-red-400/30",
    },
  ];

  return (
    <section
      className="
                relative
                w-full
                overflow-hidden
                py-16
                sm:py-20
                lg:py-24
                px-4
                sm:px-6
                lg:px-8
                lg:pl-28
            "
    >
      {/* =====================================================
                BACKGROUND GLOW
            ===================================================== */}

      <div
        className="
                    pointer-events-none
                    absolute
                    top-20
                    left-1/4
                    w-72
                    h-72
                    sm:w-96
                    sm:h-96
                    rounded-full
                    bg-cyan-500/5
                    blur-[110px]
                "
      />

      <div
        className="
                    pointer-events-none
                    absolute
                    bottom-0
                    right-1/4
                    w-72
                    h-72
                    sm:w-96
                    sm:h-96
                    rounded-full
                    bg-purple-500/5
                    blur-[110px]
                "
      />

      <div className="relative max-w-7xl mx-auto">

        {/* =================================================
                    HEADER
                ================================================= */}

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
          className="mb-10 sm:mb-12 lg:mb-14"
        >
          <p
            className="
                            text-[9px]
                            sm:text-[10px]
                            font-mono
                            uppercase
                            tracking-[0.3em]
                            sm:tracking-[0.45em]
                            text-cyan-400
                            mb-4
                        "
          >
            Core Competencies
          </p>

          <h2
            className="
                            text-4xl
                            sm:text-5xl
                            md:text-6xl
                            lg:text-7xl
                            font-black
                            tracking-[-0.05em]
                            text-white
                            leading-[0.95]
                        "
          >
            Technical{" "}

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
              Stack.
            </span>
          </h2>

          <p
            className="
                            mt-5
                            max-w-2xl
                            text-sm
                            sm:text-base
                            text-white/35
                            leading-relaxed
                        "
          >
            A multidisciplinary engineering stack combining
            electronic hardware, embedded firmware, PCB
            development, industrial interfaces, power systems,
            and mechanical design.
          </p>
        </motion.div>

        {/* =================================================
                    BENTO GRID
                ================================================= */}

        <div
          className="
                        grid
                        grid-cols-1
                        sm:grid-cols-2
                        lg:grid-cols-4
                        gap-4
                        sm:gap-5
                    "
        >
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
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
                  amount: 0.1,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -6,
                }}
                className={`
                                    relative
                                    min-h-[200px]
                                    sm:min-h-[220px]
                                    p-6
                                    sm:p-7
                                    bg-white/[0.025]
                                    border
                                    border-white/[0.08]
                                    rounded-[1.75rem]
                                    sm:rounded-[2rem]
                                    backdrop-blur-xl
                                    overflow-hidden
                                    group
                                    transition-all
                                    duration-300
                                    ${category.glow}
                                    hover:bg-white/[0.045]
                                `}
              >
                {/* Inner glow */}

                <div
                  className={`
                                        absolute
                                        -top-16
                                        -right-16
                                        w-36
                                        h-36
                                        rounded-full
                                        blur-[70px]
                                        opacity-0
                                        group-hover:opacity-20
                                        transition-opacity
                                        duration-500
                                        bg-current
                                        ${category.color}
                                    `}
                />

                {/* Icon */}

                <div
                  className={`
                                        relative
                                        w-12
                                        h-12
                                        rounded-2xl
                                        bg-white/[0.04]
                                        border
                                        border-white/[0.08]
                                        flex
                                        items-center
                                        justify-center
                                        mb-6
                                        ${category.color}
                                        group-hover:scale-110
                                        transition-transform
                                        duration-300
                                    `}
                >
                  <Icon size={23} />
                </div>

                {/* Number */}

                <div
                  className="
                                        absolute
                                        top-6
                                        right-6
                                        text-[9px]
                                        font-mono
                                        tracking-widest
                                        text-white/15
                                    "
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Title */}

                <h3
                  className="
                                        text-base
                                        sm:text-lg
                                        font-bold
                                        text-white
                                        tracking-tight
                                        mb-4
                                    "
                >
                  {category.title}
                </h3>

                {/* Skills */}

                <div className="flex flex-wrap gap-2">
                  {category.skills.map(
                    (skill) => (
                      <span
                        key={skill}
                        className="
                                                    px-2.5
                                                    py-1.5
                                                    rounded-full
                                                    bg-white/[0.035]
                                                    border
                                                    border-white/[0.06]
                                                    text-[8px]
                                                    sm:text-[9px]
                                                    font-mono
                                                    uppercase
                                                    tracking-wider
                                                    text-white/35
                                                    group-hover:text-white/55
                                                    transition-colors
                                                "
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>

                {/* Bottom accent */}

                <div
                  className={`
                                        absolute
                                        bottom-0
                                        left-0
                                        w-0
                                        h-px
                                        group-hover:w-full
                                        transition-all
                                        duration-500
                                        ${category.color.replace(
                    "text-",
                    "bg-"
                  )}
                                    `}
                />
              </motion.div>
            );
          })}
        </div>

        {/* =================================================
                    BOTTOM LABEL
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
          transition={{
            delay: 0.3,
          }}
          className="
                        mt-8
                        sm:mt-10
                        flex
                        flex-wrap
                        justify-center
                        gap-x-4
                        gap-y-2
                        text-[8px]
                        sm:text-[9px]
                        font-mono
                        uppercase
                        tracking-[0.18em]
                        text-white/20
                    "
        >
          <span>Hardware</span>
          <span className="text-cyan-500/30">•</span>

          <span>Firmware</span>
          <span className="text-cyan-500/30">•</span>

          <span>PCB</span>
          <span className="text-cyan-500/30">•</span>

          <span>Industrial</span>
          <span className="text-cyan-500/30">•</span>

          <span>IoT</span>
          <span className="text-cyan-500/30">•</span>

          <span>Power</span>
          <span className="text-cyan-500/30">•</span>

          <span>Automation</span>
        </motion.div>

      </div>
    </section>
  );
}