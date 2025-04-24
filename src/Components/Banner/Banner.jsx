import React from 'react'
import bannerImage from '../../../public/assets/banner.png'
const Banner = () => {
    return (
        <div className='lg:flex mt-28'>
            <div className='p-8 lg:w-[50%]'>
                <div className='font-bold p-2 pl-4 pr-4 border border-red-100 rounded-[20px] hover:shadow-md contain-content w-fit'><span><i className="fa-regular fa-heart fa-beat text-red-500 text-l items-center text-center mr-2"></i></span>Trusted Healthcare Partner</div>
                <h1 className='font-bold text-5xl mt-8'>Your <br /><span className='text-red-500'> Health is</span> <br />Our Priority</h1>

                <p className='text-2xl mt-8'>Experience personalized healthcare through our network of qualified professionals. Your well-being is at the heart of everything we do.</p>

                <div className='flex mt-8'>
                    <div className=' font-bold p-4 shadow-md hover:shadow-md mr-8 hover:scale-105'><span><i className="fa-regular fa-calendar fa-shake text-[#3261e0] mr-2"></i></span>24/7 Availability</div>
                    <div className=' font-bold p-4 shadow-md hover:shadow-md hover:scale-105 '><span><i className="fa-sharp fa-solid fa-shield fa-flip text-[#2c9a57] mr-2"></i></span>100% Secure</div>
                </div>

                <button className='px-6 py-3 bg-red-500 text-white mt-16 font-semibold rounded-md text-2xl hover:bg-red-600 transition duration-300'>Register Now</button>
            </div>
            <div className='lg:w-[50%]'>
                <img src={bannerImage} className='scale-90 transition duration-500 hover:scale-100 ' alt="banner image" />
            </div>
        </div>
    )
}

export default Banner
