import React from 'react'

const AppointmentCard = ({ ele }) => {
    // console.log(ele)
    const { date_time, doctor } = ele
    return (
        <div className='flex flex-col shadow-xl md:flex-row p-2  md:p-6 justify-between'>
            <div className='flex flex-col md:flex-row'>
                <img src={doctor.image} className='md:w-24 rounded-lg space-y-4' alt="doctors image" />
                <div className='text-left px-4'>
                    <h1 className='font-bold'>{doctor.name}</h1>
                    <p>{doctor.speciality.title}</p>
                    <p><span className='font-bold'> Address: </span>{doctor.address.line1}</p>
                    <p><span className='font-bold'>Date & Time:</span> {date_time}</p>
                </div>
            </div>

            <div className="relative flex justify-end">
                <button className="bg-red-500 px-4 py-2 rounded-lg md:absolute mt-4 bottom-0 right-0  whitespace-nowrap">
                    Call Clinic
                </button>
            </div>

        </div>
    )
}

export default AppointmentCard
