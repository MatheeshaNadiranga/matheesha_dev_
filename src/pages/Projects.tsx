import { useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  CircuitBoard,
  Cpu,
  ArrowUpRight,
} from "lucide-react";

import ProjectModal from "@/components/ProjectModal";
import {
  PROJECTS,
  type Project,
} from "@/data/projects";

function getCategoryIcon(category: string) {
  if (
    category.toLowerCase().includes("electronic") ||
    category.toLowerCase().includes("embedded")
  ) {
    return CircuitBoard;
  }

  return Cpu;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  return (
    <section
      id="selected-work"
      className="
        relative
        min-h-[100dvh]
        w-full
        overflow-hidden
        bg-transparent
        text-white
        pt-28
        sm:pt-32
        lg:pt-36
        pb-20
        sm:pb-28
        lg:pb-32
        px-4
        sm:px-6
        lg:px-12
        lg:pl-28
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          top-0
          right-0
          w-[350px]
          h-[350px]
          sm:w-[500px]
          sm:h-[500px]
          bg-cyan-500/5
          blur-[110px]
          sm:blur-[120px]
          rounded-full
          -z-10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          w-[350px]
          h-[350px]
          sm:w-[500px]
          sm:h-[500px]
          bg-purple-500/5
          blur-[110px]
          sm:blur-[120px]
          rounded-full
          -z-10
        "
      />

      <div className="relative max-w-7xl mx-auto">

        {/* =================================================
            HEADER
        ================================================= */}

        <header className="mb-10 sm:mb-14 lg:mb-16">

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
              Engineering Portfolio
            </p>

            <h1
              className="
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                font-black
                tracking-[-0.05em]
                leading-[0.95]
                text-white
              "
            >
              Selected{" "}

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
                Works.
              </span>
            </h1>

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
              A selection of electronics, embedded systems,
              PCB, firmware, IoT, industrial control, and
              software projects.
            </p>
          </motion.div>

        </header>

        {/* =================================================
            PROJECT GRID
        ================================================= */}

        <main
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-5
            sm:gap-7
            lg:gap-8
          "
        >
          {PROJECTS.map((project, index) => {
            const CategoryIcon =
              getCategoryIcon(
                project.category
              );

            const isElectronics =
              project.category
                .toLowerCase()
                .includes("electronic") ||
              project.category
                .toLowerCase()
                .includes("embedded");

            return (
              <motion.article
                key={`${project.title}-${index}`}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.12,
                }}
                transition={{
                  duration: 0.5,
                  delay: Math.min(index * 0.07, 0.35),
                }}
                whileHover={{
                  y: -6,
                }}
                onClick={() =>
                  setSelectedProject(project)
                }
                className="
                  group
                  relative
                  w-full
                  min-w-0
                  cursor-pointer
                  overflow-hidden
                  rounded-[1.75rem]
                  sm:rounded-[2.25rem]
                  border
                  border-white/10
                  bg-white/[0.025]
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:border-cyan-500/30
                  hover:bg-white/[0.045]
                  hover:shadow-[0_0_40px_-15px_rgba(6,182,212,0.2)]
                "
              >

                {/* =================================================
                    IMAGE
                ================================================= */}

                <div
                  className="
                    relative
                    aspect-[16/9]
                    overflow-hidden
                    bg-black/20
                  "
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  {/* Gradient */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/85
                      via-black/25
                      to-transparent
                    "
                  />

                  {/* Category badge */}

                  <div
                    className="
                      absolute
                      top-4
                      left-4
                      sm:top-5
                      sm:left-5
                      flex
                      items-center
                      gap-2
                      px-3
                      py-1.5
                      rounded-full
                      bg-black/50
                      border
                      border-white/10
                      backdrop-blur-md
                    "
                  >
                    <CategoryIcon
                      size={13}
                      className={
                        isElectronics
                          ? "text-cyan-400"
                          : "text-purple-400"
                      }
                    />

                    <span
                      className="
                        text-[8px]
                        sm:text-[9px]
                        font-mono
                        uppercase
                        tracking-wider
                        text-white/60
                      "
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Number */}

                  <div
                    className="
                      absolute
                      top-4
                      right-4
                      sm:top-5
                      sm:right-5
                      text-[8px]
                      sm:text-[9px]
                      font-mono
                      text-white/30
                      tracking-widest
                    "
                  >
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </div>
                </div>

                {/* =================================================
                    CONTENT
                ================================================= */}

                <div
                  className="
                    p-5
                    sm:p-7
                    md:p-8
                  "
                >

                  <div
                    className="
                      flex
                      items-start
                      justify-between
                      gap-4
                    "
                  >
                    <div className="min-w-0">

                      <p
                        className="
                          text-[8px]
                          sm:text-[9px]
                          font-mono
                          uppercase
                          tracking-[0.2em]
                          text-cyan-400/60
                          mb-2
                        "
                      >
                        Featured Project
                      </p>

                      <h3
                        className="
                          text-xl
                          sm:text-2xl
                          md:text-3xl
                          font-bold
                          tracking-tight
                          leading-tight
                          text-white
                          group-hover:text-cyan-300
                          transition-colors
                        "
                      >
                        {project.title}
                      </h3>

                    </div>

                    {/* Open icon */}

                    <div
                      className="
                        shrink-0
                        w-10
                        h-10
                        sm:w-11
                        sm:h-11
                        rounded-xl
                        sm:rounded-2xl
                        bg-white/[0.04]
                        border
                        border-white/10
                        flex
                        items-center
                        justify-center
                        text-white/40
                        group-hover:bg-cyan-500
                        group-hover:text-black
                        group-hover:border-cyan-500
                        transition-all
                        duration-300
                      "
                    >
                      <ExternalLink
                        size={17}
                      />
                    </div>

                  </div>

                  {/* Description */}

                  <p
                    className="
                      mt-5
                      text-sm
                      sm:text-[15px]
                      text-white/40
                      leading-[1.8]
                      font-light
                    "
                  >
                    {project.description}
                  </p>

                  {/* =================================================
                      TECH STACK
                  ================================================= */}

                  <div
                    className="
                      mt-6
                      flex
                      flex-wrap
                      gap-2
                    "
                  >
                    {project.tech
                      .slice(0, 6)
                      .map((technology) => (
                        <span
                          key={technology}
                          className="
                            px-2.5
                            sm:px-3
                            py-1
                            bg-white/[0.035]
                            border
                            border-white/[0.06]
                            rounded-lg
                            text-[8px]
                            sm:text-[9px]
                            font-mono
                            uppercase
                            tracking-wider
                            text-white/35
                          "
                        >
                          {technology}
                        </span>
                      ))}

                    {project.tech.length > 6 && (
                      <span
                        className="
                          px-2.5
                          sm:px-3
                          py-1
                          bg-white/[0.025]
                          border
                          border-white/[0.05]
                          rounded-lg
                          text-[8px]
                          sm:text-[9px]
                          font-mono
                          text-white/20
                        "
                      >
                        +{project.tech.length - 6}
                      </span>
                    )}
                  </div>

                  {/* Bottom line */}

                  <div
                    className="
                      mt-7
                      pt-5
                      border-t
                      border-white/5
                      flex
                      items-center
                      justify-between
                    "
                  >
                    <span
                      className="
                        text-[8px]
                        sm:text-[9px]
                        font-mono
                        uppercase
                        tracking-[0.15em]
                        text-white/20
                      "
                    >
                      View Project
                    </span>

                    <ArrowUpRight
                      size={14}
                      className="
                        text-white/20
                        group-hover:text-cyan-400
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                        transition-all
                      "
                    />
                  </div>

                </div>

                {/* =================================================
                    HOVER GLOW
                ================================================= */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -bottom-24
                    -right-24
                    w-48
                    h-48
                    rounded-full
                    bg-cyan-500/10
                    blur-[80px]
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-700
                  "
                />

              </motion.article>
            );
          })}
        </main>

        {/* =================================================
            FOOTER
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
            mt-12
            sm:mt-16
            text-center
            text-[8px]
            sm:text-[9px]
            font-mono
            uppercase
            tracking-[0.2em]
            text-white/15
          "
        >
          Hardware • Firmware • Software • Systems
        </motion.div>

      </div>

      {/* =====================================================
          PROJECT MODAL
      ===================================================== */}

      <ProjectModal
        project={selectedProject}
        onClose={() =>
          setSelectedProject(null)
        }
      />
    </section>
  );
}