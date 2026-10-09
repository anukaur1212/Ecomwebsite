import React from 'react'
import { Heater, House, LampCeiling, BookText, Volleyball, Cat, BriefcaseBusiness } from 'lucide-react'

const CircleCard = () => {
    return (
        <>

            <div className='w-full grid md:grid-cols-3 lg:grid-cols-7 grid-cols-2 sm:px-5'>

                <div className='flex flex-col w-full items-center'>
                    <div className='w-fit p-4 bg-sky-300 rounded-full border-8 border-white'>
                        <Heater size={40} />
                    </div>
                    <p className='font-bold'>Heater</p>
                </div>

                <div className='flex flex-col w-full items-center'>
                    <div className='w-fit p-4 bg-yellow-200 rounded-full border-8 border-white'>
                        <House size={40} />
                    </div>
                    <p className='font-bold'>House & Living</p>
                </div>

                <div className='flex flex-col w-full items-center'>
                    <div className='w-fit p-4 bg-red-300 rounded-full border-8 border-white'>
                        <LampCeiling className='' size={40} />
                    </div>
                    <p className='font-bold'>Lamps</p>
                </div>

                <div className='flex flex-col w-full items-center'>
                    <div className='w-fit p-4 bg-sky-300 rounded-full border-8 border-white'>
                        <BookText size={40} />
                    </div>
                    <p className='font-bold'>Books</p>
                </div>

                <div className='flex flex-col w-full items-center'>
                    <div className='w-fit p-4 bg-orange-300 rounded-full border-8 border-white'>
                        <Volleyball size={40} />
                    </div>
                    <p className='font-bold'>Sports</p>
                </div>

                <div className='flex flex-col w-full items-center'>
                    <div className='w-fit p-4 bg-blue-300 rounded-full border-8 border-white'>
                        <Cat size={40} />
                    </div>
                    <p className='font-bold'>Pet Supplies</p>
                </div>

                <div className='flex flex-col w-full items-center lg:flex hidden'>
                    <div className='w-fit p-4 bg-yellow-100 rounded-full border-8 border-white'>
                        <BriefcaseBusiness size={40} />
                    </div>
                    <p className='font-bold'>Fashion</p>
                </div>

            </div>

        </>
    )
}

export default CircleCard