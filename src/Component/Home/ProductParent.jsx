
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { SwiperProductCard } from '../../Share/Component/SwiperProductCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import p7 from '/src/Assets/img/p7.jpg';
import p5 from '/src/Assets/img/p5.jpg';
import p3 from '/src/Assets/img/p3.jpg';
import p4 from '/src/Assets/img/p4.jpg';

const ProductParent = () => {
    const products = [
        {
            name: 'Premium Quality White Shoes',
            image: p7,
            price: '$79.99',
            oldPrice: '$99.99'
        },
        {
            name: 'Premium Quality Bag',
            image: p5,
            price: '$59.99',
            oldPrice: '$89.99'
        },
        {
            name: 'Premium White T-Shirt',
            image: p4,
            price: '$74.99',
            oldPrice: '$94.99'
        },
        {
            name: 'Premium Quality Handbag',
            image: p3,
            price: '$44.99',
            oldPrice: '$64.99'
        },
        {
            name: 'Premium Quality Handbag',
            image: p3,
            price: '$44.99',
            oldPrice: '$64.99'
        },
    ];

    return (
        <div className="rounded-2xl flex flex-col bg-white px-3 gap-3">
            <h3 className="font-serif mt-2 hidden lg:flex">
                Top Picks For You ✨
            </h3>

            <Swiper
                modules={[Navigation]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={12}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
                className="Hero-Swiper">

                {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <SwiperProductCard
                            {...product}
                            icons={<ShoppingCart size={28} color="white" />}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ProductParent;
