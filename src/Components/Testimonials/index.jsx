import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';

import { FreeMode, Pagination } from 'swiper/modules';

const Testimonials = ({ testimonials }) => {
    return (
        <>
            <div className="bg-gray-50 px-2 lg:px-20 py-8">
                <div>
                    <div className='px-5'>
                        <div>
                            <h1 className="text-2xl font-bold text-red-600 text-center">Testimonials</h1>
                        </div>
                        <Swiper
                            modules={[Pagination, FreeMode]}
                            spaceBetween={50}
                            slidesPerView={3}
                            autoplay={{ delay: 3000 }} // Adjust the delay as needed (in milliseconds)
                            pagination={{ clickable: true }}
                            freeMode={true}
                            loop={true}
                            className="testimonials-slider swiper-container"
                            breakpoints={{
                                // when window width is >= 0px
                                0: {
                                    slidesPerView: 1,
                                },
                                // when window width is >= 768px
                                768: {
                                    slidesPerView: 1,
                                },
                                // when window width is >= 1024px
                                1024: {
                                    slidesPerView: 3,
                                },
                            }}
                        >
                            {testimonials && testimonials.map((testimonial, index) => (
                                <SwiperSlide key={index} className="swiper-slide">
                                    <div className="testimonial-item bg-white drop-shadow-md px-5 lg:px-10 mt-3 mb-10 lg:my-14 h-[500px] flex" data-aos="fade-up" data-aos-delay="100">
                                        <div className='my-auto'>
                                            <img src={testimonial.image.url} className="testimonial-img rounded-full h-24 mx-auto shadow-lg" alt="" />
                                            <h3 className='text-center mt-3 font-bold text-lg text-gray-500'>{testimonial.name}</h3>
                                            <h4 className='text-center text-salad-100 text-red-400 font-bold'>{testimonial.position}</h4>
                                            <p className='text-center mt-3 text-base'>
                                                {testimonial.review}
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials