"use client"

import allProjects from "@/data/project"
import Link from 'next/link';
import { useState } from "react";
import { IoGlobe, IoLogoGithub } from "react-icons/io5";

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<any>(null);

    const openModal = (project: any) => {
        setSelectedProject(project);
        const modal = document.getElementById('project-modal') as HTMLDialogElement | null;
        modal?.showModal();
    };


    return (
        <main className="flex flex-col min-h-screen bg-white font-poppins">
            <div className="w-11/12 md:w-[800px] mx-auto flex items-center justify-start mt-8 gap-6">
                <Link href="/">
                    <button className="text-sm text-black cursor-pointer">Back to Home</button>
                </Link>
                <h1 className="text-2xl font-semibold text-black">Recent Projects</h1>
            </div>

            <div className="w-11/12 md:w-[800px] mx-auto mt-8">
                {/* Grid container for projects */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 gap-x-4 gap-y-4">
                    {allProjects.map((project) => (
                        <div key={project.title} className="flex flex-col gap-2 hover:scale-101 transition cursor-pointer"
                            onClick={() => openModal(project)}>
                            <div className="w-full h-auto bg-gray-100 rounded-lg max-h-[240px]">
                                <img className="w-full object-cover rounded-lg" src={project.image} alt={project.title} />
                            </div>
                            <div className="p-4 border border-gray-200 w-full rounded-lg">
                                <h1 className="text-sm text-center text-black">{project.title}</h1>
                                <p className="text-xs text-center text-black">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal */}
                <dialog id="project-modal" className="modal">
                    <div className="modal-box bg-white text-black">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        {selectedProject && (
                            <>
                                <div className="flex flex-col justify-center items-center mt-3">
                                    <img src={selectedProject.image} alt={selectedProject.title} />
                                    <h3 className="font-light text-sm">{selectedProject.title}</h3>
                                    <div className="mt-3 flex justify-center items-center gap-2">
                                        {selectedProject.link ? <a href={selectedProject.link}><button className="btn text-xs font-light"><IoGlobe size={24} /> Website</button></a> : ""}
                                        {selectedProject.github ? <a href={selectedProject.github}><button className="btn text-xs font-light"><IoLogoGithub size={24} /> Source</button></a> : ""}
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </dialog>

                <div className="mt-20 w-full mx-auto mb-20 px-4 md:px-0 font-poppins">
                    <hr className="border border-gray-200 mb-10 text-black" />
                    <p className="text-sm text-black">@2025 Leuan Santos. All rights reserved.</p>
                </div>
            </div>
        </main>
    );
};

export default Projects;
