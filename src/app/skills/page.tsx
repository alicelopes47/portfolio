import Image from "next/image"
import { LinksPT, type Skills } from "../Domain"
import { Meteors } from "../ui/meteors"
import { LiaReact } from "react-icons/lia"

interface Props {
	skills: Skills[]
}

export default function SkillsPage({ skills }: Props) {
	return (
		<div className="md:px-24 px-12 scroll-mt-[10rem]" id={LinksPT.SKILLS}>
			<h1 className={`md:text-[2.5rem] text-3xl text-primaryBold md:text-start text-center  md:mb-12 mb-8`}>
				habilidades
			</h1>
			<div className="mt-5 grid gap-5 grid-cols-1 md:grid-cols-3 w-full">
				{skills.map((skill, index) => (
					<>
						<Card
							title={skill.title}
							icon={<LiaReact className="text-6xl text-primary" />}
							description={skill.description}
							key={skill.title}
						>
							<Meteors indx={index} number={5} />
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
	icon: React.ReactNode
	children: React.ReactNode
}

const Card = ({ title, description, icon, children }: CardProps) => {
	return (
		<div className="transition-all hover:animate-pulse hover:bg-[#f6effa] rounded-2xl hover:scale-105">
			<div
				data-aos="fade-up"
				className="rounded-2xl flex flex-col items-start p-4 h-[100%] cursor-pointer hover:bg-primaryLight transition duration-200h-full overflow-hidden bg-white border border-primary"
			>
				<div className="flex justify-center p-4">{icon}</div>
				<div className="font-bold">{title}</div>
				<h1>{description}</h1>
				{children}
			</div>
		</div>
	)
}
