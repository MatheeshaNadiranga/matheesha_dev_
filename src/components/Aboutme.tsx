import { motion, MotionConfig } from "framer-motion";
import { useState, useEffect } from "react";
import {
    User,
    Mail,
    Cpu,
    Terminal,
    Code,
    Sparkles,
    Briefcase,
    CircuitBoard,
    Wrench,
    Zap,
} from "lucide-react";

/* =========================================================
   CONTENT (edit text here, the layout adapts automatically)
========================================================= */

const ROLES = [
    "Software Engineer",
    "Embedded Systems Engineer",
    "Electronic Engineer",
    "PCB Design Engineer",
    "Industrial Controller Designer",
];

// Time each role stays on screen (milliseconds). Lower = faster.
const ROLE_INTERVAL_MS = 1800;

const STATS = [
    { value: "3 mo", label: "Industry internship" },
    { value: "5+", label: "Embedded platforms" },
    { value: "2", label: "Diploma programmes" },
];

const SKILL_TAGS = [
    { icon: Code, label: "Software Engineering", color: "text-cyan-400", featured: true },
    { icon: CircuitBoard, label: "PCB Design", color: "text-cyan-400", featured: false },
    { icon: Cpu, label: "Embedded Systems", color: "text-purple-400", featured: false },
    { icon: Zap, label: "Low Power", color: "text-yellow-400", featured: false },
    { icon: Wrench, label: "Industrial Control", color: "text-orange-400", featured: false },
    { icon: Terminal, label: "Firmware Development", color: "text-green-400", featured: false },
];

const PROFILE_DETAILS = [
    {
        icon: User,
        label: "Name",
        value: "Matheesha Nadiranga De Silva",
        href: "",
        note: "",
    },
    {
        icon: Mail,
        label: "Email",
        value: "matheeshanadiranga14@gmail.com",
        href: "mailto:matheeshanadiranga14@gmail.com",
        note: "",
    },
    {
        icon: Briefcase,
        label: "Experience",
        value: "Electronic Engineering Intern at Iconic Devices",
        href: "",
        note: "3-month internship · Completed",
    },
];

const EDUCATION = [
    {
        title: "Higher Diploma in Software Engineering",
        place: "ACPT, Sri Lanka",
        status: "Completed",
        dot: "bg-cyan-400",
    },
    {
        title: "Pearson HND in Mechatronics",
        place: "",
        status: "Currently Following",
        dot: "bg-purple-500",
    },
];

const EXPERTISE = [
    { title: "Software Engineering", detail: "Higher Diploma, ACPT", featured: true },
    { title: "Software Development", detail: "Firmware & Application Software", featured: true },
    { title: "Electronics", detail: "Analog & Digital Design", featured: false },
    { title: "PCB Design", detail: "Altium & KiCad", featured: false },
    { title: "Embedded Systems", detail: "STM32 · ESP32", featured: false },
    { title: "Microcontrollers", detail: "AVR · ATmega · PIC", featured: false },
    { title: "Communication", detail: "UART · SPI · I²C · RS485", featured: false },
    { title: "Industrial Systems", detail: "Controller & I/O Design", featured: false },
    { title: "Power Design", detail: "Low-Power Electronics", featured: false },
    { title: "Mechanical CAD", detail: "SolidWorks", featured: false },
];

/* =========================================================
   SHARED STYLES
========================================================= */

const CARD_CLASS =
    "w-full min-w-0 p-5 sm:p-6 lg:p-7 bg-white/[0.03] border border-white/10 transition-colors duration-300 rounded-3xl backdrop-blur-md shadow-lg";

const CARD_TITLE_CLASS =
    "text-[10px] font-bold uppercase tracking-[0.2em] sm:tracking-widest mb-5 sm:mb-6 text-gray-500 flex items-center gap-2";

