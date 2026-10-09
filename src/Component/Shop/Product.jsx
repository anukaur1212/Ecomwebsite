import React from 'react'
import { ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Premium Quality White sandals",
    price: 79.99,
    oldPrice: 99.99,
    image: "/src/Assets/img/shoe4.jpg",
    rating: 4,
    reviews: 1234,
  },
  {
    id: 2,
    name: "Classic Black Sandals",
    price: 59.99,
    oldPrice: 79.99,
    image: "/src/Assets/img/shoe2.jpg",
    rating: 5,
    reviews: 856,
  },
  {
    id: 3,
    name: "Casual Running Sandals",
    price: 69.99,
    oldPrice: 89.99,
    image: "/src/Assets/img/shoe4.jpg",
    rating: 4,
    reviews: 642,
  },
  {
    id: 4,
    name: "Sporty Training Sandals",
    price: 49.99,
    oldPrice: 69.99,
    image: "/src/Assets/img/p7.jpg",
    rating: 4,
    reviews: 921,
  },
  {
    id: 5,
    name: "Lightweight Walking Sandals",
    price: 54.99,
    oldPrice: 74.99,
    image: "/src/Assets/img/p7.jpg",
    rating: 5,
    reviews: 478,
  },
  {
    id: 6,
    name: "Modern Casual Sandals",
    price: 64.99,
    oldPrice: 84.99,
    image: "/src/Assets/img/product5.jpg",
    rating: 4,
    reviews: 735,
  },

  {
    id: 7,
    name: "Lightweight Walking Sandals",
    price: 54.99,
    oldPrice: 74.99,
    image: "/src/Assets/img/product3.jpg",
    rating: 5,
    reviews: 478,
  },
  {
    id: 8,
    name: "Modern Casual Sneakers",
    price: 64.99,
    oldPrice: 84.99,
    image: "/src/Assets/img/product4.jpg",
    rating: 4,
    reviews: 735,
  },

  {
    id: 9,
    name: "Lightweight Walking Sandals",
    price: 54.99,
    oldPrice: 74.99,
    image: "/src/Assets/img/product1.jpg",
    rating: 5,
    reviews: 478,
  },
  {
    id: 10,
    name: "Modern Casual Sandals",
    price: 64.99,
    oldPrice: 84.99,
    image: "/src/Assets/img/product2.jpg",
    rating: 4,
    reviews: 735,
  },


];

const Product = () => {
  return (

    <div className=' w-full grid lg:grid-cols-5 px-5 lg:gap-10 grid-cols-1 gap-4 p-3'>
      {products.map((item) =>
        <div className='shadow-md p-2 rounded-2xl flex flex-col justify-between'>
          <img src={item.image}
            className='rounded-2xl w-full object-cover' />

          <div className='leading-4 mt-2'>
            <p className='font-semibold'>{item.name}</p>
            <p>⭐⭐⭐⭐</p>

            <div className='flex justify-between'>
              <h4>
                <span className='text-red-600'> {item.price} </span>
                <span><del className='text-gray-400 text-xl'>{item.oldPrice}</del></span>
              </h4>

              <div className='bg-green-900 w-fit p-2 rounded-full shrink-0'>
                <ShoppingCart size={20} color='white' />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )

}

export default Product