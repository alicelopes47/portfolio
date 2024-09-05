import { useEffect, useState } from 'react'
import { performRequest } from '../../../lib/datocms'
import { LinksPT, LinksUS, SectionProps, SkillsType, hrefs } from '../Domain'
import { FontIcon } from '../components/FontIcon'
import { Meteors } from '../ui/meteors'
import { fetchSkills } from '../api/datocms'
import { Loader } from '../ui/loader'
import useIsMobile from '../utils/UseIsMobile'

function Skills({ isEnUs }: SectionProps) {
	const [skills, setSkills] = useState<SkillsType[]>([])
	const [loading, setLoading] = useState(false)
	const isMobile = useIsMobile()

	useEffect(() => {
		const fetchSkillsData = async () => {
			setLoading(true)
			const skills = await fetchSkills(isEnUs)
			setSkills(skills)
			setLoading(false)
		}
		fetchSkillsData()
	}, [isEnUs])

	const [selectedSkill, setSelectedSkill] = useState<SkillsType | null>()

	return (
		<>
			{selectedSkill && <Modal handleOverlayClick={() => setSelectedSkill(null)} skill={selectedSkill}></Modal>}
			<div
				className='md:px-24 px-12 scroll-mt-[10rem]'
				id={hrefs.SKILLS}
			>
				<h1
					className={`md:text-[2.5rem] text-3xl text-primaryBold md:text-start text-center  md:mb-12 mb-8`}
				>
					{isEnUs ? LinksUS.SKILLS.toLowerCase() : LinksPT.SKILLS.toLowerCase()}
				</h1>

				<div
					className={`mt-5 ${
						isMobile
							? 'flex flex-wrap justify-center gap-8'
							: 'grid gap-5 grid-cols-1 md:grid-cols-3'
					} w-full`}
				>
					{loading ? (
						<Loader />
					) : (
						skills?.map((skill: SkillsType) => (
							<>
								{isMobile ? (
									<Button
										proficiency={skill.proficiency}
										title={skill.name}
										icon={skill.icon}
										onClick={() => setSelectedSkill(skill)}
										description={skill.description || skill.descriptionUs}
										key={skill.id}
									/>
								) : (
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
								)}
							</>
						))
					)}
				</div>
			</div>
		</>
	)
}

export interface CardProps {
	title: string
	description: string
	onClick?: () => void
	icon: string
	proficiency: number
	children?: React.ReactNode
}

export interface ModalProps {
	skill: SkillsType
	handleOverlayClick: () => void;
}

const Modal = ({ skill, handleOverlayClick }: ModalProps) => {
	return (
		<div onClick={handleOverlayClick} className='fixed z-50 inset-0 bg-black bg-opacity-10 flex justify-center items-center'>
			<div
				id={hrefs.SKILLS}
				className='fixed top-[30%] w-[65%] right-center'
			>
				<div
					data-aos='fade-up'
					className='rounded-2xl flex text-darkText  z-50 flex-col p-4 h-[100%] cursor-pointer hover:bg-bgHover transition overflow-hidden bg-lightText border border-primary'
				>
					<div className='flex justify-between items-start'>
						<FontIcon iconType={skill.icon} />
						<div className='h-[10%] w-2/6 bg-[#c7b8c1] rounded-full'>
							<div
								className={`h-full bg-icons text-right rounded-full`}
								style={{ width: `${skill.proficiency}%` }}
							></div>
						</div>
					</div>
					<h1 className='font-bold text-start mt-4'>{skill.name}</h1>
					<h1>{skill.description}</h1>
				</div>
			</div>
		</div>
	)
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

const Button = ({
	title,
	description,
	icon,
	proficiency,
	onClick,
}: CardProps) => {
	return (
		<div
			id={hrefs.SKILLS}
			onClick={onClick}
			className='transition-all w-[4.2rem] hover:animate-pulse rounded-2xl hover:scale-105'
		>
			<div
				data-aos='fade-up'
				className='rounded-2xl cursor-pointer hover:bg-bgHover h-[4.2rem] flex items-center justify-center transition overflow-hidden bg-lightText border border-primary'
			>
				<div className='flex justify-center items-center'>
					<FontIcon iconType={icon} />
				</div>
			</div>
		</div>
	)
}

export default Skills
