const ServiceItem = ({ item }) => (
    <div key={item.id} className="flex mb-10 md:mb-14 bg-white rounded-md shadow-xl flex-wrap">
        <div className="w-1/3 md:mr-5 mr-3 drop-shadow-2xl">
            <img src={item.image.url} alt="Services" className="h-[150px] md:h-[250px] w-full rounded-md " />
        </div>
        <div className="w-1/3 drop-shadow-2xl grow">
            <h1 className="text-light md:text-xl font-bold text-red-600 my-2 md:my-5">{item.name}</h1>
            <p className="text-gray-500 text-xs md:text-lg">{item.desc}</p>
        </div>
        <div className="drop-shadow-2xl md:w-60 w-28 flex flex-col justify-center bg-gray-50 rounded-md grow">
            <div className="mx-auto my-3">
                <h1 className="md:text-2xl text-base text-font-bold text-gray-400 text-center">PRICE</h1>
                <p className="md:text-xl text-sm text-red-300 text-center">{item.charge}</p>
            </div>
        </div>
    </div>
);

export default ServiceItem;