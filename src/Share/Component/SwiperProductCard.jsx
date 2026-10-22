import { Heart, ShoppingCart } from 'lucide-react'
import React, { useState } from 'react'


export const SwiperProductCard = ({ name, price, oldPrice, image, reviews, rating, icons }) => {

const [like, setLike] = useState(false)

    return (

        <div className="p-2 rounded-2xl border h-full hover:shadow-md">

         
            <img src={image} alt={name} className='relative'/>

              <Heart onClick={()=> setLike(!like)}
                         size={30} color={like ? "red" : "white"} 
                         fill={like ? "red" : "none"}
                         className='fixed top-5 right-5'/>


            <div className="leading-3 mt-4 text-left ms-2">
                <p className="font-semibold text-gray-700">{name}</p>
                <p>⭐⭐⭐⭐⭐</p>

                <div className="flex justify-between">                   
                    
                    <p className=' font-semibold h-4 text-xl'>
                        <span className="text-red-600  mr-3">
                            {price}
                        </span>

                        <del className="text-gray-400">
                            {oldPrice}
                        </del>
                    </p>

                    <div className='flex gap-4 items-center'>

                        <div className='bg-green-900 w-fit p-2 rounded-full'>
                            <ShoppingCart size={20} color='white' />
                        </div>                      
                    </div>

                </div>
            </div>
        </div>

    )
}

