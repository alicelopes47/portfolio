import productSans from 'next/font/local'
import Link from 'next/link'

const productSansRegular = productSans({ src: '../../../../public/fonts/product-sans-regular.ttf' })
import { usePathname } from 'next/navigation'
import { useState } from 'react'


export const Menu = () => {
  const pathname = usePathname()
  const [section, setSection] = useState('home')
  const isProjects = section === 'projects'
  const isHome = section === 'home'
  const isSkills = pathname === 'skills'
  const isContact = pathname === 'contact'

  return (
    <div className={`${productSansRegular.className} sticky z-50 top-0 w-full flex bg-primary text-white md:text-2xl text-lg pt-2 justify-center`}>
      <Link onClick={() => setSection('home')}  className={`p-[1rem] hover:bg-primaryLight hover:text-black rounded-t-3xl md:p-[2rem] ${isHome ? ' bg-white text-black' : ''}`} href="/">Home</Link>
      <Link onClick={() => setSection('projects')} className={`p-[1rem] hover:bg-primaryLight hover:text-black rounded-t-3xl md:p-[2rem] ${isProjects ? ' bg-white text-black' : ''}`} scroll href="#projects">Projetos</Link>
      <Link onClick={() => setSection('skills')} className={`p-[1rem] hover:bg-primaryLight hover:text-black rounded-t-3xl md:p-[2rem] ${isSkills ? ' bg-white text-black' : ''}`} href="#skills">Habilidades</Link>
      <Link onClick={() => setSection('contact')} className={`p-[1rem] hover:bg-primaryLight hover:text-black rounded-t-3xl md:p-[2rem] ${isContact ? ' bg-white text-black' : ''}`}href="#contact">Contato</Link>
    </div>
  )
}