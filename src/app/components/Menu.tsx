import { ThemeTypes, hrefsArray } from "@/app/Domain"
import productSans from "next/font/local"
import Link from "next/link"
import { BsSun } from "react-icons/bs"

const productSansRegular = productSans({
	src: "../../../public/fonts/product-sans-regular.ttf",
})

interface Links {
	links: string[]
	activeSection: string
	onClickTheme: () => void
	theme: ThemeTypes
}

export const Menu = ({ links, activeSection, onClickTheme }: Links) => {
	return (
		<div
			className={`${productSansRegular.className} fixed z-50 top-0 w-full flex bg-primary text-2xl pt-2 justify-center`}>
			{links.map((link, index) => (
				<Link	
					href={`#${hrefsArray[index]}`}
					key={index}
					scroll
					className={`hover:bg-primaryLight hover:text-darkText rounded-t-3xl p-[2rem] ${
						activeSection == hrefsArray[index] ? " bg-lightText text-darkText" : "text-highlightText"
					}`}>
					{link}
				</Link>
			))}
			<button onClick={onClickTheme}  className={`p-[2rem] rounded-t-3xl hover:bg-primaryLight bg-lightText text-highlightText`}>
				<BsSun className="text-3xl text-darkText" />
			</button>
		</div>
	)
}
