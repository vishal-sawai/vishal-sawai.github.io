import { useState } from 'react';

const ProjectItem = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            key={project.id}
            className="md:w-96 mx-auto w-full shadow-2xl rounded-md p-4 my-4 hover:shadow-none transition duration-300 ease-in-out cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div>
                <div className="h-40">
                    <img src={project.image.url} alt={project.name} className="w-full h-full object-cover" />
                </div>
                {isHovered && (
                    <div className="my-4">
                        <h1 className="text-lg font-bold text-red-600">{project.title}</h1>
                        <a href={project.url} target="_blank" rel="noreferrer" className="text-sm text-red-600">View Project</a>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProjectItem
