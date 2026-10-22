import React, { useState } from 'react'
import { Heart, ShoppingCart, X } from 'lucide-react';


const CartPage = () => {

  const [quantity, setQuantity] = useState(1);

  const [like, setLike] = useState(() => JSON.parse(localStorage.getItem("wishlist")) || [])

  const [cartadd, setCartadd] = useState(() => JSON.parse(localStorage.getItem("cart")) || [])


  // Like toggle
    const Liketoggle = (item) => {
        setLike(prev => {
            const updatedWishlist = prev.some(items => items.id === item.id)
                ? prev.filter(items => items.id !== item.id)
                : [...prev, item]

            localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
            return updatedWishlist;
        })
    }

  
  // Remove cart
  const RemoveCart = (item) =>
  {
    const updatedCart = cartadd.filter((items)=> items.id !== item.id )

    localStorage.setItem("cart",JSON.stringify(updatedCart));
    setCartadd(updatedCart)
  }


  return (
    <>

      <div className='w-full lg:w-1/2 my-4 p-3 flex flex-col gap-4'>
        {cartadd.map((item, id) =>

          <div key={item.id} className='w-full flex gap-3 justify-evenly border p-2 rounded '>

            <div className='md:w-70 '>
              <img src={item.image}
                className='border-r border-gray-200 md:w-40 md:h-40' />
            </div>

            <div className='w-full p-3'>
              <div className='leading-2 text-left '>
                <p className='font-semibold text-gray-400'>Viva Live Better</p>
                <p className='font-semibold text-lg mb-0'>{item.name}</p>

                <div className='flex justify-between'>
                  <p className='text-lg font-semibold'>
                    <span className='text-red-600'> {item.price} </span>
                    <span><del className='text-gray-400'>{item.oldPrice}</del></span>
                  </p>
                </div>
              </div>


              <div className="flex items-center border border-gray-300
                rounded-lg w-fit overflow-hidden">

                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="px-3 py-1 hover:bg-gray-100"> -
                </button>

                <span className="px-4 py-1 border-x border-gray-300">
                  {quantity}
                </span>

                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="px-3 py-1 hover:bg-gray-100">+
                </button>
              </div>

            </div>

            <div className='flex justify-between w-30 gap-2 md:gap-0'>
              <Heart onClick={()=>Liketoggle(item)} size={25} 
               color={like.includes(item) ? "red" : "gray"}
              fill={like.includes(item) ? "red" : "none"} />

              <X onClick={()=> RemoveCart(item)} size={25} color='gray' />
            </div>
          </div>
        )}

      </div>

    </>
  )
}

export default CartPage