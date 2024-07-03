export enum LinksPT {
    HOME = "Início",
    SKILLS = "Habilidades",
    PROJECTS = "Projetos",
    CONTACT = "Contato",
}

export enum LinksUS {
    HOME = "Home",
    SKILLS = "Skills",
    PROJECTS = "Projects",
    CONTACT = "Contact",
}


export enum hrefs {
    HOME = "home",
    SKILLS = "skills",
    PROJECTS = "projects",
    CONTACT = "contact"
}

export const linksPtArray = Object.values(LinksPT)
export const linksUsArray = Object.values(LinksUS);
export const hrefsArray = Object.values(hrefs);


export interface ProjectsType {
    id?: number;
    title: string;
    description: string;
    titleUs: string;
    descriptionUs: string;
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
    fullDescriptionUs: string;
    descriptionUs: string;
};
