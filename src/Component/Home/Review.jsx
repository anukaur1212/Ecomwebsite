import React from 'react'
import { ShoppingCart } from 'lucide-react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import user from '/src/Assets/img/avatar-2.jpg';
import ReviewCard from '../../Share/Component/ReviewCard';

const Review = () => {

    const reviewList = [
        {
            img: user,
            name: 'Sarah J.',
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing eli Animi, rerum."
        },
        {
            img: user,
            name: 'Sarah J.',
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing eli Animi, rerum."
        },
        {
            img: user,
            name: 'Sarah J.',
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing eli Animi, rerum."
        },
        {
            img: user,
            name: 'Sarah J.',
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing eli Animi, rerum."
        }

    ]

    return (

        <div className='mt-3 flex flex-col  gap-3 w-full bg-white p-3'>
            <h2 className='font-serif hidden lg:flex'>Loved By Thousands ❤️</h2>

            <Swiper
                modules={[Navigation]}
                navigation
                pagination={{ clickable: true }}
                slidesPerView={1}
                spaceBetween={12}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 3 },
                }}
                className="review-Swiper">

                {reviewList.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="card">
                            <ReviewCard img={item.img}
                                name={item.name}
                                review={item.review} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    )
}

export default Review