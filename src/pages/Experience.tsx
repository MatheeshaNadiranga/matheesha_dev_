import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  CheckCircle2,
  Zap,
  Cpu,
  CircuitBoard,
  GraduationCap,
  
} from "lucide-react";

const TIMELINE = [
  {
    year: "2026 - Present",
    title: "Electronic Engineer",
    company: "Iconic Devices",
    icon: Briefcase,
    color: "cyan",
    description:
      "Working on practical electronics and embedded-system development, including PCB design, embedded firmware, hardware integration, industrial controller development, interface design, testing, and debugging.",
    tags: [
      "Embedded Systems",
      "PCB Design",
      "STM32",
      "ESP32",
      "Analog Design",
      "Digital Design",
      "Industrial I/O",
      "Firmware",
    ],
  },

  {
    year: "2026 - Present",
    title: "Pearson HND in Mechatronics",
    company: "Pearson",
    icon: GraduationCap,
    color: "purple",
    description:
      "Following a Higher National Diploma in Mechatronics while developing practical knowledge across electronics, embedded systems, control, instrumentation, electrical systems, and mechanical engineering.",
    tags: [
      "Electronics",
      "Embedded Systems",
      "Control Systems",
      "Mechatronics",
      "Instrumentation",
      "Engineering",
    ],
  },

  {
    year: "2026 - Present",
    title: "Software Engineering Higher Diploma",
    company: "ACPT Sri Lanka",
    icon: Cpu,
    color: "blue",
    description:
      "Developing software engineering foundations with emphasis on programming, databases, application development, software architecture, and practical project development.",
    tags: [
      "Java",
      "React",
      "JavaScript",
      "MySQL",
      "REST APIs",
      "Software Engineering",
    ],
  },

  {
    year: "Ongoing",
    title: "Embedded & Electronics Projects",
    company: "Personal Engineering Projects",
    icon: CircuitBoard,
    color: "emerald",
    description:
      "Designing and developing independent electronics and embedded projects including industrial controllers, display interfaces, communication systems, low-power designs, motor-control concepts, wireless audio hardware, and custom PCB prototypes.",
    tags: [
      "Altium",
      "KiCad",
      "STM32",
      "ESP32",
      "AVR",
      "PIC",
      "RS485",
      "UART",
      "SPI",
      "I²C",
    ],
  },
];

function getColorClasses(color: string) {
  switch (color) {
    case "purple":
      return {
        text: "text-purple-400",
        border: "border-purple-500",
        bg: "bg-purple-500",
        softBg: "bg-purple-500/10",
        softBorder: "border-purple-500/20",
        shadow: "shadow-[0_0_15px_rgba(168,85,247,0.5)]",
      };

    case "blue":
      return {
        text: "text-blue-400",
        border: "border-blue-500",
        bg: "bg-blue-500",
        softBg: "bg-blue-500/10",
        softBorder: "border-blue-500/20",
        shadow: "shadow-[0_0_15px_rgba(59,130,246,0.5)]",
      };

    case "emerald":
      return {
        text: "text-emerald-400",
        border: "border-emerald-500",
        bg: "bg-emerald-500",
        softBg: "bg-emerald-500/10",
        softBorder: "border-emerald-500/20",
        shadow: "shadow-[0_0_15px_rgba(16,185,129,0.5)]",
      };

    default:
      return {
        text: "text-cyan-400",
        border: "border-cyan-500",
        bg: "bg-cyan-500",
        softBg: "bg-cyan-500/10",
        softBorder: "border-cyan-500/20",
        shadow: "shadow-[0_0_15px_rgba(6,182,212,0.5)]",
      };
  }
}

