import allCertificates from "@/data/certifications"
import Link from "next/link"

const certifications = () => {

    return <>
        <main className="flex flex-col min-h-screen bg-white font-poppins">
            <div
                className="flex items-center justify-start gap-6 mt-8 w-11/12 mx-auto md:w-8/12"
            >
                <Link href={"/"}> <button className='text-sm text-black cursor-pointer'>
                    Back to Home
                </button></Link>
                <h1
                    className="text-2xl font-semibold self-center text-black"
                >
                    All Certifications
                </h1>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-y-2 gap-x-2 w-11/12 md:grid-cols-2 px-4 md:w-8/12 mx-auto">

                {allCertificates.map((cert, index) => (
                    <a
                        key={index}
                        href={`${cert.link}`}
                    >
                        <div className="border border-gray-200 rounded-lg p-4 min-h-[100px] hover:translate-y-[-2px] transition-transform duration-300 cursor-pointer">
                            <h1 className="text-sm font-semibold mb-2 text-black">{`${cert.title}`}</h1>
                            <p className="text-sm text-black">{`${cert.date}`}</p>
                        </div>
                    </a>
                ))}

            </div>


            <div className="mt-20 w-11/12 md:w-10/12 lg:w-8/12 xl:w-8/12 mx-auto mb-20 px-4 md:px-0 font-poppins">
                <hr className="border mb-10 text-gray-200" />
                <p className="text-sm text-black">@2025 Leuan Santos. All rights reserved.</p>
            </div>
        </main>
    </>
}

export default certifications