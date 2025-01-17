'use client'
import { createContext, useState, useContext, ReactNode } from 'react'

interface LoadingContextProps {
	loading: boolean
	setLoading: (loading: boolean) => void
}

const LoadingContext = createContext<LoadingContextProps | undefined>(undefined)

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
	const [loading, setLoading] = useState(false)
	return <LoadingContext.Provider value={{ loading, setLoading }}>{children}</LoadingContext.Provider>
}

export const useLoading = () => {
	const context = useContext(LoadingContext)
	if (!context) {
		throw new Error('useLoading must be used within a LoadingProvider')
	}
	return context
}
