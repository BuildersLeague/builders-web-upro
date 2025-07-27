import ElevatorPitchSection from "@/components/ElevatorPitchSection";
import Hero from "@/components/Hero";
import HowUProWorks from "@/components/HowUProWorks";
import { TestimonialSection } from "@/components/TestimonialSection";
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
      <Hero />
      <HowUProWorks />
      {/* <ElevatorPitchSection /> */}
      <TrustedByExpertsSection />
      <TrainingPartner />
      <CallToActionPage />
      <TestimonialSection />

      <Sponsors />
    </main>
  );
}
