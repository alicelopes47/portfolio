"use client"
import { useEffect, useState } from "react"
import "./globals.css"
import { Menu } from "./components/Menu/Menu"
type ThemeTypes = "light" | "dark"
import AOS from "aos";
import "aos/dist/aos.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [theme, setTheme] = useState<ThemeTypes>("light")
  function defineTheme () { 
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <html lang="en">
      <body className={`${theme} bg-hexagonPattern`}>
      <Menu />
        {children}
      </body>
    </html>
  )
}
