import { hrefsArray } from "@/app/Domain"
import productSans from "next/font/local"
import Link from "next/link"

const productSansRegular = productSans({
	src: "../../../public/fonts/product-sans-regular.ttf",
})

interface Links {
	links: string[]
	activeSection: string
}

export const Menu = ({ links, activeSection }: Links) => {
	return (
		<div
			className={`${productSansRegular.className} fixed z-50 top-0 w-full flex bg-primary text-highlightText md:text-2xl text-lg pt-2 justify-center`}>
			{links.map((link, index) => (
				<Link	
					href={`#${hrefsArray[index]}`}
					key={index}
					scroll
					className={`p-[1rem] hover:bg-primaryLight hover:text-darkText rounded-t-3xl md:p-[2rem] ${
						activeSection == hrefsArray[index] ? " bg-lightText text-darkText" : ""
					}`}>
					{link}
				</Link>
			))}
		</div>
	)
}
