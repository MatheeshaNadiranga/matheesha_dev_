import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { type LucideIcon } from "lucide-react";

export default function Footer() {
    const githubURL = import.meta.env.VITE_GITHUB_URL;
    const linkedinURL = import.meta.env.VITE_LINKEDIN_URL;
    const twitterURL = import.meta.env.VITE_TWITTER_URL;
    const email = import.meta.env.VITE_EMAIL;
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative z-10 w-full border-t border-white/5 bg-black/40 backdrop-blur-xl mt-12">
            <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">

                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold text-white font-[family-name:var(--font-outfit)]">Matheesha Nadiranga</h3>
                    <p className="text-sm text-gray-500 mt-2">
                        Engineering the Future with AI & Code.
                    </p>
                </div>

                <div className="flex gap-6">
                    <FooterLink href={githubURL} icon={Github} label="GitHub" isExternal />
                    <FooterLink href={linkedinURL} icon={Linkedin} label="LinkedIn" isExternal />
                    <FooterLink href={twitterURL} icon={Twitter} label="Twitter" isExternal />
                    <FooterLink href={`mailto:${email}`} icon={Mail} label="Email" isExternal />
                </div>

                <div className="text-sm text-gray-600">
                    &copy; {currentYear} All rights reserved.
                </div>

            </div>
        </footer>
    );
}

interface FooterLinkProps {
    href: string;
    icon: LucideIcon;
    label: string;
    isExternal?: boolean;
}

function FooterLink({ href, icon: Icon, label, isExternal }: FooterLinkProps) {
    const className = "text-gray-400 hover:text-cyan-400 transition-colors";

    if (isExternal) {
        return (
            <a
                href={href}
                className={className}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
            >
                <Icon size={20} />
            </a>
        );
    }

    return (
        <Link
            to={href}
            className={className}
            aria-label={label}
        >
            <Icon size={20} />
        </Link>
    );
}
// hi