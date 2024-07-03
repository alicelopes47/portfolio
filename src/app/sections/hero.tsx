import Lottie from "@lottielab/lottie-player/react"
import { HeroTypes, SectionProps, hrefs } from "../Domain"
import { performRequest } from "../../../lib/datocms"
import { useEffect, useState } from "react"

const HERO_PT = `
  query Hero {
    hero {
      titlePt
      subtitlePt
    }
  }`

const HERO_US = `
  query Hero {
    hero {
      titleUs
      subtitleUs
    }
  }`

async function fetchHeroSection(isEnUs: boolean) {
	const response = await performRequest({ query: isEnUs ? HERO_US : HERO_PT })
	return response.hero
}

function Hero({ isEnUs }: SectionProps) {
	const [hero, setHero] = useState<HeroTypes | null>(null)

	useEffect(() => {
		fetchHeroSection(isEnUs).then((hero) => setHero(hero))
	}, [isEnUs])

	return (
		<div
			className={`md:w-[100vw] h-[90vh] flex px-2 flex-col items-center gap-12`}
			data-aos="fade-left"
		>
			<h1
				data-aos="fade-up"
				id={hrefs.HOME}
				className={`md:text-[3rem] scroll-mt-[10rem] text-center text-3xl`}
			>
				{hero?.titlePt || hero?.titleUs}
				<span className="text-primaryBold">Alice Lopes</span>
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
				{hero?.subtitlePt || hero?.subtitleUs}
			</h1>
		</div>
	)
}

export default Hero
