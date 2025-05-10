import FadeInOnScroll from "../fade-on-scroll/FadeInOnScroll";
import Squares from "../squares/squares";

const GetInTouch = () => {
    return <>
        <FadeInOnScroll className="dark:text-white dark:bg-[#111111] dark:border-[#333333] sm:col-span-4 row-span-3 relative border border-gray-200 rounded-lg p-5 flex justify-center items-center overflow-hidden transition hover:shadow-lg">
            <h1 className="font-extrabold text-4xl relative z-10">Get in Touch</h1>
            <div className="absolute inset-0 z-0">
                <Squares
                    speed={0.5}
                    squareSize={40}
                    direction='diagonal'
                    hoverFillColor='#222'
                />
            </div>
        </FadeInOnScroll>
    </>
}

export default GetInTouch;