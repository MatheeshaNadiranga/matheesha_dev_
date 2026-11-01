
"use client";

import { motion } from "framer-motion";

import {
    MessageCircle,
    Briefcase,
    Code2,
    Send,
    Globe,
    Users,
    ArrowUpRight,
    Mail,
    CircuitBoard,
    Cpu,
    type LucideIcon,
} from "lucide-react";

import { contact } from "../data/social_links";

/* ============================================================
   CONTACT DATA
============================================================ */

const EMAIL = "matheeshanadiranga14@gmail.com";

const whatsappNumber = String(
    contact.whatsapp ?? ""
).replace(/\D/g, "");

const githubURL = contact.github ?? "";
const linkedinURL = contact.linkedin ?? "";
const twitterURL = contact.twitter ?? "";
const facebookURL = contact.facebook ?? "";

/* ============================================================
   SOCIAL LINKS
============================================================ */

type SocialLink = {
    name: string;
    Icon: LucideIcon;
    link: string;
    color: string;
    hover: string;
};

const SOCIALS: SocialLink[] = [
    {
        name: "WhatsApp",
        Icon: MessageCircle,
        link: whatsappNumber
            ? `https://wa.me/${whatsappNumber}`
            : "",
        color: "text-green-400",
        hover: "hover:border-green-400/30 hover:bg-green-400/[0.05]",
    },
    {
        name: "LinkedIn",
        Icon: Briefcase,
        link: linkedinURL,
        color: "text-blue-400",
        hover: "hover:border-blue-400/30 hover:bg-blue-400/[0.05]",
    },
    {
        name: "GitHub",
        Icon: Code2,
        link: githubURL,
        color: "text-white",
        hover: "hover:border-white/25 hover:bg-white/[0.05]",
    },
    {
        name: "Twitter / X",
        Icon: Globe,
        link: twitterURL,
        color: "text-sky-400",
        hover: "hover:border-sky-400/30 hover:bg-sky-400/[0.05]",
    },
    {
        name: "Facebook",
        Icon: Users,
        link: facebookURL,
        color: "text-blue-500",
        hover: "hover:border-blue-500/30 hover:bg-blue-500/[0.05]",
    },
].filter((social) => Boolean(social.link.trim()));

/* ============================================================
   ENGINEERING FOCUS
============================================================ */

const ENGINEERING_FOCUS = [
    {
        title: "Electronics",
        subtitle: "Hardware",
        Icon: CircuitBoard,
        color: "text-cyan-400",
        background: "bg-cyan-400/[0.08]",
        border: "border-cyan-400/15",
    },
    {
        title: "Embedded",
        subtitle: "Firmware",
        Icon: Cpu,
        color: "text-purple-400",
        background: "bg-purple-400/[0.08]",
        border: "border-purple-400/15",
    },
    {
        title: "Software",
        subtitle: "Development",
        Icon: Code2,
        color: "text-blue-400",
        background: "bg-blue-400/[0.08]",
        border: "border-blue-400/15",
    },
];

/* ============================================================
   MAIN COMPONENT
============================================================ */

