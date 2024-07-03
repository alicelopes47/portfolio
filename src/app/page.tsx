'use client'
import { Kodchasan } from 'next/font/google'
const kodchasan = Kodchasan({ subsets: ['latin'], weight: ['200'] })
import Projects from './sections/projects'
import { Menu } from './components/Menu'
import { useEffect, useState } from 'react'
import { linksPtArray, linksUsArray, hrefs } from './Domain'
import { SocialLinks } from './components/SocialLinks'
import SkillsPage from './sections/skills'
import AOS from 'aos'
import useIsMobile from './utils/UseIsMobile'
import DropDown from './components/DropDown'
import Toggle from 'rsuite/Toggle'
import 'rsuite/Toggle/styles/index.css'
import Hero from './sections/hero'
import { Divider } from './ui/divider'

export default function Home() {
	const isMobile = useIsMobile()
	const [isEnUs, setIsEnUs] = useState(false)
	let [activeSection, setActiveSection] = useState('home')

	useEffect(() => {
		AOS.init()
	}, [])

	useEffect(() => {
		const sections = [hrefs.HOME, hrefs.SKILLS, hrefs.PROJECTS, hrefs.CONTACT].map((link) =>
			document.getElementById(link)
		)
		const observerOptions = {
			root: null,
			rootMargin: '0px',
			threshold: 0.2,
		}
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setActiveSection(entry.target.id)
				}
			})
		}, observerOptions)
		sections.forEach((section) => {
			if (section) observer.observe(section)
		})
		return () => observer.disconnect()
	}, [isEnUs])

	return (
		<>
			<main className={`${kodchasan.className} bg-hexagonPattern relative md:pt-[10rem] pt-[5em] light`}>
				{isMobile ? (
					<DropDown
						links={isEnUs ? linksUsArray : linksPtArray}
						activeSection={activeSection}
					/>
				) : (
					<Menu
						activeSection={activeSection}
						links={isEnUs ? linksUsArray : linksPtArray}
					/>
				)}
				<SocialLinks />
				<div className="fixed md:bottom-10 bottom-4 md:right-10 right-4 z-50">
					<Toggle
						color="violet"
						size={'lg'}
						checkedChildren="En-Us"
						onClick={() => setIsEnUs(!isEnUs)}
						unCheckedChildren="Pt-Br"
					/>
				</div>
				<Hero isEnUs={isEnUs} />
				<Divider />
				<SkillsPage isEnUs={isEnUs} />
				<Divider />
				<Projects isEnUs={isEnUs} />
			</main>
		</>
	)
}
