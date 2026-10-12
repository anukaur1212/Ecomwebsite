import React from 'react'
import { ShoppingCart } from 'lucide-react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Review from '../../Share/Component/Review'
import user from '/src/Assets/img/avatar-2.jpg';

const ReviewCard = () => {
    return (

        <div className='mt-3 flex flex-col gap-3 w-full bg-white rounded-2xl p-3'>
            <h2 className='font-serif hidden lg:flex'>Loved By Thousands ❤️</h2>
            <div className='flex flex-col md:flex-row gap-2 md:gap-4'>

                <Review img={user} name="Sarah J."
                    review="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Animi, rerum."/>

                <Review img={user} name="Sarah J."
                    review="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Animi, rerum."/>

                <Review img={user} name="Sarah J."
                    review="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Animi, rerum."/>

            </div>
        </div>
    )
}

export default ReviewCard