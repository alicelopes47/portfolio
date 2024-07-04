import { cn } from '../utils'

export const Meteors = ({
	number,
	indx,
	className,
}: {
	number?: number
	indx: string
	className?: string
}) => {
	const meteors = new Array(number).fill(true)
	return (
		<>
			{meteors.map((met) => (
				<span
					id={'meteor-' + indx + '-' + met}
					key={'meteor-' + indx + '-' + Math.floor(Math.random() * (400 - -400) + -400)}
					className={cn(
						'animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]',
						"before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-[#b471af] before:from-[#fcd2f9] before:to-[#fcd2f9]",
						className
					)}
					style={{
						top: 0,
						left: Math.floor(Math.random() * (400 - -400) + -400) + 'px',
						animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + 's',
						animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + 's',
					}}
				></span>
			))}
		</>
	)
}
