import { FlaskConical } from "lucide-react"
import FadeInOnScroll from "../fade-on-scroll/FadeInOnScroll"

const TechStack = () => {

    return <>
        <FadeInOnScroll className="bg-white dark:text-white dark:bg-[#111111] dark:border-[#333333] sm:col-span-4 row-span-3 border border-gray-200 p-5 rounded-lg transition hover:shadow-sm">
            <h1 className="font-semibold text-lg flex gap-2 items-center"><FlaskConical size={18} className="opacity-40" />Tech Stack</h1>
            <h2 className="text-sm mt-2">Frontend Development:</h2>
            <div className="flex flex-wrap gap-1 mt-2">
                <div className="badge badge-sm bg-transparent text-black dark:text-white border-gray-300">HTML5</div>
                <div className="badge badge-sm bg-transparent text-black dark:text-white border-gray-300">CSS3</div>
                <div className="badge badge-sm bg-transparent text-black dark:text-white border-gray-300">Tailwind CSS</div>
                <div className="badge badge-sm bg-transparent text-black dark:text-white border-gray-300">Bootstrap</div>
                <div className="badge badge-sm bg-transparent text-black dark:text-white border-gray-300">SASS</div>
                <div className="badge badge-sm bg-transparent text-black dark:text-white border-gray-300">ReactJS</div>
                <div className="badge badge-sm bg-transparent text-black dark:text-white border-gray-300">JavaScript</div>
                <div className="badge badge-sm bg-transparent text-black dark:text-white border-gray-300">TypeScript</div>
                <div className="badge badge-sm bg-transparent text-black dark:text-white border-gray-300">NextJS</div>
                <div className="badge badge-sm bg-transparent text-black dark:text-white border-gray-300">Redux</div>
                <div className="badge badge-sm bg-transparent text-black dark:text-white border-gray-300">Zustand</div>
                <div className="badge badge-sm bg-transparent text-black dark:text-white border-gray-300">ShadCN</div>
                <div className="badge badge-sm bg-transparent text-black dark:text-white border-gray-300">DaisyUI</div>
                <div className="badge badge-sm bg-transparent text-black dark:text-white border-gray-300">Framer</div>
                <div className="badge badge-sm bg-transparent text-black dark:text-white border-gray-300">Vite</div>
                <div className="badge badge-sm bg-transparent text-black dark:text-white border-gray-300">ESLint</div>
                <div className="badge badge-sm bg-transparent text-black dark:text-white border-gray-300">Dart</div>
                <div className="badge badge-sm bg-transparent text-black dark:text-white border-gray-300">Flutter</div>
            </div>

            <h2 className="text-sm mt-3">Backend Development:</h2>
            <div className="flex flex-wrap gap-1 mt-2">
                <div className="badge badge-sm bg-transparent text-black dark:text-white border-gray-300">NodeJS</div>
                <div className="badge badge-sm bg-transparent text-black dark:text-white border-gray-300">Express</div>
                <div className="badge badge-sm bg-transparent text-black dark:text-white border-gray-300">MongoDB</div>
                <div className="badge badge-sm bg-transparent text-black dark:text-white border-gray-300">PostgreSQL</div>
                <div className="badge badge-sm bg-transparent text-black dark:text-white border-gray-300">REST API</div>
                <div className="badge badge-sm bg-transparent text-black dark:text-white border-gray-300">JWT</div>
            </div>

            <h2 className="text-sm mt-3">Tools and Platforms:</h2>
            <div className="flex flex-wrap gap-1 mt-2">
                <div className="badge badge-sm bg-transparent text-black dark:text-white border-gray-300">Git</div>
                <div className="badge badge-sm bg-transparent text-black dark:text-white border-gray-300">Github</div>
                <div className="badge badge-sm bg-transparent text-black dark:text-white border-gray-300">VS Code</div>
                <div className="badge badge-sm bg-transparent text-black dark:text-white border-gray-300">Figma</div>
                <div className="badge badge-sm bg-transparent text-black dark:text-white border-gray-300">Trello</div>
                <div className="badge badge-sm bg-transparent text-black dark:text-white border-gray-300">OpenProject</div>
            </div>
        </FadeInOnScroll>
    </>
}

export default TechStack