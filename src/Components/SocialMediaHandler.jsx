import { Link } from 'react-router-dom'
const SocialMediaHandler = ({ social }) => {
    return (
        <Link to={social.url} className='mx-3 hover:opacity-70'>
            <img src={social.image.url} alt={social.platform} className=' h-10 w-10 md:h-20 md:w-20 lg:h-10 lg:w-10' />
        </Link>
    )
}

export default SocialMediaHandler
