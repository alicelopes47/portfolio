import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { hrefsArray } from '../Domain'
import { BsSun } from 'react-icons/bs'

interface Props {
	links: string[]
	activeSection: string
	onClickTheme: () => void
}

const DropDown = ({ links, activeSection, onClickTheme }: Props) => {
	const [isOpen, setIsOpen] = useState(false)
	const navbarRef = useRef<HTMLDivElement | null>(null)

	function handleClose() {
		setIsOpen(false)
	}

	useEffect(() => {
		function handleClickOutside(event: { target: any }) {
			if (navbarRef.current && !navbarRef.current.contains(event.target)) {
				setIsOpen(false)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [navbarRef])

	return (
		<>
			<div className='fixed flex px-4 pt-2 justify-between bg-primary w-full z-50 top-0'>
				<div
					className="cursor-pointer p-2"
					onClick={() => setIsOpen(true)}
				>
					<FaBars className="text-3xl text-highlightText" />
				</div>
				<button
					onClick={onClickTheme}
					className={`rounded-t-2xl hover:bg-primaryLight py-2 px-4 bg-lightText text-highlightText`}
				>
					<BsSun className="text-3xl text-darkText" />
				</button>
			</div>
			{isOpen && (
				<div
					ref={navbarRef}
					data-aos="fade-right"
					className="bg-primary flex fixed top-0 z-50 h-full flex-col w-[40%] justify-start pt-[20%] items-start"
				>
					{links.map((link, index) => (
						<Link
							href={`#${hrefsArray[index]}`}
							onClick={handleClose}
							key={index}
							className={`text-start ml-7 text-highlightText text-xl pt-12 hover:text-lightText ${
								activeSection == hrefsArray[index] ? 'font-bold' : 'font-normal'
							}`}
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
