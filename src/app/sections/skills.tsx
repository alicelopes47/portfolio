import { useEffect, useState } from "react"
import { performRequest } from "../../../lib/datocms"
import { LinksPT, SkillsType } from "../Domain"
import { FontIcon } from "../components/FontIcon/FontIcon"
import { Meteors } from "../ui/meteors"
import { LiaReact } from "react-icons/lia"

const SKILLS_CONTENT = `
  query Skills {
    allSkills {
      id
      name
      description
	  icon
	  fullDescription
    }
  }`

  async function fetchSkills() {
	const response = await performRequest({ query: SKILLS_CONTENT });
	return response.allSkills;
  }

function Skills () {
	const [skills, setSkills] = useState([]);
  
	useEffect(() => {
	  fetchSkills().then((skills) => setSkills(skills));
	}, []);

	return (
		<div className="md:px-24 px-12 scroll-mt-[10rem]" id={LinksPT.SKILLS}>
			<h1 className={`md:text-[2.5rem] text-3xl text-primaryBold md:text-start text-center  md:mb-12 mb-8`}>
				habilidades
			</h1>
			<div className="mt-5 grid gap-5 grid-cols-1 md:grid-cols-3 w-full">
				{skills?.map((skill : SkillsType) => (
					<>
						<Card
							title={skill.name}
							icon={skill.icon}
							description={skill.description}
							key={skill.id}
						>
							<Meteors indx={skill.id} number={5} />
						</Card>
					</>
				))}
			</div>
		</div>
	)
}

export interface CardProps {
	title: string
	description: string
	icon: string
	children: React.ReactNode
}

const Card = ({ title, description, icon, children }: CardProps) => {
	return (
		<div className="transition-all hover:animate-pulse hover:bg-[#f6effa] rounded-2xl hover:scale-105">
			<div
				data-aos="fade-up"
				className="rounded-2xl flex text-darkText flex-col p-4 h-[100%] cursor-pointer hover:bg-primaryLight transition duration-200h-full overflow-hidden bg-lightText border border-primary"
			>
				<FontIcon iconType={icon} />
				<h1 className="font-bold text-start mt-4">{title}</h1>
				<h1>{description}</h1>
				{children}
			</div>
		</div>
	)
}

export default Skills;