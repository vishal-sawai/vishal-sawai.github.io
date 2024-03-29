import { useState } from 'react'
import { motion } from 'framer-motion';


const SkillItem = ({ item }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <motion.div
            whileHover={
                {
                    scale: 1.1,
                    transition: {
                        duration: 0.5
                    }
                }
            }
            key={item.id}
            className="mx-4 my-4 p-2 bg-gray-100 rounded-md w-[120px] h-[60px] md:w-[200px] md:h-[110px] flex flex-col items-center justify-center relative hover:cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={item.image.url} alt={item.name} className="md:w-10 md:h-10 w-5 h-5" />
            <h1 className="text-sm mt-1 text-gray-700">{item.name}</h1>
            {isHovered && (
                <div className="absolute inset-0 flex items-center justify-center rounded-md" style={{ backgroundColor: "rgba(255, 0, 0, 0.474)" }}>
                    <p className="mt-2 text-xl text-white font-bold">{item.percentage}%</p>
                </div>
            )}
        </motion.div>
    )
}

export default SkillItem
