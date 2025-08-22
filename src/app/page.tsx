import AnimatedHero from "@/components/AnimatedHero";
import { AnimatedTestimonialSection } from "@/components/AnimatedTestimonialSection";
import TrustedByExpertsSection from "@/components/TrustedByExpertsSection";
import CallToActionPage from "@/components/CallToActionPage";
import { TrainingPartner } from "@/components/TrainingPartner";
import { Sponsors } from "@/components/Sponsors";
import HowUProWorks from "@/components/HowUProWorks";

// Server Component - rendered on the server
export default function Home() {
  return (
    <main
      id="main-content"
      className="bg-[#020d02] flex flex-col gap-16"
      role="main"
      aria-label="U-Pro Soccer homepage"
    >
      <AnimatedHero />
      {/* <AnimatedHowUProWorks /> */}
      <HowUProWorks />
      <TrustedByExpertsSection />
      <TrainingPartner />
      <CallToActionPage />
      <AnimatedTestimonialSection />
      <Sponsors />
    </main>
  );
}
