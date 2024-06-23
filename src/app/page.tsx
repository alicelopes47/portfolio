'use client'
import { Kodchasan } from 'next/font/google'
const kodchasan = Kodchasan({subsets: ['latin'], weight: ['200']})

export default function Home() {
  return (
    <main>
      <div className={`${kodchasan.className} flex flex-col items-center`}>
        <h1 className={`text-3xl md:text-5xl`}>Olá, meu nome é <span className="text-primaryBold">Alice Lopes</span></h1>
        <h1 className={`text-3xl text-primaryBold`}>Desenvolvedora web.</h1>
      </div>
    </main>
  )
}
