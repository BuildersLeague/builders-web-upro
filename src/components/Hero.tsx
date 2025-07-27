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
          <p className="text-white font-bold font-sans text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl leading-snug max-w-4xl mx-auto mb-12 lg:mb-20">
            U-Pro Soccer turns your living room into a smart training ground —
            powered by AI, fueled by fun, and designed to keep kids moving and
            improving.
          </p>

          {/* Buttons */}
          <div
            className="flex flex-row gap-12 justify-center items-center"
            role="group"
            aria-label="Hero actions"
          >
            <Button
              variant="default"
              size="lg"
              className="min-w-48"
              type="button"
              aria-describedby="hero-heading"
            >
              Start Free
            </Button>
            <Button
              variant="default"
              size="lg"
              className="min-w-64"
              type="button"
              aria-describedby="hero-heading"
            >
              See How It Works
            </Button>
          </div>
        </div>

        {/* Mobile phone mockup */}
        <div
          className="mt-16 lg:mt-24 flex justify-center"
          role="img"
          aria-label="Mobile app preview"
        >
          <div className="relative">
            {/* Phone container */}
            <div
              className="w-64 sm:w-80 lg:w-96 xl:w-[32rem] h-[32rem] sm:h-[40rem] lg:h-[48rem] xl:h-[56rem] bg-black rounded-t-3xl lg:rounded-t-[3rem] relative"
              style={{
                border: "1.5px solid rgba(145, 182, 145, 0.20)",
                borderBottom: "none",
              }}
              role="presentation"
            >
              {/* U-Pro logo in phone */}
              <div className="absolute top-12 sm:top-16 lg:top-20 left-1/2 transform -translate-x-1/2">
                <Image
                  src="https://api.builder.io/api/v1/image/assets/TEMP/39a9e7d50e4bcde9141bfcd2f9c08d5e8a3e0587?width=539"
                  alt="U-Pro Soccer application logo displayed on mobile device"
                  className="w-48 sm:w-56 lg:w-64 xl:w-72 h-auto"
                  width={539}
                  height={200}
                  priority
                />
              </div>

              {/* Mock interface elements */}
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5/6"
                aria-hidden="true"
              >
                {/* Progress bars */}
                <div
                  className="w-full h-8 lg:h-10 bg-white bg-opacity-30 rounded-2xl mb-8 lg:mb-12"
                  role="presentation"
                />
                <div
                  className="w-4/5 h-8 lg:h-10 bg-white bg-opacity-30 rounded-2xl mx-auto mb-16 lg:mb-20"
                  role="presentation"
                />
              </div>

              {/* Get Started button in phone */}
              <div className="absolute bottom-16 sm:bottom-20 lg:bottom-24 left-1/2 transform -translate-x-1/2 w-5/6">
                <button
                  className="w-full bg-upro-green text-black font-medium text-lg lg:text-xl py-4 lg:py-5 rounded-2xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-upro-green focus:ring-offset-2 focus:ring-offset-black"
                  type="button"
                  aria-label="Get started with U-Pro Soccer app"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
