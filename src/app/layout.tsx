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
      <body className={`bg-hexagonPattern`}>
        {children}
      </body>
    </html>
  )
}
