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
                <div className='my-auto flex flex-wrap justify'>
                    {/* profile Image */}
                    <motion.div className='m-auto lg:mx-5 block lg:hidden mb-5'
                        initial="hidden"
                        variants={variantsTop}
                        animate="visible"
                        transition={{ duration: 0.50 }}
                        viewport={{ once: true }}
                    >
                        <ProfileImage url={profileData && profileData.about.avatar.url} className='h-80 w-60 md:h-1/2 md:w-80 lg:h-80 lg:w-60 rounded-full' />
                    </motion.div>


                    {/* Title And SubTitle*/}
                    <motion.div className='m-auto'
                        initial="hidden"
                        variants={variants}
                        animate="visible"
                        transition={{ duration: 0.50 }}
                        viewport={{ once: true }}
                    >
                        <h1 className='xl:text-6xl text-4xl font-bold text-red-500 text-center lg:text-start'>{profileData && profileData.about.title}</h1>
                        <p className='xl:text-2xl text-xl mx-5 mt-2 text-red-300 text-center mb-5 lg:text-start font-bold'>{profileData && profileData.about.subTitle}</p>

                        {/* Social Media Icons */}
                        <div className='flex justify-center lg:justify-start ml-4'>
                            {profileData && profileData.social_handles.filter(item => item.enabled).map((social, index) => (
                                <SocialMediaHandler className="shadow-2xl" key={index} social={social} />
                            ))}
                        </div>
                    </motion.div>
                    {/* profile Image */}
                    <motion.div className='m-auto lg:mx-5 hidden lg:block'
                        initial="hidden"
                        variants={variantsRight}
                        animate="visible"
                        transition={{ duration: 0.50 }}
                        viewport={{ once: true }}
                    >
                        <ProfileImage url={profileData && profileData.about.avatar.url} className='h-100 w-80 rounded-full' />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
export default Home
