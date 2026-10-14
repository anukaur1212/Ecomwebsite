import React from 'react'

const ReviewCard = ({ img, name, review }) => {
    return (

        <div className='flex gap-3 p-2'>
            <img src={img} />

            <div className='leading-5 mt-2'>
                <p className='font-semibold'>{name}</p>
                <p>⭐⭐⭐⭐</p>
                <p>{review}</p>
            </div>
        </div>

    )
}

export default ReviewCard