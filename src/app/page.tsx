"use client"
import { Kodchasan } from "next/font/google"
const kodchasan = Kodchasan({ subsets: ["latin"], weight: ["200"] })
import Lottie from "@lottielab/lottie-player/react"
import Projects from "./sections/projects"
import { Menu } from "./components/Menu/Menu"
import { useEffect, useState } from "react"
import { linksPtArray, linksUsArray, hrefs } from "./Domain"
import { SocialLinks } from "./components/SocialLinks/SocialLinks"
import SkillsPage from "./sections/skills"
import AOS from "aos"
import useIsMobile from "./utils/UseIsMobile"
import DropDown from "./components/DropDown"
import Toggle from "rsuite/Toggle"
import "rsuite/Toggle/styles/index.css"

export default function Home() {
	const isMobile = useIsMobile()
	const [isEnUs, setIsEnUs] = useState(false)
	let [activeSection, setActiveSection] = useState("home")
	
	useEffect(() => {
		AOS.init()
	}, [])

	useEffect(() => {
		const sections = [hrefs.HOME, hrefs.SKILLS, hrefs.PROJECTS, hrefs.CONTACT].map(link => document.getElementById(link));
		const observerOptions = {
			root: null,
			rootMargin: "0px",
			threshold: 0.2,
		};
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setActiveSection(entry.target.id);
				}
			});
		}, observerOptions);
		sections.forEach((section) => {
			if (section) observer.observe(section);
		});
		return () => observer.disconnect();
	}, [isEnUs])

	return (
		<>
			<main className={`${kodchasan.className} bg-hexagonPattern relative pt-[10rem] light`}>
				{isMobile ? (
					<DropDown links={isEnUs ? linksUsArray : linksPtArray} activeSection={activeSection} />
				) : (
					<Menu activeSection={activeSection} links={isEnUs ? linksUsArray : linksPtArray} />
				)}
				<SocialLinks />
				<div className="fixed bottom-10 right-10 z-50">
					<Toggle
						color="violet"
						size={"lg"}
						checkedChildren="En-Us"
						onClick={() => setIsEnUs(!isEnUs)}
						unCheckedChildren="Pt-Br"
					/>
				</div>
				<div
					className={`md:w-[100vw] h-[90vh] flex px-2 flex-col items-center gap-12`}
					data-aos="fade-left"
				>
					<h1
						data-aos="fade-up"
						id={hrefs.HOME}
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
				<SkillsPage isEnUs={isEnUs} />
				<hr
					data-aos="fade-up"
					className="md:w-1/2 w-3/4 mx-auto my-12 border-[1.2px] border-primaryLight"
				/>
				<Projects isEnUs={isEnUs} />
			</main>
		</>
	)
}
