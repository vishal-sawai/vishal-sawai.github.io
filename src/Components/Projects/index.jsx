import ProjectItem from "./ProjectItem";
const Projects = ({ projects }) => {
    return (
        <>
            <div className="flex justify-center py-10">
                <div>
                    <div className="md:px-10 px-5">
                        <div>
                            <h1 className="text-2xl font-bold text-red-600 my-5 text-center">My Projects</h1>
                        </div>
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