export enum LinksPT {
  HOME = 'Início',
  SKILLS = 'Habilidades',
  CAREER = 'Carreira',
  PROJECTS = 'Projetos',
}

export enum LinksUS {
  HOME = 'Home',
  SKILLS = 'Skills',
  CAREER = 'Career',
  PROJECTS = 'Projects',
}

export enum hrefs {
  HOME = 'home',
  SKILLS = 'skills',
  CAREER = 'career',
  PROJECTS = 'projects',
}

export type ThemeTypes = 'light' | 'dark';

export const linksPtArray = Object.values(LinksPT);
export const linksUsArray = Object.values(LinksUS);
export const hrefsArray = Object.values(hrefs);

export interface ProjectsType {
  id?: number;
  title: string;
  description: string;
  titleUs: string;
  href?: string;
  descriptionUs: string;
  image: {
    url: string;
    width: number;
    height: number;
  };
}

export interface SkillsType {
  id: string;
  name: string;
  description: string;
  icon: string;
  fullDescription: string;
  proficiency: number;
  fullDescriptionUs: string;
  descriptionUs: string;
}

export interface HeroTypes {
  titlePt: string;
  subtitlePt: string;
  titleUs: string;
  subtitleUs: string;
}

export interface SectionProps {
  isEnUs: boolean;
}

export interface CareerType {
  text: string;
  date: string;
  categoryicon: string;
  finaldescription: string;
  textUs: string;
  dateUs: string;
  finaldescriptionUs: string;
  description?: string;
}
