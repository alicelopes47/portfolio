"use client";
import { Kodchasan } from "next/font/google";
const kodchasan = Kodchasan({ subsets: ["latin"], weight: ["200"] });
import Lottie from "@lottielab/lottie-player/react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      <div
        className={`${kodchasan.className} flex px-2 flex-col items-center md:mt-14 mt-8 gap-12`}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`md:text-[3rem] text-center text-3xl`}
        >
          Olá, meu nome é <span className="text-primaryBold">Alice Lopes</span>
        </motion.h1>
        <Lottie
          src="https://cdn.lottielab.com/l/3KEkh3sM9Tnhxu.json"
          autoplay
          className="md:w-[25%] w-[85%]"
        />
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={`md:text-[3rem] text-2xl text-primaryBold`}
        >
          Desenvolvedora web.
        </motion.h1>
      </div>
    </main>
  );
}
