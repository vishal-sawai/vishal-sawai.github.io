import ServiceItem from "./ServiceItem"
import Heading from "../Heading"
import { motion } from "framer-motion"
const Services = ({ services }) => {
    return (
        <>
            <div id="Services" className="bg-gray-50 flex justify-center py-10">
                <div>
                    <div className="md:px-10 px-5">
                        {/* Heading */}
                        <Heading title="Services" />

                        {/* Services */}
                        <motion.div variants={{
                            hidden: { opacity: 0 },
                            show: { opacity: 1, transition: { staggerChildren: 0.25 } },
                        }}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}

                            className="mx-auto flex flex-wrap justify-center">
                            {services && services.filter(item => item.enabled).map((item, index) => (
                                <ServiceItem key={index} item={item} />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services