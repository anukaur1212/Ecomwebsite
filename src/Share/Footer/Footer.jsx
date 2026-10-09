import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='flex flex-col bg-green-950 text-white pt-5'>

                <div className='grid grid-cols-2 lg:grid-cols-5 p-2 lg:p-4'>

                    <div className='lg:p-4 text-center'>
                        <h2 className='flex flex-col'>Viva
                            <span className='text-sm'> LIVE BETTER </span>
                        </h2>
                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Hic voluptatibus placeat rerum? Vel, explicabo.</p>
                    </div>

                    <div className=' lg:p-4'>
                        <ul className='flex flex-col text-justify'>
                            <li><h5>Shop</h5></li>
                            <li>All Categories</li>
                            <li>Discounts</li>
                            <li>Gift Cards</li>
                            <li>Brands</li>
                            <li>Offers</li>
                        </ul>
                    </div>

                    <div className='lg:p-4'>
                        <ul className='flex flex-col text-justify'>
                            <li><h5>Customer Service</h5></li>
                            <li>Track Order</li>
                            <li>Returns & Refunds</li>
                            <li>Shipping Info</li>
                            <li>FAQ</li>
                        </ul>
                    </div>

                    <div className=' lg:p-4'>
                        <ul className='flex flex-col text-justify'>
                            <li><h5>Company</h5></li> 
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Blog</li>
                            <li>Affiliate Program</li>
                            <li>Sustainability</li>
                        </ul>
                    </div>

                    <div className=' lg:p-4 hidden lg:flex'>
                        <ul className='flex flex-col text-justify'>
                            <li><h5>Contact</h5></li>
                            <li>Instagram</li>
                            <li>Linked In</li>
                            <li>Twitter</li>
                            <li>Affiliate Program</li>
                            <li>Sustainability</li>
                        </ul>
                    </div>
                </div>

                <div className='grid grid-cols-2 lg:grid-cols-4 px-4  py-2 gap-2 border-t '>
                    <p>@Viva 2026 All rights reserved</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Service </p>
                    <p>Cookie Policy</p>
                </div>
            </div>
        </>
    )
}

export default Footer