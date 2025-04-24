import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const OffersCard = ({ ele }) => {
    const { title, desc, icon } = ele
    return (
        <div className='p-5'>
            <FontAwesomeIcon icon={icon} className='text-5xl text-red-400 mb-4'  />
            <h2 className='font-bold text-xl mb-2'>{title}</h2>
            <p className='text-gray-600'>{desc}</p>
        </div>
    )
}

export default OffersCard
