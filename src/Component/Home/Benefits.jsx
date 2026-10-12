import React from 'react'
import { Truck, RotateCcw, LockKeyhole, Headset } from 'lucide-react'
import BenefitCard from '../../Share/Component/BenefitCard';

const Facility = () => {

    return (
        <div className='mt-3 grid grid-cols-2 md:grid-cols-4 w-full bg-white rounded-2xl px-4 gap-4 py-4'>
            <BenefitCard title="Free Shipping" para="On orders over $49"
                icon={<Truck size={60} color='grey' />} />

            <BenefitCard title="Easy Returns" para="30 days return policy"
                icon={<RotateCcw size={60} color='grey' />} />

            <BenefitCard title="Secure Payments" para="100% secure checkout"
                icon={<LockKeyhole size={60} color='grey' />} />

            <BenefitCard title="24/7 Support" para="We'r here to help"
                icon={<Headset size={60} color='grey' />} />
        </div>
    )
}

export default Facility