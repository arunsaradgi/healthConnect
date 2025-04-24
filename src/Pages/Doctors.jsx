import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer'
import axios from 'axios'
import DoctorSquareCard from '../Components/Card/DoctorSquareCard'
import DoctorsSideBar from '../Components/DoctorsSideBar'
import { useParams } from 'react-router-dom'

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const params = useParams();

    // console.log(params)
    useEffect(() => {
        fetchDoctors();
    }, [])

    useEffect(() => {
        if (params.department) {
            fetchDoctorsByDepartment()
        } else {
            fetchDoctors()
        }
    }, [params])
    const fetchDoctors = async () => {
        try {
            setLoading(true)
            const response = await axios.get(`https://backend-health-connect.vercel.app/doctors/`)
            // console.log(response.data)
            setDoctors(response.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
            setError(true)
            // console.log(error)
        }
    }

    const fetchDoctorsByDepartment = async () => {
        try {
            setLoading(true)
            const response = await axios.get(`https://backend-health-connect.vercel.app/doctors/department/${params.department}`)
            setDoctors(response.data)
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
            <div className='p-8 mt-20 flex flex-col md:flex-row gap-8'>

                <DoctorsSideBar />
                <div className='w-[100%] md:w-[80%]'>
                    <h1 className='text-3xl font-bold mb-4'>Browse through <span className='text-red-500 uppercase'>{params.department || 'all'}</span> doctors specialist.</h1>
                    {
                        loading ? <h1 className='text-center font-bold text-2xl m-4'>Team is Loading...</h1> : error ? <h1 className='text-center font-bold text-2xl m-4'>Not Able to get the doctors data...</h1> : <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center'>
                            {
                                doctors?.map((ele, i) => <DoctorSquareCard key={ele.id} ele={ele} />)
                            }
                        </div>
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Doctors
