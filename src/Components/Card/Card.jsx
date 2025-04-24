import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ ele }) => {
    const { name, desc, buttonText, img } = ele
    return (
        <div className='text-white text-center bg-gradient-to-br from-red-500 to-red-400 p-10'>
            <i className={`${img} text-5xl m-4`}></i>
            <h1 className='font-semibold text-2xl mb-2'>{name}</h1>
            <p className='mb-6'>{desc}</p>
            <Link className='border border-white px-6 py-2 rounded-full hover:bg-white hover:text-red-500 transition duration-300' to={ele.to}>{buttonText}</Link>
        </div>
    )
}

export default Card
