
import { motion } from "framer-motion";
import {
  Globe,
  Wifi,
  Video,
  Clock,
  Zap,
  ShieldCheck,
  MapPin,
  CircuitBoard,
  Cpu,
  FileCode2,
} from "lucide-react";

export default function RemoteReady() {
  const stats = [
    {
      icon: <Wifi size={18} />,
      label: "Connectivity",
      value: "Reliable Internet",
    },
    {
      icon: <Clock size={18} />,
      label: "Timezone",
      value: "UTC +5:30",
    },
    {
      icon: <Video size={18} />,
      label: "Collaboration",
      value: "Sync & Async",
    },
    {
      icon: <ShieldCheck size={18} />,
      label: "Workflow",
      value: "Secure & Organized",
    },
  ];

  const capabilities = [
    {
      icon: <CircuitBoard size={15} />,
      text: "PCB Design",
    },
    {
      icon: <Cpu size={15} />,
      text: "Embedded Firmware",
    },
    {
      icon: <FileCode2 size={15} />,
      text: "Technical Documentation",
    },
  ];

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        px-4
        sm:px-6
        lg:px-8
        py-16
        sm:py-20
        lg:py-24
      "
    >
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[450px]
          sm:w-[600px]
          lg:w-[800px]
          h-[250px]
          sm:h-[300px]
          bg-emerald-500/5
          blur-[100px]
          sm:blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-32
          -left-32
          w-72
          h-72
          rounded-full
          bg-cyan-500/5
          blur-[100px]
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="max-w-6xl w-full mx-auto">

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
            duration: 0.6,
          }}
          className="
            relative
            w-full
            p-6
            sm:p-8
            md:p-10
            lg:p-12
            bg-white/[0.02]
            border
            border-white/10
            rounded-[1.75rem]
            sm:rounded-[2.25rem]
            backdrop-blur-xl
            overflow-hidden
            hover:border-emerald-400/20
            transition-colors
            duration-300
          "
        >

          {/* =================================================
              TOP CONTENT
          ================================================= */}

          <div
            className="
              flex
              flex-col
              lg:flex-row
              lg:items-center
              lg:justify-between
              gap-10
              lg:gap-14
            "
          >

            {/* =================================================
                LEFT CONTENT
            ================================================= */}

            <div className="min-w-0 flex-1">

              {/* Status */}

              <div
                className="
                  flex
                  items-center
                  gap-3
                  mb-5
                  sm:mb-6
                "
              >
                <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3 shrink-0">

                  <span
                    className="
                      animate-ping
                      absolute
                      inline-flex
                      h-full
                      w-full
                      rounded-full
                      bg-emerald-400
                      opacity-75
                    "
                  />

                  <span
                    className="
                      relative
                      inline-flex
                      rounded-full
                      h-2.5
                      w-2.5
                      sm:h-3
                      sm:w-3
                      bg-emerald-500
                    "
                  />

                </span>

                <span
                  className="
                    text-emerald-400
                    font-mono
                    text-[9px]
                    sm:text-[10px]
                    uppercase
                    tracking-[0.2em]
                    sm:tracking-[0.3em]
                  "
                >
                  Available for Remote Engineering
                </span>
              </div>

              {/* Heading */}

              <h2
                className="
                  text-3xl
                  sm:text-4xl
                  md:text-5xl
                  font-bold
                  tracking-[-0.04em]
                  leading-tight
                  text-white
                "
              >
                Remote Engineering{" "}

                <span className="text-white/35 italic">
                  Ready.
                </span>
              </h2>

              {/* Description */}

              <p
                className="
                  mt-5
                  max-w-2xl
                  text-sm
                  sm:text-base
                  text-gray-400
                  leading-relaxed
                  font-light
                "
              >
                I can collaborate remotely on electronics and
                embedded engineering projects including PCB
                design, firmware development, hardware
                debugging, controller design, and technical
                documentation.
              </p>

              {/* Location */}

              <div
                className="
                  flex
                  flex-wrap
                  items-center
                  gap-2
                  mt-5
                  text-xs
                  sm:text-sm
                  text-stone-500
                  font-mono
                "
              >
                <MapPin
                  size={14}
                  className="text-cyan-400 shrink-0"
                />

                <span>
                  Based in Galle, Sri Lanka
                </span>
              </div>

              {/* Capabilities */}

              <div
                className="
                  flex
                  flex-wrap
                  gap-2
                  mt-6
                "
              >
                {capabilities.map((item) => (
                  <div
                    key={item.text}
                    className="
                      flex
                      items-center
                      gap-2
                      px-3
                      py-2
                      rounded-full
                      bg-white/[0.03]
                      border
                      border-white/[0.07]
                      text-[8px]
                      sm:text-[9px]
                      font-mono
                      uppercase
                      tracking-wider
                      text-white/35
                    "
                  >
                    <span className="text-emerald-400/70">
                      {item.icon}
                    </span>

                    {item.text}
                  </div>
                ))}
              </div>

            </div>

            {/* =================================================
                STATS GRID
            ================================================= */}

            <div
              className="
                w-full
                lg:w-auto
                lg:min-w-[330px]
              "
            >
              <div
                className="
                  grid
                  grid-cols-2
                  gap-3
                  sm:gap-4
                "
              >

                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{
                      opacity: 0,
                      y: 15,
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
                      delay: 0.1 + index * 0.06,
                    }}
                    className="
                      min-w-0
                      p-4
                      sm:p-5
                      bg-white/[0.035]
                      border
                      border-white/[0.07]
                      rounded-2xl
                      hover:bg-white/[0.06]
                      hover:border-emerald-400/20
                      transition-all
                      duration-300
                      group
                    "
                  >

                    <div
                      className="
                        text-emerald-500
                        mb-2
                        group-hover:scale-110
                        transition-transform
                        duration-300
                      "
                    >
                      {stat.icon}
                    </div>

                    <p
                      className="
                        text-[8px]
                        sm:text-[9px]
                        uppercase
                        tracking-[0.15em]
                        sm:tracking-widest
                        text-stone-500
                        mb-1
                      "
                    >
                      {stat.label}
                    </p>

                    <p
                      className="
                        text-xs
                        sm:text-sm
                        font-semibold
                        text-gray-200
                        leading-relaxed
                      "
                    >
                      {stat.value}
                    </p>

                  </motion.div>
                ))}

              </div>
            </div>

          </div>

          {/* =================================================
              WORKFLOW BAR
          ================================================= */}

          <div
            className="
              mt-10
              sm:mt-12
              pt-7
              sm:pt-8
              border-t
              border-white/5
              flex
              flex-col
              lg:flex-row
              lg:items-center
              gap-5
              lg:gap-8
            "
          >

            {/* Global collaboration */}

            <div
              className="
                flex
                items-center
                gap-2
                text-[9px]
                sm:text-xs
                font-bold
                tracking-[0.15em]
                sm:tracking-widest
                text-white/50
                shrink-0
              "
            >
              <Globe
                size={15}
                className="text-purple-400"
              />

              GLOBAL COLLABORATION
            </div>

            {/* Divider */}

            <div
              className="
                hidden
                lg:block
                h-1
                w-1
                bg-white/20
                rounded-full
              "
            />

            {/* Workflow */}

            <div
              className="
                flex
                items-center
                gap-2
                text-[9px]
                sm:text-xs
                font-bold
                tracking-[0.15em]
                sm:tracking-widest
                text-white/50
                shrink-0
              "
            >
              <Zap
                size={15}
                className="text-cyan-400"
              />

              ENGINEERING WORKFLOW
            </div>

            {/* Divider */}

            <div
              className="
                hidden
                lg:block
                h-1
                w-1
                bg-white/20
                rounded-full
              "
            />

            {/* Tools */}

            <p
              className="
                text-[9px]
                sm:text-[10px]
                font-mono
                italic
                text-white/25
                leading-relaxed
              "
            >
              GitHub • Altium • KiCad • SolidWorks •
              STM32CubeIDE • VS Code • Remote Collaboration
            </p>

          </div>

          {/* =================================================
              DECORATIVE ACCENT
          ================================================= */}

          <div
            className="
              absolute
              top-0
              right-0
              p-3
              sm:p-4
              opacity-20
              pointer-events-none
            "
          >
            <div
              className="
                w-12
                h-12
                sm:w-16
                sm:h-16
                border-t-2
                border-r-2
                border-emerald-500
                rounded-tr-2xl
                sm:rounded-tr-3xl
              "
            />
          </div>

          <div
            className="
              absolute
              bottom-0
              left-0
              w-20
              sm:w-28
              h-px
              bg-gradient-to-r
              from-cyan-500/50
              to-transparent
            "
          />

        </motion.div>
      </div>
    </section>
  );
}
