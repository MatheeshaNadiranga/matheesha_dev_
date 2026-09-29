import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Github,
  ExternalLink,
  Code2,
  Search,
  CircuitBoard,
  ArrowUpRight,
} from "lucide-react";

import {
  DETAILED_PROJECTS,
  type Projects,
} from "@/data/projects";

const PROJECTS: Projects[] = DETAILED_PROJECTS;

const CATEGORIES = [
  "All",
  "Electronics",
  "Software",
];

/* ============================================================
   HELPERS
============================================================ */

function getProjectIcon(category: string) {
  return category === "Software"
    ? Code2
    : CircuitBoard;
}

function getCategoryStyle(category: string) {
  if (category === "Software") {
    return {
      icon: "bg-purple-500/10 text-purple-400",
      hover: "hover:border-purple-500/30",
    };
  }

  return {
    icon: "bg-cyan-500/10 text-cyan-400",
    hover: "hover:border-cyan-500/30",
  };
}

function getStatusStyle(status?: string) {
  const value = status?.toLowerCase() ?? "";

  if (
    value.includes("complete") ||
    value.includes("finished")
  ) {
    return {
      dot: "bg-emerald-500",
      text: "text-emerald-400",
    };
  }

  if (value.includes("prototype")) {
    return {
      dot: "bg-cyan-500",
      text: "text-cyan-400",
    };
  }

  return {
    dot: "bg-orange-500",
    text: "text-orange-400",
  };
}

/* ============================================================
   COMPONENT
============================================================ */

