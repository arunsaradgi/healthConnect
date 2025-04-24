import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { faHeartPulse, faTooth, faEye, faBrain, faSyringe, faUserMd } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const iconMapping = {
    faHeartPulse,
    faTooth,
    faEye,
    faBrain,
    faSyringe,
    faUserMd
}

const DoctorsSideBar = () => {
    const [Departments, setDepartments] = useState([])
    const [active, setActive] = useState('')
    // const navigate = useNavigate()
    useEffect(() => {
        fetchDepartments()
    }, [])

    const fetchDepartments = async () => {
        try {
            const response = await axios.get('https://backend-health-connect.vercel.app/doctors/department')
            // console.log(response.data.departments)
            setDepartments(response.data.departments)

        } catch (error) {
            console.log(error)
        }
    }




    return (
        <div>
            <div className='hidden md:block shadow-lg h-fit p-4 rounded-lg'>
                <h1 className='text-xl font-semibold text-blue-400 mb-6'>Filter By Departments</h1>
                <NavLink className={`block p-4 shadow-lg w-full text-left items-center text-l  mb-2 rounded-xl ${active === 'all' ? 'bg-red-500 text-white' : "bg-[#f9fafc]"}`} to={'/doctors'} onClick={() => setActive('all')}>All</NavLink>
                {
                    Departments?.map((ele, i) => <NavLink key={i} to={`/doctors/${ele.title}`} className={({ isActive }) => `${isActive ? 'bg-red-500 text-white' : "bg-[#f9fafc]"} mb-2 rounded-xl block p-4 shadow-lg w-full text-left items-center text-l`} onClick={() => setActive('')}><span className='mr-4'><FontAwesomeIcon icon={iconMapping[ele.icon]} /></span>{ele.title}</NavLink>)
                }
            </div>
            <div className='md:hidden w-[100%] shadow-lg h-fit p-4 rounded-lg wrap'>
                <h1 className='text-xl font-semibold text-blue-400 mb-6'>Filter By Departments</h1>
                <div className='flex flex-wrap gap-2'>
                    <NavLink className={`rounded-xl p-4 shadow-lg border mx-2  text-left items-center text-lg ${active === 'all' ? 'bg-red-500 text-white' : "bg-[#f9fafc]"}`} to={'/doctors'} onClick={() => setActive('all')}>All</NavLink>

                    {
                        Departments?.map((ele, i) => <NavLink to={`/doctors/${ele.title}`} key={i} className={({ isActive }) => `${isActive ? 'bg-red-500 text-white' : "bg-[#f9fafc]"}  rounded-xl p-4 shadow-lg border mx-2  text-left items-center text-lg`} onClick={() => setActive('')}><span className='mr-4'><FontAwesomeIcon icon={iconMapping[ele.icon]} /></span>{ele.title}</NavLink>)
                    }
                </div>
            </div>
        </div>
    )
}

export default DoctorsSideBar
