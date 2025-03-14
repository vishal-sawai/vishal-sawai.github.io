import React, { useState } from 'react';
import Image from 'next/image';
import { projectsData } from '../content/data';

interface Project {
    id: number;
    title: string;
    description: string;
    images: string[];
    techStack: { icon: string; name: string }[];
    githubLink?: string;
    demoLink?: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    return (
        <div className="border-l-2 border-[#64FFDA] pl-6">
            {/* Image Slider */}
            <div className="relative w-full rounded-xl overflow-hidden mb-6 group bg-[#233554]">
                <div className="relative w-full" style={{ paddingTop: '56.25%' }}> {/* 16:9 aspect ratio */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Image
                            src={project.images[currentImageIndex]}
                            alt={`${project.title} Screenshot`}
                            layout="fill"
                            objectFit="contain"
                            className="transition-transform duration-500"
                        />
                    </div>

                    {/* Image Navigation */}
                    {project.images.length > 1 && (
                        <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                                onClick={prevImage}
                                className="p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition transform hover:scale-110"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={nextImage}
                                className="p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition transform hover:scale-110"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    )}

                    {/* Image Counter */}
                    {project.images.length > 1 && (
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 px-3 py-1 rounded-full text-white text-sm">
                            {currentImageIndex + 1} / {project.images.length}
                        </div>
                    )}
                </div>
            </div>

            {/* Project Info */}
            <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#64FFDA] hover:text-[#64FFDA]/80 transition">
                    {project.title}
                </h3>
                <p className="text-[#8892B0] text-lg leading-relaxed">
                    {project.description}
                </p>

                {/* Tech Stack Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                    {project.techStack.map((tech, index) => (
                        <div key={index} className="tech-badge bg-[#233554] p-3 rounded-lg hover:bg-[#2A4163] transition group">
                            <div className="flex flex-col items-center space-y-2">
                                <div className="relative w-8 h-8">
                                    <Image
                                        src={tech.icon}
                                        alt={tech.name}
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </div>
                                <span className="text-[#c1c7da] text-sm font-medium group-hover:text-[#64FFDA] transition">
                                    {tech.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 pt-4">
                    {/* GitHub & Live Demo Links */}
                    {project.githubLink && (
                        <a
                            href={project.githubLink}
                            className="px-6 py-3 bg-[#233554] text-[#64FFDA] rounded-lg hover:bg-[#2A4163] transition-all duration-300 flex items-center space-x-2 group"
                        >
                            <span className="font-mono">$</span>
                            <span className="group-hover:translate-x-1 transition-transform">git clone</span>
                        </a>
                    )}
                    {project.demoLink && (
                        <a
                            href={project.demoLink}
                            className="px-6 py-3 bg-[#233554] text-[#64FFDA] rounded-lg hover:bg-[#2A4163] transition-all duration-300 flex items-center space-x-2 group"
                        >
                            <span className="font-mono">$</span>
                            <span className="group-hover:translate-x-1 transition-transform">live demo</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="min-h-screen bg-[#0A192F] py-16">
            <section id="projects" className="max-w-6xl mx-auto px-4">
                <div className="bg-[#171F2E] rounded-2xl shadow-2xl overflow-hidden">
                    <div className="p-8 space-y-8">
                        {/* Terminal Header */}
                        <div className="flex items-center space-x-2 pb-4 border-b border-[#233554]">
                            <div className="flex space-x-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="flex items-center text-[#64FFDA] ml-4">
                                <span className="mr-2">$</span>
                                <span className="typing-animation font-mono">showcasing_projects</span>
                            </div>
                        </div>

                        {/* Projects List */}
                        <div className="space-y-16">
                            {projectsData.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;