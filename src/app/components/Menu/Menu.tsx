import productSans from 'next/font/local'

const productSansRegular = productSans({ src: '../../../../public/fonts/product-sans-regular.ttf' })
import { usePathname } from 'next/navigation'


export const Menu = () => {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const isProjects = pathname === '/projects'
  const isSkills = pathname === '/skills'
  const isContact = pathname === '/contact'
  return (
    <div className={`${productSansRegular.className} sticky top-0 w-full flex bg-primary text-white md:text-2xl text-lg pt-2 justify-center`}>
      <a  className={`p-[1rem] hover:bg-primaryLight hover:text-black rounded-t-3xl md:p-[2rem] ${isHome ? ' bg-white text-black' : ''}`} href="/">Home</a>
      <a className={`p-[1rem] hover:bg-primaryLight hover:text-black rounded-t-3xl md:p-[2rem] ${isProjects ? ' bg-white text-black' : ''}`} href="/projects">Projetos</a>
      <a className={`p-[1rem] hover:bg-primaryLight hover:text-black rounded-t-3xl md:p-[2rem] ${isSkills ? ' bg-white text-black' : ''}`} href="/skills">Habilidades</a>
      <a className={`p-[1rem] hover:bg-primaryLight hover:text-black rounded-t-3xl md:p-[2rem] ${isContact ? ' bg-white text-black' : ''}`}href="/contact">Contato</a>
    </div>
  )
}