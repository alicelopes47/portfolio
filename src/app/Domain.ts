import { StaticImageData } from "next/image";
import { LiaReact } from "react-icons/lia";

export enum LinksPT {
    HOME = "Início",
    PROJECTS = "Projetos",
    SKILLS = "Habilidades",
    CONTACT = "Contato",
}

export interface ProjectsType {
    id?: number;
    title: string;
    description: string;
    image: {
        url: string;
        width: number;
        height: number;
    };
};

export interface Skills {
    title: string;
    description: string;
};

export const MockSkills: Skills[] = [
    {
        title: "React",
        description: "React é uma biblioteca JavaScript para criar interfaces de usuário.",
    },
    {
        title: "Next.js",
        description: "Next.js é um framework de desenvolvimento web front-end React de código aberto que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para aplicativos da web.",
    },
    {
        title: "Node.js",
        description: "Node.js é um ambiente de execução JavaScript server-side.",
    },
    {
        title: "TypeScript",
        description: "TypeScript é um superconjunto de JavaScript que adiciona tipagem estática e baseada em objetos à"
    },
    {
        title: "tailwind",
        description: "Tailwind é um framework CSS que permite a criação de interfaces de usuário de forma rápida e eficiente.",
    },
    {
        title: "Metodologias Ágeis",
        description: "Metodologias ágeis são um conjunto de práticas e valores que visam a entrega de software de forma eficiente e"
    },
    {
        title: "Kanba",
        description: "Kanba é uma metodologia ágil de gerenciamento de projetos que visa a entrega de software de forma eficiente e"
    },
    {
        title: "Inglês",
        description: "Inglês é uma língua falada em diversos países do mundo."
    }
];