import React from 'react'
import { ShoppingCart } from 'lucide-react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";


const Products = () => {
  return (
    <>

    <div className='rounded-2xl flex flex-col px-3 py-2 bg-white'>

   <h3 className='font-serif mt-2 hidden lg:flex'>Top Picks For You ✨</h3>

      <Swiper
        slidesPerView={1}
        spaceBetween={15}
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
            slidesPerView: 4,
          },
        }}
        className="Hero-Swiper">

        {/* card 1 */}
        <SwiperSlide>
          <div id='card' className='w-full border shadow-md p-2 rounded-2xl'>
            <img src="/src/Assets/img/p7.jpg"
              className='w-full h-40 object-fill rounded-2xl' />

            <div className='leading-4 mt-2'>
              <p className='font-semibold'>Premuim Quality White Shoe</p>
              <p>⭐⭐⭐⭐ (1,234)</p>

              <div className='flex justify-between'>
                <h4>
                  <span className='text-red-600'> $79.99 </span>
                  <span><del className='text-gray-400 text-xl'>$99.99</del></span>
                </h4>

                <div className='bg-green-900 w-fit p-2 rounded-full'>
                  <ShoppingCart size={20} color='white' />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* card 2 */}
        <SwiperSlide>
          <div id='card' className='w-full p-2 border shadow-md rounded-2xl'>

            <img src="/src/Assets/img/p5.jpg"
              className='w-full h-40 object-contain rounded-2xl' />

            <div className='leading-4 mt-2'>
              <p className='font-semibold'>Premuim Quality White Shoe</p>
              <p>⭐⭐⭐⭐⭐ (1,234)</p>

              <div className='flex justify-between'>
                <h4>
                  <span className='text-red-600'> $79.99 </span>
                  <span><del className='text-gray-400 text-xl'>$99.99</del></span>
                </h4>

                <div className='bg-green-900 w-fit p-2 rounded-full'>
                  <ShoppingCart size={20} color='white' />
                </div>
              </div>

            </div>
          </div>
        </SwiperSlide>

        {/* card 3 */}
        <SwiperSlide>
          <div id='card' className='w-full shadow-md  p-2 border rounded-2xl'>

            <img src="/src/Assets/img/p3.jpg"
              className='object-cover rounded-2xl' />

            <div className='leading-4 mt-2'>
              <p className='font-semibold'>Premuim Quality White Shoe</p>
              <p>⭐⭐⭐⭐⭐ (1,234)</p>

              <div className='flex justify-between'>
                <h4>
                  <span className='text-red-600'> $79.99 </span>
                  <span><del className='text-gray-400 text-xl'>$99.99</del></span>
                </h4>

                <div className='bg-green-900 w-fit p-2 rounded-full'>
                  <ShoppingCart size={20} color='white' />
                </div>
              </div>

            </div>
          </div>
        </SwiperSlide>

        {/* card 4 */}
        <SwiperSlide>
          <div id='card' className='shadow-md  p-2 border rounded-2xl'>

            <img src="/src/Assets/img/p4.jpg"
              className=' object-fill rounded-2xl' />

            <div className='leading-3 mt-2'>
              <p className='font-semibold'>Premuim Quality White Shoe</p>
              <p>⭐⭐⭐⭐⭐ (1,234)</p>

              <div className='flex justify-between'>
                <h4>
                  <span className='text-red-600'> $79.99 </span>
                  <span><del className='text-gray-400 text-xl'>$99.99</del></span>
                </h4>

                <div className='bg-green-900 w-fit p-2 rounded-full'>
                  <ShoppingCart size={20} color='white' />
                </div>
              </div>

            </div>
          </div>
        </SwiperSlide>

         {/* card 5 */}
        <SwiperSlide>
          <div id='card' className='shadow-md  p-2 border rounded-2xl'>

            <img src="/src/Assets/img/p8.jpg"
              className=' object-fill rounded-2xl' />

            <div className='leading-3 mt-2'>
              <p className='font-semibold'>Premuim Quality White Shoe</p>
              <p>⭐⭐⭐⭐⭐ (1,234)</p>

              <div className='flex justify-between'>
                <h4>
                  <span className='text-red-600'> $79.99 </span>
                  <span><del className='text-gray-400 text-xl'>$99.99</del></span>
                </h4>

                <div className='bg-green-900 w-fit p-2 rounded-full'>
                  <ShoppingCart size={20} color='white' />
                </div>
              </div>

            </div>
          </div>
        </SwiperSlide>
       

        {/* card 6 */}
        <SwiperSlide>
          <div id='card' className='shadow-md  p-2 border rounded-2xl'>

            <img src="/src/Assets/img/p6.jpg"
              className=' object-fill rounded-2xl' />

            <div className='leading-3 mt-2'>
              <p className='font-semibold'>Premuim Quality White Shoe</p>
              <p>⭐⭐⭐⭐⭐ (1,234)</p>

              <div className='flex justify-between'>
                <h4>
                  <span className='text-red-600'> $79.99 </span>
                  <span><del className='text-gray-400 text-xl'>$99.99</del></span>
                </h4>

                <div className='bg-green-900 w-fit p-2 rounded-full'>
                  <ShoppingCart size={20} color='white' />
                </div>
              </div>

            </div>
          </div>
        </SwiperSlide>

      </Swiper>
      </div>
    </>
  )
}

export default Products