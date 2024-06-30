"use client"
import { Kodchasan } from "next/font/google"
const kodchasan = Kodchasan({ subsets: ["latin"], weight: ["200"] })
import Lottie from "@lottielab/lottie-player/react"
import Projects from "./sections/projects"
import { Menu } from "./components/Menu/Menu"
import { useEffect, useState } from "react"
import { LinksPT } from "./Domain"
import { SocialLinks } from "./components/SocialLinks/SocialLinks"
import SkillsPage from "./sections/skills"
import AOS from "aos";

export default function Home() {
	let [activeSection, setActiveSection] = useState("/")
	let linksPt = [LinksPT.HOME, LinksPT.SKILLS, LinksPT.PROJECTS, LinksPT.CONTACT]

	useEffect(() => {
		AOS.init()
	}, [])


	useEffect(() => {
		let home = document.getElementById(LinksPT.HOME)
		let projects = document.getElementById(LinksPT.PROJECTS)
		let skills = document.getElementById(LinksPT.SKILLS)
		let contact = document.getElementById(LinksPT.CONTACT)

		let sections = [home, skills, projects, contact]

		const observerOptions = {
			root: null,
			rootMargin: "0px",
			threshold: 0.2,
		}

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					if (entry.target.id == LinksPT.HOME) {
						setActiveSection(LinksPT.HOME)
					}
					if (entry.target.id == LinksPT.PROJECTS) {
						setActiveSection(LinksPT.PROJECTS)
					}
					if (entry.target.id == LinksPT.SKILLS) {
						setActiveSection(LinksPT.SKILLS)
					}
					if (entry.target.id == LinksPT.CONTACT) {
						setActiveSection(LinksPT.CONTACT)
					}
				}
			})
		}, observerOptions)

		sections?.forEach((section) => {
			section && observer.observe(section)
		})
	}, [])

	return (
		<>
			<main className={`${kodchasan.className}  bg-hexagonPattern pt-[10rem] light`}>
				<Menu links={linksPt} activeSection={activeSection} />
				<SocialLinks />
				<div
					className={`md:w-[100vw] h-[100vh] flex px-2 flex-col items-center gap-12`}
					data-aos="fade-left"
				>
					<h1
						data-aos="fade-up"
						id={LinksPT.HOME}
						className={`md:text-[3rem] scroll-mt-[10rem] text-center text-3xl`}
					>
						Olá, meu nome é <span className="text-primaryBold">Alice Lopes</span>
					</h1>
					<Lottie
						src="https://cdn.lottielab.com/l/3KEkh3sM9Tnhxu.json"
						autoplay
						className="md:w-[25%] w-[85%]"
					/>
					<h1
						className={`md:text-[3rem] text-2xl text-primaryBold`}
						data-aos="fade-down"
						data-aos-easing="linear"
						data-aos-duration="1500"
					>
						Desenvolvedora web.
					</h1>
				</div>
				<hr
					data-aos="fade-up"
					className="md:w-1/2 w-3/4 mx-auto my-12 border-[1.2px] border-primaryLight"
				/>
				<SkillsPage />
				<hr
					data-aos="fade-up"
					className="md:w-1/2 w-3/4 mx-auto my-12 border-[1.2px] border-primaryLight"
				/>
				<Projects />
			</main>
		</>
	)
}
