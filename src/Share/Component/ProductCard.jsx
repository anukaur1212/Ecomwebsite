import React from 'react'


const ProductCard = ({ name, price, oldPrice, image, reviews, rating, icons }) => {
    return (

    
                <div className=" p-3 rounded-2xl border h-100">
                    <img src={image}
                        alt={name}
                        className="rounded-2xl" />

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
                            <button type="button" className="bg-green-900 w-fit p-2 rounded">
                                {icons}
                            </button>
                        </div>
                    </div>
                </div>
   
    )
}

export default ProductCard