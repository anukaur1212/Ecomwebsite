import React, { useState } from 'react'
import { Heart, ShoppingCart } from 'lucide-react';
import { NavLink, useOutletContext } from 'react-router-dom';
import { products } from './ProductList';
import useWishList from '../../Share/Component/CustomHook/useWishList';


const Product = () => {

  const {like,setLike, cart, setCart } = useOutletContext();

  const {Liketoggle} = useWishList({like,setLike});

  
  const CartAdded = (product) => {
    setCart(prev => {
      const safeCart = prev.filter(item => item != null);
      if (safeCart.some(item => item.id === product.id)) {
        return safeCart;
      }

      const updatedCart = [...safeCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };



  return (
    <>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-3 
      sm:p-8 gap-4'>
        {products.map((item, id) =>

          <div key={item.id} className='border w-full flex flex-col justify-between shadow-md p-2 sm:p-3 lg:p-4 rounded-2xl 
          hover:scale-102 transition'>

            <NavLink to={`/detail/${item.id}`}>
              <div className='relative'>
                <img src={item.image}
                  className='rounded-2xl w-full h-80 sm:h-85' />

                <Heart onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  Liketoggle(item)
                }}
                  size={30}
                  color={like.some((items) => items.id === item.id) ? "red" : "gray"}
                  fill={like.some((items) => items.id === item.id) ? "red" : "none"}
                  className='absolute top-3 right-3' />
              </div>
            </NavLink>

            <div className='leading-2 mt-3 ms-2.5'>
              <p className='font-semibold'>{item.name}</p>
              <p>⭐⭐⭐⭐</p>

              <div className='flex justify-between'>
                <h4>
                  <span className='text-red-600'> {item.price} </span>
                  <span><del className='text-gray-400'>{item.oldPrice}</del></span>
                </h4>

                <div className='bg-green-900 w-fit p-2 rounded-full
                 shrink-0 cursor-pointer'>
                  <ShoppingCart
                    onClick={() => CartAdded(item)}
                    size={20} color='white' />
                </div>

              </div>
            </div>
          </div>
        )}
      </div>

    </>
  )

}

export default Product