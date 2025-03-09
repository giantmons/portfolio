import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    const allProjects = [
        {
            title: 'CICS - Organization Website',
            description: 'A School Organization Website',
            image: '/project-cics.png',
            animation: '200'
        },
        {
            title: 'BINIEL - a Mobile Ecommerce App',
            description: 'A Store for Designer Brand Perfumes',
            image: '/project-biniel.png',
            animation: '300'
        },
        {
            title: 'ACTION CENTER - Crowd Control',
            description: 'A Crowd Monitoring Website',
            image: '/project-cca.png',
            animation: '400'
        },
    ];

    return (
        <main className="flex flex-col min-h-screen dark:bg-black font-poppins">
            <div className="w-11/12 md:w-7/12 mx-auto flex justify-start mt-8 gap-6" data-aos="fade-up">
                <button onClick={() => navigate(-1)} className="text-sm dark:text-white">
                    Back to Home
                </button>
                <h1 className="text-2xl font-semibold dark:text-white">Academic Projects</h1>
            </div>

            <div className="w-11/12 md:w-7/12 mx-auto mt-8">
                {/* Grid container for projects */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-x-4 gap-y-4" data-aos="fade-up">
                    {allProjects.map((project) => (
                        <div key={project.title} className="flex flex-col gap-2" data-aos="fade-up" data-aos-delay={project.animation}>
                            <div className="w-full h-auto bg-gray-100 rounded-lg dark:bg-gray-800 dark:border dark:border-gray-700">
                                <img className="w-full object-cover rounded-lg" src={project.image} alt={project.title} />
                            </div>
                            <div className="p-4 border w-full rounded-lg dark:bg-gray-900 dark:border-gray-700">
                                <h1 className="text-md text-center dark:text-white">{project.title}</h1>
                                <p className="text-sm text-center dark:text-white">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 w-full mx-auto mb-20 px-4 md:px-0 font-poppins" data-aos="fade-up" data-aos-delay="400">
                    <hr className="border mb-10 dark:border-gray-700" />
                    <p className="text-sm dark:text-white">@2024 Leuan Santos. All rights reserved.</p>
                </div>
            </div>
        </main>
    );
};

export default Projects;
