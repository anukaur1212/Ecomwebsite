import React from 'react'

const FooterCard = ({ children }) => {

    return (
        <div className='flex flex-col bg-green-950 text-white pt-5'>
            {children}

        </div>
    )
}

export default FooterCard