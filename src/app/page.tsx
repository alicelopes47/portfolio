"use client";
import { Kodchasan } from "next/font/google";
const kodchasan = Kodchasan({ subsets: ["latin"], weight: ["200"] });
import Lottie from "@lottielab/lottie-player/react";
import { motion } from "framer-motion";
import ArtemisImg from "../../public/assets/artemis.png";
import convivio from '../../public/assets/convivio.png'
import tiaRosa from '../../public/assets/tiarosa.png'
import Image from "next/image";

export default function Home() {
  return (
    <main className={`${kodchasan.className}`}>
      <div className={`flex px-2 flex-col items-center md:mt-14 mt-8 gap-12`}>
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
      <hr className="md:w-1/2 w-3/4 mx-auto my-24 border-[1.2px] border-primaryLight" />
      <div className="md:px-24 px-6">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`md:text-[2.5rem] text-3xl text-primaryBold   md:text-start text-center md:mb-12 mb-8`}
        >
          projetos
        </motion.h1>
        <div className="md:grid grid-cols-3 grid-rows-1 md:gap-12 gap-4 flex flex-col"> {/* div wrapper */} 
          <div className="w-full flex flex-col items-center hover:animate-pulse bg-[#f6effa] pb-4 px-2 pt-2 rounded-2xl cursor-pointer hover:scale-105">
            <Image src={ArtemisImg} className="rounded-2xl" alt="projeto artemis" />
            <p className="text-[1.2rem] mt-4 font-normal italic text-[#3e2045]">Projeto Artemis</p>
          </div>
          <div className="w-full flex flex-col items-center hover:animate-pulse bg-[#f6effa] pb-4 px-2 pt-2 rounded-2xl cursor-pointer hover:scale-105">
            <Image src={convivio} className="rounded-2xl" alt="projeto convivio" />
            <p className="text-[1.2rem] mt-4 font-normal italic text-[#3e2045]">Projeto Convívio</p>
          </div>
          <div className="w-full flex flex-col items-center hover:animate-pulse bg-[#f6effa] pb-4 px-2 pt-2 rounded-2xl cursor-pointer hover:scale-105">
            <Image src={tiaRosa} className="rounded-2xl" alt="projeto convivio" />
            <p className="text-[1.2rem] mt-4 font-normal italic text-[#3e2045]">Tia Rosa Café</p>
          </div>
        </div>
      </div>
    </main>
  );
}
