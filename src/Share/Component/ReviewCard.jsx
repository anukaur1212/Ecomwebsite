import React from 'react'

const ReviewCard = ({ img, name, review }) => {
    return (

        <>

            <div className='review-card'>
                <div className='flex gap-3 p-2 '>
                    <img src={img} />
                    <p className='font-semibold'>{name}</p>
                </div>

                <div className='leading-6 p-2'>
                    <p className='m-0'>⭐⭐⭐⭐</p>
                    <p>{review}</p>
                </div>
            </div>

        </>
    )
}

export default ReviewCard