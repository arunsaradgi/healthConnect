import React from 'react'
import DepartmentCard from '../Card/DepartmentCard'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { faHeartPulse, faTooth, faEye, faBrain, faSyringe, faUserMd } from '@fortawesome/free-solid-svg-icons'

const iconMapping = {
    faHeartPulse: faHeartPulse,
    faTooth: faTooth,
    faEye: faEye,
    faBrain: faBrain,
    faSyringe: faSyringe,
    faUserMd: faUserMd
}

const Departments = ({ heading, desc, showViewMore = false, gridForLargeScreen = "grid-cols-6", paddingForLargeScreen}) => {
    const navigate = useNavigate()

    const [departments, setDepartments] = useState([])

    useEffect(() => {
        fetchDepartments()
    }, [])

    const fetchDepartments = async () => {
        try {
            const response = await axios.get('https://backend-health-connect.vercel.app/doctors/department')
            // console.log(response.data.departments)
            const new_departments = response.data.departments.map(ele => { return { title: ele.title, icon: iconMapping[ele.icon], to: `/doctors/${ele.title.split(' ').join('_')}` } })
            setDepartments(new_departments)
        } catch (error) {

        }
    }

    const handleViewMore = () => {
        navigate('/departments')
    }

    return (
        <div className='py-8 bg-gray-50 text-center'>
            <h1 className='w-[100%] text-3xl md:text-4xl font-bold mb-6'>{heading}</h1>
            <p className= 'w-[100%] text-gray-500 mb-10 px-4 md:w-[55%] m-auto'>{desc}</p>
            <div className={`px-8 md:p-0 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:${paddingForLargeScreen} lg:${gridForLargeScreen}`}>
                {
                    departments?.map((ele, i) => <DepartmentCard key={i} ele={ele} />)
                }
            </div>
            {
                showViewMore ? <button className='py-4 px-8 bg-red-500 mt-8 rounded-full text-white text-xl font-semibold' onClick={handleViewMore}>View More</button> : ""
            }

        </div>
    )
}

export default Departments;