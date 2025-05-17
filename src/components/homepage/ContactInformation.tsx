import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";
import FadeInOnScroll from "../fade-on-scroll/FadeInOnScroll";
import { Mail } from "lucide-react";

const ContactInformation = () => {
    return <>
        <FadeInOnScroll className="bg-white dark:text-white dark:bg-[#111111] dark:border-[#333333] row-span-3 sm:col-span-2 border border-gray-200 rounded-lg p-5 transition hover:shadow-sm">
            <h1 className="font-semibold flex gap-2 items-center"><Mail size={18} className="opacity-40" />Contact</h1>

            <a href="mailto:santosleuan@gmail.com">
                <div className="bg-gray-100 dark:bg-black p-4 rounded-lg mt-3">
                    <h2 className="text-xs text-gray-400">Email</h2>
                    <p className="text-sm">santosleuan@gmail.com</p>
                </div>
            </a>

            <div className="bg-gray-100 dark:bg-black p-4 rounded-lg mt-3">
                <h2 className="text-xs text-gray-400">Phone Number</h2>
                <p className="text-sm">+63 939-762-1668</p>
            </div>

            <div className="bg-gray-100 dark:bg-black p-4 rounded-lg mt-3">
                <h2 className="text-xs text-gray-400">Social Links</h2>
                <div className="flex flex-col lg:flex-row justify-center gap-2 mt-2">
                    <a href="https://www.linkedin.com/in/leuan-paolo-santos-139477311/"><button className="btn w-full"><IoLogoLinkedin size={24} /></button></a>
                    <a href="https://www.instagram.com/leyunsantos/"><button className="btn w-full"><IoLogoInstagram size={24} /></button></a>
                    <a href="https://github.com/giantmons"><button className="btn w-full"><IoLogoGithub size={24} /></button></a>
                </div>
            </div>
        </FadeInOnScroll>
    </>
}

export default ContactInformation;