export default function ContactMe() {

    return (
        <section
            id="social"
            className="
                relative
                isolate
                w-full
                overflow-hidden

                px-4

                pt-16
                pb-4

                sm:px-6
                sm:pt-20
                sm:pb-6

                lg:px-8
                lg:pt-24
                lg:pb-8
            "
        >

            {/* =================================================
                BACKGROUND GLOW
            ================================================= */}

            <div
                className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-1/2
                    -z-10

                    h-[300px]
                    w-[300px]

                    -translate-x-1/2
                    -translate-y-1/2

                    rounded-full
                    bg-cyan-500/[0.05]
                    blur-[100px]

                    sm:h-[400px]
                    sm:w-[600px]

                    lg:h-[450px]
                    lg:w-[800px]
                    lg:blur-[120px]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    -right-24
                    -top-24
                    -z-10

                    h-72
                    w-72

                    rounded-full
                    bg-purple-500/[0.07]
                    blur-[110px]

                    sm:h-96
                    sm:w-96
                "
            />

            {/* =================================================
                MAIN CONTAINER
            ================================================= */}

            <div
                className="
                    relative
                    mx-auto
                    w-full
                    max-w-7xl
                "
            >

                {/* =================================================
                    HEADER
                ================================================= */}

                <header
                    className="
                        mb-10
                        sm:mb-12
                        lg:mb-14
                    "
                >

                    {/* EYEBROW */}

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
                            mb-4

                            font-mono
                            text-[9px]
                            uppercase
                            tracking-[0.3em]

                            text-cyan-400

                            sm:text-[10px]
                            sm:tracking-[0.4em]
                        "
                    >
                        Communication Channel
                    </motion.p>

                    {/* TITLE */}

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
                            font-extrabold
                            leading-[0.95]
                            tracking-[-0.05em]

                            text-white

                            sm:text-5xl
                            md:text-6xl
                            lg:text-7xl
                        "
                    >
                        Get in{" "}

                        <span
                            className="
                                bg-gradient-to-r
                                from-cyan-400
                                via-white
                                to-purple-500

                                bg-clip-text
                                text-transparent
                            "
                        >
                            Touch.
                        </span>
                    </motion.h2>

                    {/* DESCRIPTION */}

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

                            text-xs
                            leading-relaxed

                            text-white/40

                            sm:text-sm
                            md:text-base
                        "
                    >
                        Connect with me for electronics engineering,
                        embedded systems, software development,
                        PCB design, firmware, industrial automation,
                        and innovative technology projects.
                    </motion.p>

                </header>

                {/* =================================================
                    CONTACT GRID
                ================================================= */}

                <div
                    className="
                        grid
                        grid-cols-1
                        items-stretch

                        gap-4

                        sm:gap-5
                        lg:grid-cols-3
                        lg:gap-6
                    "
                >

                    {/* =================================================
                        DIRECT EMAIL CARD
                    ================================================= */}

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
                            flex
                            min-w-0
                            flex-col
                            justify-between
                            overflow-hidden

                            rounded-[1.75rem]
                            border
                            border-white/10

                            bg-white/[0.03]
                            p-6
                            backdrop-blur-xl

                            transition-colors
                            duration-300

                            hover:border-cyan-400/25

                            sm:rounded-[2.25rem]
                            sm:p-8

                            lg:col-span-1
                        "
                    >

                        {/* CARD GLOW */}

                        <div
                            className="
                                pointer-events-none
                                absolute
                                -left-24
                                -top-24

                                h-60
                                w-60

                                rounded-full
                                bg-cyan-500/[0.09]
                                blur-[100px]
                            "
                        />

                        {/* CARD CONTENT */}

                        <div className="relative">

                            {/* ICON */}

                            <div
                                className="
                                    mb-5
                                    flex
                                    h-12
                                    w-12
                                    items-center
                                    justify-center

                                    rounded-2xl
                                    border
                                    border-cyan-500/20
                                    bg-cyan-500/10

                                    text-cyan-400

                                    sm:mb-6
                                "
                            >
                                <Mail
                                    size={23}
                                    strokeWidth={1.7}
                                    aria-hidden="true"
                                />
                            </div>

                            {/* TITLE */}

                            <h3
                                className="
                                    mb-2
                                    text-xl
                                    font-bold
                                    text-white

                                    sm:text-2xl
                                "
                            >
                                Direct Mail
                            </h3>

                            {/* DESCRIPTION */}

                            <p
                                className="
                                    mb-6
                                    text-sm
                                    font-light
                                    leading-relaxed
                                    text-gray-400

                                    sm:mb-8
                                "
                            >
                                For professional inquiries,
                                engineering projects, software
                                development, collaborations,
                                and custom hardware solutions.
                            </p>

                            {/* EMAIL ADDRESS */}

                            <a
                                href={`mailto:${EMAIL}`}
                                className="
                                    inline-flex
                                    max-w-full
                                    items-center
                                    gap-2

                                    break-all
                                    text-xs
                                    font-medium
                                    leading-relaxed
                                    text-white

                                    transition-colors
                                    hover:text-cyan-400

                                    focus:outline-none
                                    focus-visible:ring-2
                                    focus-visible:ring-cyan-400/60

                                    sm:text-sm
                                "
                            >
                                {EMAIL}

                                <ArrowUpRight
                                    size={15}
                                    className="shrink-0"
                                    aria-hidden="true"
                                />
                            </a>

                        </div>

                        {/* =================================================
                            ENGINEERING FOCUS
                        ================================================= */}

                        <div
                            className="
                                relative
                                mt-10

                                sm:mt-12

                                lg:mt-14
                            "
                        >

                            <p
                                className="
                                    mb-3

                                    font-mono
                                    text-[8px]
                                    uppercase
                                    tracking-[0.25em]

                                    text-stone-500

                                    sm:text-[9px]
                                "
                            >
                                Engineering Focus
                            </p>

                            {/* FOCUS GRID */}

                            <div
                                className="
                                    grid
                                    grid-cols-3
                                    gap-2

                                    sm:gap-3
                                "
                            >
                                {ENGINEERING_FOCUS.map((item) => {
                                    const Icon = item.Icon;

                                    return (
                                        <div
                                            key={item.title}
                                            className={`
                                                flex
                                                min-w-0
                                                flex-col
                                                items-center
                                                justify-center

                                                rounded-xl
                                                border
                                                p-2.5

                                                text-center

                                                sm:p-3

                                                ${item.background}
                                                ${item.border}
                                            `}
                                        >

                                            <Icon
                                                size={19}
                                                strokeWidth={1.7}
                                                className={`
                                                    mb-2
                                                    ${item.color}
                                                `}
                                                aria-hidden="true"
                                            />

                                            <p
                                                className="
                                                    text-[8px]
                                                    font-bold
                                                    text-white/65

                                                    sm:text-[9px]
                                                "
                                            >
                                                {item.title}
                                            </p>

                                            <p
                                                className="
                                                    mt-1
                                                    text-[7px]
                                                    text-white/30

                                                    sm:text-[8px]
                                                "
                                            >
                                                {item.subtitle}
                                            </p>

                                        </div>
                                    );
                                })}
                            </div>

                            {/* STATUS */}

                            <div
                                className="
                                    mt-4
                                    rounded-2xl
                                    border
                                    border-cyan-500/10
                                    bg-cyan-500/[0.05]

                                    p-3
                                    text-center

                                    sm:mt-5
                                    sm:p-4
                                "
                            >
                                <p
                                    className="
                                        font-mono
                                        text-[8px]
                                        uppercase
                                        tracking-[0.12em]
                                        text-cyan-300/60

                                        sm:text-[9px]
                                        sm:tracking-[0.17em]
                                    "
                                >
                                    Electronics // Embedded // Software
                                </p>
                            </div>

                        </div>

                    </motion.div>

                    {/* =================================================
                        SOCIAL NETWORK CARD
                    ================================================= */}

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
                            min-w-0

                            rounded-[1.75rem]
                            border
                            border-white/10

                            bg-white/[0.03]
                            p-6
                            backdrop-blur-xl

                            transition-colors
                            duration-300

                            hover:border-purple-400/20

                            sm:rounded-[2.25rem]
                            sm:p-8
                            md:p-10

                            lg:col-span-2
                        "
                    >

                        {/* CARD HEADER */}

                        <div
                            className="
                                mb-6
                                flex
                                flex-col
                                gap-3

                                sm:mb-8
                                sm:flex-row
                                sm:items-center
                                sm:justify-between
                            "
                        >

                            <h3
                                className="
                                    flex
                                    items-center
                                    gap-3

                                    text-lg
                                    font-bold
                                    text-white

                                    sm:text-xl
                                "
                            >
                                <span
                                    className="
                                        h-2
                                        w-2
                                        shrink-0

                                        animate-pulse
                                        rounded-full

                                        bg-purple-500
                                    "
                                />

                                Social Network
                            </h3>

                            <p
                                className="
                                    font-mono
                                    text-[8px]
                                    uppercase
                                    tracking-[0.2em]
                                    text-white/25

                                    sm:text-[9px]
                                "
                            >
                                Find Me Online
                            </p>

                        </div>

                        {/* =================================================
                            SOCIAL GRID
                        ================================================= */}

                        {SOCIALS.length > 0 ? (

                            <div
                                className="
                                    grid
                                    grid-cols-2
                                    gap-3

                                    sm:grid-cols-3
                                    sm:gap-4

                                    xl:grid-cols-4
                                "
                            >

                                {SOCIALS.map((social, index) => {
                                    const Icon = social.Icon;

                                    return (
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
                                                duration: 0.35,
                                                delay: index * 0.05,
                                            }}
                                            whileHover={{
                                                y: -5,
                                                scale: 1.02,
                                            }}
                                            whileTap={{
                                                scale: 0.97,
                                            }}
                                            className={`
                                                group
                                                relative
                                                flex
                                                min-w-0
                                                min-h-[115px]
                                                flex-col
                                                items-center
                                                justify-center

                                                rounded-2xl
                                                border
                                                border-white/[0.07]

                                                bg-white/[0.035]
                                                p-4

                                                transition-colors
                                                duration-300

                                                sm:min-h-[130px]
                                                sm:rounded-3xl
                                                sm:p-5

                                                focus:outline-none
                                                focus-visible:ring-2
                                                focus-visible:ring-cyan-400/60

                                                ${social.hover}
                                            `}
                                        >

                                            {/* ICON CONTAINER */}

                                            <div
                                                className={`
                                                    flex
                                                    h-11
                                                    w-11
                                                    items-center
                                                    justify-center

                                                    rounded-2xl
                                                    bg-white/[0.045]

                                                    transition-transform
                                                    duration-300

                                                    group-hover:scale-110

                                                    sm:h-12
                                                    sm:w-12

                                                    ${social.color}
                                                `}
                                            >
                                                <Icon
                                                    size={23}
                                                    strokeWidth={1.8}
                                                    aria-hidden="true"
                                                />
                                            </div>

                                            {/* SOCIAL NAME */}

                                            <span
                                                className="
                                                    mt-3
                                                    max-w-full
                                                    break-words

                                                    text-center
                                                    text-[8px]
                                                    font-bold
                                                    uppercase
                                                    tracking-[0.12em]

                                                    text-gray-500

                                                    transition-colors
                                                    duration-300

                                                    group-hover:text-white

                                                    sm:mt-4
                                                    sm:text-[9px]
                                                    sm:tracking-widest
                                                "
                                            >
                                                {social.name}
                                            </span>

                                            {/* EXTERNAL LINK ICON */}

                                            <ArrowUpRight
                                                size={13}
                                                className="
                                                    absolute
                                                    right-3
                                                    top-3

                                                    text-gray-700

                                                    transition-colors
                                                    duration-300

                                                    group-hover:text-white

                                                    sm:right-4
                                                    sm:top-4
                                                "
                                                aria-hidden="true"
                                            />

                                        </motion.a>
                                    );
                                })}

                            </div>

                        ) : (

                            <div
                                className="
                                    rounded-2xl
                                    border
                                    border-white/[0.06]
                                    bg-white/[0.02]
                                    p-8
                                    text-center
                                "
                            >
                                <p className="text-sm text-white/30">
                                    Social profiles coming soon.
                                </p>
                            </div>

                        )}

                        {/* BOTTOM MESSAGE */}

                        <div
                            className="
                                mt-6
                                flex
                                items-center
                                gap-2

                                border-t
                                border-white/[0.06]

                                pt-5
                            "
                        >
                            <Send
                                size={14}
                                className="
                                    shrink-0
                                    text-purple-400/60
                                "
                                aria-hidden="true"
                            />

                            <p
                                className="
                                    text-[9px]
                                    leading-relaxed
                                    text-white/30

                                    sm:text-[10px]
                                "
                            >
                                Open to engineering discussions,
                                technical collaborations and
                                development opportunities.
                            </p>
                        </div>

                    </motion.div>

                </div>

                {/* =================================================
                    FOOTER
                ================================================= */}

                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    whileInView={{
                        opacity: 0.55,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.8,
                    }}
                    className="
                        mt-8

                        text-center
                        font-mono
                        text-[8px]
                        uppercase
                        leading-relaxed
                        tracking-[0.12em]

                        text-gray-500

                        sm:mt-10
                        sm:text-[9px]
                        sm:tracking-widest
                    "
                >
                    <p>
                        Designed & Built by Matheesha Nadiranga
                    </p>

                    <p
                        className="
                            mt-2
                            text-white/25
                        "
                    >
                        Electronics
                        <span className="mx-2 text-cyan-500/40">
                            //
                        </span>

                        Embedded Systems
                        <span className="mx-2 text-cyan-500/40">
                            //
                        </span>

                        Software Engineering
                    </p>

                    <p
                        className="
                            mt-2
                            text-white/20
                        "
                    >
                        © {new Date().getFullYear()}
                    </p>

                </motion.div>

            </div>

        </section>
    );
}
