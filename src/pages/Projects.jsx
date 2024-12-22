import React from 'react'
import { useNavigate } from 'react-router-dom'

const Projects = () => {
    const navigate = useNavigate();

    const goToBack = () => {
        navigate(-1);
    }

    return (
        <main className='flex flex-col min-h-screen dark:bg-black font-poppins'>
            <div className='w-11/12 md:w-7/12 mx-auto flex justify-start mt-8 gap-6' data-aos="fade-up">
                <button onClick={goToBack} className='text-sm dark:text-white'>Back to Home</button>
                <h1 className='text-2xl font-semibold dark:text-white'>Academic Projects</h1>
            </div>

            <div className='w-11/12 md:w-7/12 mx-auto mt-8'>
                {/* Grid container for projects */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 gap-x-4 gap-y-4' data-aos="fade-up">
                    {/* Project 1 */}
                    <div className='flex flex-col gap-2' data-aos="fade-up" data-aos-delay="100">
                        <div className='w-full h-auto bg-gray-100 rounded-lg dark:bg-black dark:border dark:border-gray-111'>
                            <img className='w-full object-cover rounded-lg' src="/project-cics.png" alt="" />
                        </div>
                        <div className='p-4 border w-full rounded-lg dark:bg-dark-111 dark:border-gray-111'>
                            <h1 className='text-md text-center dark:text-white'>CICS - Organization Website</h1>
                            <p className='text-sm text-center dark:text-white'>A School Organization Website</p>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className='flex flex-col gap-2' data-aos="fade-up" data-aos-delay="200">
                        <div className='w-full h-auto bg-gray-100 rounded-lg dark:bg-black dark:border dark:border-gray-111'>
                            <img className='w-full object-cover rounded-lg' src="/project-biniel.png" alt="" />
                        </div>
                        <div className='p-4 border w-full rounded-lg dark:bg-dark-111 dark:border-gray-111'>
                            <h1 className='text-md text-center dark:text-white'>BINIEL - a Mobile Ecommerce App</h1>
                            <p className='text-sm text-center dark:text-white'>A Store for Designer Brand Perfumes</p>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className='flex flex-col gap-2' data-aos="fade-up" data-aos-delay="300">
                        <div className='w-full h-auto bg-gray-100 rounded-lg dark:bg-black dark:border dark:border-gray-111'>
                            <img className='w-full object-cover rounded-lg' src="/project-cca.png" alt="" />
                        </div>
                        <div className='p-4 border w-full rounded-lg dark:bg-dark-111 dark:border-gray-111'>
                            <h1 className='text-md text-center dark:text-white'>ACTION CENTER - Crowd Control</h1>
                            <p className='text-sm text-center dark:text-white'>A Crowd Monitoring Website</p>
                        </div>
                    </div>
                </div>

                <div className="mt-20 w-full mx-auto mb-20 px-4 md:px-0 font-poppins"
                    data-aos="fade-up" data-aos-delay="400">
                    <hr className="border mb-10 dark:border-gray-111" />
                    <p className="text-sm dark:text-white">@2024 Leuan Santos. All rights reserved.</p>
                </div>
            </div>
        </main>
    )
}

export default Projects
