import './globals.css'
import 'aos/dist/aos.css'
import FavIcon from './favicon.ico'
import { LoadingProvider } from './context/LoadingProvider'
import { UserPreferencesProvider } from './context/UserPreferencesProvider.tsx'

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
			<body className={`bg-hexagonPattern`}>
				<LoadingProvider>
					<UserPreferencesProvider>{children}</UserPreferencesProvider>
				</LoadingProvider>
			</body>
		</html>
	)
}
