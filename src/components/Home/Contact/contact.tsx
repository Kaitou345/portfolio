import React from "react";

type Props = {};

export default function ContactSection({}: Props) {
  return (
    <div className="min-h-screen relative flex flex-col text-center md:text-left max-w-6xl px-10 justify-center items-center mx-auto gap-20 pt-20">
      <h2 className="absolute top-24 uppercase text-4xl md:text-2xl text-neutral-300 tracking-[1rem] ">
        Contact
      </h2>

      <div>
        <h1 className="text-4xl text-white text-center font-semibold">
          I&apos;m up for a chat,
          <br />
          <span className="decoration-orange-500 underline">
            Let&apos;s talk.
          </span>
        </h1>
      </div>
      <form className="grid gap-2 text-black">
        <div className="grid grid-cols-2 gap-2">
          <input
            className="h-9 p-3 focus:outline outline-orange-500  rounded-sm bg-neutral-800 caret-white placeholder-neutral-500"
            type="text"
            placeholder="Name*"
            name=""
            id=""
          />
          <input
            className="h-9 p-3 focus:outline outline-orange-500  rounded-sm bg-neutral-800 caret-white placeholder-neutral-500"
            type="email"
            placeholder="Email*"
            name=""
            id=""
          />
        </div>
        <input
          type="text"
          className="h-9 p-3 focus:outline outline-orange-500  rounded-sm bg-neutral-800 caret-white placeholder-neutral-500"
          placeholder="Subject"
        />
        <textarea
          className="h-32 p-3 focus:outline outline-orange-500  rounded-sm resize-none bg-neutral-800 caret-white placeholder-neutral-500"
          placeholder="Write your thoughts..."
        />
        <button
          className="border-2 border-orange-500 h-10 w-24 text-white uppercase tracking-wider rounded-sm hover:bg-orange-500 transition-colors  text-base text-center"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
}
