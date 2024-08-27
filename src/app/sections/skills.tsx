import { useEffect, useState } from 'react'
import { performRequest } from '../../../lib/datocms'
import { LinksPT, LinksUS, SectionProps, SkillsType, hrefs } from '../Domain'
import { FontIcon } from '../components/FontIcon'
import { Meteors } from '../ui/meteors'
import { fetchSkills } from '../api/datocms'
import { Loader } from '../ui/loader'

function Skills({ isEnUs }: SectionProps) {
	const [skills, setSkills] = useState<SkillsType[]>([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const fetchSkillsData = async () => {
			setLoading(true)
			const skills = await fetchSkills(isEnUs)
			setSkills(skills)
			setLoading(false)
		}
		fetchSkillsData()
	}, [isEnUs])

	return (
		<div
			className='md:px-24 px-12 scroll-mt-[10rem]'
			id={hrefs.SKILLS}
		>
			<h1
				className={`md:text-[2.5rem] text-3xl text-primaryBold md:text-start text-center  md:mb-12 mb-8`}
			>
				{isEnUs ? LinksUS.SKILLS.toLowerCase() : LinksPT.SKILLS.toLowerCase()}
			</h1>
			<div className='mt-5 grid gap-5 grid-cols-1 md:grid-cols-3 w-full'>
				{loading ? (
					<Loader />
				) : (
					skills?.map((skill: SkillsType) => (
						<>
							<Card
								proficiency={skill.proficiency}
								title={skill.name}
								icon={skill.icon}
								description={skill.description || skill.descriptionUs}
								key={skill.id}
							>
								<Meteors
									indx={skill.id}
									number={5}
								/>
							</Card>
						</>
					))
				)}
			</div>
		</div>
	)
}

export interface CardProps {
	title: string
	description: string
	icon: string
	proficiency: number
	children: React.ReactNode
}

const Card = ({
	title,
	description,
	icon,
	children,
	proficiency,
}: CardProps) => {
	return (
		<div
			id={hrefs.SKILLS}
			className='transition-all hover:animate-pulse rounded-2xl hover:scale-105'
		>
			<div
				data-aos='fade-up'
				className='rounded-2xl flex text-darkText flex-col p-4 h-[100%] cursor-pointer hover:bg-bgHover transition overflow-hidden bg-lightText border border-primary'
			>
				<div className='flex justify-between items-start'>
					<FontIcon iconType={icon} />
					<div className='h-[10%] w-2/6 bg-[#c7b8c1] rounded-full'>
						<div
							className={`h-full bg-icons text-right rounded-full`}
							style={{ width: `${proficiency}%` }}
						></div>
					</div>
				</div>
				<h1 className='font-bold text-start mt-4'>{title}</h1>
				<h1>{description}</h1>
				{children}
			</div>
		</div>
	)
}

export default Skills
