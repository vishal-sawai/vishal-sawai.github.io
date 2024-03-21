import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { MdViewComfy } from "react-icons/md";

const ProjectModal = ({ project, handleCloseModal }) => {
    return (
        <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                                <h3 className="text-2xl font-bold uppercase leading-6 font-medium text-gray-500 text-center mb-5" id="modal-title">
                                    {project.title}
                                </h3>

                                {/* Tech Stack */}
                                <div className="mt-4 flex">
                                    <div className="flex flex-wrap">
                                        {project.techStack.map((tech, index) => (
                                            <span key={index} className="bg-gray-500 font-bold text-white text-xs px-3 py-2 rounded-md m-1 uppercase">{tech}</span>
                                        ))}
                                    </div>
                                </div>

                                {/* Github And LiveUrl */}
                                <div className="mt-4 flex flex-col">
                                    <Link to={project.githuburl} className="bg-red-500 text-white text-sm py-3 rounded-md mb-3 flex justify-center hover:opacity-80">
                                        <FaGithub className="my-auto text-lg mx-1" /> <span className="mx-1 my-auto">Github</span>
                                    </Link>
                                    <Link to={project.liveurl} className="bg-green-500 text-white text-sm py-3 rounded-md flex justify-center hover:opacity-80">
                                        <MdViewComfy className="my-auto text-lg mx-1" /> <span className="mx-1 my-auto">Live Preview</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button type="button" className="md:mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={handleCloseModal}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectModal
