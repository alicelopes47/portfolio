import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { FaBars } from "react-icons/fa"

interface Props {
	links: string[]
	activeSection: string
}

const DropDown = ({ links, activeSection }: Props) => {
	const [isOpen, setIsOpen] = useState(false)
	const navbarRef = useRef<HTMLDivElement | null>(null)

	function handleClose() {
		setIsOpen(false)
	}

	useEffect(() => {
		function handleClickOutside(event: { target: any }) {
			if (navbarRef.current && !navbarRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [navbarRef]);

	return (
		<>
			<div className="fixed bg-primary w-full z-50 top-0 p-4 cursor-pointer" onClick={() => setIsOpen(true)}>
				<FaBars className="text-2xl text-lightText" />
			</div>
			{isOpen && (
				<div ref={navbarRef} data-aos="fade-right" className="bg-primary flex fixed top-0 z-50 h-full flex-col w-[40%] justify-start pt-[20%] items-start">
					{links.map((link, index) => (
						<Link
							key={index}
                            onClick={handleClose}
							href={`#${link}`}
							className={`text-start ml-7 text-xl pt-12 hover:text-lightText ${activeSection == link ? " text-lightText" : ""}`}
						>
							{link}
						</Link>
					))}
				</div>
			)}
		</>
	)
}

export default DropDown
