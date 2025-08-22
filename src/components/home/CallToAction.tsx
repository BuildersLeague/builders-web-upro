import Image from "next/image";

export default function CallToAction() {
  return (
    <section
      id="contact"
      className="wrapper bg-black  flex items-center justify-center flex-col gap-8 py-8"
      role="region"
      aria-labelledby="cta-heading"
    >
      {/* Left Content */}
      <div className="flex-1 max-w-2xl text-center lg:text-left">
        <h2
          id="cta-heading"
          className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black leading-tight tracking-tight mb-8 lg:mb-12"
          style={{
            fontFamily: "THE BOLD FONT",
            fontWeight: 900,
            color: "#d7e4d7",
          }}
        >
          READY TO START THE JOURNEY?
        </h2>
        <p
          className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0"
          style={{
            color: "#d7e4d7",
            fontFamily:
              "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
            letterSpacing: "-0.12px",
            lineHeight: "1.33",
          }}
        >
          Download the app and start your free training experience today. No equipment needed — just a phone, a ball, and a love for the game.
        </p>
      </div>

      {/* Right Content - App Store Buttons */}
      <div
        className="flex gap-4 lg:gap-6 flex-shrink-0 items-center justify-center md:items-center md:justify-center lg:items-start lg:justify-start"
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
    </section>
  );
}
