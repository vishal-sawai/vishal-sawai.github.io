import { Link } from "react-router-dom"
import ProfileImage from "../ProfileImage"
import { motion } from 'framer-motion';
const About = ({ profileData }) => {
    return (
        <div id="About" className="py-20 lg:flex lg:justify-center bg-[#F8F9F9]">
            <motion.div initial={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}

                className="lg:my-auto flex flex-wrap justify-center mx-5">

                {/* About us Image  */}
                <div className="my-auto lg:mx-5">
                    <ProfileImage url={profileData && profileData.about.aboutImg.url} className='h-[500px] rounded-md' />
                </div>

                {/* About user */}
                <div className="mx-5 w-[300px] lg:w-[500px] mt-7 grow">
                    <h1 className="font-bold text-red-600 text-2xl">ABOUT ME</h1>
                    <p className="mt-2 text-lg text-gray-600">
                        {profileData && profileData.about.description}
                    </p>
                    <div className="mt-2">
                        <div className="mt-5">
                            <Link to="https://drive.google.com/drive/folders/133qhV5lVdSBTlt-2ukKNaK7-hkZDS6ZT?usp=drive_link" className="bg-red-500 text-white px-5 py-2 rounded-md ">VIEW RESUME</Link>
                        </div>
                    </div>
                </div>

            </motion.div>
        </div >
    )
}

export default About
