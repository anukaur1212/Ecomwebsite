import React from 'react'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import img1 from '/src/Assets/img/img1.jpg';
import img2 from '/src/Assets/img/img2.jpg';


const MainSlider = () => {



  return (
<>
<div className='w-full p-2 bg-gray-100'>
    <div>
     <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination]}
        className="mySwiper">

        <SwiperSlide>
            <img src={img1} alt="img" />
        </SwiperSlide>

        <SwiperSlide>
            <img src={img2} alt="img" />
        </SwiperSlide>
      </Swiper>
    </div>



</div>
</>
  )
}

export default MainSlider