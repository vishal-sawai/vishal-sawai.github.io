import { useContext } from 'react';
import Navbar from "../Navbar";
import { data } from '../../App'
import { useParams } from 'react-router-dom';
import ProjectSlider from './ProjectSlider';
import ProjectAbout from './ProjectAbout';

const ProjectInfo = () => {
    const userData = useContext(data);
    const { id } = useParams();
    const project = userData.projects.find(project => project.id === id);
    console.log("Project Info", project);
    return (
        <div>
            <Navbar
                name={userData && userData.about.name ? userData.about.name : ''}
                page="Project"
            />
            <div className='pt-20 flex xl:h-dvh'>
                <div className='flex flex-col xl:flex-row justify-center xl:mx-10 xl:my-auto xl:py-20'>
                    <div className='xl:w-3/5'>
                        <ProjectSlider Images={project.slideImages} />
                    </div>
                    <div className='xl:w-2/5 mt-10 mt-0'>
                        <ProjectAbout ProjectData={project} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectInfo
