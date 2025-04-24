import React from 'react'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navlinks = [{ name: "HOME", link: '/', }, { name: "ABOUT", link: '/about', }, { name: "DEPARTMENTS", link: '/departments', }, { name: "DOCTORS", link: '/doctors' }, { name: "APPOINTMENTS", link: '/appointments' }, { name: "CONTACT", link: '/contact', }]
    const [mobileMenu, setMobileMenu] = useState(false)

    const navigate = useNavigate()

    const handleLogoClick = () => {
        navigate('/')
    }
    const handleMobileMenu = () => {
        setMobileMenu(!mobileMenu)
    }


    const handleAuthClick=()=>{
        window.localStorage.clear()
    }
    return (
        <div className='fixed top-0 w-full bg-white shadow-xl z-20'>
            <div className='w-full flex justify-between p-2 shadow-l items-center'>
                <div className='flex items-center cursor-pointer' onClick={handleLogoClick}>
                    <i className="fa-solid fa-stethoscope text-red-500 text-2xl m-4"></i>
                    <h3 className='font-bold text-2xl'>Health Connect</h3>
                </div>
                <div className='hidden md:flex'>
                    {navlinks.map((ele, i) => <NavLink key={i} className={({ isActive }) => { return `m-4 font-semibold ${isActive ? "text-red-600" : ""} hover:text-blue-500` }} to={ele.link}>{ele.name}</NavLink>)}
                </div>
                <div>
                    <NavLink onClick={handleAuthClick} className='hidden md:block text-red-500 border border-red-500 rounded-3xl p-2 pl-4 pr-4 hover:bg-red-500 hover:text-white' to={'/signup'}>{localStorage.getItem('token') ? 'Logout' : 'SignUp'}</NavLink>
                    <i className="fa-solid fa-bars md:hidden" onClick={handleMobileMenu}></i>
                </div>
                {
                    mobileMenu && (
                        <div className='fixed bg-white  z-10 w-[90%] pointer shadow-lg top-28 flex flex-col md:hidden'>
                            {navlinks.map((ele, i) => <NavLink onClick={handleMobileMenu} className={({ isActive }) => `m-3 font-semibold ${isActive ? "text-red-500" : ""}`} key={i} to={ele.link}>{ele.name}</NavLink>)}
                            <NavLink className={({ isActive }) => `text-red-500 m-3 font-semibold ${isActive}?"text-red-500":""`} to={"/signup"} onClick={handleMobileMenu}>{localStorage.getItem('token') ? 'Logout' : 'SignUp'}</NavLink>
                        </div>
                    )
                }
            </div>
        </div>

    )
}

export default Navbar
