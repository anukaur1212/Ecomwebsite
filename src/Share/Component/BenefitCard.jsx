import React from 'react'

const BenefitCard = ({icon,title,para}) => {

    const card = 'flex flex-col align-items-center text-center';

    return (

            <div id='card' className={card}>
                {icon}
                <div className=' md:leading-5'>
                    <p className='font-bold lg:text-xl mb-0'>{title}</p>
                    <span>{para}</span>
                </div>
            </div>

    )
}

export default BenefitCard