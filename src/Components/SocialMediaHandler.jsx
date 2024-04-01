import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getImageUrl } from '../Utils/image-util';

const SocialMediaHandler = ({ social }) => {
    return (
        <motion.div className='mx-1' whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
            <Link to={social.url} className='hover:opacity-70'>
                <img src={getImageUrl(social.image.url)} alt={social.platform} className=' h-16 w-16' />
            </Link>
        </motion.div>
    )
}

export default SocialMediaHandler;