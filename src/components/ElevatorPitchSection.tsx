export default function ElevatorPitchSection() {
  return (
    <section
      id="features"
      className="relative overflow-hidden py-16 md:py-20 lg:py-24"
      role="region"
      aria-labelledby="pitch-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          id="pitch-heading"
          className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black leading-tight tracking-tight mb-8 lg:mb-12"
          style={{
            fontFamily: "THE BOLD FONT",
            fontWeight: 900,
            color: "#D7E4D7",
          }}
        >
          A NEW WAY TO TRAIN STARTS HEREsss
        </h2>

        <p
          className="text-white font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed max-w-4xl mx-auto mb-12 lg:mb-20"
          style={{
            fontFamily:
              "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
            color: "#D7E4D7",
            letterSpacing: "-0.12px",
            lineHeight: "1.33",
          }}
        >
          No more boring drills. No more wasted screen time. With U-Pro, kids
          learn real soccer skills through fun, personalized missions — all from
          home.
        </p>
      </div>
    </section>
  );
}
