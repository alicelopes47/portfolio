import ArtemisImg from "../../../public/assets/artemis.png";
import convivio from '../../../public/assets/convivio.png'
import tiaRosa from '../../../public/assets/tiarosa.png'
import Image from "next/image";

export default function Projects () {
    return (
        <div id="projects" className="md:px-24 px-6">
        <h1
          className={`md:text-[2.5rem] text-3xl text-primaryBold   md:text-start text-center md:mb-12 mb-8`}
        >
          projetos
        </h1>
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
    )
}
    