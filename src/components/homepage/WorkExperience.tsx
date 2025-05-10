import { BriefcaseBusiness } from "lucide-react"
import FadeInOnScroll from "../fade-on-scroll/FadeInOnScroll"

const WorkExperience = () => {
    return <>
        <FadeInOnScroll className="bg-white dark:bg-[#111111] dark:border-[#333333] dark:text-white sm:col-span-2 row-span-4 border border-gray-200 p-5 rounded-lg transition hover:shadow-lg">
            <h1 className="font-semibold text-lg mb-3 flex gap-2 items-center"><BriefcaseBusiness size={18} className="opacity-40" />Experience</h1>
            <ul className="timeline timeline-vertical timeline-compact">
                <li>
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <div className="timeline-start timeline-box bg-transparent border-gray-200 w-full text-xs">Frontend Developer</div>
                    <div className="timeline-end text-xs"> Center for Artificial Intelligence and Smart Technologies <br /> <span className="badge badge-xs mt-2 bg-transparent text-black dark:text-white border-gray-300">2025</span></div>
                    <hr className="bg-gray-100" />
                </li>
                <li>
                    <hr className="bg-gray-100" />
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <div className="timeline-start text-xs mt-4 timeline-box bg-transparent border-gray-200">BS Information Technology</div>
                    <div className="timeline-end text-xs">Batangas State University TNEU - Alangilan Campus <br /> <span className="badge badge-xs mt-2 bg-transparent text-black dark:text-white border-gray-300">2021</span></div>
                    <hr className="bg-gray-100" />
                </li>
                <li>
                    <hr className="bg-gray-100" />
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <div className="timeline-start text-xs mt-4 timeline-box w-full bg-transparent border-gray-200">Hello World!</div>
                    <div className="timeline-end text-xs">Wrote my first line of code <br /> <span className="badge badge-xs mt-2 bg-transparent text-black dark:text-white border-gray-300">2020</span></div>
                    <hr className="bg-gray-100" />
                </li>
            </ul>
        </FadeInOnScroll>
    </>
}

export default WorkExperience;