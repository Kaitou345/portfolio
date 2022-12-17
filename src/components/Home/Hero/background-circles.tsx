"use client";

import React from "react";
import { motion, MotionProps } from "framer-motion";

type Props = {};

export default function BackgroundCirlces({}: Props) {
  let boxVariants = {};

  // disable animation on mobile
  if (typeof window !== "undefined") {
    const isMobile = window?.innerWidth < 768;
    if (!isMobile) {
      boxVariants = {
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
          scale: [1, 0.5, 0.5, 2, 1],
          borderRadius: ["20%", "20%", "50%", "80%", "20%"],
        },
        transition: {
          duration: 2.5,
        },
      } satisfies MotionProps;
    }
  }
  return (
    <motion.div
      {...boxVariants}
      className="relative flex items-center justify-center -z-20"
    >
      <div className="absolute border rounded-full h-[300px] w-[300px]   border-blue-400   animate-ping     " />
      <div className="absolute border rounded-full h-[400px] w-[400px]   border-orange-600 animate-pulse animation-delay-600   opacity-30" />
      <div className="absolute border rounded-full h-[700px] w-[700px]   border-blue-600   animate-pulse animation-delay-800   opacity-30" />
      <div className="absolute border rounded-full h-[1000px] w-[1000px] border-yellow-600 animate-pulse animation-delay-1000  opacity-30" />
      <div className="absolute border rounded-full h-[1300px] w-[1300px] border-purple-600 animate-pulse animation-delay-1200  opacity-30" />
      <div className="absolute border rounded-full h-[1600px] w-[1600px] border-blue-500   animate-pulse animation-delay-1400  opacity-30" />
      <div className="absolute border rounded-full h-[1900px] w-[1900px] border-blue-400   animate-pulse animation-delay-1600  opacity-30" />
      <div className="absolute border rounded-full h-[2200px] w-[2200px] border-blue-400   animate-pulse animation-delay-1800  opacity-30" />
    </motion.div>
  );
}
