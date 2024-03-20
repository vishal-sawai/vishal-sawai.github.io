import { Link } from "react-router-dom"
import ProfileImage from "../ProfileImage"
import InfoItem from "./InfoItem"
const About = ({ profileData }) => {
    return (
        <div className="bg-gray-50 py-10 lg:h-dvh lg:flex lg:justify-center">
            <div className="lg:my-auto flex flex-wrap justify-center mx-5">

                {/* About us Image  */}
                <div className="my-auto mx-5">
                    <ProfileImage url={profileData && profileData.about.avatar.url} className='lg:h-[500px] rounded-md' />
                </div>

                {/* About user */}
                <div className="mx-5 w-[500px] lg:mt-3 mt-4 grow">
                    <h1 className="font-bold text-red-600 text-xl">ABOUT ME</h1>

                    {/* QUOTE */}
                    <p className="mt-1 font-bold lg:text-2xl text-lg text-red-300">
                        {profileData && profileData.about.quote}
                    </p>
                    <p className="mt-2 text-lg text-gray-500">
                        {profileData && profileData.about.description}
                    </p>
                    <div className="mt-2">
                        {/* Name,Phone, Email,Address */}
                        <div className="flex flex-wrap justify-between">
                            <InfoItem title="Name" content={profileData && profileData.about.name} />
                            <InfoItem title="Phone" content={profileData && profileData.about.phoneNumber} />
                            <InfoItem title="Email" content={profileData && profileData.email} />
                            <InfoItem title="Address" content={profileData && profileData.about.address} />

                        </div>

                        <div className="mt-4">
                            <Link to="" className="bg-red-500 text-white px-5 py-2 rounded-md hover:bg-red-600 ">DOWNLOAD CV</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default About
