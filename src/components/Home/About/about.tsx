"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function AboutSection({}: Props) {
  return (
    <div className="min-h-screen relative flex flex-col md:flex-row text-center md:text-left max-w-6xl px-10 justify-center items-center mx-auto gap-20 pt-20">
      <h3 className="absolute top-24 md:top-20 uppercase text-4xl md:text-2xl text-neutral-400 tracking-[1rem] ">
        About
      </h3>

      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: { duration: 1, type: "spring" },
        }}
        viewport={{ once: true }}
        className="flex-shrink-0 w-56 h-56 rounded-full -mb-14 md:w-[300px] md:h-[500px] md:rounded-sm overflow-hidden"
      >
        <Image
          src="/imgs/seyan.jpg"
          width={400}
          height={400}
          className="object-cover "
          alt="My photo"
        />
      </motion.div>

      <motion.div className="space-y-10">
        <h4 className="text-4xl font-semibold">
          Here is a little <span className="text-orange-600">background</span>
        </h4>
        <p className="text-base max-w-[450px]">
          This is placeholder stuff. Don't bother reading it. Or read it.
          Whatever floats your <span className="text-orange-600">boat</span>{" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
        </p>
      </motion.div>
    </div>
  );
}
