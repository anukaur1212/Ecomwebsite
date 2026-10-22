import React, { useState } from 'react'
import { Heart, ShoppingCart } from 'lucide-react';

const WishlistPage = () => {

  const [like, setLike] = useState(() => JSON.parse(localStorage.getItem("wishlist")) || [])

  const Liketoggle = (item) => {

    setLike(prev => {

      const updatedWishlist =  prev.filter(items => items.id !== item.id)
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      return updatedWishlist;
    })
  }

  
    return (
        <>

            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-3 sm:p-8
             gap-4 my-4 md:my-2 lg:my-2'>
                {like.map((item, id) =>

                    <div key={item.id} className='border w-full flex flex-col justify-between shadow-md p-2 sm:p-3 lg:p-4 rounded-2xl 
                    hover:scale-102 transition'>

                        <div className='relative'>
                            <img src={item.image}
                                className='rounded-2xl w-full h-80 sm:h-85' />

                            <Heart onClick={() => Liketoggle(item)}
                                size={30}
                                color={like.includes(item) ? "red" : "gray"}
                                fill={like.includes(item) ? "red" : "none"}
                                className='absolute top-3 right-3' />

                        </div>

                        <div className='leading-2 mt-3 ms-2.5'>
                            <p className='font-semibold'>{item.name}</p>
                            <p>⭐⭐⭐⭐</p>

                            <div className='flex justify-between'>
                                <h4>
                                    <span className='text-red-600'> {item.price} </span>
                                    <span><del className='text-gray-400'>{item.oldPrice}</del></span>
                                </h4>

                                <div className='bg-green-900 w-fit p-2 rounded-full shrink-0'>
                                    <ShoppingCart size={20} color='white' />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>


        </>
    )
}

export default WishlistPage