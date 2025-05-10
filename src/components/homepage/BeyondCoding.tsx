import { BookOpen } from "lucide-react";
import FadeInOnScroll from "../fade-on-scroll/FadeInOnScroll";

const BeyondCoding = () => {
    
    return <>
        <FadeInOnScroll className="bg-white dark:text-white dark:bg-[#111111] dark:border-[#333333] row-span-2 sm:col-span-2 p-5 border border-gray-200 rounded-lg transition hover:shadow-lg">
            <h1 className="font-semibold flex gap-2 items-center"><BookOpen size={18} className="opacity-40" />Beyond Coding</h1>
            <p className="text-sm mt-3 leading-6">When I'm not writing code, I'm busy stretching my skills and staying curious about everything tech and beyond.</p>
            <div className="flex">
                <p className="text-sm mt-3">Other than that, I sleep.</p>
            </div>
        </FadeInOnScroll>
    </>
}

export default BeyondCoding;