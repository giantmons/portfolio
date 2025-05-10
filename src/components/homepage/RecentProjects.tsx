import Link from "next/link"
import FadeInOnScroll from "../fade-on-scroll/FadeInOnScroll"
import { Folder } from "lucide-react"

const RecentProjects = () => {
    return <>
        <FadeInOnScroll className="bg-white dark:text-white dark:bg-[#111111] dark:border-[#333333] sm:col-span-4 row-span-3 border border-gray-200 rounded-lg p-5 transition hover:shadow-lg">
            <div className="flex justify-between items-center">
                <h1 className="font-semibold flex gap-2 items-center"><Folder size={18} className="opacity-40" />Recent Projects</h1>
                <Link href={"/projects"}><p className="text-xs text-gray-500 cursor-pointer">See more</p></Link>
            </div>

            <div className="grid grid-rows-2 gap-3 mt-3">
                <div className="border border-gray-200 dark:border-[#333333] p-3 rounded-lg">
                    <h2 className="text-sm font-medium">Taskly</h2>
                    <p className="text-xs text-gray-400">a todo list web application</p>
                </div>
                <div className="border border-gray-200 dark:border-[#333333] p-3 rounded-lg">
                    <h2 className="text-sm font-medium">Bineil - a Store for Designer Brand Perfumes</h2>
                    <p className="text-xs text-gray-400">a mobile ecommerce application</p>
                </div>
                <div className="border border-gray-200 dark:border-[#333333] p-3 rounded-lg">
                    <h2 className="text-sm font-medium">CICS - BSU</h2>
                    <p className="text-xs text-gray-400">a school organization website</p>
                </div>
                <div className="border border-gray-200 dark:border-[#333333] p-3 rounded-lg">
                    <h2 className="text-sm font-medium">ACTION CENTER - Crowd System</h2>
                    <p className="text-xs text-gray-400">a crowd monitoring system</p>
                </div>
            </div>
        </FadeInOnScroll>
    </>
}

export default RecentProjects;