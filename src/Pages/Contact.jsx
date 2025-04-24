import React from 'react'
import ContactUs from '../Components/ContactUs'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer'

const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className='mt-16'>
                <ContactUs />
            </div>
            <Footer />
        </div>
    )
}

export default Contact
