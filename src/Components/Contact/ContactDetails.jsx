//
const ContactDetail = ({ Icon, title, content }) => (
    <div className="flex mb-10 bg-white py-3 h-28 px-10 border rounded-md w-80 lg:w-full">
        <div className="my-auto p-5 rounded-full mx-5 shadow-xl">
            <Icon className="text-2xl text-red-600" />
        </div>
        <div className="my-auto">
            <h2 className="text-lg font-bold text-red-600 ">{title}</h2>
            <p className="text-gray-400 ">{content}</p>
        </div>
    </div>
);

export default ContactDetail;