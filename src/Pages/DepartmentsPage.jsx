import React from 'react'
import Departments from '../Components/Departments/Departments'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer'

const DepartmentsPage = () => {
    return (
        <div>
            <Navbar />
            <div className='mt-20'>

                <Departments heading="All Available Departments" desc="We provide a wide range of medical specialties to cater to your healthcare needs. Our departments are staffed by highly qualified professionals who are committed to providing exceptional care." gridForLargeScreen='grid-cols-4' paddingForLargeScreen='px-20'/>
            </div>
            <Footer />
        </div>
    )
}

export default DepartmentsPage
