import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import DoctorSquareCard from '../Components/Card/DoctorSquareCard'
import Appointment from './Appointment'
import AppointmentCard from '../Components/Card/AppointmentCard'

const AllAppointments = () => {

    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        fetchAllAppointments()
    }, [])

    const fetchAllAppointments = async () => {
        const token = localStorage.getItem('token')
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        // https://backend-health-connect.vercel.app/appointments
        try {
            setLoading(true)
            const response = await axios.get('https://backend-health-connect.vercel.app/appointments', config)
            console.log(response)
            setData(response.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
            setError(true)
        }
    }
    return (
        <div>
            <Navbar />
            <h1 className='text-4xl mt-24 text-center font-bold'>My Appointments</h1>
            {
                loading ? <h1 className='text-center font-bold text-2xl m-4 '>Loading all appointments...</h1> : error ? <h1 className='text-center font-bold text-2xl m-4 mt-24 '>Not Able to get all appointments ...</h1> : <div className='grid md:grid-cols-2 gap-8 text-center px-4 md:px-20'>
                    
                    {
                        data?.map((ele, i) => <AppointmentCard ele={ele}/>)
                    } </div>
            }

            <Footer />
        </div>
    )
}

export default AllAppointments
