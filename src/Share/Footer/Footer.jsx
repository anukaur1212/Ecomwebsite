import React from 'react'

const Footer = () => {

    const copyright = "grid grid-cols-2 lg:grid-cols-4 px-4 m-3 py-2 gap-2 border-t";

    const footerlist = [
        {
            title: "Shop",
            items: ["All Categories", "Discounts", "Gift Cards", "Brands", "Offers"],
        },
        {
            title: "Customer Service",
            items: ["FAQs", "Shipping Policy", "Returns & Refunds", "Privacy Policy"],
        },
        {
            title: "Company",
            items: ["About us", "Carrers", "Affiliate Programs", "Sustainability", "Blog"],
        },
        {
            title: "Company",
            items: ["About us", "Carrers", "Affiliate Programs", "Sustainability", "Blog"],
        },

    ];

    return (

        <>

            <div className='flex flex-col bg-green-950 text-white pt-5'>

                <div className="flex flex-col lg:flex-row w-full gap-3 px-3">

                    <div className='lg:p-4 text-center border-b-2 lg:border-none lg:w-1/3'>
                        <h2 className='flex flex-col'>Viva
                            <span className='text-sm'> LIVE BETTER </span>
                        </h2>
                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Hic voluptatibus placeat rerum? Vel, explicabo.</p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-5 mt-2 w-full text-left">
                        {footerlist.map((section) => (
                            <div key={section.title} className=''>
                                <h3>{section.title}</h3>

                                <ul className='p-2 text-left'>
                                    {section.items.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={copyright}>
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

