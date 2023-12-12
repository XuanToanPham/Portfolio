"use client";

import Image from "next/image";
import React from "react";
import AVATAR from "../../asset/images/avatar/Avatar.jpg";
import { motion } from "framer-motion";
export function DownloadSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 5L12 12"
        stroke="#0C0C0C"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-dasharray="0.2 0.2"
      />
      <path
        d="M14 11L12.8321 12.7519C12.4362 13.3457 11.5638 13.3457 11.1679 12.7519L10 11"
        stroke="#0C0C0C"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-dasharray="0.2 0.2"
      />
      <path
        d="M16.5 10H17.2C18.7464 10 20 11.2536 20 12.8L20 16.2026C20 17.7464 18.7495 18.9992 17.2057 18.9999C13.6163 19.0014 10.7217 18.9898 6.80685 18.992C5.25805 18.9929 4 17.7386 4 16.1898V12.8C4 11.2536 5.2536 10 6.8 10H7"
        stroke="#0C0C0C"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
}

export default function Intro() {
  return (
    <section className="mt-[110px]">
      <div className="flex justify-center flex-col items-center max-w-[416px] gap-8">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0 ,opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.6 }}
          className="intro_info flex flex-col justify-center gap-5 font-medium items-center text-[20px]"
        >
          <Image alt="avatar" src={AVATAR} className="h-[100px] w-[100px] rounded-full" />
          <p>Hi! I'm Toan ✌🏻</p>
        </motion.div>
        <div className="flex flex-col justify-center items-center gap-8 text-center">
          <h1 className="text-[42px] font-normal text-text_primary">
            Website design, app, and developer.
          </h1>
          <p className="text-lg text-text_secondary">
            a junior UI and Web Designer. I specialize in UI design, responsive
            web design and visual development.
          </p>
        </div>
        <div className="flex justify-between w-[100%] px-[35px]">
          <button className=" text-lg px-[37px] py-[15px] text-white bg-text_primary rounded-full">
            Hire me
          </button>
          <button className="flex py-[15px] gap-4 text-lg">
            <span>Download CV</span>
            <DownloadSVG />
          </button>
        </div>
      </div>
    </section>
  );
}
