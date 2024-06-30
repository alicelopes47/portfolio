import Image from "next/image";
import type { Projects } from "../Domain";
import { LinksPT, MockProjects } from "../Domain";

interface Props {
    projects: Projects[];
}

export default function Projects () {
    return (
        <div className="md:px-24 px-12 scroll-mt-[10rem]"  id={LinksPT.PROJECTS}>
        <h1
          className={`md:text-[2.5rem] text-3xl text-primaryBold   md:text-start text-center md:mb-12 mb-8`}
        >
          projetos
        </h1>
        <div className="md:grid grid-cols-3 grid-rows-1 md:gap-12 gap-4 flex flex-col"> {/* div wrapper */} 
          {MockProjects.map((project, index) => (
            <div data-aos="fade-up" key={index} className="w-full flex flex-col items-center hover:animate-pulse bg-[#f6effa] pb-4 px-2 pt-2 rounded-2xl cursor-pointer hover:scale-105">
              <Image src={project.img} className="rounded-2xl" alt={project.title} />
              <p className="text-[1.2rem] mt-4 font-normal italic text-[#3e2045]">{project.title}</p>
            </div>
          ))}
        </div>
      </div>
    )
}
    