import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar/Navbar'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'

const Appointment = () => {
    const { id } = useParams();

    const [doctor, setDoctor] = useState({})
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [dateTime, setDateTime] = useState('')
    const navigate = useNavigate()
    const notify = (value) => toast(value)

    useEffect(() => {
        fetchDoctorDetails()
    }, [])

    const fetchDoctorDetails = async () => {
        setLoading(true)
        try {
            const response = await axios.get(`https://backend-health-connect.vercel.app/doctors/${id}`);
            // console.log(response)
            setDoctor(response.data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setError(true)
            console.log(error)
        }
    }


    const handleBookAppointment = async () => {
        const token = localStorage.getItem('token')
        if (!token) {
            navigate('/login')
            return
        }

        const date = ((dateTime => `${["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][dateTime.getDay()]} ${dateTime.getDate()} | ${String(dateTime.getHours()).padStart(2, "0")}:00`)(new Date(new Date(dateTime).getTime() - 3 * 60 * 60 * 1000)))

        const body = {
            doctor_id: +id,
            date_time: date
        }
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        try {
            const response = await axios.post(`https://backend-health-connect.vercel.app/appointments/`, body, config)
            console.log(response)
            notify(`Successfully booked appointment with ${doctor.name}`)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <Navbar />
            {
                loading ? <h1 className='text-center font-bold text-2xl m-4 mt-24 '>Loading doctor's Data...</h1> : error ? <h1 className='text-center font-bold text-2xl m-4 mt-24 '>Not Able to get the doctor's data...</h1> : <div className='mt-24   py-4'>
                    <div className='flex flex-col md:flex-row w-[80%] m-auto'>
                        <div className='shrink-0'>
                            <img src={doctor.image} alt="doctors image" className='m-auto rounded-full w-48 mb-4 border-8 border-red-500 md:mr-20 ' />
                        </div>
                        <div className='shadow-lg p-10'>
                            <h1 className='font-bold text-3xl mb-2'>{doctor.name}</h1>
                            <p className='mb-4'>{doctor.degree} - {doctor.speciality?.title} - <span className='bg-red-300 rounded-full px-2 py-1'>{doctor.experience}</span>
                            </p>
                            <p className='font-semibold text-xl mb-2'>About</p>
                            <p className='mb-4'>{doctor.about}</p>
                            <p className='font-semibold text-xl mb-4'>Appointment fees: <span className='text-green-600'>${doctor.fees}</span></p>
                            <p className='font-semibold text-xl mb-2'>Select Data & Time</p>
                            <input onChange={(e) => setDateTime(e.target.value)} className='block border px-3 py-2 rounded-lg mb-4' type='datetime-local' />
                            <button className={` disabled:${dateTime == ""} ${dateTime !== "" ? 'bg-red-500 text-white' : 'bg-gray-300'}  font-semibold px-4 py-3 rounded-full`} onClick={handleBookAppointment}>Book an Appointment</button>
                        </div>
                    </div>
                </div>
            }
            <Footer />
            <ToastContainer />

        </div>
    )
}

export default Appointment
