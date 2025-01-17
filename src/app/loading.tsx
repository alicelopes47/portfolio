import { useUserPreferences } from './context/UserPreferencesProvider.tsx'

export default function Loading() {
	return (
		<div className='w-screen h-screen fixed t-0  flex justify-center items-center'>
			<div className={`animate-spin rounded-full h-32 w-32 border-t-8 border-b-8 border-[#CF96DF]`}></div>
		</div>
	)
}
