import { AuroraBackground } from "../components/ui/aurora-background";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import ThankYou from "../components/ThankYou";
import { SkillShowcase } from "@/components/SkillShowCaseComponenet";
import Navbar from "../components/NavBar.jsx";
export default function HomePage() {
  return (
    <AuroraBackground>
      <Navbar>
        <Hero />
        <section id="AboutMe">
          <AboutMe />
        </section>
        <section id="Skills">
          <div className="w-full overflow-x-hidden">
            <SkillShowcase />
          </div>
        </section>
        <ThankYou />
      </Navbar>
    </AuroraBackground>
  );
}
