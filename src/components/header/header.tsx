"use client";

import React from "react";
import { links } from "../../../lib/data";
import Link from "next/link";
import { motion } from "framer-motion";
export function EmailSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="14"
      viewBox="0 0 19 14"
      fill="none"
    >
      <rect
        x="1.05566"
        y="1"
        width="16.2227"
        height="12"
        rx="2.8"
        stroke="#0C0C0C"
        stroke-width="1.5"
      />
      <path
        d="M5.11133 5L8.57231 7.56011C8.92569 7.8215 9.40832 7.8215 9.76169 7.56011L13.2227 5"
        stroke="#0C0C0C"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
}

export default function Header() {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.6 }}
      className="fixed top-0 flex justify-center w-[100%] h-[80px] backdrop-blur-xl bg-white/30"
    >
      <div className="flex flex-row justify-between align-middle w-[100%] lg:mx-24">
        <div className="flex flex-row items-center gap-4 font-normal">
          <EmailSVG />
          <div>phamxuantoan2710@gmail.com</div>
        </div>

        <nav className="flex flex-row justify-between items-center gap-9">
          {links.map((link) => (
            <li className="list-none font-normal" key={link.hash}>
              <Link className="" href={link.hash}>
                {link.name}
              </Link>
            </li>
          ))}
        </nav>
      </div>
    </motion.div>
  );
}
