import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function SocialLinks() {
    return (
        <div data-aos="fade-up" className="flex flex-col z-50 md:p-4 p-2 gap-2 rounded-md md:gap-14 bg-primary fixed md:bottom-4 bottom-0 md:left-5 left-0">
            <a href="https://www.linkedin.com/in/alice-lopes-%F0%9F%8F%B3%EF%B8%8F%E2%80%8D%E2%9A%A7%EF%B8%8F-423a1a249/" target="_blank" rel="noreferrer">
                <FaLinkedin className="md:text-4xl text-2xl text-white" />
            </a>
            <a href="https://github.com/alicelopes47" target="_blank" rel="noreferrer">
                <FaGithub className="md:text-4xl text-2xl text-white" />
            </a>
            <a href="https://www.linkedin.com/in/rafael-fernandes-7b7b7b1b4/" target="_blank" rel="noreferrer">
                <BsFillFileEarmarkPersonFill className="md:text-4xl text-2xl text-white" />
            </a>
        </div>
    )
}