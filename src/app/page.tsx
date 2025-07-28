import AnimatedHero from "@/components/AnimatedHero";
import AnimatedHowUProWorks from "@/components/AnimatedHowUProWorks";
import { AnimatedTestimonialSection } from "@/components/AnimatedTestimonialSection";
import TrustedByExpertsSection from "@/components/TrustedByExpertsSection";
import CallToActionPage from "@/components/CallToActionPage";
import { TrainingPartner } from "@/components/TrainingPartner";
import { Sponsors } from "@/components/Sponsors";

// Server Component - rendered on the server
export default function Home() {
  return (
    <main
      id="main-content"
      className="bg-[#020d02]"
      role="main"
      aria-label="U-Pro Soccer homepage"
    >
      <AnimatedHero />
      <AnimatedHowUProWorks />
      <TrustedByExpertsSection />
      <TrainingPartner />
      <CallToActionPage />
      <AnimatedTestimonialSection />
      <Sponsors />
    </main>
  );
}
