"use client"
import FadeInOnScroll from "../fade-on-scroll/FadeInOnScroll";
import Stack from "../stack/stack";
import { useTheme } from "@/components/theme/theme-context";
import onePic from "@/assets/stack/one.png"
import twoPic from "@/assets/stack/two.webp"
import threePic from "@/assets/stack/three.webp"
import fourPic from "@/assets/stack/four.png"

const Title = () => {
      const { theme, toggleTheme } = useTheme();
    
      const images: { id: number; img: string }[] = [
        { id: 1, img: fourPic.src },
        { id: 2, img: twoPic.src },
        { id: 3, img: threePic.src },
        { id: 4, img: onePic.src }
      ];

    return <>
        <FadeInOnScroll className="flex flex-col sm:flex-row items-center justify-center">
            {/* NAME AND DESCRIPTION */}
            <div className="order-2 mt-8 sm:order-none md:mt-0 xl:mr-36 dark:text-white flex flex-col justify-center items-center xl:items-start">
                <h1 className="font-bold text-4xl text-center xl:text-left">Hi, I&apos;m Leuan👋🏻</h1>
                <p className="text-sm leading-6 text-center xl:text-left">Frontend Developer. I love bringing my ideas to code,
                    but not when bugs get creative too.
                </p>
                <label className="toggle theme-controller cursor-pointer h-8 w-14 mt-2">
                    <input
                        type="checkbox"
                        checked={theme === "dark"}
                        onChange={toggleTheme}
                        className="hidden"
                    />

                    {/* Sun Icon for Light Mode */}
                    <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

                    {/* Moon Icon for Dark Mode */}
                    <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>
                </label>

            </div>

            {/* STACK COMPONENT */}
            <div className="hidden xl:flex">
                <Stack
                    randomRotation={false}
                    sensitivity={180}
                    sendToBackOnClick={false}
                    cardDimensions={{ width: 200, height: 200 }}
                    cardsData={images}
                />
            </div>
        </FadeInOnScroll>
    </>
}

export default Title;