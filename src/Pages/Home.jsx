import React from 'react'
import Banner from '../Components/Banner/Banner'
import Services from '../Components/Services/Services'
import AboutUs from '../Components/AboutUs/AboutUs'
import Departments from '../Components/Departments/Departments'
import Offers from '../Components/Offers'
import OurTeam from '../Components/OurTeam'
import ContactUs from '../Components/ContactUs'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar/Navbar'
const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Services />
            <AboutUs />
            <Departments heading="Health connect popular Departments" desc="Discover the range of medical specialties that our expert team offers to ensure comprehensive health care services." showViewMore={true} />
            <Offers />
            <OurTeam />
            <ContactUs />
            <Footer />
        </div>
    )
}

export default Home