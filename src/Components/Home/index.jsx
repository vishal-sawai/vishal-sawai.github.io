import ProfileImage from '../ProfileImage'
import SocialMediaHandler from '../SocialMediaHandler'
import { motion } from 'framer-motion';

const Home = ({ profileData }) => {

    const variants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
    }
    const variantsRight = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
    }
    const variantsTop = {
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0 },
    }

    return (
        <div id='Home'>
            <div className='flex justify-center h-[100vh] lg:pt-20'>
                {/* Two part first part is title and subtitle second part is img*/}
                <div className='my-auto flex flex-wrap'>
                    {/* profile Image */}
                    <motion.div className='m-auto lg:mx-5 block lg:hidden mb-5 border border-2 border-red-200 rounded-full p-6'
                        initial="hidden"
                        variants={variantsTop}
                        animate="visible"
                        transition={{ duration: 0.50 }}
                        viewport={{ once: true }}
                    >
                        <ProfileImage url={profileData && profileData.about.avatar.url} className='h-60 w-60 md:h-80 md:w-80 lg:h-60 lg:w-60 rounded-full' />
                    </motion.div>


                    {/* Title And SubTitle*/}
                    <motion.div className='m-auto'
                        initial="hidden"
                        variants={variants}
                        animate="visible"
                        transition={{ duration: 0.50 }}
                        viewport={{ once: true }}
                    >
                        <div className='flex capitalize text-xl font-semibold text-red-400 lg:text-start text-center justify-center lg:justify-start'>
                            <p className='mr-1 lg:text-start text-center'>Hey,I'M</p> <h2 className='mx-1 font-bold text-blue-700'>{profileData && profileData.about.name}</h2>
                        </div>
                        <div className='lg:mt-1'>
                            <h1 className='xl:text-6xl text-2xl font-bold text-gray-600 text-center lg:text-start'>
                                {profileData && profileData.about.title.split(' ').map((word, index) =>
                                    word.toLowerCase() === 'software' ?
                                        <span key={index} className='text-red-600'>{word} </span> :
                                        <span key={index}>{word} </span>
                                )}
                            </h1><p className='xl:text-xl text-lg lg:mr-5 lg:mt-2 mx-5 mt-1 text-gray-500 font-normal text-center mb-5 lg:text-start'>{profileData && profileData.about.subTitle}</p>
                        </div>
                        {/* Social Media Icons */}
                        <div className='flex justify-center lg:justify-start ml-4'>
                            {profileData && profileData.social_handles.filter(item => item.enabled).map((social, index) => (
                                <SocialMediaHandler className="shadow-2xl" key={index} social={social} />
                            ))}
                        </div>
                    </motion.div>
                    {/* profile Image */}
                    <motion.div className='m-auto border border-2 border-red-200 rounded-full p-8 lg:mx-5 hidden lg:block'
                        initial="hidden"
                        variants={variantsRight}
                        animate="visible"
                        transition={{ duration: 0.50 }}
                        viewport={{ once: true }}
                    >
                        <ProfileImage url={profileData && profileData.about.avatar.url} className='h-80 w-80 rounded-full' />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
export default Home
