import ServiceItem from "./ServiceItem"
const Services = ({ services }) => {
    return (
        <>
            <div className="bg-gray-50 flex justify-center py-10">
                <div>
                    <div className="md:px-10 px-5">
                        <div>
                            <h1 className="text-2xl font-bold text-red-600 my-5">MY SERVICES</h1>
                        </div>

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