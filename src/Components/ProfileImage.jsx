import { getImageUrl } from "../Utils/image-util";
const ProfileImage = ({ url, className }) => (
    <>
        <img src={getImageUrl(url)} alt='profile' className={className} />
    </>
);
export default ProfileImage;