import React from "react";
import { SocialIcon } from "react-social-icons";
type Props = {};

export default function Header({}: Props) {
  return (
    <header className="fixed w-full z-20">
      <div className="w-full top-0 flex items-start justify-between max-w-6xl mx-auto p-5  md:items-center text-white">
        <div className="animate-slide-from-left" role="list">
          <SocialIcon
            className="hover:text-orange-500 transition-all"
            url="https://www.facebook.com/joe.mama69420/"
            fgColor="currentColor"
            bgColor="transparent"
            target="_blank"
            rel="noreferrer"
            aria-label="facebook"
            tabIndex={1}
          />
          <SocialIcon
            className="hover:text-orange-500 transition-all"
            url="https://github.com/Kaitou345"
            fgColor="currentColor"
            bgColor="transparent"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
          />
          <SocialIcon
            className="hover:text-orange-500 transition-all"
            url="https://www.instagram.com/seyan_mf/"
            fgColor="currentColor"
            bgColor="transparent"
            target="_blank"
            rel="noreferrer"
            aria-label="instagram"
          />
        </div>

        <div
          // initial={{ x: 400, opacity: 0, scale: 0.7 }}
          // animate={{ x: 0, opacity: 1, scale: 1 }}
          // transition={{ duration: 1, type: "spring" }}
          className="flex flex-row items-center cursor-pointer animate-slide-from-right relative transition-colors text-lg font-semibold tracking-wide text-orange-600 hover:text-orange-400"
        >
          <a
            href="#about"
            className="absolute h-full w-full"
            rel="nofollow"
            aria-label="contact"
          ></a>
          <SocialIcon
            url="#about"
            network="email"
            fgColor="currentColor"
            bgColor="transparent"
            className="animate-ping-slow animation-delay-2000"
            role="button"
            tabIndex={-1}
          />
          <p className="uppercase hidden md:inline-flex ">Get In Touch</p>
        </div>
      </div>
    </header>
  );
}
