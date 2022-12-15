"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCirlces from "./background-circles";

type Props = {};

export default function HeroSection({}: Props) {
  const [text, count] = useTypewriter({
    words: ["A Developer", "Bad At Apex"],
    loop: true,
    delaySpeed: 1500,
  });

  return (
    <div className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      <div className="absolute h-screen flex items-center justify-center ">
        <BackgroundCirlces />
      </div>
      <Image
        // src="https://miro.medium.com/max/1071/1*g4lFXNeYniGsEwJefXeqcg.jpeg"
        src="/imgs/seyan.jpg"
        width={128}
        height={128}
        className="relative object-cover rounded-full h-40 w-40 mt-44"
        alt="My photo"
      />
      <div className="mt-5 z-20">
        <h2 className="uppercase text-neutral-400 tracking-[0.5rem]">
          Software Engineer
        </h2>
        <h1 className="mt-3 text-5xl font-semibold leading-tight">
          <span>
            I&aposm Seyan, <br className="md:hidden" />{" "}
            <span className="text-orange-600">{text}</span>
          </span>
          <Cursor cursorColor="hsl(215, 20%, 65%)" cursorStyle="_" />
        </h1>
      </div>

      <nav className="mt-10 flex flex-row md:gap-5 z-20 ">
        <a href="#about">
          <button className="heroButton">About</button>
        </a>
        <a href="#exp">
          <button className="heroButton">Experience</button>
        </a>
        <a href="#skills">
          <button className="heroButton">Skills</button>
        </a>
        <a href="#projects">
          <button className="heroButton">Projects</button>
        </a>
      </nav>
    </div>
  );
}
