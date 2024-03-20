const InfoItem = ({ title, content }) => (
    <div className="mx-2 my-2">
        <h1 className="text-red-400 text-xl">{title}</h1>
        <p className="text-lg text-gray-400">{content}</p>
    </div>
);

export default InfoItem;