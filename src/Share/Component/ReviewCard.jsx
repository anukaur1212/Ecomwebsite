import React from 'react'

const ReviewCard = ({ img, name, review }) => {
    return (

        <>

            <div className='review-card p-4'>
                <div className='flex gap-3 p-2 '>
                    <img src={img} />
                    <p className='font-semibold'>{name}</p>
                </div>

                <div className='leading-6 p-2 text-[16px] md:text-lg'>
                    <p className='m-0 mb-2'>⭐⭐⭐⭐</p>
                    <p className='text-wrap break-all'>{review}</p>
                </div>
            </div>

        </>
    )
}

export default ReviewCard