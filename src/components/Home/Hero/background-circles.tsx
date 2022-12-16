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
      className="relative flex items-center justify-center"
    >
      <div className="absolute border border-blue-400 rounded-full h-[300px] w-[300px] animate-ping " />
      <div className="absolute border animate-pulse animation-delay-600 border-orange-600 opacity-30 rounded-full h-[400px] w-[400px]" />
      <div className="absolute border animate-pulse animation-delay-800 border-blue-600 opacity-30 rounded-full h-[700px] w-[700px]" />
      <div className="absolute border animate-pulse animation-delay-1000 border-yellow-600 opacity-30 rounded-full h-[1000px] w-[1000px]" />
      <div className="absolute border animate-pulse animation-delay-1200 border-purple-600 opacity-30 rounded-full h-[1300px] w-[1300px]" />
      <div className="absolute border animate-pulse animation-delay-1400 border-blue-500 opacity-30 rounded-full h-[1600px] w-[1600px]" />
      <div className="absolute border animate-pulse animation-delay-1600 border-blue-400 opacity-30 rounded-full h-[1900px] w-[1900px]" />
      <div className="absolute border animate-pulse animation-delay-1800 border-blue-400 opacity-30 rounded-full h-[1600px] w-[1600px]" />
    </motion.div>
  );
}
