'use client'
import { Kodchasan } from 'next/font/google'
const kodchasan = Kodchasan({ subsets: ['latin'], weight: ['200'] })
import Projects from './sections/projects'
import { Menu } from './components/Menu'
import { useEffect, useState } from 'react'
import { linksPtArray, linksUsArray, hrefs, ThemeTypes } from './Domain'
import { SocialLinks } from './components/SocialLinks'
import SkillsPage from './sections/skills'
import AOS from 'aos'
import useIsMobile from './utils/UseIsMobile'
import DropDown from './components/DropDown'
import Toggle from 'rsuite/Toggle'
import 'rsuite/Toggle/styles/index.css'
import Hero from './sections/hero'
import { Divider } from './ui/divider'
import { useLoading } from './context/LoadingProvider'
import Loading from './loading'
import { useUserPreferences } from './context/UserPreferencesProvider.tsx'

export default function Home() {
	const isMobile = useIsMobile()
	const { theme, setTheme, isEnUs, setIsEnUs } = useUserPreferences()
	const { loading, setLoading } = useLoading()
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

	if (loading) {
		return <Loading />
	}

	return (
		<>
			<main
				className={`${kodchasan.className} bg-hexagonPattern relative md:pt-[10rem] pt-[5em] pb-[5em] ${theme}`}
			>
				{isMobile ? (
					<DropDown
						links={isEnUs ? linksUsArray : linksPtArray}
						activeSection={activeSection}
						onClickTheme={() => setTheme(theme === 'light' ? 'dark' : 'light')}
					/>
				) : (
					<Menu
						onClickTheme={() => setTheme(theme === 'light' ? 'dark' : 'light')}
						activeSection={activeSection}
						links={isEnUs ? linksUsArray : linksPtArray}
					/>
				)}
				<SocialLinks />
				<Hero isEnUs={isEnUs} />
				<Divider />
				<SkillsPage isEnUs={isEnUs} />
				<Divider />
				<Projects isEnUs={isEnUs} />
			</main>
		</>
	)
}
