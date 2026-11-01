
import IdentityHeader from "../components/IdentityHeader";
import AboutMe from "../components/Aboutme";
import SkillsMarquee from "../components/SkillsMarquee";
import SkillSpinner from "../components/SkillSpinner";

import Projects from "../pages/Projects";

import RemoteReady from "../components/RemoteReady";
import Connect from "../components/Connect";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";

import MyPhoto from "@/components/MyPhoto";
import TechBento from "@/components/TechBento";
import AboutSection from "@/components/Aboutsection";

// import CyberScanner from "@/experiment_components/CyberScanner"
import Earth from "@/experiment_components/Earth";

export default function Home() {
  return (
    <div
      className="
                relative
                isolate
                min-h-[100dvh]
                w-full
                bg-transparent
                selection:bg-cyan-500/30
            "
    >

      {/* HERO */}

      <IdentityHeader />

      {/* MAIN CONTENT */}

      <main
        className="
                    relative
                    z-10
                    flex
                    w-full
                    min-w-0
                    flex-col
                "
      >

        <AboutMe />

        <AboutSection />

        <MyPhoto />

        <TechBento />

        <SkillsMarquee />

        <SkillSpinner />

        <Projects />

        <RemoteReady />

        <Connect />

        {/* GLOBAL CONNECTIVITY */}

        <Earth />

        {/* CONTACT */}

        <ContactMe />

      </main>

      {/* FOOTER */}

      <Footer />

      {/* FLOATING SCANNER */}

      {/* <CyberScanner /> */}

    </div>
  );
}
