import Image from "next/image";
import React from "react";

type Props = {};

export default function Skill({}: Props) {
  return (
    <div className="relative w-20 h-20 object-cover overflow-hidden rounded-full cursor-pointer">
      <div className="absolute transition-opacity duration-300 w-full h-full flex items-center justify-center bg-white opacity-0 hover:opacity-100 text-Black z-20">
        <span className="text-lg font-bold">80%</span>
      </div>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
        height={80}
        width={80}
        alt="skill logo z-0"
      />
    </div>
  );
}
