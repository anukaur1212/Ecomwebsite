import React from 'react'
import { ShoppingCart } from 'lucide-react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import user_img from '/src/Assets/img/avatar-2.jpg';

const Review = () => {
    return (

        <div className='mt-3 flex flex-col gap-3 w-full bg-white rounded-2xl p-3'>

            <h2 className='font-serif hidden lg:flex'>Loved By Thousands ❤️</h2>

            <div className='flex flex-col md:flex-row gap-2 md:gap-4'>


                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    navigation
                    modules={[Navigation]}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className="review-Swiper">

                    <SwiperSlide>
                        <div id='card' className=' flex w-full gap-3 border shadow-md p-2 rounded-2xl'>
                            <img src={user_img} />

                            <div className='leading-5 mt-2'>
                                <p className='font-semibold'>Sarah J.</p>
                                <p>⭐⭐⭐⭐</p>
                                 <p className='text-md'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Animi, rerum.</p>                
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div id='card' className=' flex gap-3 border shadow-md p-2 rounded-2xl'>
                            <img src={user_img} />

                            <div className='leading-5 mt-2'>
                                <p className='font-semibold'>Sarah J.</p>
                                <p>⭐⭐⭐⭐</p>
                                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Animi, rerum.</p>                
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div id='card' className=' flex gap-3 border shadow-md p-2 rounded-2xl'>
                            <img src={user_img} />

                           <div className='leading-5 mt-2'>
                                <p className='font-semibold'>Sarah J.</p>
                                <p>⭐⭐⭐⭐</p>
                                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Animi, rerum.</p>                
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div id='card' className=' flex gap-3 border shadow-md p-2 rounded-2xl'>
                            <img src={user_img} />

                            <div className='leading-5 mt-2'>
                                <p className='font-semibold'>Sarah J.</p>
                                <p>⭐⭐⭐⭐</p>
                                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Animi, rerum.</p>                
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Review