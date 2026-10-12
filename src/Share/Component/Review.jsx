import React from 'react'
import { ShoppingCart } from 'lucide-react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";


const ReviewCard = ({ img, name, review }) => {
    return (

        <div id='card' className=' flex gap-3 border shadow-md p-2 rounded-2xl'>
            <img src={img} className='h-20 rounded-full' />

            <div className='leading-5 mt-2'>
                <p className='font-semibold'>{name}</p>
                <p>⭐⭐⭐⭐</p>
                <p>{review}</p>
            </div>
        </div>

    )
}

export default ReviewCard