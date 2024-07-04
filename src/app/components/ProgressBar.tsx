interface ProgressBarProps {
	proficiency: number
}

export const ProgressBar = ({
    proficiency
}: ProgressBarProps) => (
	<div className="h-[10%] w-2/6 bg-[#c7b8c1] rounded-full">
		<div
			className={`h-full w-[${proficiency}%] bg-icons text-right rounded-full`}
		></div>
	</div>
)
