import Link from "next/link"
import FadeInOnScroll from "../fade-on-scroll/FadeInOnScroll"
import { MedalIcon } from "lucide-react"

const Certifications = () => {
    return <>
        <FadeInOnScroll className="dark:text-white dark:bg-[#111111] dark:border-[#333333] sm:col-span-2 row-span-3 border border-gray-200 rounded-lg p-5 transition hover:shadow-lg">
            <div className="flex justify-between items-center">
                <h1 className="font-semibold flex gap-2 items-center"><MedalIcon size={18} className="opacity-40" />Certifications</h1>
                <Link href={"/certifications"}><p className="text-xs text-gray-500 cursor-pointer">See more</p></Link>
            </div>

            <div className="grid gap-3 mt-3">
                <div className="border border-gray-200 dark:border-[#333333] p-3 rounded-lg">
                    <h2 className="text-sm font-medium">Web Developer Bootcamp</h2>
                    <p className="text-xs text-gray-400">Udemy</p>
                </div>
                <div className="border border-gray-200 dark:border-[#333333] p-3 rounded-lg">
                    <h2 className="text-sm font-medium">Frontend Speaker</h2>
                    <p className="text-xs text-gray-400">CAIST - ICT</p>
                </div>
                <div className="border border-gray-200 dark:border-[#333333] p-3 rounded-lg">
                    <h2 className="text-sm font-medium">Cloud Security Foundations</h2>
                    <p className="text-xs text-gray-400">AWS Academy</p>
                </div>
                <div className="border border-gray-200 dark:border-[#333333] p-3 rounded-lg">
                    <h2 className="text-sm font-medium">Cybersecurity Essentials</h2>
                    <p className="text-xs text-gray-400">CISCO</p>
                </div>
            </div>
        </FadeInOnScroll>
    </>
}

export default Certifications;