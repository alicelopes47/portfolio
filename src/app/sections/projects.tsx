import Image from 'next/image';
import { useEffect, useState } from 'react';
import { LinksPT, LinksUS, ProjectsType, SectionProps, hrefs } from '../Domain';
import { fetchProjects } from '../api/datocms';

function Projects({ isEnUs }: SectionProps) {
  const [projects, setProjects] = useState<ProjectsType[]>([]);

  useEffect(() => {
    const fetchProjectsData = async () => {
      const projects = await fetchProjects(isEnUs);
      setProjects(projects);
    };
    fetchProjectsData();
  }, [isEnUs]);

  return (
    <div className="md:px-24 px-4 scroll-mt-[10rem]" id={hrefs.PROJECTS}>
      <h1
        className={`md:text-[2.5rem] text-3xl text-primaryBold md:text-start text-center md:mb-12 mb-8`}
      >
        {isEnUs
          ? LinksUS.PROJECTS.toLowerCase()
          : LinksPT.PROJECTS.toLowerCase()}
      </h1>
      <div className="md:grid grid-cols-3 grid-rows-1 md:gap-12 gap-4 flex flex-col">
        {projects?.map((project: ProjectsType) => (
          <a href={project.href} key={project.id} target="_blank">
            <div
              data-aos="fade-up"
              className="w-full gap-2 p-4 rounded-xl flex flex-col  border border-primary cursor-pointer hover:bg-bgHover hover:scale-105"
            >
              <p className="text-[1.4rem] text-primaryBold text-center">
                {project.title || project.titleUs}
              </p>
              <Image
                src={project.image.url}
                height={project.image.height}
                width={project.image.width}
                className="rounded-2xl"
                alt={project.title}
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;
