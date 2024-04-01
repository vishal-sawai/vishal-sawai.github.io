import { useState } from 'react';
import ProjectModal from './ProjectModal';
import { motion } from 'framer-motion';
import { getImageUrl } from "../../Utils/image-util";
import { Link } from 'react-router-dom';

const ProjectItem = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleModal = (e) => {
        e.preventDefault()
        setShowModal(true)
    };

    const handleCloseModal = () => {
        setShowModal(false)
    };



    return (
        <>
            <div
                key={project.id}
                className="md:w-full lg:w-96 grow mx-auto w-full rounded-md transition duration-300 ease-in-out cursor-pointer rounded-md"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <div className='mx-5 my-3 rounded-md shadow-xl'>
                    <div className="md:h-full relative">
                        <img src={getImageUrl(project.image.url)} alt={project.name} className="w-full lg:min-h-56 h-full my-auto lg:object-cover rounded-md" />
                        {isHovered && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-red-800 bg-opacity-80 rounded-md">
                                <h1 className="text-lg font-bold text-white uppercase">{project.title}</h1>
                                <motion.div className='mt-3' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                    <Link to={{ pathname: `/projectInfo/${project.id}` }} className="text-base text-white border shadow-2xl px-5 py-2 rounded-md  hover:bg-white hover:text-gray-500">
                                        View Project
                                    </Link>
                                </motion.div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {showModal && <ProjectModal project={project} handleCloseModal={handleCloseModal} />}
        </>
    );
}

export default ProjectItem
