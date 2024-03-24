import { useState } from 'react';
import ProjectModal from './ProjectModal';
import { motion } from 'framer-motion';

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
                key={project._id}
                className="sm:w-96 md:w-full lg:w-96 grow mx-auto w-full rounded-md my-4 transition duration-300 ease-in-out cursor-pointer rounded-md drop-shadow-2xl	"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <div className='mx-3'>
                    <div className="h-40 md:h-full relative">
                        <img src={project.image.url} alt={project.name} className="w-full h-full object-cover rounded-md" />
                        {isHovered && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-red-800 bg-opacity-80 rounded-md">
                                <h1 className="text-lg font-bold text-white uppercase">{project.title}</h1>
                                <motion.button whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }} onClick={handleModal} className="text-base text-white border shadow-2xl px-5 py-2 rounded-md mt-2 hover:bg-white hover:text-gray-500">View Project
                                </motion.button>
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
