"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const heroImageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export default function HomeHero() {
  return (
    <section
      className="relative overflow-hidden"
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
      <motion.div
        className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero text */}
        <div className="mt-12 text-center">
          <motion.h1
            id="hero-heading"
            className="mb-8 text-4xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl lg:mb-12 lg:text-6xl xl:text-7xl 2xl:text-8xl"
            style={{
              fontFamily: "THE BOLD FONT",
              fontWeight: 900,
              background:
                "linear-gradient(90deg, #FFFFFF 0%, #0D9447 50%, #FFFFFF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            variants={itemVariants}
          >
            Level Up Your Soccer Skills<br />
            at Home
          </motion.h1>

          <motion.p
            className="mx-auto mb-8 max-w-4xl text-lg leading-relaxed text-white/90 sm:text-xl md:text-2xl lg:mb-12 lg:text-3xl"
            variants={itemVariants}
          >
            Train like a pro with personalized soccer coaching, skill
            challenges, and progress tracking—all from your living room.
          </motion.p>

          <motion.div
            className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row lg:mb-20"
            variants={itemVariants}
          >
            <Button
              size="lg"
              className="w-52 bg-[#0D9447] hover:bg-[#0a7a3a] text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              aria-label="Download U-Pro app and start training"
            >
              Start Training Today
            </Button>
            <Button
              size="lg"
              className="w-52 bg-[#0D9447] hover:bg-[#0a7a3a] text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              aria-label="Watch demo video of U-Pro in action"
            >
              Watch Demo
            </Button>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
          className="relative mx-auto w-full max-w-6xl"
          variants={heroImageVariants}
        >
          <div className="relative aspect-[16/10] md:aspect-[16/9] lg:aspect-[16/8]">
            <Image
              src="/images/hero/heroMobileBack.png"
              alt="U-Pro mobile app interface showing soccer training exercises and progress tracking"
              fill
              className="object-contain"
              priority
              loading="eager"
              fetchPriority="high"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
            />
            {/* Overlay U-Pro logo centered */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <Image
                src="/uproLogo.svg"
                alt="U-Pro logo"
                width={128}
                height={78}
                className="h-auto w-32"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
