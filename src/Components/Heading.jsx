import { motion } from 'framer-motion';

const Heading = ({ title }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
        >
            <div>
                <h1 className="text-2xl text-center font-bold text-red-600 my-5 uppercase">{title}</h1>
            </div>
        </motion.div>
    )
}
export default Heading;