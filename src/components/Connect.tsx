import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  MapPin,
  Send,
  Clock,
  ArrowRight,
  CheckCircle2,
  Mail,
  Cpu,
  CircuitBoard,
  Zap,
} from "lucide-react";

import { useState } from "react";

export default function Connect() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setIsSubmitting(true);

    try {
      const formData = new FormData(event.currentTarget);

      formData.append(
        "access_key",
        "YOUR_ACCESS_KEY_HERE"
      );

      formData.append(
        "subject",
        "New Engineering Project Inquiry"
      );

      formData.append(
        "from_name",
        "Matheesha Nadiranga De Silva Portfolio"
      );

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: json,
        }
      );

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        event.currentTarget.reset();
      } else {
        alert(
          "Message could not be sent. Please try again."
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);

      alert(
        "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="
        relative
        w-full
        overflow-hidden
        bg-transparent
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
          -top-32
          -left-32
          w-72
          h-72
          sm:w-96
          sm:h-96
          rounded-full
          bg-cyan-500/10
          blur-[110px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          -right-32
          w-72
          h-72
          sm:w-96
          sm:h-96
          rounded-full
          bg-purple-500/10
          blur-[110px]
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative max-w-7xl mx-auto">

        {/* Section Header */}

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
              text-cyan-400
              uppercase
              tracking-[0.35em]
              sm:tracking-[0.45em]
              mb-4
            "
          >
            Connect With Me
          </p>

          <h2
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-black
              text-white
              tracking-[-0.05em]
              leading-[0.95]
            "
          >
            Let's Build
            <br />

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
              Something Real.
            </span>
          </h2>
        </motion.div>

        {/* =====================================================
            MAIN GRID
        ===================================================== */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-6
            sm:gap-8
            lg:gap-10
            items-stretch
          "
        >

          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
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
              w-full
              min-w-0
              p-6
              sm:p-8
              md:p-10
              lg:p-12
              bg-white/[0.02]
              border
              border-white/10
              hover:border-cyan-400/20
              rounded-[1.75rem]
              sm:rounded-[2.25rem]
              backdrop-blur-xl
              flex
              flex-col
              justify-between
              overflow-hidden
            "
          >

            {/* Card Glow */}

            <div
              className="
                pointer-events-none
                absolute
                -top-24
                -left-24
                w-64
                h-64
                bg-cyan-500/10
                blur-[100px]
              "
            />

            <div className="relative">

              {/* Label */}

              <span
                className="
                  text-[9px]
                  sm:text-[10px]
                  font-bold
                  tracking-[0.3em]
                  sm:tracking-[0.4em]
                  uppercase
                  text-cyan-400
                  mb-4
                  block
                "
              >
                Engineering Base
              </span>

              {/* Heading */}

              <h3
                className="
                  text-3xl
                  sm:text-4xl
                  md:text-5xl
                  font-bold
                  text-white
                  tracking-tighter
                  leading-tight
                "
              >
                Based in{" "}

                <span className="text-white/30 italic">
                  Sri Lanka
                </span>
              </h3>

              {/* Intro */}

              <p
                className="
                  mt-5
                  max-w-xl
                  text-sm
                  sm:text-base
                  leading-relaxed
                  text-white/45
                "
              >
                Available for electronics engineering,
                embedded systems, PCB development,
                industrial controller design,
                firmware development, and hardware
                prototyping projects.
              </p>

              {/* =================================================
                  INFO
              ================================================= */}

              <div className="space-y-5 sm:space-y-6 mt-8">

                {/* Location */}

                <div className="flex items-start gap-3 sm:gap-4 group">

                  <div
                    className="
                      w-10
                      h-10
                      sm:w-11
                      sm:h-11
                      rounded-xl
                      bg-white/5
                      border
                      border-white/10
                      flex
                      items-center
                      justify-center
                      shrink-0
                      group-hover:border-cyan-500/50
                      transition-colors
                    "
                  >
                    <MapPin
                      size={19}
                      className="text-cyan-400"
                    />
                  </div>

                  <div className="min-w-0">
                    <p
                      className="
                        text-[8px]
                        sm:text-[9px]
                        uppercase
                        tracking-[0.2em]
                        text-stone-500
                        mb-1
                      "
                    >
                      Location
                    </p>

                    <p
                      className="
                        text-sm
                        sm:text-base
                        font-medium
                        text-white
                        break-words
                      "
                    >
                      Southern Province, Sri Lanka
                    </p>
                  </div>

                </div>

                {/* Time */}

                <div className="flex items-start gap-3 sm:gap-4 group">

                  <div
                    className="
                      w-10
                      h-10
                      sm:w-11
                      sm:h-11
                      rounded-xl
                      bg-white/5
                      border
                      border-white/10
                      flex
                      items-center
                      justify-center
                      shrink-0
                      group-hover:border-purple-500/50
                      transition-colors
                    "
                  >
                    <Clock
                      size={19}
                      className="text-purple-400"
                    />
                  </div>

                  <div className="min-w-0">
                    <p
                      className="
                        text-[8px]
                        sm:text-[9px]
                        uppercase
                        tracking-[0.2em]
                        text-stone-500
                        mb-1
                      "
                    >
                      Local Time
                    </p>

                    <p
                      className="
                        text-sm
                        sm:text-base
                        font-medium
                        text-white
                      "
                    >
                      UTC +5:30
                    </p>
                  </div>

                </div>

                {/* Email */}

                <div className="flex items-start gap-3 sm:gap-4 group">

                  <div
                    className="
                      w-10
                      h-10
                      sm:w-11
                      sm:h-11
                      rounded-xl
                      bg-white/5
                      border
                      border-white/10
                      flex
                      items-center
                      justify-center
                      shrink-0
                      group-hover:border-cyan-500/50
                      transition-colors
                    "
                  >
                    <Mail
                      size={19}
                      className="text-cyan-400"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p
                      className="
                        text-[8px]
                        sm:text-[9px]
                        uppercase
                        tracking-[0.2em]
                        text-stone-500
                        mb-1
                      "
                    >
                      Email
                    </p>

                    <p
                      className="
                        text-xs
                        sm:text-sm
                        font-medium
                        text-white
                        break-all
                      "
                    >
                      matheeshanadiranga14@gmail.com
                    </p>
                  </div>

                </div>

              </div>

              {/* =================================================
                  ENGINEERING SPECIALTIES
              ================================================= */}

              <div className="mt-8 sm:mt-10">

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
                  Available For
                </p>

                <div className="flex flex-wrap gap-2">

                  {[
                    "PCB Design",
                    "Embedded Systems",
                    "Industrial Controllers",
                    "Firmware",
                    "Electronics",
                    "Hardware Prototyping",
                  ].map((item, index) => (
                    <span
                      key={index}
                      className="
                        px-3
                        py-1.5
                        rounded-full
                        bg-white/[0.035]
                        border
                        border-white/[0.08]
                        text-[8px]
                        sm:text-[9px]
                        font-mono
                        uppercase
                        tracking-wider
                        text-white/40
                        hover:text-cyan-400/80
                        hover:border-cyan-500/30
                        transition-all
                      "
                    >
                      {item}
                    </span>
                  ))}

                </div>

              </div>

            </div>

            {/* =================================================
                ENGINEERING VISUAL
            ================================================= */}

            <div
              className="
                relative
                mt-10
                sm:mt-12
                h-36
                sm:h-40
                md:h-44
                w-full
                rounded-2xl
                bg-black/40
                border
                border-white/5
                overflow-hidden
              "
            >

              {/* Grid */}

              <div
                className="
                  absolute
                  inset-0
                  opacity-10
                "
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #fff 1px, transparent 1px)",
                  backgroundSize:
                    "22px 22px",
                }}
              />

              {/* Signal Line */}

              <motion.div
                animate={{
                  x: [
                    "-20%",
                    "120%",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  top-1/2
                  left-0
                  w-1/3
                  h-px
                  bg-cyan-400
                  shadow-[0_0_12px_#06b6d4]
                "
              />

              {/* Main Glow */}

              <motion.div
                animate={{
                  scale: [
                    1,
                    1.5,
                    1,
                  ],
                  opacity: [
                    0.2,
                    0.5,
                    0.2,
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  top-1/2
                  left-1/2
                  -translate-x-1/2
                  -translate-y-1/2
                  w-16
                  h-16
                  bg-cyan-500
                  rounded-full
                  blur-2xl
                "
              />

              {/* Core */}

              <div
                className="
                  absolute
                  top-1/2
                  left-1/2
                  -translate-x-1/2
                  -translate-y-1/2
                  w-3
                  h-3
                  bg-white
                  rounded-full
                  shadow-[0_0_15px_#fff]
                "
              />

              {/* Corner Icons */}

              <CircuitBoard
                size={20}
                className="
                  absolute
                  top-4
                  left-4
                  text-cyan-400/30
                "
              />

              <Cpu
                size={20}
                className="
                  absolute
                  bottom-4
                  right-4
                  text-purple-400/30
                "
              />

              <Zap
                size={16}
                className="
                  absolute
                  top-4
                  right-4
                  text-yellow-400/30
                "
              />

              <div
                className="
                  absolute
                  bottom-3
                  left-4
                  text-[8px]
                  sm:text-[9px]
                  font-mono
                  text-stone-600
                  uppercase
                  tracking-wider
                "
              >
                SYSTEM READY // HARDWARE + FIRMWARE
              </div>

            </div>

          </motion.div>

          {/* =================================================
              RIGHT SIDE — CONTACT FORM
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
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
              delay: 0.1,
            }}
            className="
              relative
              w-full
              min-w-0
              p-6
              sm:p-8
              md:p-10
              lg:p-12
              bg-white/[0.02]
              border
              border-white/10
              hover:border-purple-400/20
              rounded-[1.75rem]
              sm:rounded-[2.25rem]
              backdrop-blur-xl
              overflow-hidden
            "
          >

            {/* =================================================
                SUCCESS OVERLAY
            ================================================= */}

            <AnimatePresence>
              {isSuccess && (
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.95,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.95,
                  }}
                  className="
                    absolute
                    inset-0
                    z-20
                    flex
                    flex-col
                    items-center
                    justify-center
                    bg-stone-950/80
                    backdrop-blur-md
                    rounded-[1.75rem]
                    sm:rounded-[2.25rem]
                    text-center
                    p-6
                  "
                >

                  <div
                    className="
                      w-16
                      h-16
                      sm:w-20
                      sm:h-20
                      bg-emerald-500/20
                      border
                      border-emerald-500/50
                      rounded-full
                      flex
                      items-center
                      justify-center
                      mb-4
                      text-emerald-400
                    "
                  >
                    <CheckCircle2
                      size={34}
                      className="sm:w-10 sm:h-10"
                    />
                  </div>

                  <h3
                    className="
                      text-xl
                      sm:text-2xl
                      font-bold
                      text-white
                      mb-2
                    "
                  >
                    Transmission Received
                  </h3>

                  <p
                    className="
                      max-w-sm
                      text-stone-400
                      text-xs
                      sm:text-sm
                      leading-relaxed
                    "
                  >
                    Thanks for reaching out. Your message
                    has been received successfully and I'll
                    get back to you as soon as possible.
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      setIsSuccess(false)
                    }
                    className="
                      mt-6
                      text-[9px]
                      sm:text-xs
                      text-stone-500
                      underline
                      uppercase
                      tracking-[0.2em]
                      hover:text-white
                      transition-colors
                    "
                  >
                    Send Another Message
                  </button>

                </motion.div>
              )}
            </AnimatePresence>

            {/* =================================================
                FORM HEADER
            ================================================= */}

            <div className="mb-7 sm:mb-8">

              <h3
                className="
                  text-xl
                  sm:text-2xl
                  md:text-3xl
                  font-bold
                  text-white
                  mb-2
                  flex
                  items-center
                  gap-3
                "
              >
                Start a Project

                <Send
                  size={18}
                  className="
                    text-purple-400
                    sm:w-5
                    sm:h-5
                    shrink-0
                  "
                />
              </h3>

              <p
                className="
                  text-gray-400
                  text-xs
                  sm:text-sm
                  font-light
                  leading-relaxed
                  max-w-lg
                "
              >
                Have an electronics, embedded systems,
                PCB, industrial controller, or hardware
                prototyping project? Send me the details.
              </p>

            </div>

            {/* =================================================
                FORM
            ================================================= */}

            <form
              onSubmit={handleSubmit}
              className="space-y-4 sm:space-y-5"
            >

              {/* Name */}

              <div className="space-y-2">

                <label
                  htmlFor="name"
                  className="
                    block
                    text-[9px]
                    sm:text-[10px]
                    uppercase
                    tracking-[0.2em]
                    text-stone-500
                    ml-2
                  "
                >
                  Your Name
                </label>

                <input
                  id="name"
                  required
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  className="
                    w-full
                    min-w-0
                    bg-white/5
                    border
                    border-white/10
                    rounded-2xl
                    px-4
                    sm:px-6
                    py-3.5
                    sm:py-4
                    text-sm
                    sm:text-base
                    text-white
                    focus:outline-none
                    focus:border-cyan-500/50
                    focus:bg-white/[0.07]
                    transition-all
                    placeholder:text-stone-700
                  "
                />

              </div>

              {/* Email */}

              <div className="space-y-2">

                <label
                  htmlFor="email"
                  className="
                    block
                    text-[9px]
                    sm:text-[10px]
                    uppercase
                    tracking-[0.2em]
                    text-stone-500
                    ml-2
                  "
                >
                  Email Address
                </label>

                <input
                  id="email"
                  required
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="
                    w-full
                    min-w-0
                    bg-white/5
                    border
                    border-white/10
                    rounded-2xl
                    px-4
                    sm:px-6
                    py-3.5
                    sm:py-4
                    text-sm
                    sm:text-base
                    text-white
                    focus:outline-none
                    focus:border-cyan-500/50
                    focus:bg-white/[0.07]
                    transition-all
                    placeholder:text-stone-700
                  "
                />

              </div>

              {/* Project Type */}

              <div className="space-y-2">

                <label
                  htmlFor="project"
                  className="
                    block
                    text-[9px]
                    sm:text-[10px]
                    uppercase
                    tracking-[0.2em]
                    text-stone-500
                    ml-2
                  "
                >
                  Project Type
                </label>

                <select
                  id="project"
                  name="project"
                  defaultValue=""
                  className="
                    w-full
                    min-w-0
                    bg-white/5
                    border
                    border-white/10
                    rounded-2xl
                    px-4
                    sm:px-6
                    py-3.5
                    sm:py-4
                    text-sm
                    sm:text-base
                    text-white
                    focus:outline-none
                    focus:border-purple-500/50
                    transition-all
                    appearance-none
                  "
                >
                  <option
                    value=""
                    disabled
                    className="bg-stone-950"
                  >
                    Select a project type
                  </option>

                  <option
                    value="PCB Design"
                    className="bg-stone-950"
                  >
                    PCB Design
                  </option>

                  <option
                    value="Embedded Systems"
                    className="bg-stone-950"
                  >
                    Embedded Systems
                  </option>

                  <option
                    value="Industrial Controller"
                    className="bg-stone-950"
                  >
                    Industrial Controller
                  </option>

                  <option
                    value="Firmware Development"
                    className="bg-stone-950"
                  >
                    Firmware Development
                  </option>

                  <option
                    value="Electronics Design"
                    className="bg-stone-950"
                  >
                    Electronics Design
                  </option>

                  <option
                    value="Hardware Prototype"
                    className="bg-stone-950"
                  >
                    Hardware Prototype
                  </option>

                  <option
                    value="Other"
                    className="bg-stone-950"
                  >
                    Other
                  </option>
                </select>

              </div>

              {/* Message */}

              <div className="space-y-2">

                <label
                  htmlFor="message"
                  className="
                    block
                    text-[9px]
                    sm:text-[10px]
                    uppercase
                    tracking-[0.2em]
                    text-stone-500
                    ml-2
                  "
                >
                  Project Details
                </label>

                <textarea
                  id="message"
                  required
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project, requirements, hardware, MCU, PCB, or idea..."
                  className="
                    w-full
                    min-w-0
                    bg-white/5
                    border
                    border-white/10
                    rounded-2xl
                    px-4
                    sm:px-6
                    py-3.5
                    sm:py-4
                    text-sm
                    sm:text-base
                    leading-relaxed
                    text-white
                    focus:outline-none
                    focus:border-purple-500/50
                    focus:bg-white/[0.07]
                    transition-all
                    placeholder:text-stone-700
                    resize-none
                  "
                />

              </div>

              {/* Submit */}

              <button
                disabled={isSubmitting}
                type="submit"
                className="
                  w-full
                  group
                  relative
                  overflow-hidden
                  bg-white
                  text-black
                  font-black
                  uppercase
                  text-[9px]
                  sm:text-xs
                  tracking-[0.18em]
                  sm:tracking-widest
                  py-4
                  sm:py-5
                  px-4
                  rounded-2xl
                  transition-all
                  hover:bg-cyan-400
                  active:scale-[0.98]
                  disabled:opacity-50
                  disabled:cursor-not-allowed
                "
              >

                <span
                  className="
                    relative
                    z-10
                    flex
                    items-center
                    justify-center
                    gap-2
                  "
                >
                  {isSubmitting
                    ? "Processing..."
                    : "Initialize Transmission"}

                  <ArrowRight
                    size={15}
                    className="
                      sm:w-4
                      sm:h-4
                      group-hover:translate-x-1
                      transition-transform
                    "
                  />
                </span>

              </button>

              {/* Privacy / Response Note */}

              <p
                className="
                  text-center
                  text-[8px]
                  sm:text-[9px]
                  text-white/20
                  leading-relaxed
                  pt-1
                "
              >
                Your message will be sent securely.
                Please include enough technical detail
                for me to understand your requirements.
              </p>

            </form>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
