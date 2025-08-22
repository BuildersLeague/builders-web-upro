"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import CardDetails from "./home/CardDetails";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function AnimatedHowUProWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const cardClass =
    "bg-lime-950/70 rounded-lg overflow-hidden flex flex-col h-auto lg:h-96";

  return (
    <div className="flex flex-col gap-5 bg-black h-auto p-8 ">
      <motion.div
        ref={ref}
        className="flex flex-col gap-10 mt-20 lg:mt-40 mb-10 max-w-5xl items-center mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-center font-bold text-white text-3xl md:text-5xl transition-all duration-1000 ease-out"
          style={{
            fontFamily: "THE BOLD FONT",
            fontWeight: 900,
            color: "#D7E4D7",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A New Way to Train
          <br />
          Starts Here
        </motion.h1>
        <motion.p
          className="text-white font-bold text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed max-w-6xl mx-auto mb-12 lg:mb-20"
          style={{
            fontFamily:
              "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
            color: "#D7E4D7",
            letterSpacing: "-0.12px",
            lineHeight: "1.33",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Transform your living room into a soccer training ground with
          personalized drills, real-time feedback, and gamified progress
          tracking.
        </motion.p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.2, delayChildren: 0.6 }}
      >
        <motion.div className={cardClass} variants={cardVariants}>
          <CardDetails
            imgSrc="/level_up_skills.svg"
            title="Level Up Your Skills"
            description="Master fundamental techniques through guided video tutorials and interactive exercises designed by professional coaches."
          />
        </motion.div>

        <motion.div className={cardClass} variants={cardVariants}>
          <CardDetails
            imgSrc="/train_together.jpg"
            title="Train Together"
            description="Enjoy quality family time while building soccer skills. Parents and kids can participate in fun, engaging training sessions."
          />
        </motion.div>

        <motion.div className={cardClass} variants={cardVariants}>
          <CardDetails
            imgSrc="/tracking.png"
            title="Track Progress"
            description="Monitor improvement with detailed analytics, achievement badges, and personalized recommendations for continued growth."
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
