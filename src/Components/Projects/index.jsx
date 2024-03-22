import ProjectItem from "./ProjectItem";
import Heading from "../Heading";
const Projects = ({ projects }) => {
    return (
        <>
            <div id="Projects" className="flex justify-center py-10">
                <div>
                    <div className="md:px-10 px-5">
                        {/* Heading */}
                        <Heading title="My Projects" />
                        <div className="mx-auto flex flex-wrap w-11/12">
                            {projects && projects.filter(item => item.enabled).map((project, index) => (
                                <ProjectItem project={project} key={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;