export default function DetailedProjects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(
      (project) =>
        filter === "All" ||
        project.category === filter
    );
  }, [filter]);

  return (
    <section
      id="projects"
      className="
        relative
        w-full
        min-h-[100dvh]
        overflow-hidden
        bg-transparent
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
      {/* Background */}

      <div
        className="
          pointer-events-none
          absolute
          top-0
          right-0
          w-[400px]
          h-[400px]
          sm:w-[500px]
          sm:h-[500px]
          bg-cyan-500/5
          blur-[120px]
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
          blur-[120px]
          rounded-full
          -z-10
        "
      />

      <div className="relative max-w-7xl mx-auto">

        {/* ==================================================
            HEADER
        ================================================== */}

        <div
          className="
            flex
            flex-col
            md:flex-row
            md:items-end
            md:justify-between
            gap-7
            mb-10
            sm:mb-14
            lg:mb-16
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <p
              className="
                text-[9px]
                sm:text-[10px]
                font-mono
                tracking-[0.3em]
                sm:tracking-[0.4em]
                text-purple-400
                uppercase
                mb-3
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
                text-white
                leading-[0.95]
              "
            >
              My{" "}
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
                Work.
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
              Selected electronics, embedded systems,
              PCB, firmware, industrial control, and
              software engineering projects.
            </p>
          </motion.div>

          {/* ==================================================
              FILTER
          ================================================== */}

          <div
            className="
              flex
              w-full
              md:w-auto
              overflow-x-auto
              p-1
              bg-white/[0.035]
              rounded-2xl
              border
              border-white/10
              backdrop-blur-md
            "
          >
            {CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() =>
                  setFilter(category)
                }
                className={`
                  shrink-0
                  px-4
                  sm:px-5
                  md:px-6
                  py-2
                  sm:py-2.5
                  rounded-xl
                  text-[10px]
                  sm:text-xs
                  font-medium
                  transition-all
                  duration-300

                  ${
                    filter === category
                      ? "bg-cyan-500 text-black shadow-[0_0_20px_rgba(6,182,212,0.35)]"
                      : "text-gray-400 hover:text-white"
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Count */}

        <div
          className="
            flex
            items-center
            justify-between
            mb-6
            text-[8px]
            sm:text-[9px]
            font-mono
            uppercase
            tracking-[0.2em]
            text-white/20
          "
        >
          <span>
            {filteredProjects.length} Projects
          </span>

          <span className="hidden sm:block">
            Hardware • Firmware • Software
          </span>
        </div>

        {/* ==================================================
            PROJECT GRID
        ================================================== */}

        <motion.div
          layout
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-5
            sm:gap-6
            lg:gap-8
          "
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map(
              (project, index) => {
                const Icon =
                  getProjectIcon(
                    project.category
                  );

                const style =
                  getCategoryStyle(
                    project.category
                  );

                const status =
                  getStatusStyle(
                    project.status
                  );

                const hasGithub =
                  typeof project.github ===
                    "string" &&
                  project.github.trim().length > 0;

                const hasDemo =
                  typeof project.demo ===
                    "string" &&
                  project.demo.trim().length > 0;

                const key =
                  project.id ??
                  `project-${index}`;

                return (
                  <motion.article
                    key={key}
                    layout
                    initial={{
                      opacity: 0,
                      scale: 0.94,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.94,
                      y: 20,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className={`
                      group
                      relative
                      flex
                      flex-col
                      min-w-0
                      p-6
                      sm:p-8
                      bg-white/[0.025]
                      border
                      border-white/10
                      rounded-[1.75rem]
                      sm:rounded-[2.25rem]
                      backdrop-blur-xl
                      overflow-hidden
                      transition-all
                      duration-500
                      ${style.hover}
                      hover:bg-white/[0.045]
                      shadow-2xl
                    `}
                  >

                    {/* Top */}

                    <div
                      className="
                        flex
                        items-start
                        justify-between
                        gap-4
                        mb-6
                      "
                    >
                      <div
                        className={`
                          w-11
                          h-11
                          sm:w-12
                          sm:h-12
                          rounded-2xl
                          flex
                          items-center
                          justify-center
                          shrink-0
                          transition-transform
                          duration-500
                          group-hover:scale-110
                          ${style.icon}
                        `}
                      >
                        <Icon size={22} />
                      </div>

                      <div
                        className="
                          flex
                          items-center
                          gap-2
                        "
                      >
                        <span
                          className={`
                            text-[8px]
                            sm:text-[9px]
                            font-mono
                            uppercase
                            tracking-wider
                            ${status.text}
                          `}
                        >
                          {project.status ??
                            "Project"}
                        </span>

                        <span
                          className={`
                            w-1.5
                            h-1.5
                            rounded-full
                            ${status.dot}
                          `}
                        />
                      </div>
                    </div>

                    {/* Title */}

                    <h3
                      className="
                        text-xl
                        sm:text-2xl
                        font-bold
                        text-white
                        leading-tight
                        tracking-tight
                        mb-3
                        group-hover:text-cyan-400
                        transition-colors
                      "
                    >
                      {project.title}
                    </h3>

                    {/* Category */}

                    <p
                      className="
                        text-[8px]
                        sm:text-[9px]
                        uppercase
                        tracking-[0.2em]
                        text-white/20
                        font-mono
                        mb-5
                      "
                    >
                      {project.category}
                    </p>

                    {/* Description */}

                    <p
                      className="
                        text-sm
                        text-gray-400
                        leading-[1.8]
                        font-light
                        mb-7
                        flex-grow
                      "
                    >
                      {project.description}
                    </p>

                    {/* Tech */}

                    <div
                      className="
                        flex
                        flex-wrap
                        gap-2
                        mb-7
                      "
                    >
                      {project.tech.map(
                        (technology, techIndex) => (
                          <span
                            key={`${technology}-${techIndex}`}
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
                              text-gray-300
                            "
                          >
                            {technology}
                          </span>
                        )
                      )}
                    </div>

                    {/* Links */}

                    {(hasGithub ||
                      hasDemo) && (
                      <div
                        className="
                          flex
                          flex-wrap
                          items-center
                          gap-5
                          border-t
                          border-white/5
                          pt-5
                        "
                      >
                        {hasGithub && (
                          <a
                            href={project.github!}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                              inline-flex
                              items-center
                              gap-2
                              text-xs
                              sm:text-sm
                              text-gray-400
                              hover:text-white
                              transition-colors
                            "
                          >
                            <Github size={16} />
                            Source
                            <ArrowUpRight
                              size={13}
                            />
                          </a>
                        )}

                        {hasDemo && (
                          <a
                            href={project.demo!}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                              inline-flex
                              items-center
                              gap-2
                              text-xs
                              sm:text-sm
                              text-gray-400
                              hover:text-cyan-400
                              transition-colors
                            "
                          >
                            <ExternalLink
                              size={16}
                            />
                            Demo
                            <ArrowUpRight
                              size={13}
                            />
                          </a>
                        )}
                      </div>
                    )}

                    {/* No links */}

                    {!hasGithub &&
                      !hasDemo && (
                        <div
                          className="
                            flex
                            items-center
                            gap-2
                            border-t
                            border-white/5
                            pt-5
                            mt-auto
                            text-[8px]
                            sm:text-[9px]
                            font-mono
                            uppercase
                            tracking-[0.15em]
                            text-white/20
                          "
                        >
                          <CircuitBoard
                            size={13}
                            className="text-cyan-500/40"
                          />

                          Engineering Project
                        </div>
                      )}

                    {/* Hover glow */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        -bottom-24
                        -right-24
                        w-48
                        h-48
                        bg-cyan-500/10
                        blur-[80px]
                        rounded-full
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                        duration-700
                      "
                    />

                  </motion.article>
                );
              }
            )}
          </AnimatePresence>
        </motion.div>

        {/* ==================================================
            EMPTY STATE
        ================================================== */}

        {filteredProjects.length === 0 && (
          <div
            className="
              flex
              flex-col
              items-center
              justify-center
              py-20
              text-gray-500
            "
          >
            <Search
              size={44}
              className="mb-4 opacity-20"
            />

            <p className="text-sm">
              No projects found in this
              category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}