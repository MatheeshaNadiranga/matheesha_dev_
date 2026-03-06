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
import SideNav from "@/components/SideNav";
import TechBento from "@/components/TechBento";


export default function Home() {
  
  return (
    
    <div className="relative h-100dvh bg-transparent selection:bg-cyan-500/30">

      <SideNav />
      <IdentityHeader />

      <main className="relative z-10">
        <AboutMe />
        <MyPhoto />
        <TechBento />
        
        <SkillsMarquee />
        <SkillSpinner />
        <Projects />
        <RemoteReady />
        <Connect />
        <ContactMe />
      </main>

      <Footer />
    </div>
  );
}