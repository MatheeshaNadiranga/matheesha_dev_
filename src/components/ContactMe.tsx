
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Youtube,
  Twitter,
  Instagram,
  Facebook,
  MessageCircle,
  Send,
  Mail,
  ArrowUpRight,
  CircuitBoard,
  Cpu,
  Zap,
} from "lucide-react";

import { contact } from "../data/social_links";

/* ============================================================
   CONTACT DATA
   ============================================================ */

const whatsappNumber = contact.whatsapp;
const githubURL = contact.github;
const linkedinURL = contact.linkedin;
const twitterURL = contact.twitter;
const facebookURL = contact.facebook;

const instagramURL = "";
const youtubeURL = "";
const telegramURL = "";

/* ============================================================
   SOCIAL LINKS
   Empty links are automatically removed from the UI.
   ============================================================ */

const SOCIALS = [
  {
    name: "WhatsApp",
    icon: <MessageCircle size={22} />,
    link: whatsappNumber
      ? `https://wa.me/${whatsappNumber}`
      : "",
    color:
      "text-green-400 group-hover:bg-green-400/10",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin size={22} />,
    link: linkedinURL,
    color:
      "text-blue-400 group-hover:bg-blue-400/10",
  },
  {
    name: "GitHub",
    icon: <Github size={22} />,
    link: githubURL,
    color:
      "text-white group-hover:bg-white/10",
  },
  {
    name: "Telegram",
    icon: <Send size={22} />,
    link: telegramURL,
    color:
      "text-sky-400 group-hover:bg-sky-400/10",
  },
  {
    name: "Twitter / X",
    icon: <Twitter size={22} />,
    link: twitterURL,
    color:
      "text-white group-hover:bg-white/10",
  },
  {
    name: "Instagram",
    icon: <Instagram size={22} />,
    link: instagramURL,
    color:
      "text-pink-400 group-hover:bg-pink-400/10",
  },
  {
    name: "Facebook",
    icon: <Facebook size={22} />,
    link: facebookURL,
    color:
      "text-blue-500 group-hover:bg-blue-500/10",
  },
  {
    name: "YouTube",
    icon: <Youtube size={22} />,
    link: youtubeURL,
    color:
      "text-red-500 group-hover:bg-red-500/10",
  },
].filter((social) => Boolean(social.link));

/* ============================================================
   COMPONENT
   ============================================================ */

