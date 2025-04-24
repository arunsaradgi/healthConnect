import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
const DoctorCard = ({ ele }) => {
    const { name, speciality, image } = ele
    return (
        <div className='m-auto p-8'>
            <img src={image} alt="doctors image" className='w-48 rounded-full border-4 border-white shadow-2xl mb-4' />
            <h3 className='text-red-600 font-bold text-lg'>{name}</h3>
            <p className='text-gray-500 mb-2'>{speciality.title}</p>
            <FontAwesomeIcon icon={faFacebookF} className='text-gray-500 m-2 cursor-pointer'/>
            <FontAwesomeIcon icon={faTwitter} className='text-gray-500 m-2 cursor-pointer'/>
            <FontAwesomeIcon icon={faInstagram} className='text-gray-500 m-2 cursor-pointer'/>
            <FontAwesomeIcon icon={faLinkedinIn} className='text-gray-500 m-2 cursor-pointer'/>
        </div>
    )
}

export default DoctorCard
