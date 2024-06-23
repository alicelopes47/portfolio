"use client"
import { useState } from "react"
import "./globals.css"
import { Menu } from "./components/Menu/Menu"

type ThemeTypes = "light" | "dark"

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

  return (
    <html lang="en">
      <body className={`${theme} bg-hexagonPattern`}>
      <Menu />
        {children}
      </body>
    </html>
  )
}
