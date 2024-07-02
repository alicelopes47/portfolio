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
import useIsMobile from "./utils/UseIsMobile"; 
import DropDown from "./components/DropDown"
import { LiaCatSolid, LiaCodeSolid, LiaGamepadSolid, LiaHeadphonesSolid, LiaKeyboard, LiaRocketSolid } from "react-icons/lia"

export default function Home() {
	const isMobile = useIsMobile(); 
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
			<main className={`${kodchasan.className} bg-hexagonPattern relative pt-[10rem] light`}>
				{isMobile ? <DropDown links={linksPt} activeSection={activeSection} /> : <Menu activeSection={activeSection} links={linksPt} /> }
				<SocialLinks />	
				<span className="left-[15%] -rotate-45 absolute md:top-[7%] top-[10%]">
					<LiaGamepadSolid data-aos="fade-right" data-aos-delay="1000"  className="text-primary md:text-9xl text-5xl " />
				</span>
				<span className="md:left-[15%] left-[5%] md:-rotate-45 -rotate-45 absolute md:top-[25%] top-[3%]">
					<LiaCodeSolid data-aos="fade-right" data-aos-delay="1000"  className="text-primary text-6xl" />
				</span>
				<span className="rotate-6 absolute md:top-[15%] top-[3%] md:left-[5%] left-[45%]">
					<LiaKeyboard data-aos="fade-right" data-aos-delay="1000"  className="text-primary md:text-8xl text-4xl" />
				</span>
				<span className="right-[10%] rotate-6 absolute md:top-[40%] top-[3%]">
					<LiaHeadphonesSolid data-aos="fade-left" data-aos-delay="1500"  className="text-primary md:text-9xl text-4xl" />
				</span>
				<span className="right-[25%] absolute md:top-[30%] top-[10%]">
					<LiaRocketSolid data-aos="fade-left" data-aos-delay="1500"  className="text-primary md:text-8xl text-4xl" />
				</span>
				<span className="right-[5%] -rotate-45 absolute md:top-[25%] top-[9%]">
					<LiaCatSolid data-aos="fade-left" data-aos-delay="1500"  className="text-primary md:text-6xl text-3xl" />
				</span>
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
						className="md:w-[25%] w-[85%] pt-10"
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
