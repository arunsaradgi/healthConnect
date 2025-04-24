import React from 'react'
import Card from '../Card/Card'

const Services = () => {
    const services = [{ name: "Hospitality", desc: "Clinical excellence must be the priority for any health care service provider.", buttonText: 'Apply For A Bed', img: 'fa-solid fa-hospital', to: "/" }, { name: "Emergency Care", desc: "Clinical excellence must be the priority for any health care service provider.", buttonText: '+106723563567', to: "/", img: 'fa-solid fa-truck-medical' }, { name: "Chamber Service", desc: "Clinical excellence must be the priority for any health care service provider.", buttonText: 'Make An Appointment', to: "/doctors", img:'fa-solid fa-briefcase-medical' }]
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-0'>
            {
                services?.map((ele, i) => <Card key={i} ele={ele} />)
            }
        </div>
    )
}

export default Services