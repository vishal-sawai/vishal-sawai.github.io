import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { getImageUrl } from "../../Utils/image-util";

const ProjectSlider = ({ Images }) => {
    const [activeImg, setActiveImg] = useState(0);
    console.log("Images", Images);
    console.log(Images.map(getImageUrl)); // Check the image URLs

    const prevSlide = () => {
        const isFirstSlide = activeImg === 0;
        const newIndex = isFirstSlide ? Images.length - 1 : activeImg - 1;
        setActiveImg(newIndex);
    };

    const nextSlide = () => {

        const isLastSlide = activeImg === Images.length - 1;
        const newIndex = isLastSlide ? 0 : activeImg + 1;
        setActiveImg(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setActiveImg(slideIndex);
    };

    return (
        <div className="bg-white w-full h-full flex items-center">
            {/* Left Arrow */}
            <div className='relative left-5 text-lg rounded-full p-2 text-white cursor-pointer bg-yellow-500' style={{ zIndex: 1 }}>
                <BsChevronCompactLeft onClick={prevSlide} md:size={30} />
            </div>

            {/* Slider */}
            <div className="w-full h-full relative border rounded-md flex items-center justify-center">
                {Images.map((item, index) => (
                    <img
                        key={index}
                        className={"my-auto" + (activeImg === index ? " block" : " hidden")}
                        src={getImageUrl(item)} // Assuming item has an 'img' property
                        alt={item}
                    />
                ))}
                <div className='hidden lg:flex absolute -bottom-14 left-0 right-0 justify-center'>
                    {Images.map((slide, slideIndex) => (
                        <div
                            key={slideIndex}
                            onClick={() => goToSlide(slideIndex)}
                            className='text-lg cursor-pointer'
                        >
                            <RxDotFilled className='text-yellow-400 lg:text-3xl hover:text-slate-400' />
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Arrow */}
            <div className='relative right-5 text-lg rounded-full p-2  text-white cursor-pointer bg-yellow-500'>
                <BsChevronCompactRight onClick={nextSlide} md:size={30} />
            </div>
        </div>
    );

}

export default ProjectSlider