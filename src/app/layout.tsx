import './globals.css'
import 'aos/dist/aos.css'
import FavIcon from './favicon.ico'
import { LoadingProvider } from './context/LoadingProvider'

export const metadata = {
	title: 'Alice Lopes',
	description: 'Desenvolvedora Web, conheça meus projetos e habilidades.',
	favicon: FavIcon,
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='pt-BR'>
			<LoadingProvider>
				<body className={`bg-hexagonPattern`}>{children}</body>
			</LoadingProvider>
		</html>
	)
}
