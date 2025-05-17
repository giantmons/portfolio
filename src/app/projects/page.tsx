"use client"

import FadeInOnScroll from "@/components/fade-on-scroll/FadeInOnScroll";
import allProjects from "@/data/project"
import Link from 'next/link';
import { useEffect, useState } from "react";
import { IoGlobe, IoLogoGithub } from "react-icons/io5";

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<any>(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        // This code will run only on the client-side (after the component has mounted)
        if (isMounted && selectedProject) {
            const modal = document.getElementById('project-modal') as HTMLDialogElement | null;
            modal?.showModal();
        }
    }, [selectedProject, isMounted]); // Effect runs when selectedProject changes

    const openModal = (project: any) => {
        setSelectedProject(project);
    };

    return (
        <main className="flex flex-col min-h-screen bg-white dark:bg-black font-poppins">
            <FadeInOnScroll className="w-11/12 md:w-[800px] mx-auto dark:text-white flex items-center justify-start mt-8 gap-6">
                <Link href="/">
                    <button className="text-sm text-black dark:text-white cursor-pointer">Back to Home</button>
                </Link>
                <h1 className="text-2xl font-semibold text-black dark:text-white">Recent Projects</h1>
            </FadeInOnScroll>

            <div className="w-11/12 md:w-[800px] mx-auto mt-8">
                {/* Grid container for projects */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 gap-x-4 gap-y-4">
                    {allProjects.map((project) => (
                        <FadeInOnScroll key={project.title} className="flex flex-col gap-2 hover:scale-101 transition cursor-pointer"
                            onClick={() => openModal(project)}>
                            <div className="w-full h-auto bg-gray-100 dark:bg-[#111111] rounded-lg max-h-[240px]">
                                <img className="w-full object-cover rounded-lg" src={project.image} alt={project.title} />
                            </div>
                            <div className="p-4 dark:bg-[#111111] border border-gray-200 dark:border-[#333333] w-full rounded-lg">
                                <h1 className="text-sm text-center text-black dark:text-white">{project.title}</h1>
                                <p className="text-xs text-center text-black dark:text-white">{project.description}</p>
                            </div>
                        </FadeInOnScroll>
                    ))}
                </div>

                {/* Modal - only render if client-side */}
                {isMounted && (
                    <dialog id="project-modal" className="modal">
                        <div className="modal-box bg-white text-black dark:text-white dark:bg-[#111111] border border-gray-300 dark:border-[#333333]">
                            <form method="dialog">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            {selectedProject && (
                                <>
                                    <div className="flex flex-col gap-3 justify-center items-center mt-3">
                                        <img src={selectedProject.image} alt={selectedProject.title} />
                                        <h3 className="font-light text-sm">{selectedProject.title}</h3>
                                        <div className="flex gap-1 flex-wrap justify-center items-center">
                                            {selectedProject.stack.map((tech: string, index: number) => (
                                                <div key={index} className="badge badge-sm bg-transparent text-black dark:text-white border-gray-300">
                                                    {tech}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-3 flex justify-center items-center gap-2">
                                            {selectedProject.link ? <a href={selectedProject.link}><button className="btn text-xs font-light"><IoGlobe size={24} /> Website</button></a> : ""}
                                            {selectedProject.github ? <a href={selectedProject.github}><button className="btn text-xs font-light"><IoLogoGithub size={24} /> Source</button></a> : ""}
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </dialog>
                )}

                <div className="mt-20 w-full mx-auto mb-20 px-4 md:px-0 font-poppins">
                <hr className="mb-8 text-gray-200 dark:text-[#333333]" />
                    <p className="text-sm text-black dark:text-white">@2025 Leuan Santos. All rights reserved.</p>
                </div>
            </div>
        </main>
    );
};

export default Projects;