import { LiaGithub, LiaLinkedin, LiaFileArchive } from 'react-icons/lia'
import { LinkWithAlert } from './LinkWithAlert'

export function SocialLinks() {
	return (
		<div
			data-aos="fade-up"
			className="flex rounded-md flex-col z-50 md:p-4 p-2 gap-4 bg-[#c946f117] fixed md:bottom-4 bottom-0 md:left-5 left-0"
		>
			<LinkWithAlert
				href="https://www.linkedin.com/in/alicelopes47/"
				icon={<LiaLinkedin className="md:text-4xl text-3xl text-icons" />}
				message="Linkedin"
			/>
			<LinkWithAlert
				href="https://github.com/alicelopes47"
				icon={<LiaGithub className="md:text-4xl text-3xl text-icons" />}
				message="Github"
			/>
			<LinkWithAlert
				href="https://github.com/alicelopes47"
				icon={<LiaFileArchive className="md:text-4xl text-3xl text-icons" />}
				message="Curriculo"
			/>
		</div>
	)
}
