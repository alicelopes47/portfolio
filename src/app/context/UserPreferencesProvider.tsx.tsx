'use client'
import { createContext, useState, useContext, ReactNode } from 'react'
import { ThemeTypes } from '../Domain'
import { Toggle } from 'rsuite'
import { useLoading } from './LoadingProvider'

interface UserPreferencesContext {
	theme: ThemeTypes
	setTheme: (theme: ThemeTypes) => void
	isEnUs: boolean
	setIsEnUs: (isEnUs: boolean) => void
}

const UserPreferencesContext = createContext<UserPreferencesContext>({
	theme: 'light',
	setTheme: () => {},
	isEnUs: false,
	setIsEnUs: () => {},
})

export const UserPreferencesProvider = ({ children }: { children: ReactNode }) => {
	const [theme, setTheme] = useState<ThemeTypes>('light')
	const [isEnUs, setIsEnUs] = useState(false)
	const { loading, setLoading } = useLoading()

	const handleLanguageChange = () => {
		setIsEnUs(!isEnUs)
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
		}, 1000)
	}

	return (
		<UserPreferencesContext.Provider value={{ theme, setTheme, isEnUs, setIsEnUs }}>
			<div className='fixed md:bottom-10 bottom-4 md:right-10 right-4 z-50'>
				<Toggle
					color='violet'
					size={'lg'}
					checkedChildren='En-Us'
					onClick={handleLanguageChange}
					unCheckedChildren='Pt-Br'
				/>
			</div>
			{children}
		</UserPreferencesContext.Provider>
	)
}

export const useUserPreferences = () => {
	const context = useContext(UserPreferencesContext)
	return context
}
