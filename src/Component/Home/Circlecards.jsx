import React from 'react'
import { Heater, House, LampCeiling, BookText, Volleyball, Cat, BriefcaseBusiness } from 'lucide-react'
import CircleCard from '../../Share/Component/CircleCard'

const Circlecards = () => {
    return (
        <>

            <div className='w-full grid md:grid-cols-3 lg:grid-cols-7 grid-cols-2 p-3'>

                <CircleCard heading="Heater" icon={<Heater size={40}/>} bg="bg-sky-200" />
                <CircleCard heading="House & Living" icon={<House size={40}/>}  bg="bg-yellow-200"/>
                <CircleCard  heading="House and Living" icon={<LampCeiling size={40}/>}  bg="bg-red-200"/>
                <CircleCard heading="Books" icon={<BookText size={40}/>} bg="bg-sky-200" />
                <CircleCard heading="Sports" icon={<Volleyball size={40}/>}  bg="bg-orange-200"/>
                <CircleCard  heading="Pets" icon={<Cat size={40}/>}  bg="bg-blue-200"/>
                <CircleCard  heading="Office" icon={<BriefcaseBusiness size={40}/>}  bg="bg-orange-200"/>

            </div>

        </>
    )
}

export default Circlecards