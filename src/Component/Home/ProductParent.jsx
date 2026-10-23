
import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { SwiperProductCard } from '../../Share/Component/SwiperProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { products } from '../../Share/Constant/ProductData';


const ProductParent = () => {

    return (
        <div className="rounded-2xl flex flex-col bg-white gap-3">
            <h3 className="font-serif mt-2 hidden md:flex lg:flex">
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
                            icons={<ShoppingCart size={28} color="white"/>}
                        />
                    </SwiperSlide>
                 ))} 
            </Swiper>
        </div>
    );
};

export default ProductParent;
