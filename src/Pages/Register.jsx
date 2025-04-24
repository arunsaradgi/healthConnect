import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import Doc from './../../public/assets/doc.png'
const Register = () => {
    const [formData, setFormData] = useState({ name: '', username: '', email: '', password: "" })
    const [otpscreen, setOtpScreen] = useState(false)
    const [otp, setOtp] = useState('')
    const notify = (value) => toast(value);
    const navigate = useNavigate()


    const onFormChange = (e) => {
        const { name, value } = e.target
        // console.log(name, value)
        setFormData({ ...formData, [name]: value })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        // https://backend-health-connect.vercel.app/auth/signup
        postFromData()
    }

    const postFromData = async () => {
        try {
            const response = await axios.post('https://backend-health-connect.vercel.app/auth/signup', formData)
            notify(response.data.message)
            // console.log(response)
            setOtpScreen(true)

        } catch (error) {
            notify(error.response.data.detail[0].msg) || notify(error.response.data.detail)

        }

    }

    const handleOtpSubmit = (e) => {
        e.preventDefault()
        postOtp()
    }

    const onOtpChange = (e) => {
        console.log(e.target.value)
        setOtp(e.target.value)
    }

    const postOtp = async () => {
        try {
            const response = await axios.post('https://backend-health-connect.vercel.app/auth/verify-email', {
                email: formData.email,
                verification_code: otp
            })
            // console.log(response.data.message)
            notify(response.data.message)
            setTimeout(() => {

                navigate('/login')

            }, 3000)
        } catch (error) {
            notify(error.response.data.detail[0].msg) ||
                notify(error.response.data.detail)
            // console.log(error.response)
        }
    }

    return (
        <div className='flex'>
            <img src={Doc} alt="" className='hidden md:block w-[50%] h-fit' />
            <div className='w-[60%] md:w-[35%] text-center m-auto items-center'>
                <h1 className='text-4xl font-bold m-4'>Welcome to HealthConnect</h1>
                {
                    otpscreen ? <p className='mb-8'>Please enter verification code send to your email</p> : <p className='mb-8'>Create your account and start your healthcare journey</p>
                }
                <div className='p-8 shadow-lg mb-8'>
                    {
                        otpscreen ?
                            <form onSubmit={handleOtpSubmit}>
                                <input type="number" onChange={onOtpChange} value={otp} placeholder='Enter OTP' className="mb-4 w-[90%] block p-3 m-auto rounded-lg border focus:outline-none focus:border-red-500" />
                                <input type="submit" value={'Submit'} className='bg-red-500 p-3 w-[90%] rounded-lg text-xl font-semibold text-white' />
                            </form>
                            : <form onSubmit={handleFormSubmit}>
                                <input name='name' type="text" className="mb-4 w-[90%] block p-3 m-auto rounded-lg border focus:outline-none focus:border-red-500" value={formData.name} placeholder='Full name' onChange={onFormChange} />
                                <input name='username' type="text" value={formData.username} className="mb-4 w-[90%] block p-3 m-auto rounded-lg border focus:outline-none focus:border-red-500" placeholder='Username' onChange={onFormChange} />
                                <input name='email' type="text" value={formData.email} className="mb-4 w-[90%] block p-3 m-auto rounded-lg border focus:outline-none focus:border-red-500" placeholder='Email' onChange={onFormChange} />
                                <input name='password' type="password" value={formData.password} className="mb-4 w-[90%] block p-3 m-auto rounded-lg border focus:outline-none focus:border-red-500" placeholder='Password' onChange={onFormChange} />
                                <input type="submit" value="Sign Up" className='bg-red-500 p-3 w-[90%] rounded-lg text-xl font-semibold text-white' />
                            </form>
                    }

                </div>

                <p>Already have an account? <Link to={'/login'} className='text-red-600'>Log In</Link></p>
            </div>
            <ToastContainer />

        </div>
    )
}

export default Register
