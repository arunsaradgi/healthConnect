import { faHeartBroken } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import CoreValueCard from '../Components/CoreValueCard'
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons'
import { faPeopleCarryBox } from '@fortawesome/free-solid-svg-icons'
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons'
import OurTeam from '../Components/OurTeam'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer'

const CoreData = [
    { heading: 'Compassion', desc: 'We care deeply for our patients and treat them like family, providing a compassionate experience at every touchpoint.', icon: faHeartPulse },
    { heading: 'Collaboration', desc: 'Working together with patients, doctors, and the community to achieve holistic health for everyone.', icon: faPeopleCarryBox },
    { heading: 'Excellence', desc: 'Striving for excellence in every service, from routine checkups to complex procedures.', icon: faUserDoctor }
]
const About = () => {
    const navigate = useNavigate()

    return (
        <div>
            <Navbar />
            <div className='mx-12 lg:mx-0 mt-24'>

                <div className="m-4 py-20 text-center text-white rounded-lg transition duration-700 hover:scale-105 bg-[linear-gradient(rgba(238,68,68,0.8),rgba(238,68,68,0.8)),url('/src/assets/about_bg.webp')] bg-cover bg-center h-full">
                    <h1 className="text-5xl font-bold mb-4">Welcome to Health Connect</h1>
                    <p className="text-lg w-4/5 md:w-3/5 mx-auto">
                        Connecting you with top healthcare professionals, compassionate care, and a healthier tomorrow.
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2  p-4 gap-8 mt-14'>
                    <div className='bg-[#f3f4f6] p-8 rounded-xl hover:scale-105 duration-700 hover:bg-gray-300'>
                        <h1 className='text-3xl font-bold mb-4'>
                            Our Mission
                        </h1>
                        <p className='text-gray-900'>At Health Connect, our mission is to bridge the gap between patients and healthcare providers, ensuring accessible, efficient, and high-quality medical services for everyone.</p>
                    </div>
                    <div className='bg-[#f3f4f6]  p-8 rounded-xl hover:scale-105 duration-700 hover:bg-gray-300'>
                        <h1 className='text-3xl font-bold mb-4'>
                            Our Vision
                        </h1>
                        <p className='text-g-text-gray-900400'>We envision a world where healthcare is accessible to all, fostering a healthier, happier global community.</p>
                    </div>
                </div>

                <div className='text-center mt-8'>
                    <h1 className='text-3xl font-bold mb-4'>Our Core Values</h1>
                    <div className='grid grid-cols-1 md:grid-cols-3 m-8 gap-8'>
                        {
                            CoreData.map(ele => <CoreValueCard ele={ele} />)
                        }
                    </div>
                </div>

                <OurTeam />

                <div className='text-center mt-12'>
                    <h1 className='text-3xl font-semibold mb-4'>Ready To Connect With Us ?</h1>
                    <p className='mb-4'>We’re here to support your health journey. Reach out today!</p>
                    <button className='bg-red-500 py-3 px-8 rounded-full text-white hover:bg-red-600' onClick={() => navigate('/contact')}>Contact Us</button>
                </div>

            </div>
            <Footer />
        </div>

    )
}

export default About
