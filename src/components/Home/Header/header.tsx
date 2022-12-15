"use client";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
type Props = {};

export default function Header({}: Props) {
  return (
    <header className="fixed w-full z-20">
      <div className="w-full top-0 flex items-start justify-between max-w-6xl mx-auto p-5  md:items-center text-white">
        <motion.div
          initial={{ x: -400, opacity: 0, scale: 0.7 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <SocialIcon
            className="hover:text-orange-500 transition-all"
            url="https://www.facebook.com/joe.mama69420/"
            fgColor="currentColor"
            bgColor="transparent"
            target="_blank"
            rel="noreferrer"
          />
          <SocialIcon
            className="hover:text-orange-500 transition-all"
            url="https://github.com/Kaitou345"
            fgColor="currentColor"
            bgColor="transparent"
            target="_blank"
            rel="noreferrer"
          />
          <SocialIcon
            className="hover:text-orange-500 transition-all"
            url="https://www.instagram.com/seyan_mf/"
            fgColor="currentColor"
            bgColor="transparent"
            target="_blank"
            rel="noreferrer"
          />
        </motion.div>

        <motion.div
          initial={{ x: 400, opacity: 0, scale: 0.7 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="flex flex-row items-center cursor-pointer "
        >
          <div className="contents relative transition-all text-lg font-semibold tracking-wide text-orange-600 hover:text-orange-400 ">
            <a href="#contact" className="absolute h-full w-full"></a>
            <SocialIcon
              network="email"
              fgColor="currentColor"
              bgColor="transparent"
              className="animate-ping-slow animation-delay-2000"
            />
            <p className="uppercase hidden md:inline-flex ">Get In Touch</p>
          </div>
        </motion.div>
      </div>
    </header>
  );
}