const CARD_MOTION = {
    initial: { opacity: 0, y: 25 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
};

/* =========================================================
   ROLE ROTATOR
   Every role is stacked in the same grid cell, so the block is
   always as tall as the tallest role (even when it wraps to two
   lines). Only opacity and position animate, so nothing around
   it ever moves when the text changes.
========================================================= */

function Headline() {
    const [index, setIndex] = useState(0);
    const count = ROLES.length;
    const previous = (index - 1 + count) % count;

    // One timer per role. Clicking a dot changes `index`, which restarts it.
    useEffect(() => {
        const timer = setTimeout(
            () => setIndex((i) => (i + 1) % count),
            ROLE_INTERVAL_MS
        );
        return () => clearTimeout(timer);
    }, [index, count]);

    return (
        <div>
            <h1>
                <span
                    className="block font-bold tracking-tighter leading-[1.05]"
                    style={{ fontSize: "clamp(2.25rem, 1.3rem + 4vw, 4.5rem)" }}
                >
                    I am a
                </span>

                {/* Screen readers get the full list once, not every rotation */}
                <span className="sr-only">{ROLES.join(", ")}</span>

                <span
                    aria-hidden="true"
                    className="mt-2 sm:mt-3 grid grid-cols-1 select-none"
                >
                    {ROLES.map((role, i) => (
                        <motion.span
                            key={role}
                            initial={false}
                            animate={
                                i === index
                                    ? { opacity: 1, y: 0, transition: { duration: 0.25 } }
                                    : i === previous
                                    ? { opacity: 0, y: -14, transition: { duration: 0.2 } }
                                    : { opacity: 0, y: 14, transition: { duration: 0 } }
                            }
                            className="col-start-1 row-start-1 block justify-self-start pb-[0.12em] font-bold tracking-tight leading-[1.15] text-balance text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-500"
                            style={{
                                fontSize: "clamp(1.625rem, 1rem + 2.8vw, 3.25rem)",
                                willChange: "opacity, transform",
                            }}
                        >
                            {role}
                        </motion.span>
                    ))}
                </span>
            </h1>

            {/* Role selector */}
            <div
                className="mt-3 flex items-center gap-1.5"
                role="group"
                aria-label="Choose role"
            >
                {ROLES.map((role, i) => (
                    <button
                        key={role}
                        type="button"
                        onClick={() => setIndex(i)}
                        aria-label={`Show ${role}`}
                        aria-current={i === index ? "true" : undefined}
                        className="group px-0.5 py-2 focus-visible:outline-none"
                    >
                        <span
                            className={`block h-1 rounded-full transition-all duration-300 group-focus-visible:ring-2 group-focus-visible:ring-cyan-400 ${
                                i === index
                                    ? "w-8 bg-cyan-400"
                                    : "w-3 bg-white/20 group-hover:bg-white/40"
                            }`}
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}

/* =========================================================
   PAGE
========================================================= */

export default function AboutMe() {
    return (
        <MotionConfig reducedMotion="user">
            <section className="relative w-full overflow-x-clip bg-transparent px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-8 sm:pb-10 text-white">

                {/* ================= BACKGROUND GLOW (gradients, no blur filters) ================= */}

                <div
                    className="absolute top-[10%] left-[-10%] sm:left-[5%] w-80 h-80 sm:w-[28rem] sm:h-[28rem] lg:w-[36rem] lg:h-[36rem] rounded-full pointer-events-none -z-10"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(6, 182, 212, 0.14) 0%, rgba(6, 182, 212, 0) 70%)",
                    }}
                    aria-hidden="true"
                />

                <div
                    className="absolute bottom-[5%] right-[-10%] sm:right-[5%] w-80 h-80 sm:w-[28rem] sm:h-[28rem] lg:w-[36rem] lg:h-[36rem] rounded-full pointer-events-none -z-10"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(168, 85, 247, 0.14) 0%, rgba(168, 85, 247, 0) 70%)",
                    }}
                    aria-hidden="true"
                />

                {/* ================= MAIN CONTAINER ================= */}

                <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-start lg:items-center">

                    {/* ===================== LEFT SIDE ===================== */}

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-7 w-full min-w-0 space-y-7 sm:space-y-8"
                    >
                        <div>
                            <p className="text-cyan-400 font-mono tracking-[0.15em] sm:tracking-[0.25em] uppercase text-[10px] sm:text-xs leading-relaxed mb-4 flex items-start gap-2">
                                <Sparkles size={13} className="shrink-0 mt-[0.2em]" aria-hidden="true" />
                                Electronic + Embedded + Software Engineering Profile
                            </p>

                            <Headline />
                        </div>

                        {/* Description */}
                        <div className="space-y-4 max-w-2xl">
                            <p className="text-gray-300/85 text-base sm:text-lg leading-relaxed font-light">
                                I am a Software Engineer who also designs
                                electronics. I build
                                <span className="text-cyan-300 font-medium">
                                    {" "}firmware, embedded software, industrial
                                    controllers, and the custom PCBs they run on.
                                </span>
                            </p>

                            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                                I completed a
                                <span className="text-gray-200 font-medium">
                                    {" "}Higher Diploma in Software Engineering at ACPT, Sri Lanka
                                </span>
                                , and I combine it with electronics, hardware
                                architecture, PCB design, industrial communication,
                                low-power design, and mechanical engineering to
                                develop practical real-world products.
                            </p>

                            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                                I completed a 3-month internship as an
                                <span className="text-gray-200 font-medium">
                                    {" "}Electronic Engineering Intern at Iconic Devices
                                </span>
                                , with hands-on experience across STM32, ESP32,
                                AVR, ATmega, PIC and other embedded platforms.
                            </p>
                        </div>

                        {/* Quick facts */}
                        <div className="grid grid-cols-3 gap-2.5 sm:gap-4 max-w-xl">
                            {STATS.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-3 sm:px-4 sm:py-4"
                                >
                                    <p className="text-xl sm:text-2xl font-bold text-white leading-none">
                                        {stat.value}
                                    </p>
                                    <p className="mt-1.5 text-[10px] sm:text-xs text-gray-400 leading-snug">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Skill tags */}
                        <ul
                            aria-label="Skills"
                            className="flex flex-wrap gap-2.5 sm:gap-3"
                        >
                            {SKILL_TAGS.map((tag) => (
                                <li
                                    key={tag.label}
                                    className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full border text-[10px] sm:text-xs font-mono transition-colors ${
                                        tag.featured
                                            ? "bg-cyan-400/10 border-cyan-400/30 hover:bg-cyan-400/20"
                                            : "bg-white/5 border-white/10 hover:bg-white/10"
                                    }`}
                                >
                                    <tag.icon
                                        size={14}
                                        className={`${tag.color} shrink-0`}
                                        aria-hidden="true"
                                    />
                                    {tag.label}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* ===================== RIGHT SIDE ===================== */}
                    {/* 1 column on phones, 2 on tablets, stacked beside the intro on desktop */}

                    <div className="lg:col-span-5 w-full min-w-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5 sm:gap-6">

                        {/* ---------- Profile ---------- */}
                        <motion.div
                            {...CARD_MOTION}
                            transition={{ delay: 0.1, duration: 0.6 }}
                            className={`${CARD_CLASS} hover:border-cyan-400/30`}
                        >
                            <h3 className={CARD_TITLE_CLASS}>
                                <span aria-hidden="true" className="w-5 sm:w-6 h-px shrink-0 bg-cyan-500" />
                                Profile
                            </h3>

                            <ul className="space-y-5 sm:space-y-6">
                                {PROFILE_DETAILS.map((item) => (
                                    <li
                                        key={item.label}
                                        className="flex items-start gap-3 sm:gap-4 min-w-0"
                                    >
                                        <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center shrink-0 bg-white/5 rounded-xl text-cyan-400 border border-white/10">
                                            <item.icon size={18} aria-hidden="true" />
                                        </div>

                                        <div className="min-w-0 flex-1">
                                            <p className="text-[9px] uppercase tracking-[0.15em] sm:tracking-widest text-gray-500 leading-none mb-1.5">
                                                {item.label}
                                            </p>

                                            {item.href ? (
                                                <a
                                                    href={item.href}
                                                    className="block text-sm sm:text-base font-medium text-gray-200 leading-relaxed [overflow-wrap:anywhere] hover:text-cyan-300 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 rounded-sm"
                                                >
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <p className="text-sm sm:text-base font-medium text-gray-200 leading-relaxed [overflow-wrap:anywhere]">
                                                    {item.value}
                                                </p>
                                            )}

                                            {item.note ? (
                                                <p className="mt-1 text-[11px] sm:text-xs text-gray-500 leading-relaxed">
                                                    {item.note}
                                                </p>
                                            ) : null}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* ---------- Education ---------- */}
                        <motion.div
                            {...CARD_MOTION}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className={`${CARD_CLASS} hover:border-purple-400/30`}
                        >
                            <h3 className={CARD_TITLE_CLASS}>
                                <span aria-hidden="true" className="w-5 sm:w-6 h-px shrink-0 bg-purple-500" />
                                Education
                            </h3>

                            <ol className="space-y-6">
                                {EDUCATION.map((item) => (
                                    <li
                                        key={item.title}
                                        className="relative pl-5 sm:pl-6 border-l border-white/10"
                                    >
                                        <span
                                            aria-hidden="true"
                                            className={`absolute -left-[4.5px] top-1.5 w-2 h-2 rounded-full ${item.dot}`}
                                        />

                                        <h4 className="text-gray-200 font-semibold text-sm sm:text-base leading-tight">
                                            {item.title}
                                        </h4>

                                        {item.place ? (
                                            <p className="mt-1 text-xs sm:text-sm text-gray-400">
                                                {item.place}
                                            </p>
                                        ) : null}

                                        <p className="mt-1.5 text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider">
                                            {item.status}
                                        </p>
                                    </li>
                                ))}
                            </ol>
                        </motion.div>

                        {/* ---------- Technical expertise ---------- */}
                        <motion.div
                            {...CARD_MOTION}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className={`${CARD_CLASS} hover:border-cyan-400/30 md:col-span-2 lg:col-span-1`}
                        >
                            <h3 className={CARD_TITLE_CLASS}>
                                <span aria-hidden="true" className="w-5 sm:w-6 h-px shrink-0 bg-cyan-500" />
                                Technical Expertise
                            </h3>

                            <ul className="grid grid-cols-1 min-[420px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-3">
                                {EXPERTISE.map((item) => (
                                    <li
                                        key={item.title}
                                        className={`min-w-0 rounded-xl border p-3 ${
                                            item.featured
                                                ? "border-cyan-400/25 bg-cyan-400/[0.06]"
                                                : "border-white/5 bg-white/[0.02]"
                                        }`}
                                    >
                                        <p
                                            className={`text-xs sm:text-sm font-medium ${
                                                item.featured ? "text-cyan-300" : "text-gray-300"
                                            }`}
                                        >
                                            {item.title}
                                        </p>

                                        <p className="text-[11px] sm:text-xs text-gray-500 mt-1 leading-relaxed">
                                            {item.detail}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>
        </MotionConfig>
    );
}