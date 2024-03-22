import ProfileImage from '../ProfileImage'
import SocialMediaHandler from '../SocialMediaHandler'

const Home = ({ profileData }) => {
    return (
        <div id='Home'>
            <div className='flex justify-center h-[100vh] lg:pt-20'>
                {/* Two part first part is title and subtitle second part is img*/}
                <div className='my-auto flex flex-wrap justify'>
                    {/* profile Image */}
                    <div className='m-auto lg:mx-5 block lg:hidden mb-5'>
                        <ProfileImage url={profileData && profileData.about.avatar.url} className='h-80 w-60 md:h-1/2 md:w-80 lg:h-80 lg:w-60 rounded-full' />
                    </div>


                    {/* Title And SubTitle*/}
                    <div className='m-auto'>
                        <h1 className='xl:text-6xl text-4xl font-bold text-red-500 text-center lg:text-start'>{profileData && profileData.about.title}</h1>
                        <p className='xl:text-2xl text-xl mx-5 mt-2 text-red-300 text-center mb-5 lg:text-start font-bold'>{profileData && profileData.about.subTitle}</p>

                        {/* Social Media Icons */}
                        <div className='flex justify-center lg:justify-start ml-4'>
                            {profileData && profileData.social_handles.filter(item => item.enabled).map((social, index) => (
                                <SocialMediaHandler className="shadow-2xl" key={index} social={social} />
                            ))}
                        </div>
                    </div>
                    {/* profile Image */}
                    <div className='m-auto lg:mx-5 hidden lg:block'>
                        <ProfileImage url={profileData && profileData.about.avatar.url} className='h-100 w-80 rounded-full' />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home
