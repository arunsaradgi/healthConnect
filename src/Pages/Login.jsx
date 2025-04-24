import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify'

const Login = () => {
    const [loginCreds, setLoginCreds] = useState({ username: '', password: "" })
    const navigate = useNavigate()
    const notify = (value) => toast(value)
    const onFormChange = (e) => {
        const { name, value } = e.target
        console.log(name, value)
        setLoginCreds({ ...loginCreds, [name]: value })

    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        handleLogin()
    }

    const handleLogin = async () => {
        try {
            const response = await axios.post("https://backend-health-connect.vercel.app/auth/login", new URLSearchParams(loginCreds))
            console.log(response)

            if (response) {
                localStorage.setItem('token', response.data.access_token)
                localStorage.setItem('token_type', response.data.token_type)
                localStorage.setItem('username', response.data.username)
                notify("Signed In Successfully")
                setTimeout(() => {
                    navigate('/')
                }, 2000)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='flex'>
            <img src="src/assets/doc.png" alt="" className='hidden md:block w-[50%] h-fit' />
            <div className='w-[60%] md:w-[35%] text-center m-auto items-center'>
                <h1 className='text-4xl font-bold m-4'>Welcome to HealthConnect</h1>
                <p className='mb-8'>Sign In to access your health care dashboard</p>
                <div className='p-8 shadow-lg mb-8'>
                    <form onSubmit={handleFormSubmit}>
                        <input name='username' type="text" value={loginCreds.username} className="mb-4 w-[90%] block p-3 m-auto rounded-lg border focus:outline-none focus:border-red-500" placeholder='Username' onChange={onFormChange} />

                        <input name='password' type="password" value={loginCreds.password} className="mb-4 w-[90%] block p-3 m-auto rounded-lg border focus:outline-none focus:border-red-500" placeholder='Password' onChange={onFormChange} />
                        <input type="submit" value="Sign In" className='bg-red-500 p-3 w-[90%] rounded-lg text-xl font-semibold text-white' />
                    </form>
                </div>
                <p>Don't have an account? <Link to={'/signup'} className='text-red-600'>Sign up</Link></p>
            </div>
            <ToastContainer />

        </div>
    )
}

export default Login
