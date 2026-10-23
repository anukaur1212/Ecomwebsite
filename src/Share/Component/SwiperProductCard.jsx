import { Heart, ShoppingCart } from 'lucide-react'
import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import useWishList from '../CustomHook/useWishList'
import useCartAdd from '../CustomHook/useCartAdd'


export const SwiperProductCard = ({ id, name, price, oldPrice, image }) => {

    const item = { id, name, price, oldPrice, image }
    const { like, setLike, setCart, cart } = useOutletContext();
    const {Liketoggle} = useWishList({ setLike, like });
    const {CartAdded} = useCartAdd({cart,setCart});

    return (

        <div className="p-2 rounded-2xl border h-full hover:shadow-md">
            <img src={image} alt={name} className='relative' />

            <Heart onClick={() => Liketoggle(item)}
                size={30}
                className={`cursor-pointer hover:scale-115 transition-all duration-200
                             absolute top-5 right-5 
                               ${like.some(product => product.id === id)
                        ? "text-red-500 fill-red-500"
                        : "text-gray-400 fill-transparent hover:text-red-500 hover:fill-red-500"
                    }`}/>


            <div className="leading-3 mt-4 text-left ms-2">
                <p className="font-semibold text-gray-700">{name}</p>
                <p>⭐⭐⭐⭐⭐</p>

                <div className="flex justify-between">

                    <p className='font-semibold h-4 text-xl'>
                        <span className="text-red-600  mr-3">
                            {price}
                        </span>

                        <del className="text-gray-400">
                            {oldPrice}
                        </del>
                    </p>

                    <div className='flex gap-4 items-center'>

                        <div className='bg-green-900 w-fit p-2 rounded-full
                                         shrink-0 cursor-pointer hover:scale-115 transition-all duration-200'>
                            <ShoppingCart
                                onClick={() => CartAdded(item)}
                                size={20} color='white' />
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

