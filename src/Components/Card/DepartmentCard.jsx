
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const DepartmentCard = ({ ele }) => {
    const { icon, title, to } = ele
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(to)
    }
    return (
        <div className='flex flex-col items-center bg-gradient-to-b from-red-300 to-red-500 px-8 py-8  rounded-xl text-white cursor-pointer' onClick={handleClick}>
            {/* removed the below line as I was using cdn for fortawesome */}
            {/* <i className={`${icon} text-5xl mb-4`}></i>   */}

            <FontAwesomeIcon icon={icon} className='text-5xl mb-4' />
            <h1 className='font-bold text-xl lg:text-lg'>{title}</h1>
        </div>
    )
}

export default DepartmentCard
