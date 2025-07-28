import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CallToActionPage() {
  return (
    <section
      id="contact"
      className="bg-black relative overflow-hidden flex items-center justify-center"
      role="region"
      aria-labelledby="cta-heading"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-16">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl text-center lg:text-left">
          <h2
            id="cta-heading"
            className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black leading-tight tracking-tight mb-8 lg:mb-12"
            style={{
              fontFamily: "THE BOLD FONT",
              fontWeight: 900,
              color: "#D7E4D7",
            }}
          >
            READY TO START THE JOURNEY?
          </h2>
          <p
            className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0"
            style={{
              color: "#D7E4D7",
              fontFamily:
                "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
              letterSpacing: "-0.12px",
              lineHeight: "1.33",
            }}
          >
            Download the app and start your free training experience today. No
            equipment needed — just a phone, a ball, and a love for the game.
          </p>
        </div>

        {/* Right Content - App Store Buttons */}
        <div
          className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 lg:gap-6 flex-shrink-0 items-center justify-center md:items-center md:justify-center lg:items-start lg:justify-start"
          role="group"
          aria-label="Download app"
        >
          <button
            type="button"
            aria-label="Download U-Pro Soccer from App Store"
            className="transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded-lg"
          >
            <Image
              src="/appleStore.svg"
              alt="Download on the App Store"
              width={200}
              height={60}
              className="w-auto h-12 sm:h-14"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </button>
          <button
            type="button"
            aria-label="Download U-Pro Soccer from Google Play Store"
            className="transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded-lg"
          >
            <Image
              src="/googlePlay.svg"
              alt="Get it on Google Play"
              width={200}
              height={60}
              className="w-auto h-12 sm:h-14"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
