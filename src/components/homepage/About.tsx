import { PersonStanding } from "lucide-react";
import FadeInOnScroll from "../fade-on-scroll/FadeInOnScroll";

const About = () => {

    return <>
        <FadeInOnScroll className="bg-white dark:bg-[#111111] dark:text-white sm:col-span-4 row-span-3 border border-gray-200 dark:border-[#333333] p-5 rounded-lg transition hover:shadow-lg">
            <h1 className="font-semibold text-lg flex gap-2 items-center"><PersonStanding size={18} className="opacity-40" /> About</h1>
            <p className="text-sm mt-1 leading-6">I'm an aspiring software developer with a passion for building responsive, accessible,
                and user-friendly web interfaces. I love working with modern design principles, focusing on performance, and making
                sure every user has a smooth experience. I'm experienced in creating interactive features, making sure websites look
                great on any device, and following best practices in UI/UX design.
            </p>
            <p className="text-sm mt-3 leading-6">
                Lately, I've been working on leveling up my skills even more — diving deeper into both front-end and back-end technologies
                to create more full-fledged, complete applications. I'm excited about building projects from the ground up and bringing
                ideas to life through clean code and thoughtful design.
            </p>
        </FadeInOnScroll>
    </>
}

export default About;