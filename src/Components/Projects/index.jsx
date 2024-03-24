import ProjectItem from "./ProjectItem";
import Heading from "../Heading";
import { motion } from "framer-motion";
const Projects = ({ projects }) => {
    return (
        <>
            <div id="Projects" className="flex justify-center py-10">
                <div>
                    <div className="md:px-10 px-5">
                        {/* Heading */}
                        <Heading title="My Projects" />
                        <motion.div
                            variant={{
                                hidden: { opacity: 0 },
                                show: { opacity: 1, transition: { staggerChildren: 0.75 } },
                            }}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="mx-auto flex flex-wrap w-11/12">
                            {projects && projects.filter(item => item.enabled).map((project, index) => (
                                <ProjectItem project={project} key={index} />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;