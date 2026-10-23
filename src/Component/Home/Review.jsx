import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ReviewCard from '../../Share/Component/ReviewCard';
import ReviewData from '../../Share/Constant/ReviewData';

const Review = () => {

   const {reviewList} = ReviewData();

    return (

        <div className='mt-3 flex flex-col  gap-3 w-full bg-white'>
            <h2 className='font-serif hidden lg:flex'>Loved By Thousands ❤️</h2>

            <Swiper
                modules={[Navigation]}
                navigation
                pagination={{ clickable: true }}
                slidesPerView={1}
                spaceBetween={12}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
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