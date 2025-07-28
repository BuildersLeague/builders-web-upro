import Image from "next/image";

export default function TrustedByExpertsSection() {
  return (
    <section
      id="experts"
      className="relative overflow-hidden min-h-screen flex items-center justify-center bg-[#020d02]"
      role="region"
      aria-labelledby="experts-heading"
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-24">
          {/* Text Content */}
          <div className="flex-1 space-y-6 lg:space-y-10 text-center lg:text-left">
            <div className="space-y-4 lg:space-y-5">
              <h2
                id="experts-heading"
                className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black leading-tight tracking-tight mb-8 lg:mb-12"
                style={{
                  fontFamily: "THE BOLD FONT",
                  fontWeight: 900,
                  color: "#D7E4D7",
                }}
              >
                BUILT WITH EXPERTS.
                <br className="hidden sm:block" />
                BACKED BY LEADERS.
              </h2>

              <p
                className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-normal leading-relaxed max-w-2xl"
                style={{
                  color: "#D7E4D7",
                  fontFamily:
                    "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
                  letterSpacing: "-0.12px",
                  lineHeight: "1.33",
                }}
              >
                U-Pro Soccer combines leading-edge technology with real-world
                coaching insight. Our system has been tested by families,
                reviewed by sports scientists, and supported by some of
                Canada&apos;s top innovation programs.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 w-full">
            <Image
              src="images/TrustedByExpertsPhotos/kidAdultPractice.svg"
              alt="Child practicing soccer drills in a bright living room with a professional coach demonstrating techniques, showcasing U-Pro's expert-backed training approach"
              className="w-full h-auto rounded-xl lg:rounded-3xl shadow-lg"
              width={624}
              height={485}
              loading="lazy"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
