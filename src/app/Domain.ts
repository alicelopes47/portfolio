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

export interface SkillsType {
    id: string;
    name: string;
    description: string;
    icon: string;
    fullDescription: string;
    proficiency: number;
};
