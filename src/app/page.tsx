import HomeHero from "@/components/home/HomeHero";
import { Comments } from "@/components/home/Comments";
import TrustedByExpertsSection from "@/components/home/TrustedByExpertsSection";
import CallToAction from "@/components/home/CallToAction";
import { TrainingPartner } from "@/components/home/TrainingPartner";
import { Sponsors } from "@/components/home/Sponsors";
import HowUProWorks from "@/components/home/HowUProWorks";

// Server Component - rendered on the server
export default function Home() {
  return (
    <main
      id="main-content"
      className="bg-black flex flex-col gap-16"
      role="main"
      aria-label="U-Pro Soccer homepage"
    >
      <HomeHero />
      {/* <AnimatedHowUProWorks /> */}
      <HowUProWorks />
      <TrustedByExpertsSection />
      <TrainingPartner />
      <CallToAction />
      <Comments />
      <Sponsors />
    </main>
  );
}
