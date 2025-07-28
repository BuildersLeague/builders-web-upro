import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden "
      role="banner"
      aria-labelledby="hero-heading"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(172deg, rgba(2, 13, 2, 0.70) 24.02%, rgba(13, 148, 71, 0.70) 141.68%), #020D02",
        }}
        aria-hidden="true"
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero text */}
        <div className="mt-12 text-center">
          <h1
            id="hero-heading"
            className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black leading-tight tracking-tight mb-8 lg:mb-12"
            style={{
              fontFamily: "THE BOLD FONT",
              fontWeight: 900,
              color: "#D7E4D7",
            }}
          >
            Train Like a Pro.
            <br />
            Play Like a Gamer.
          </h1>

          {/* Description */}
          <p className="text-white font-bold font-sans text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl leading-snug max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto mb-12 lg:mb-20">
            U-Pro Soccer turns your living room into a smart training ground —
            powered by AI, fueled by fun, and designed to keep kids moving and
            improving.
          </p>

          {/* Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 sm:gap-12 justify-center items-center"
            role="group"
            aria-label="Hero actions"
          >
            <Button
              variant="default"
              size="lg"
              className="min-w-48 w-full sm:w-auto"
              type="button"
              aria-describedby="hero-heading"
            >
              Start Free
            </Button>
            <Button
              variant="default"
              size="lg"
              className="min-w-64 w-full sm:w-auto"
              type="button"
              aria-describedby="hero-heading"
            >
              See How It Works
            </Button>
          </div>
        </div>

        {/* Mobile phone mockup */}
        <div
          className="mt-16 lg:mt-24 w-64 sm:w-80 lg:w-96 xl:w-[30rem] h-[21.5rem] sm:h-[27rem] lg:h-[32.5rem] xl:h-[40.5rem] bg-black rounded-t-3xl lg:rounded-t-[3rem] relative mx-auto"
          style={{
            border: "1.5px solid rgba(145, 182, 145, 0.20)",
            borderBottom: "none",
          }}
          role="img"
          aria-label="Mobile app preview"
        >
          {/* U-Pro logo in phone */}
          <div className="absolute inset-0">
            <Image
              src="/images/hero/heroMobile.svg"
              alt="U-Pro Soccer application logo displayed on mobile device"
              className="w-full h-full object-cover"
              fill
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
