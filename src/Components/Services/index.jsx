import ServiceItem from "./ServiceItem"
import Heading from "../Heading"
const Services = ({ services }) => {
    return (
        <>
            <div id="Services" className="bg-gray-50 flex justify-center py-10">
                <div>
                    <div className="md:px-10 px-5">
                        {/* Heading */}
                        <Heading title="Services" />

                        {/* Services */}
                        <div className="mx-auto">
                            {services && services.filter(item => item.enabled).map((item, index) => (
                                <ServiceItem key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services