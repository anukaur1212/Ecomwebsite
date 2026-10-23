import React, { useState } from 'react'
import { Heart, MapPin, RotateCcw, Truck } from 'lucide-react';
import { useOutletContext, useParams } from 'react-router-dom';
import { products } from '../Component/Shop/ProductList';


const ProductDetail = () => {

    const { like, setLike, cart, setCart } = useOutletContext();

    const Liketoggle = (item) => {
        setLike(prev => {
            const updatedWishlist = prev.some(items => items.id === item.id)
                ? prev.filter(items => items.id !== item.id)
                : [...prev, item]

            localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
            return updatedWishlist;
        })
    }

    const { id } = useParams()
    const product = products.find((item) => item.id === Number(id))


    // Add to cart
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

            <div className='w-full md:p-3 my-2 md:my-4 lg:my-6 flex flex-col md:flex-row sm:gap-3 lg:gap-6 justify-between'>

                <>
                    <div className='flex gap-3 p-2 w-full md:w-[55%]'>
                        <div className='hidden flex-col gap-4 lg:flex'>
                            <div>
                                <img src={product.image}
                                    className='rounded-xl w-48 h-40 hover:scale-95 transition' />
                            </div>

                            <div>
                                <img src={product.image}
                                    className='rounded-xl w-48 h-40 hover:scale-95 transition' />
                            </div>

                            <div>
                                <img src={product.image}
                                    className='rounded-xl w-48 h-40 hover:scale-95 transition' />
                            </div>
                        </div>

                        <div key={product.id}
                            className=' w-full'>
                            <img src={product.image} className=' w-full h-130 rounded-xl' />
                        </div>
                    </div>

                    <div className='w-full p-2 md:w-[43%] flex flex-col items-left lg:p-4'>
                        <p className='font-semibold'>Viva Live Better</p>
                        <h4 className='uppercase'>{product.name}</h4>

                        <div className='flex gap-3 items-center'>
                            <h4>
                                <span className='text-red-600'> {product.price} </span>
                                <span><del className='text-gray-400'>{product.oldPrice}</del></span>
                            </h4>
                            <div className='text-red-600 w-fit p-1 font-semibold rounded-lg bg-red-300'>-10%</div>
                        </div>

                        <p className='font-semibold mt-3 text-sm lg:text-lg break-all'>Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Veritatis pariatur id explicabo perspiciatis
                            dolores tempora sapiente architecto earum neque.</p>

                        {/* <br /> */}
                        <p>SELECT SIZE (UK SIZE)</p>
                        <div className='flex gap-3'>
                            <div className='text-xl w-fit hover:bg-gray-200 border px-4 py-3'>5</div>
                            <div className='text-xl w-fit hover:bg-gray-200 border px-4 py-3'>6</div>
                            <div className='text-xl w-fit hover:bg-gray-200 border px-4 py-3'>7</div>
                            <div className='text-xl w-fit hover:bg-gray-200 border px-4 py-3'>8</div>
                        </div>

                        <br />
                        <div className='bg-gray-200 border flex justify-center gap-5 p-2 text-sm lg:text-[16px] lg:p-4'>

                            <div className='flex flex-col items-center'>
                                <RotateCcw size={25} />
                                <p className='mb-0 text-center'>7 Days Exchange</p>
                            </div>

                            <div className='flex flex-col items-center'>
                                <Truck size={25} />
                                <p className='mb-0 text-center'>Cash on Delivery</p>
                            </div>

                            <div className='flex flex-col items-center'>
                                <MapPin size={25} />
                                <p className='mb-0 text-center'>Priority Delivery</p>
                            </div>

                        </div>

                        <br />
                        <button onClick={() => CartAdded(product)}
                            className='bg-black text-white py-3 cursor-pointer active:scale-95 
                            hover:bg-linear-to-l from-green-600 to-green-950 transition duration-300 ease-in-out '>
                            ADD TO CART
                        </button>

                    </div>

                </>

            </div>

        </>
    )
}

export default ProductDetail