export default function Experience() {
  return (
    <section
      id="experience"
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
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          top-0
          left-0
          w-72
          h-72
          sm:w-96
          sm:h-96
          bg-cyan-500/5
          blur-[110px]
          rounded-full
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
          bg-purple-500/5
          blur-[110px]
          rounded-full
        "
      />

      <div className="relative max-w-5xl mx-auto">

        {/* ===================================================
            HEADER
        =================================================== */}

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
            mb-12
            sm:mb-16
            lg:mb-20
            text-center
          "
        >
          <p
            className="
              text-[9px]
              sm:text-[10px]
              font-mono
              tracking-[0.3em]
              sm:tracking-[0.4em]
              text-cyan-400
              uppercase
              mb-4
            "
          >
            Engineering Journey
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
            Timeline{" "}

            <span className="text-white/25">
              &
            </span>{" "}

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
              Experience.
            </span>
          </h1>

          <p
            className="
              max-w-2xl
              mx-auto
              mt-5
              text-sm
              sm:text-base
              text-white/35
              leading-relaxed
            "
          >
            A progression from engineering education to
            practical electronics, embedded systems,
            firmware, PCB development, and real-world
            product engineering.
          </p>
        </motion.div>

        {/* ===================================================
            TIMELINE
        =================================================== */}

        <div
          className="
            relative
            ml-3
            sm:ml-5
            md:ml-8
            space-y-8
            sm:space-y-10
            lg:space-y-12
            border-l
            border-white/10
          "
        >
          {TIMELINE.map((item, index) => {
            const colors = getColorClasses(
              item.color
            );

            const Icon = item.icon;

            return (
              <motion.div
                key={`${item.title}-${index}`}
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
                  amount: 0.15,
                }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.55,
                }}
                className="
                  relative
                  pl-7
                  sm:pl-10
                  md:pl-12
                "
              >
                {/* =================================================
                    TIMELINE DOT
                ================================================= */}

                <div
                  className={`
                    absolute
                    -left-[7px]
                    sm:-left-[8px]
                    top-5
                    w-3
                    h-3
                    sm:w-4
                    sm:h-4
                    rounded-full
                    bg-stone-950
                    border-2
                    ${colors.border}
                    transition-all
                    duration-300
                    group-hover:scale-125
                    ${colors.shadow}
                  `}
                />

                {/* =================================================
                    CARD
                ================================================= */}

                <motion.div
                  whileHover={{
                    y: -4,
                  }}
                  className="
                    group
                    relative
                    p-5
                    sm:p-6
                    md:p-8
                    bg-white/[0.025]
                    border
                    border-white/10
                    rounded-[1.5rem]
                    sm:rounded-[2rem]
                    backdrop-blur-xl
                    hover:border-white/20
                    transition-all
                    duration-300
                    overflow-hidden
                  "
                >

                  {/* Top accent */}

                  <div
                    className={`
                      absolute
                      top-0
                      left-0
                      w-0
                      h-px
                      group-hover:w-full
                      transition-all
                      duration-500
                      ${colors.bg}
                    `}
                  />

                  {/* =================================================
                      TOP ROW
                  ================================================= */}

                  <div
                    className="
                      flex
                      flex-col
                      gap-5
                      sm:flex-row
                      sm:items-start
                      sm:justify-between
                    "
                  >

                    {/* Title area */}

                    <div className="min-w-0">

                      <div
                        className="
                          flex
                          items-center
                          gap-3
                          mb-3
                        "
                      >
                        <div
                          className={`
                            w-9
                            h-9
                            sm:w-10
                            sm:h-10
                            rounded-xl
                            ${colors.softBg}
                            border
                            ${colors.softBorder}
                            flex
                            items-center
                            justify-center
                            ${colors.text}
                            shrink-0
                          `}
                        >
                          <Icon
                            size={18}
                          />
                        </div>

                        <div>
                          <p
                            className="
                              text-[8px]
                              sm:text-[9px]
                              font-mono
                              uppercase
                              tracking-[0.2em]
                              text-white/25
                              mb-1
                            "
                          >
                            Position
                          </p>

                          <h3
                            className="
                              text-lg
                              sm:text-xl
                              md:text-2xl
                              font-bold
                              text-white
                              leading-tight
                            "
                          >
                            {item.title}
                          </h3>
                        </div>
                      </div>

                      <p
                        className={`
                          text-xs
                          sm:text-sm
                          font-medium
                          flex
                          items-center
                          gap-2
                          ${colors.text}
                        `}
                      >
                        <Briefcase
                          size={13}
                        />

                        {item.company}
                      </p>
                    </div>

                    {/* Date */}

                    <div
                      className="
                        self-start
                        shrink-0
                        flex
                        items-center
                        gap-2
                        px-3
                        sm:px-4
                        py-1.5
                        bg-white/[0.035]
                        rounded-full
                        text-[8px]
                        sm:text-[10px]
                        font-mono
                        text-gray-400
                        border
                        border-white/5
                        whitespace-nowrap
                      "
                    >
                      <Calendar
                        size={13}
                      />

                      {item.year}
                    </div>
                  </div>

                  {/* =================================================
                      DESCRIPTION
                  ================================================= */}

                  <p
                    className="
                      mt-5
                      sm:mt-6
                      text-sm
                      sm:text-[15px]
                      text-gray-400
                      font-light
                      leading-[1.8]
                      max-w-3xl
                    "
                  >
                    {item.description}
                  </p>

                  {/* =================================================
                      TAGS
                  ================================================= */}

                  <div
                    className="
                      flex
                      flex-wrap
                      gap-2
                      mt-6
                    "
                  >
                    {item.tags.map(
                      (tag) => (
                        <span
                          key={tag}
                          className={`
                            px-2.5
                            sm:px-3
                            py-1
                            ${colors.softBg}
                            ${colors.text}
                            border
                            ${colors.softBorder}
                            rounded-lg
                            text-[8px]
                            sm:text-[9px]
                            font-mono
                            tracking-wider
                            uppercase
                          `}
                        >
                          #{tag}
                        </span>
                      )
                    )}
                  </div>

                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* ===================================================
            CLOSING ACHIEVEMENT BOX
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.97,
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
            duration: 0.6,
          }}
          className="
            mt-12
            sm:mt-16
            p-5
            sm:p-7
            md:p-8
            bg-gradient-to-r
            from-cyan-500/10
            to-purple-500/10
            border
            border-white/10
            rounded-[1.5rem]
            sm:rounded-[2rem]
            flex
            flex-col
            sm:flex-row
            sm:items-center
            gap-5
            sm:gap-6
          "
        >

          {/* Icon */}

          <div
            className="
              w-12
              h-12
              sm:w-14
              sm:h-14
              shrink-0
              bg-cyan-500/10
              border
              border-cyan-500/20
              rounded-2xl
              flex
              items-center
              justify-center
              text-cyan-400
            "
          >
            <Zap
              size={25}
            />
          </div>

          {/* Content */}

          <div className="min-w-0 flex-1">

            <p
              className="
                text-[8px]
                sm:text-[9px]
                font-mono
                uppercase
                tracking-[0.2em]
                text-cyan-400/60
                mb-1
              "
            >
              Current Direction
            </p>

            <h4
              className="
                text-lg
                sm:text-xl
                font-bold
                text-white
                mb-2
              "
            >
              Building Deeper Engineering Experience
            </h4>

            <p
              className="
                text-xs
                sm:text-sm
                text-gray-400
                leading-relaxed
              "
            >
              Continuing to strengthen practical skills in
              embedded systems, PCB design, industrial
              electronics, firmware development, power
              management, and complete hardware-system
              integration.
            </p>

          </div>

          {/* Status */}

          <div
            className="
              self-start
              sm:self-auto
              shrink-0
              flex
              items-center
              gap-2
              text-[8px]
              sm:text-[9px]
              font-bold
              uppercase
              tracking-widest
              text-emerald-400
              bg-emerald-500/10
              px-3
              sm:px-4
              py-2
              rounded-full
              border
              border-emerald-500/10
            "
          >
            <CheckCircle2
              size={14}
            />

            Active
          </div>

        </motion.div>

      </div>
    </section>
  );
}