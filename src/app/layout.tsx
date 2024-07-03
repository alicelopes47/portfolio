'use client'
import { useState } from "react";
import "./globals.css"
type ThemeTypes = "light" | "dark"
import "aos/dist/aos.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [theme, setTheme] = useState<ThemeTypes>("light")

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>Alice Lopes</title>
      </head>
      <body className={`bg-hexagonPattern ${theme}`}>
        {children}
      </body>
    </html>
  )
}
