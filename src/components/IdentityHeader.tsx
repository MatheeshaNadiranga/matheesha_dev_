import { motion } from "framer-motion";
import {
  
  Cpu,
  Zap,
  Globe,
  CircuitBoard,
} from "lucide-react";

export default function IdentityHeader() {
  return (
    <header
      className="
        fixed
        top-0
        left-0
        right-0
        z-[100]
        px-3
        sm:px-4
        md:px-6
        pt-3
        sm:pt-4
        md:pt-6
        pointer-events-none
      "
    >
      <motion.div
        initial={{
          y: -20,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className="
          max-w-7xl
          mx-auto
          flex
          items-start
          justify-between
          gap-3
        "
      >

        {/* =====================================================
            IDENTITY PILL
        ===================================================== */}

        <div
          className="
            flex
            items-center
            gap-2
            sm:gap-3
            px-2.5
            sm:px-3
            md:px-4
            py-2
            sm:py-2.5
            bg-black/65
            backdrop-blur-2xl
            border
            border-white/10
            rounded-xl
            sm:rounded-2xl
            pointer-events-auto
            shadow-2xl
            min-w-0
            max-w-[calc(100vw-24px)]
            sm:max-w-none
          "
        >

          {/* Logo */}

          <div className="relative shrink-0">

            <div
              className="
                w-8
                h-8
                sm:w-9
                sm:h-9
                md:w-10
                md:h-10
                bg-gradient-to-br
                from-cyan-500
                to-purple-600
                rounded-lg
                sm:rounded-xl
                flex
                items-center
                justify-center
                text-white
                shadow-lg
              "
            >
              <CircuitBoard
                size={15}
                className="sm:w-[18px] sm:h-[18px] md:w-5 md:h-5"
              />
            </div>

            {/* Online indicator */}

            <div
              className="
                absolute
                -bottom-0.5
                -right-0.5
                w-2.5
                h-2.5
                bg-emerald-500
                border-2
                border-stone-950
                rounded-full
                animate-pulse
              "
            />

          </div>

          {/* Identity text */}

          <div className="flex flex-col min-w-0">

            <h1
              className="
                text-white
                font-bold
                tracking-tighter
                leading-none
                text-xs
                sm:text-sm
                md:text-base
                truncate
              "
            >
              Matheesha Nadiranga
            </h1>

            <p
              className="
                text-[6.5px]
                sm:text-[8px]
                md:text-[10px]
                font-mono
                text-cyan-400
                uppercase
                tracking-[0.12em]
                sm:tracking-widest
                mt-1
                flex
                items-center
                gap-1
                whitespace-nowrap
              "
            >
              <Cpu
                size={8}
                className="
                  sm:w-[10px]
                  sm:h-[10px]
                  md:w-3
                  md:h-3
                  shrink-0
                "
              />

              <span className="hidden sm:inline">
                Electronic &amp; Embedded Engineer
              </span>

              <span className="sm:hidden">
                Embedded Engineer
              </span>
            </p>

          </div>
        </div>

        {/* =====================================================
            SYSTEM STATUS
        ===================================================== */}

        <div
          className="
            hidden
            sm:flex
            lg:flex
            items-center
            gap-3
            lg:gap-4
            px-4
            lg:px-5
            py-2
            lg:py-2.5
            bg-white/[0.03]
            border
            border-white/10
            rounded-xl
            lg:rounded-2xl
            backdrop-blur-xl
            text-white/40
            font-mono
            text-[8px]
            lg:text-[10px]
            uppercase
            tracking-[0.15em]
            lg:tracking-[0.2em]
            pointer-events-auto
          "
        >

          {/* Location */}

          <div className="flex items-center gap-1.5 lg:gap-2">
            <Globe
              size={11}
              className="text-purple-500 shrink-0"
            />

            <span className="whitespace-nowrap">
              Galle, LK
            </span>
          </div>

          {/* Separator */}

          <div className="w-px h-3 bg-white/10" />

          {/* System status */}

          <div className="flex items-center gap-1.5 lg:gap-2">
            <Zap
              size={11}
              className="text-cyan-400 shrink-0"
            />

            <span className="whitespace-nowrap">
              System_Online
            </span>
          </div>

        </div>

        {/* =====================================================
            MOBILE STATUS INDICATOR
        ===================================================== */}

        <div
          className="
            sm:hidden
            flex
            items-center
            gap-1.5
            px-2.5
            py-2
            bg-black/60
            backdrop-blur-2xl
            border
            border-white/10
            rounded-xl
            pointer-events-auto
          "
        >
          <span
            className="
              w-1.5
              h-1.5
              rounded-full
              bg-emerald-400
              animate-pulse
            "
          />

          <span
            className="
              text-[7px]
              font-mono
              text-white/40
              uppercase
              tracking-wider
            "
          >
            Online
          </span>
        </div>

      </motion.div>
    </header>
  );
}
