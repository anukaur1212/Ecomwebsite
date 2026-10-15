import React from 'react'

const CircleCard = ({heading,icon,bg}) => {
    return (
        <>
                <div className='flex flex-col w-full items-center hover:scale-95 transition'>
                    <div className= {`w-fit p-4 rounded-full border-8 border-white ${bg}`}>
                      {icon}
                    </div>
                    <p className='font-bold'>{heading}</p>
                </div>
        </>
    )
}

export default CircleCard