
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import p7 from '/src/Assets/img/p7.jpg';
import p5 from '/src/Assets/img/p5.jpg';
import p3 from '/src/Assets/img/p3.jpg';
import p4 from '/src/Assets/img/p4.jpg';
import p8 from '/src/Assets/img/p8.jpg';
import p6 from '/src/Assets/img/p6.jpg';

const topProducts = [
  {
    id: 1,
    name: 'Premium Quality White Sandals',
    price: 79.99,
    oldPrice: 99.99,
    image: p8,
    rating: 4,
    reviews: 1234,
  },
  {
    id: 2,
    name: 'Classic Black Sandals',
    price: 59.99,
    oldPrice: 79.99,
    image: p8,
    rating: 5,
    reviews: 856,
  },
  {
    id: 3,
    name: 'Casual Running Sandals',
    price: 69.99,
    oldPrice: 89.99,
    image: p8,
    rating: 4,
    reviews: 642,
  },
  {
    id: 4,
    name: 'Sporty Training Sandals',
    price: 49.99,
    oldPrice: 69.99,
    image: p8,
    rating: 4,
    reviews: 921,
  },
  {
    id: 5,
    name: 'Comfort Sandals',
    price: 54.99,
    oldPrice: 74.99,
    image: p8,
    rating: 5,
    reviews: 740,
  },
  {
    id: 6,
    name: 'Everyday Sandals',
    price: 64.99,
    oldPrice: 84.99,
    image: p8,
    rating: 4,
    reviews: 530,
  },
];

const Products = () => {
  return (
    <div className="rounded-2xl flex flex-col px-3 py-2 bg-white">

      <h3 className="font-serif mt-2 hidden lg:flex">
        Top Picks For You ✨
      </h3>

      <Swiper
        slidesPerView={1}
        spaceBetween={15}
        navigation
        modules={[Navigation]}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="Hero-Swiper"
      >

        {topProducts.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="w-full border shadow-md p-2 rounded-2xl">

              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-contain rounded-2xl" />

              <div className="leading-1 mt-2">
                <p className="font-semibold">{item.name}</p>

                <p>
                  {'⭐'.repeat(item.rating)} ({item.reviews.toLocaleString()})
                </p>

                <div className="flex justify-between items-center mt-2">
                  <h4>
                    <span className="text-red-600 mr-2">
                      ${item.price.toFixed(2)}
                    </span>

                    <del className="text-gray-400">
                      ${item.oldPrice.toFixed(2)}
                    </del>
                  </h4>

                  <button
                    type="button"
                    className="bg-green-900 w-fit p-2 rounded">
                    <ShoppingCart size={20} color="white" />
                  </button>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>

  );
};

export default Products;