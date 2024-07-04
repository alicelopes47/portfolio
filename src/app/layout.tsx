'use client'
import { useState } from "react";
import "./globals.css"
import "aos/dist/aos.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>Alice Lopes</title>
      </head>
      <body className={`bg-hexagonPattern`}>
        {children}
      </body>
    </html>
  )
}
