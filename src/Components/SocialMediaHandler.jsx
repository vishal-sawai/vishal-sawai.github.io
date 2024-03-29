import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const SocialMediaHandler = ({ social }) => {
    return (
        <motion.div className='mx-3' whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
            <Link to={social.url} className='hover:opacity-70'>
                <img src={social.image.url} alt={social.platform} className=' h-10 w-10 lg:h-10 lg:w-10' />
            </Link>
        </motion.div>
    )
}

export default SocialMediaHandler;