import React, { useEffect, useState } from 'react'
import { AwardIcon, Heart, ShoppingCart } from 'lucide-react';
import { NavLink, useOutletContext } from 'react-router-dom';
import { products } from '../../Share/Constant/ProductData';
import useCartAdd from '../../Share/CustomHook/useCartAdd';
import useWishList from '../../Share/CustomHook/useWishList';
import ApiData from '../../Share/Api/ApiData';
import axios from 'axios';

export default function product() {

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [productData, setproductData] = useState([])

  const { like, setLike, cart, setCart } = useOutletContext();

  const { Liketoggle } = useWishList({ like, setLike });
  const { CartAdded } = useCartAdd({ cart, setCart });

  // Api data 
  // console.log("data", productData)

  const handleProduct = async () => {
    try {
      setLoading(true);

      const resp = await axios.get("https://dummyjson.com/carts?limit=15&skip=20")
      // .then(res => res.json())
      // .then(data => setproductData(data.carts));
      setproductData(resp.data.carts)
      // console.log(resp.data)
    }
    catch (error) {
      console.error("Product not found", error)

      // catch (err) {
      //   console.log(err.response?.status);
      //   console.log(err.response?.data);
      // }
    }
    finally {
      setLoading(false)
    }
  }

  const allProducts = productData.flatMap(cart => cart.products);

  useEffect(() => {
    handleProduct()
  }, [])

  if (loading) {
    return <p className='text-center text-xl text-red-400 mt-90'>Loading</p>
  }

  return (
    <>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-3 
      sm:p-8 gap-4'>
        {allProducts?.map((item, id) =>

          <div key={`${id}-${item.id}`} className='border w-full flex flex-col justify-between shadow-md p-2 sm:p-3 lg:p-4 rounded-2xl 
          hover:scale-102 transition'>

            <NavLink to={`/detail/${item.id}`}>
              <div className='relative'>
                <img src={item.thumbnail}
                  className='rounded-2xl w-full h-80 sm:h-85' />

                <Heart onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  Liketoggle(item)
                }}
                  size={30}
                  className={`cursor-pointer hover:scale-115 transition-all duration-200 absolute top-3 right-3
                  ${like.some(product => product.id === item.id)
                      ? "text-red-500 fill-red-500"
                      : "text-gray-400 fill-transparent hover:text-red-500 hover:fill-red-500"
                    }`}
                />
              </div>
            </NavLink>

            <div className='leading-2 mt-3 ms-2.5'>
              <p className='font-semibold'>{item.title}</p>
              <p>⭐⭐⭐⭐</p>

              <div className='flex justify-between'>
                <h4>
                  <span className='text-red-600'> {item.price} </span>
                  <span><del className='text-gray-400'>{item.discountedTotal}</del></span>
                </h4>

                <div className='bg-green-900 w-fit p-2 rounded-full
                 shrink-0 cursor-pointer hover:scale-115 transition-all duration-200'>
                  <ShoppingCart
                    onClick={() => CartAdded(item.id)}
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

