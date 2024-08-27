'use server'

import { performRequest } from "../../../lib/datocms"
import { ProjectsType, SkillsType } from "../Domain"

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
  }`

const PROJECTS_CONTENT_US = `
  query Projects {
    allProjects {
      id
      titleUs
      descriptionUs
      image {
        url
        width
        height
      }
    }
  }`

  const SKILLS_CONTENT = `
  query Skills {
    allSkills(
	  orderBy: proficiency_DESC
	) {
		id
		name
		description
	  icon
	  fullDescription
	  fullDescriptionUs
	  descriptionUs
	  proficiency
    }
  }`

const SKILLS_CONTENT_US = `
  query Skills {
    allSkills(
	  orderBy: proficiency_DESC
	) {
		id
		name
	  icon
	  fullDescriptionUs
	  descriptionUs
	  proficiency
    }
  }`

export async function fetchProjects(isEnUs: boolean) {
	const response = await performRequest({
		query: isEnUs ? PROJECTS_CONTENT_US : PROJECTS_CONTENT,
	})
	return response.allProjects as ProjectsType[]
}

export async function fetchSkills(isEnUs: boolean) {
	const response = await performRequest({
		query: isEnUs ? SKILLS_CONTENT_US : SKILLS_CONTENT,
	})
	return response.allSkills as SkillsType[]
}