"use client";
import { Kodchasan } from "next/font/google";
const kodchasan = Kodchasan({ subsets: ["latin"], weight: ["200"] });
import Lottie from "@lottielab/lottie-player/react";
import Projects from "./projects/page";
import { Menu } from "./components/Menu/Menu";
import { useEffect, useState } from "react";

export default function Home() {
  let [activeSection, setActiveSection] = useState('/')
  let links = ["Início", "Projetos", "Habilidades", "Contato"]

  useEffect(() => {

      let home = document.getElementById('Início')
      let projects = document.getElementById('Projetos')
      let skills = document.getElementById('Habilidades')
      let contact = document.getElementById('Contato')

      let sections = [home, projects, skills, contact]

      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      };


    const observer = new IntersectionObserver(entries => {
  
      entries.forEach(entry => {
          if(entry.isIntersecting){
              if (entry.target.id == 'Início'){
                setActiveSection('Início')
              }
              if (entry.target.id == 'Projetos'){
                setActiveSection('Projetos')
              }
              if (entry.target.id == 'Habilidades'){
                setActiveSection('Habilidades')
              }
              if (entry.target.id == 'Contato'){
                setActiveSection('Contato')
              }
          }
      })
  }, observerOptions)
  
  sections?.forEach(section => {
    section && observer.observe(section)
  })
  }, [])
  
  return (
    <>
    <Menu links={links} activeSection={activeSection} />
    <main className={`${kodchasan.className}`}>
      <div id="Início" className={`w-[100vw] h-[100vh] flex px-2 flex-col items-center md:mt-14 mt-8 gap-12`} data-aos="fade-left">
        <h1
          data-aos="fade-up"
          className={`md:text-[3rem] text-center text-3xl`}
        >
          Olá, meu nome é <span className="text-primaryBold">Alice Lopes</span>
        </h1>
        <Lottie
          src="https://cdn.lottielab.com/l/3KEkh3sM9Tnhxu.json"
          autoplay

          className="md:w-[25%] w-[85%]"
        />
        <h1
          className={`md:text-[3rem] text-2xl text-primaryBold`}
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          Desenvolvedora web.
        </h1>
      </div>
      <hr data-aos="fade-up" className="md:w-1/2 w-3/4 mx-auto my-24 border-[1.2px] border-primaryLight" />
      <Projects />
    </main>
    </>
  );
}
