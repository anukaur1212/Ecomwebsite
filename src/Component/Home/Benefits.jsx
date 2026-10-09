import React from 'react'
import { Truck, RotateCcw, LockKeyhole, Headset } from 'lucide-react'

const Facility = () => {
    return (
        <div className='mt-3 grid grid-cols-2 gap-4 md:grid-cols-4 w-full bg-white rounded-2xl p-3'>

            <div id='card' className='flex flex-col align-items-center text-center'>
                <Truck size={60} color='grey' />
                <div className=' md:leading-5'>
                    <p className='font-bold lg:text-xl mb-0'>Free Shipping</p>
                    <span>On orders over $49</span>
                </div>
            </div>

            <div id='card' className='flex flex-col align-items-center text-center'>
                <RotateCcw size={60} color='grey' />
                <div className='md:leading-5'>
                    <p className='font-bold lg:text-xl mb-0'>Easy Returns</p>
                    <p>30 days return policy</p>
                </div>
            </div>

            <div id='card' className='flex flex-col align-items-center text-center'>
                <LockKeyhole size={60} color='grey' />
                <div className='md:leading-5'>
                    <p className='font-bold lg:text-xl mb-0'>Secure Payments</p>
                    <p>100% secure checkout</p>
                </div>
            </div>

            <div id='card' className='flex flex-col align-items-center text-center'>
                <Headset size={60} color='grey' />
                <div className=' md:leading-5'>
                    <p className='font-bold lg:text-xl mb-0'>24/7 <br /> Support</p>
                    <p>We'r here to help</p>
                </div>
            </div>

        </div>
    )
}

export default Facility