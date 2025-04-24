import { height } from '@fortawesome/free-brands-svg-icons/fa42Group'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const DoctorSquareCard = ({ ele }) => {
    const { name, speciality, image, available, id } = ele
    const navigate = useNavigate()

    return (
        <div className='p-3 shadow-lg md:p-8 rounded-lg' onClick={() => navigate(`/appointment/${id}`)}>
            <img src={image} alt="doctors image" className='rounded-full w-28 m-auto mb-4' />
            <ul className='font-semibold'>
                <li className='flex items-center justify-center'>
                    <span className={`w-2 h-2 rounded-full mr-2 animate-pulse ${available ? "bg-green-500" : 'bg-red-500'}`} ></span>
                    <span className={` ${available ? "text-green-500" : 'text-red-500'}`}>
                        {
                            available ? "Available" : "Unavailable"
                        }
                    </span>
                </li>
            </ul>
            <h1 className='mb-2 font-bold text-xl'>{name}</h1>
            <p className='text-[#8da2b2]'>{speciality.title}</p>
        </div>
    )
}

export default DoctorSquareCard
