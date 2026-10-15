import { ShoppingCart } from 'lucide-react'
import React from 'react'



export const SwiperProductCard = ({ name, price, oldPrice, image, reviews, rating, icons }) => {
    return (

        <div className=" p-3 rounded-2xl border h-full hover:shadow-md">
            <img src={image}
                alt={name} />

            <div className="leading-2 mt-2 text-left">
                <p className="font-semibold text-xl text-gray-700">{name}</p>
                <p>⭐⭐⭐⭐⭐</p>
                <div className="flex justify-between items-center mt-2">
                    <h4>
                        <span className="text-red-600 mr-2">
                            {price}
                        </span>

                        <del className="text-gray-400">
                            {oldPrice}
                        </del>
                    </h4>
                    <div className='bg-green-900 w-fit p-2 rounded-full shrink-0'>
                        <ShoppingCart size={20} color='white' />
                    </div>
                </div>
            </div>
        </div>

    )
}

