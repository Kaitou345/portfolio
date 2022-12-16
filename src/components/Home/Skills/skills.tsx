"use client";

import React from "react";
import Skill from "./skill";
import { motion } from "framer-motion";
type Props = {};

export default function SkillsSection({}: Props) {
  return (
    <div className="min-h-screen relative flex flex-col md:flex-row text-center md:text-left max-w-6xl px-10 justify-center items-center mx-auto gap-20 pt-20">
      <h2 className="absolute top-24 uppercase text-4xl md:text-2xl text-neutral-300 tracking-[1rem] ">
        Skills
      </h2>
      <h3 className="absolute top-40 md:top-36 uppercase text-sm font-semibold text-neutral-400 tracking-widest ">
        Hover or tap a skill for proficiency
      </h3>

      <div className="grid grid-cols-4 gap-6" role="list">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </div>
  );
}
