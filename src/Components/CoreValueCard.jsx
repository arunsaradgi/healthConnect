import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const CoreValueCard = ({ ele }) => {
    const { icon, heading, desc } = ele
    return (
        <div className='p-8 rounded-md shadow-lg hover:scale-105 duration-700'>
            <FontAwesomeIcon icon={icon} className='text-red-500 w-10 h-10 mb-2' />
            <h2 className='text-2xl font-semibold mb-2'>{heading}</h2>
            <p className='text-md'>{desc}</p>
        </div>
    )
}

export default CoreValueCard
