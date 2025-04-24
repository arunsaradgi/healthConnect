import React from 'react'

const AboutUs = () => {
    return (
        <div className='flex p-5 my-20 lg:p-20'>
            <div className='hidden lg:block lg:w-[50%] lg:relative'>
                <img className='static border-2 border-white rounded-lg ml-[10%] shadow-lg' src="src/assets/about2.png" alt="" />
                <img className='absolute top-[20%] left-[30%] border-4 border-white rounded-lg shadow-lg' src="src/assets/about1.png" alt="" />
            </div>
            <div className='text-center lg:w-[50%] lg:text-left'>
                <p className='text-red-500 font-semibold text-sm uppercase mb-2'>Welcome to Health Connect</p>
                <h1 className='text-3xl md:text-4xl font-bold text-gray-800 mb-4'>Best Care For Your Good Health</h1>
                <p className='text-gray-600 mb-6'>At Health Connect, we prioritize compassionate, personalized care that meets the unique needs of every patient. Our team of experienced professionals is committed to providing the highest quality medical services, ensuring you receive the best care possible.</p>
                <ul className='space-y-3 mb-6 text-gray-600'>
                    <li className='flex items-center text-[14px] md:text-[16px]'><i className="fa-solid fa-circle-check mr-2 text-red-500"></i>State-of-the-art medical facilities and equipment.</li>
                    <li className='flex items-center text-[14px] md:text-[16px]'><i className="fa-solid fa-circle-check mr-2 text-red-500"></i>Experienced doctors and friendly, supportive staff.</li>
                    <li className='flex items-center text-[14px] md:text-[16px]'><i className="fa-solid fa-circle-check mr-2 text-red-500"></i>Comprehensive care to each patient’s needs.</li>
                </ul>
                <button className='bg-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600'>Learn More</button>
            </div>
        </div>
    )
}

export default AboutUs
