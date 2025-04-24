import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const ContactUs = () => {

    const [formData, setFormData] = useState({ name: "", email: '', subject: '', message: '' })
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const notify = (value) => toast(value);

    const handleFormSubmit = (e) => {
        e.preventDefault()
        // console.log(formData)
        postFormData()
    }

    const postFormData = async () => {
        try {
            const response = await axios.post('https://backend-health-connect.vercel.app/contact/get_in_touch', formData)
            // console.log(response.data)
            notify('We have received your query. We will connect with you soon!!')
        } catch (err) {
            // console.log(err)
            notify(err.response.data.detail[0].msg)
        }
    }

    return (
        <div className='text-center p-12'>
            <h1 className='text-3xl font-bold mb-4'>Get in Touch</h1>
            <p className='text-gray-700'>Have questions or need assistance? Fill out the form, and our team will get back to you shortly.</p>
            <div className='md:flex flex-col text-center lg:flex-row'>
                <img src="src/assets/contact.jpg" alt="" className='w-[80%]  lg:w-[50%] m-auto' />
                <form action="" className='w-[70%] flex flex-col lg:w-[50%] gap-4 m-auto items-center' onSubmit={handleFormSubmit}>
                    <input className='w-[100%]  border lg:w-[70%] h-12 p-4 rounded-lg  border-gray-500' placeholder='Your Name' type="text" name='name' value={formData.name} onChange={handleInputChange} />
                    <input className='w-[100%]  border lg:w-[70%] h-12 p-4 rounded-lg  border-gray-500' placeholder='Your Email' type="text" name='email' value={formData.email} onChange={handleInputChange} />
                    <input className='w-[100%]  border  lg:w-[70%] h-12 p-4 rounded-lg  border-gray-500' placeholder='Subject' type="text" name='subject' value={formData.subject} onChange={handleInputChange} />
                    <textarea className=' w-[100%]  border h-[100px] resize-none lg:w-[70%] p-4 rounded-lg  border-gray-500' placeholder='Message' type="text" name='message' value={formData.message} onChange={handleInputChange} />
                    <input
                        type="submit"
                        value="Send Message"
                        className="w-[100%] lg:w-[70%] h-12 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 cursor-pointer"
                    />

                </form>

                <ToastContainer />
            </div>
        </div>
    )
}

export default ContactUs
