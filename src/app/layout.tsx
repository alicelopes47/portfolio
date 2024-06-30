import "./globals.css"
type ThemeTypes = "light" | "dark"
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
      </head>
      <body className={`bg-hexagonPattern`}>
        {children}
      </body>
    </html>
  )
}
