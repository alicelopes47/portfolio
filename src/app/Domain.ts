import { StaticImageData } from "next/image";
import { LiaReact } from "react-icons/lia";

export enum LinksPT {
    HOME = "Início",
    PROJECTS = "Projetos",
    SKILLS = "Habilidades",
    CONTACT = "Contato",
}

export interface Projects {
    title: string;
    description: string;
    img: StaticImageData;
};

export interface Skills {
    title: string;
    description: string;
};

export const MockProjects: Projects[] = [
    {
        title: "Projeto Artemis",
        description: "Projeto Artemis é um projeto de desenvolvimento de software para a empresa Artemis.",
        img: require("../../public/assets/artemis.png"),
    },
    {
        title: "Projeto Convívio",
        description: "Projeto Convívio é um projeto de desenvolvimento de software para a empresa Convívio.",
        img: require("../../public/assets/convivio.png"),
    },
    {
        title: "Tia Rosa Café",
        description: "Tia Rosa Café é um projeto de desenvolvimento de software para a empresa Tia Rosa.",
        img: require("../../public/assets/tiarosa.png"),
    },
];

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