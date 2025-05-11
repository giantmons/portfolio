
import FadeInOnScroll from "../fade-on-scroll/FadeInOnScroll";
import Stack from "../stack/stack";
import onePic from "@/assets/stack/one.png"
import twoPic from "@/assets/stack/two.webp"
import threePic from "@/assets/stack/three.webp"
import fourPic from "@/assets/stack/four.png"
import ThemeController from "../theme/theme-controller";

const Title = () => {

    const images = [
        { id: 1, img: fourPic.src, width: fourPic.width || 200, height: fourPic.height || 200 },
        { id: 2, img: twoPic.src, width: twoPic.width || 200, height: twoPic.height || 200 },
        { id: 3, img: threePic.src, width: threePic.width || 200, height: threePic.height || 200 },
        { id: 4, img: onePic.src, width: onePic.width || 200, height: onePic.height || 200 }
    ];
    
    return <>
        <FadeInOnScroll className="flex flex-col sm:flex-row items-center justify-center">
            {/* NAME AND DESCRIPTION */}
            <div className="order-2 mt-8 sm:order-none md:mt-0 xl:mr-36 dark:text-white flex flex-col justify-center items-center xl:items-start">
                <h1 className="font-bold text-4xl text-center xl:text-left">Hi, I&apos;m Leuan👋🏻</h1>
                <p className="text-sm leading-6 text-center xl:text-left">Frontend Developer. I love bringing my ideas to code,
                    but not when bugs get creative too.
                </p>
                <ThemeController />
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