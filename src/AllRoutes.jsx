import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Doctors from './Pages/Doctors'
import News from './Pages/News'
import Register from './Pages/Register'
import Login from './Pages/Login'
import DepartmentsPage from './Pages/DepartmentsPage'
import Appointment from './Pages/Appointment'
import AllAppointments from './Pages/AllAppointments'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/departments" element={<DepartmentsPage />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/doctors/:department" element={<Doctors />} />
            <Route path="/news" element={<News />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path='/appointment/:id' element={<Appointment />} />
            <Route path='/appointments' element={<AllAppointments />} />
        </Routes>
    )
}

export default AllRoutes
