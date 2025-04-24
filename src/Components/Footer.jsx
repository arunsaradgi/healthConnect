import { faTwitter, faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot, faStethoscope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FooterColumns from "./FooterColumns";


const Footer = () => {
    const FooterLinks = [
        { heading: "Company", links: ["About Us", "Departments", "Find A Doctor", "News"] },
        { heading: "Quick Links", links: ["Health Checkups", "Vaccinations", "Emergency Services", "Mental Health", "Nutrition & Diet"] },
    ];


    return (
        <div className="text-gray-400 p-2 bg-[#111828] mt-10">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 mt-8">
                <div >
                    <div className='flex items-center cursor-pointer'>
                        {/* <i className="fa-solid fa-stethoscope text-red-500 text-2xl m-4"></i> */}
                        <FontAwesomeIcon icon={faStethoscope} className="text-red-500 text-2xl m-4 font-extrabold" />
                        <h3 className='font-bold text-2xl text-white'>Health Connect</h3>
                    </div>
                    <div className="flex border border-red-500 rounded-full  m-4 overflow-hidden">
                        <input type="email" placeholder="EMAIL" className="p-2 text-gray-400 w-full px-6 focus:outline-none bg-[#202938]" />
                        <button className="bg-red-500 p-2 text-white px-4">Subscribe</button>
                    </div>
                    <div className="m-4">
                        <FontAwesomeIcon icon={faFacebookF} className='text-white m-2 cursor-pointer hover:text-red-500' />
                        <FontAwesomeIcon icon={faTwitter} className='text-white m-2 cursor-pointer hover:text-red-500' />
                        <FontAwesomeIcon icon={faInstagram} className='text-white m-2 cursor-pointer hover:text-red-500' />
                    </div>
                </div>
                {
                    FooterLinks.map((ele, i) => <FooterColumns key={i} ele={ele} />)
                }

                <div className="p-2 ">
                    <h2 className="text-white font-semibold text-xl m-2 mb-3">Contact Us</h2>
                    <div className="flex items-center m-2 my-4">
                        <FontAwesomeIcon icon={faLocationDot} className="text-red-500 mr-2 text-xl" />
                        <h3 className="">1234 Health Street, Sector 42, Gurgaon, Haryana, India</h3>
                    </div>
                    <div className="flex items-center m-2 my-4">
                        <FontAwesomeIcon icon={faPhone} className="text-red-500 mr-2 text-xl" />
                        <h3 className="">+91-98765-43210</h3>
                    </div>
                    <div className="flex items-center m-2 my-4">
                        <FontAwesomeIcon icon={faEnvelope} className="text-red-500 mr-2 text-xl" />
                        <h3 className="">support@healthconnect.in</h3>
                    </div>
                </div>
            </div>

            <hr className="border border-gray-600 my-8 mx-4" />
            <div className="flex flex-col mx-4 text-center lg:flex-row justify-between mb-8 text-gray-500 text-sm ">
                <p>© 2025 All Rights Reserved</p>
                <p>This template is made with ❤️ by Arun - Health Connect</p>
                <p>Terms & Use • Privacy Policy</p>
            </div>
        </div>
    )
}

export default Footer;