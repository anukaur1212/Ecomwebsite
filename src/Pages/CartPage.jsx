import React, { useState } from 'react'
import { Heart, ShoppingCart, X } from 'lucide-react';
import { useOutletContext } from 'react-router-dom';
import PaymentCard from '../Share/Component/PaymentCard';
import useWishList from '../Share/Component/CustomHook/useWishList';


const CartPage = () => {

  const { cart, setCart, like, setLike, quantity, setQuantity } = useOutletContext();
  const { Liketoggle } = useWishList({ like, setLike })


  // Remove cart
  const RemoveCart = (item) => {
    const updatedCart = cart.filter((items) => items.id !== item.id)

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart)
  }


  // Quantity Update
  const updateQuantity = (id, value) => {
    setQuantity(prev => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + value)
    }))
  }

  return (
    <>

      <p className='mb-0 text-xl md:text-4xl font-bold text-green-900 w-fit p-2 md:p-4'>
        Shopping Cart
      </p>
      <div className='w-full flex justify-between lg:p-4 flex-col md:flex-row'>

        <div className='w-full lg:w-1/2 p-2 md:mb-4 md:p-3 flex flex-col gap-2 md:gap-4'>

          {cart.map((item, id) =>

            <div key={item.id} className=' w-full flex lg:gap-3 justify-evenly border p-2 rounded '>

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
                    onClick={() => updateQuantity(item.id, -1)}
                    className="px-3 py-1 hover:bg-gray-100"> -
                  </button>

                  <span className="px-4 py-1 border-x border-gray-300">
                    {quantity[item.id] || 1}
                  </span>

                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="px-3 py-1 hover:bg-gray-100">+
                  </button>
                </div>

              </div>

              <div className='flex justify-between w-30 gap-2 md:gap-0'>
                <Heart
                  onClick={() => Liketoggle(item)}
                  size={25}
                  className={`cursor-pointer hover:scale-115 transition-all duration-200
                  ${like.some(product => product.id === item.id)
                      ? "text-red-500 fill-red-500"
                      : "text-gray-500 fill-transparent hover:text-red-500 hover:fill-red-500"
                    }`}/>

                <X onClick={() => RemoveCart(item)} size={25} color='gray' className='cursor-pointer' />
              </div>
            </div>
          )}

        </div>

        <PaymentCard />

      </div>

    </>
  )
}

export default CartPage