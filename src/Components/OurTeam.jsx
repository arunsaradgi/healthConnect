import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import DoctorCard from './Card/DoctorCard'
import { useNavigate } from 'react-router-dom'

const OurTeam = () => {
    const navigate = useNavigate()
    const [doctors, setDoctors] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        fetchDoctors();
    }, [])

    const fetchDoctors = async () => {
        try {
            setLoading(true)
            const response = await axios.get('https://backend-health-connect.vercel.app/doctors')
            // console.log(response.data)
            setDoctors(response.data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setError(true)
            // console.log(error)
        }
    }


    const handleViewMore = () => {
        navigate('/doctors')
    }




    return (

        <div className='text-center my-8 bg-gray-100 py-8'>
            <p className='m-2'>OUR TEAM</p>
            <h1 className='text-4xl font-bold'>Our Expert Doctors</h1>
            {
                loading ? <h1 className='text-center font-bold text-2xl m-4'>Team is Loading...</h1> : error ? <h1 className='text-center font-bold text-2xl m-4'>Not Able to get the doctors data...</h1> : <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-1'>
                    {
                        doctors.map((ele, i) =>
                            i < 4 ? <DoctorCard key={ele.id} ele={ele} /> : '')
                    }
                </div>
            }
            <button className='px-6 py-3 text-md font-semibold text-white bg-red-500 rounded-full hover:bg-red-600' onClick={handleViewMore}>View More</button>
        </div>
    )
}

export default OurTeam
