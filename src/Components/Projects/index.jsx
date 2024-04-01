import { useState, useMemo, useEffect } from 'react';
import ProjectItem from "./ProjectItem";
import Heading from "../Heading";

const Projects = ({ projects }) => {
    const [techStacks, setTechStacks] = useState([]);
    const [selectedTechStack, setSelectedTechStack] = useState("All");

    const handleTechStackClick = (tech) => {
        setSelectedTechStack(tech);
    };

    // Use useMemo for performance optimization
    const filteredProjects = useMemo(() => {
        if (selectedTechStack === "All") {
            return projects;
        } else {
            return projects.filter(project =>
                project.techStack.some(t => t.trim().toLowerCase() === selectedTechStack.trim().toLowerCase())
            );
        }
    }, [projects, selectedTechStack]);

    useEffect(() => {
        const uniqueTechStacks = [...new Set(projects.flatMap(project => project.techStack.map(t => t.trim().toLowerCase())))];
        //   setting the unique tech stacks with "All" as the first element
        setTechStacks(["All", ...uniqueTechStacks]);
    }, [projects]);

    return (
        <div id="Projects" className="flex justify-center py-10">
            <div className="md:px-10 px-5">
                <Heading title="My Projects" />
                {/* <div className="flex flex-wrap justify-center mt-10">
                    {techStacks.map((tech, index) => (
                        <button
                            key={index}
                            onClick={() => handleTechStackClick(tech)}
                            className={`bg-gray-200 hover:bg-red-400 hover:text-white text-gray-800 py-2 px-4 rounded-md m-2 uppercase ${selectedTechStack === tech ? 'bg-red-500 text-white' : ''}`}
                            aria-label={`Filter projects by ${tech}`}>
                            {tech}
                        </button>
                    ))}
                </div> */}
                <div className="mx-auto flex flex-wrap lg:w-11/12">
                    {filteredProjects && filteredProjects.map((project, index) => (
                        <ProjectItem project={project} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
