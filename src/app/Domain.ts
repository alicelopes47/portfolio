import { StaticImageData } from "next/image";

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