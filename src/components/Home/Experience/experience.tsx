import React from "react";

type Props = {};

export default function ExperienceSection({}: Props) {
  return (
    <div className="min-h-screen relative flex flex-col md:flex-row text-center md:text-left max-w-6xl px-10 justify-center items-center mx-auto gap-20 pt-20">
      <h2 className="absolute top-24 uppercase text-4xl md:text-2xl text-neutral-300 tracking-[1rem] ">
        Experience
      </h2>

      <h1 className="text-5xl uppercase font-semibold tracking-wide">
        In <span className="text-orange-600">Progress</span>
      </h1>
    </div>
  );
}
