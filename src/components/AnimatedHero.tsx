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

export default function AnimatedHero() {
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
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero text */}
        <div className="mt-12 text-center">
          <motion.h1
            id="hero-heading"
            className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black leading-tight tracking-tight mb-8 lg:mb-12"
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
            Level Up Your Soccer Skills at Home
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Train like a pro with personalized soccer coaching, skill
            challenges, and progress tracking—all from your living room.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 lg:mb-20"
            variants={itemVariants}
          >
            <Button
              size="lg"
              className="bg-[#0D9447] hover:bg-[#0a7a3a] text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              aria-label="Download U-Pro app and start training"
            >
              Start Training Today
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-[#020d02] font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
              aria-label="Watch demo video of U-Pro in action"
            >
              Watch Demo
            </Button>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
          className="relative w-full max-w-6xl mx-auto"
          variants={heroImageVariants}
        >
          <div className="relative aspect-[16/10] md:aspect-[16/9] lg:aspect-[16/8]">
            <Image
              src="/images/hero/heroMobile.svg"
              alt="U-Pro mobile app interface showing soccer training exercises and progress tracking"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
            />
          </div>
        </motion.div>

        {/* Download badges */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-12 lg:mt-16 mb-12"
          variants={itemVariants}
        >
          <a
            href="#"
            className="transform transition-transform duration-300 hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#020d02] rounded-lg"
            aria-label="Download U-Pro from the App Store"
          >
            <Image
              src="/appleStore.svg"
              alt="Download on the App Store"
              width={180}
              height={53}
              className="h-12 sm:h-14 w-auto"
            />
          </a>
          <a
            href="#"
            className="transform transition-transform duration-300 hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#020d02] rounded-lg"
            aria-label="Get U-Pro on Google Play"
          >
            <Image
              src="/googlePlay.svg"
              alt="Get it on Google Play"
              width={180}
              height={53}
              className="h-12 sm:h-14 w-auto"
            />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
