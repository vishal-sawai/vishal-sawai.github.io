import { motion } from "framer-motion";
const ServiceItem = ({ item }) => (

    <motion.div variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1 },
    }} key={item.id} className="relative max-w-sm rounded overflow-hidden shadow-lg mx-5 my-5">
        <img className="w-full" src={item.image.url} alt="Services Img" />
        <div className="px-6 py-4 mb-14">
            <div className="font-bold text-xl mb-2">{item.name}</div>
            <p className="text-gray-700 text-base">
                {item.desc}
            </p>
        </div>
        <div className="absolute inset-x-0 bottom-0 flex justify-center py-3 bg-gray-100">
            <p className="">{item.charge}</p>
        </div>
    </motion.div>

);

export default ServiceItem;