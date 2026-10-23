import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom';
import { finalPayment } from './CustomHook/finalPayment';

const PaymentCard = () => {

    const { cart, setCart, quantity, setQuantity } = useOutletContext();

   const {totalPrice,totalQuantity,shipping,grandTotal} = finalPayment({cart,setCart,quantity,setQuantity})

    return (
        <>
            <div className='w-full lg:w-[38%] h-full flex flex-col items-center lg:p-4 border my-3 rounded'>
                <>
                    <p className='font-semibold text-4xl text-gray-600'>Payment Deatils</p>
                   
                    <div className='w-full p-4 text-center'>
                        <div className='flex justify-between'>
                            <p className='text-xl font-semibold text-green-800 mb-0' >
                                Total Price</p>
                            <p className='text-xl font-semibold text-gray-500'>
                               ${totalPrice.toFixed(2)}
                            </p>
                        </div>

                        <div className='flex justify-between'>
                            <p className='text-xl font-semibold text-green-800 mb-0' >
                                Quantity</p>
                            <p className='text-xl font-semibold text-gray-500'>
                               {totalQuantity.toFixed(2)}
                            </p>
                        </div>

                        <div className='flex justify-between'>
                            <p className='text-xl font-semibold text-green-800 mb-0' >
                                Shipping Charges</p>
                            <p className='text-xl font-semibold text-gray-500'>
                             ${shipping.toFixed(2)}
                            </p>
                        </div>

                        <div className='flex justify-between'>
                            <p className='text-xl font-semibold text-green-800 mb-0' >
                                Prime Total</p>
                            <p className='text-xl font-semibold text-gray-500'>
                                ${grandTotal.toFixed(2)}
                            </p>
                        </div>

                        <button
                            className='bg-green-900 text-white px-5 py-3 rounded
                                cursor-pointer active:scale-95'>
                            Proceed to Pay
                        </button>

                    </div>

                </>
            </div>

        </>
    )
}

export default PaymentCard