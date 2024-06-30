import Image from "next/image";
import { useEffect, useState } from "react";
import { LinksPT, ProjectsType } from "../Domain";
import { performRequest } from "../../../lib/datocms";

const PROJECTS_CONTENT = `
  query Projects {
    allProjects {
      id
      title
      description
      image {
        url
        width
        height
      }
    }
  }`;

async function fetchProjects() {
  const response = await performRequest({ query: PROJECTS_CONTENT });
  return response.allProjects;
}

function Projects() {
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    fetchProjects().then((projects) => setProjects(projects));
  }, []);

  return (
    <div className="md:px-24 px-12 scroll-mt-[10rem]" id={LinksPT.PROJECTS}>
      <h1 className={`md:text-[2.5rem] text-3xl text-primaryBold md:text-start text-center md:mb-12 mb-8`}>
        projetos
      </h1>
      <div className="md:grid grid-cols-3 grid-rows-1 md:gap-12 gap-4 flex flex-col">
        {projects?.map((project: ProjectsType) => (
          <div
            data-aos="fade-up"
            key={project.id}
            className="w-full flex flex-col items-center hover:animate-pulse bg-[#f6effa] pb-4 px-2 pt-2 rounded-2xl cursor-pointer hover:scale-105"
          >
            <Image src={project.image.url} height={project.image.height} width={project.image.width}  className="rounded-2xl" alt={project.title} />
            <p className="text-[1.2rem] mt-4 font-normal italic text-primaryBold">
              {project.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;