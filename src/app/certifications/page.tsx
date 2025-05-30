"use client"

import FadeInOnScroll from "@/components/fade-on-scroll/FadeInOnScroll"
import allCertificates from "@/data/certifications"
import Link from "next/link"

const certifications = () => {

    return <>
        <main className="flex flex-col min-h-screen bg-white dark:bg-black font-poppins">
            <FadeInOnScroll
                className="flex items-center justify-start gap-6 mt-8 w-11/12 mx-auto md:w-[810px]"
            >
                <Link href={"/"}> <button className='text-sm text-black dark:text-white cursor-pointer'>
                    Back to Home
                </button></Link>
                <h1
                    className="text-2xl font-semibold self-center text-black dark:text-white"
                >
                    All Certifications
                </h1>
            </FadeInOnScroll>

            <div className="mt-8 grid grid-cols-1 gap-y-2 gap-x-2 w-11/12 md:grid-cols-2 px-4 md:w-8/12 mx-auto">

                {allCertificates.map((cert, index) => (
                    <a key={index} href={`${cert.link}`}>
                        <FadeInOnScroll className="border flex flex-col items-center justify-center border-gray-200 dark:border-[#333333] dark:bg-[#111111] rounded-lg p-4 min-h-[100px] hover:translate-y-[-2px] transition-transform duration-300 cursor-pointer">
                            <h1 className="text-sm font-semibold mb-2 text-black text-center dark:text-white">{`${cert.title}`}</h1>
                            <p className="text-sm text-black dark:text-white">{`${cert.date}`}</p>
                        </FadeInOnScroll>
                    </a>
                ))}

            </div>


            <div className="mt-20 w-11/12 md:w-10/12 lg:w-8/12 xl:w-8/12 mx-auto mb-20 px-4 md:px-0 font-poppins">
                <hr className="border mb-10 text-gray-200 dark:text-[#333333]" />
                <p className="text-sm text-black dark:text-white">@2025 Leuan Santos. All rights reserved.</p>
            </div>
        </main>
    </>
}

export default certifications