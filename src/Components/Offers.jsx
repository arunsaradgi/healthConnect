import React from 'react'
import OffersCard from './Card/OffersCard'
import { faMicroscope } from '@fortawesome/free-solid-svg-icons'
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons'
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons'
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons'

const Offers = () => {
    const offers = [{ title: "Advanced equipment", icon: faMicroscope, desc: "State-of-the-art medical equipment for accurate diagnostics and treatment." }, { title: "Qualified doctors", icon: faUserDoctor, desc: "Our team includes highly qualified and experienced medical professionals." }, { title: "Certified services", icon: faClipboardCheck, desc: "All services are certified to ensure the highest quality standards." }, { title: "Emergency care", icon: faHeartPulse, desc: "24/7 emergency services to provide urgent care when you need it most." }]
    return (
        <div className='text-center px-8 py-12'>
            <p className='text-lg mb-2'>Why Choose Us?</p>
            <h1 className='text-4xl font-bold mb-8'>Offer for You</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    offers.map((ele, i) => <OffersCard key={i} ele={ele} />)
                }
            </div>
        </div>
    )
}

export default Offers
