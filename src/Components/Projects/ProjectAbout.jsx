import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { VscPreview } from "react-icons/vsc";
const ProjectAbout = ({ ProjectData }) => {
    return (
        <div className='xl:px-10 py-5 px-5'>
            <div>
                <h1 className='uppercase font-bold text-xl text-gray-700 text-center'>{ProjectData.title}</h1>
            </div>
            <div className='xl:mt-3 mt-2 flex flex-wrap'>
                {ProjectData.techStack.map((tech, index) => (
                    <span key={index} className='bg-gray-500 text-white rounded-md xl:px-4 py-1 mx-2 mt-3 px-2'>{tech}</span>
                ))}
            </div>
            <div className='mt-3'>
                <p className='text-gray-700 mx-2'>{ProjectData.description}</p>
            </div>

            <div className="xl:mx-5 my-10">
                <div className="flex-justify-center">
                    {/* Check if the project has a github URL */}
                    {ProjectData.githuburl && (
                        <Link className="flex justify-center border py-2 rounded-lg bg-blue-500 hover:bg-blue-400 text-white" to={ProjectData.githuburl}>
                            <FaGithub className="text-4xl my-auto mx-1" />
                            <p className="my-auto mx-1" >View Source Code</p>
                        </Link>
                    )}
                </div>
                <div className="flex-justify-center mt-4">
                    {/* Check if the project has a live URL */}
                    {ProjectData.liveurl && (
                        <Link className="flex justify-center border py-2 rounded-lg bg-red-500 hover:bg-red-400 text-white" to={ProjectData.liveurl}>
                            <VscPreview className="text-4xl my-auto mx-1" />
                            <p className="my-auto mx-1" >Live Preview</p>
                        </Link>
                    )}
                </div>
            </div>

        </div>
    )
}

export default ProjectAbout