export default function ContactMe() {
  return (
    <section
      id="social"
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
      {/* ======================================================
          BACKGROUND GLOW
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[500px]
          sm:w-[700px]
          lg:w-[900px]
          h-[300px]
          sm:h-[400px]
          bg-cyan-500/5
          blur-[100px]
          sm:blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -top-32
          -right-32
          w-72
          h-72
          rounded-full
          bg-purple-500/10
          blur-[110px]
        "
      />

      {/* ======================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative max-w-6xl w-full mx-auto">

        {/* ====================================================
            HEADER
        ==================================================== */}

        <header className="mb-10 sm:mb-12 lg:mb-14">

          <motion.p
            initial={{
              opacity: 0,
              y: 10,
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
              duration: 0.5,
            }}
            className="
              text-cyan-400
              font-mono
              tracking-[0.3em]
              sm:tracking-[0.4em]
              uppercase
              text-[9px]
              sm:text-[10px]
              mb-4
            "
          >
            Communication Channel
          </motion.p>

          <motion.h2
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
              delay: 0.08,
            }}
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-extrabold
              tracking-[-0.05em]
              leading-[0.95]
              text-white
            "
          >
            Get in{" "}

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
              Touch.
            </span>
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 10,
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
              duration: 0.5,
              delay: 0.15,
            }}
            className="
              mt-5
              max-w-2xl
              text-sm
              sm:text-base
              text-white/40
              leading-relaxed
            "
          >
            Connect with me for electronics engineering,
            embedded systems, PCB design, firmware,
            industrial controller development, and
            hardware prototyping.
          </motion.p>
        </header>

        {/* ====================================================
            CONTACT GRID
        ==================================================== */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-3
            gap-5
            sm:gap-6
          "
        >

          {/* ==================================================
              DIRECT EMAIL CARD
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -25,
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
              duration: 0.6,
            }}
            className="
              relative
              lg:col-span-1
              w-full
              min-w-0
              p-6
              sm:p-8
              bg-white/[0.03]
              border
              border-white/10
              rounded-[1.75rem]
              sm:rounded-[2.25rem]
              backdrop-blur-xl
              flex
              flex-col
              justify-between
              overflow-hidden
              hover:border-cyan-400/25
              transition-colors
              duration-300
            "
          >

            {/* Card glow */}

            <div
              className="
                pointer-events-none
                absolute
                -top-24
                -left-24
                w-60
                h-60
                bg-cyan-500/10
                blur-[100px]
              "
            />

            <div className="relative">

              {/* Icon */}

              <div
                className="
                  w-11
                  h-11
                  sm:w-12
                  sm:h-12
                  bg-cyan-500/10
                  border
                  border-cyan-500/20
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  text-cyan-400
                  mb-5
                  sm:mb-6
                "
              >
                <Mail size={22} />
              </div>

              {/* Title */}

              <h3
                className="
                  text-xl
                  sm:text-2xl
                  font-bold
                  text-white
                  mb-2
                "
              >
                Direct Mail
              </h3>

              {/* Description */}

              <p
                className="
                  text-gray-400
                  text-sm
                  leading-relaxed
                  font-light
                  mb-6
                  sm:mb-8
                "
              >
                For professional inquiries, engineering
                projects, collaborations, and custom
                hardware development.
              </p>

              {/* Email */}

              <a
                href="mailto:matheeshanadiranga14@gmail.com"
                className="
                  inline-block
                  max-w-full
                  text-sm
                  sm:text-base
                  font-medium
                  text-white
                  hover:text-cyan-400
                  transition-colors
                  break-all
                  leading-relaxed
                "
              >
                matheeshanadiranga14@gmail.com
              </a>
            </div>

            {/* ==================================================
                ENGINEERING FOCUS
            ================================================== */}

            <div className="relative mt-10 sm:mt-12">

              <p
                className="
                  text-[8px]
                  sm:text-[9px]
                  font-mono
                  uppercase
                  tracking-[0.25em]
                  text-stone-500
                  mb-3
                "
              >
                Engineering Focus
              </p>

              <div className="grid grid-cols-3 gap-2 sm:gap-3">

                {/* PCB */}

                <div
                  className="
                    min-w-0
                    p-3
                    bg-white/[0.025]
                    border
                    border-white/[0.07]
                    rounded-xl
                    text-center
                  "
                >
                  <CircuitBoard
                    size={17}
                    className="
                      mx-auto
                      mb-2
                      text-cyan-400/70
                    "
                  />

                  <p
                    className="
                      text-[8px]
                      sm:text-[9px]
                      font-mono
                      uppercase
                      tracking-wider
                      text-white/35
                    "
                  >
                    PCB
                  </p>
                </div>

                {/* MCU */}

                <div
                  className="
                    min-w-0
                    p-3
                    bg-white/[0.025]
                    border
                    border-white/[0.07]
                    rounded-xl
                    text-center
                  "
                >
                  <Cpu
                    size={17}
                    className="
                      mx-auto
                      mb-2
                      text-purple-400/70
                    "
                  />

                  <p
                    className="
                      text-[8px]
                      sm:text-[9px]
                      font-mono
                      uppercase
                      tracking-wider
                      text-white/35
                    "
                  >
                    MCU
                  </p>
                </div>

                {/* Power */}

                <div
                  className="
                    min-w-0
                    p-3
                    bg-white/[0.025]
                    border
                    border-white/[0.07]
                    rounded-xl
                    text-center
                  "
                >
                  <Zap
                    size={17}
                    className="
                      mx-auto
                      mb-2
                      text-yellow-400/70
                    "
                  />

                  <p
                    className="
                      text-[8px]
                      sm:text-[9px]
                      font-mono
                      uppercase
                      tracking-wider
                      text-white/35
                    "
                  >
                    Power
                  </p>
                </div>

              </div>

              {/* Status */}

              <div
                className="
                  mt-4
                  sm:mt-5
                  p-3
                  sm:p-4
                  bg-cyan-500/5
                  border
                  border-cyan-500/10
                  rounded-2xl
                  text-center
                "
              >
                <p
                  className="
                    text-[8px]
                    sm:text-[9px]
                    font-mono
                    uppercase
                    tracking-[0.15em]
                    sm:tracking-[0.2em]
                    text-cyan-300/50
                  "
                >
                  Hardware + Firmware Engineering
                </p>
              </div>

            </div>
          </motion.div>

          {/* ==================================================
              SOCIAL NETWORK CARD
          ================================================== */}

          <motion.div
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
              amount: 0.15,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="
              lg:col-span-2
              w-full
              min-w-0
              p-6
              sm:p-8
              md:p-10
              bg-white/[0.03]
              border
              border-white/10
              rounded-[1.75rem]
              sm:rounded-[2.25rem]
              backdrop-blur-xl
              hover:border-purple-400/20
              transition-colors
              duration-300
            "
          >

            {/* Header */}

            <div
              className="
                flex
                flex-col
                sm:flex-row
                sm:items-center
                sm:justify-between
                gap-3
                mb-6
                sm:mb-8
              "
            >

              <h3
                className="
                  text-lg
                  sm:text-xl
                  font-bold
                  text-white
                  flex
                  items-center
                  gap-3
                "
              >
                <span
                  className="
                    w-2
                    h-2
                    bg-purple-500
                    rounded-full
                    animate-pulse
                    shrink-0
                  "
                />

                Social Network
              </h3>

              <p
                className="
                  text-[8px]
                  sm:text-[9px]
                  font-mono
                  uppercase
                  tracking-[0.2em]
                  text-white/20
                "
              >
                Find Me Online
              </p>

            </div>

            {/* Social Grid */}

            {SOCIALS.length > 0 ? (
              <div
                className="
                  grid
                  grid-cols-2
                  sm:grid-cols-3
                  lg:grid-cols-4
                  gap-3
                  sm:gap-4
                "
              >
                {SOCIALS.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit my ${social.name} profile`}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
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
                      delay: index * 0.05,
                    }}
                    whileHover={{
                      y: -5,
                      scale: 1.02,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    className="
                      relative
                      min-w-0
                      min-h-[120px]
                      sm:min-h-[135px]
                      flex
                      flex-col
                      items-center
                      justify-center
                      p-4
                      sm:p-5
                      bg-white/[0.035]
                      border
                      border-white/[0.07]
                      rounded-2xl
                      sm:rounded-3xl
                      transition-all
                      duration-300
                      hover:bg-white/[0.07]
                      hover:border-white/20
                      group
                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-cyan-400/60
                    "
                  >

                    {/* Icon background */}

                    <div
                      className={`
                        w-11
                        h-11
                        sm:w-12
                        sm:h-12
                        rounded-2xl
                        bg-white/[0.04]
                        flex
                        items-center
                        justify-center
                        ${social.color}
                        transition-all
                        duration-300
                      `}
                    >
                      {social.icon}
                    </div>

                    {/* Name */}

                    <span
                      className="
                        max-w-full
                        text-center
                        text-[8px]
                        sm:text-[9px]
                        uppercase
                        tracking-[0.12em]
                        sm:tracking-widest
                        text-gray-500
                        mt-3
                        sm:mt-4
                        font-bold
                        group-hover:text-white
                        transition-colors
                        break-words
                      "
                    >
                      {social.name}
                    </span>

                    {/* Arrow */}

                    <ArrowUpRight
                      size={12}
                      className="
                        absolute
                        top-3
                        right-3
                        sm:top-4
                        sm:right-4
                        text-gray-700
                        group-hover:text-white
                        transition-colors
                      "
                    />

                  </motion.a>
                ))}
              </div>
            ) : (
              <div
                className="
                  p-8
                  rounded-2xl
                  bg-white/[0.02]
                  border
                  border-white/[0.06]
                  text-center
                "
              >
                <p className="text-sm text-white/30">
                  Social profiles coming soon.
                </p>
              </div>
            )}

          </motion.div>
        </div>

        {/* ====================================================
            FOOTER
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 0.5,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            mt-12
            sm:mt-14
            lg:mt-16
            text-center
            text-[8px]
            sm:text-xs
            font-mono
            tracking-[0.15em]
            sm:tracking-widest
            uppercase
            text-gray-500
            leading-relaxed
          "
        >
          Designed & Built by Matheesha Nadiranga
          <span className="mx-2 text-white/10">{"//"}</span>
          Electronic & Embedded Engineering
          <span className="mx-2 text-white/10">{"//"}</span>
          2026
        </motion.div>

      </div>
    </section>
  );
}
