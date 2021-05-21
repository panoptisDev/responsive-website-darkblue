import React from 'react'
import {FaMapMarkerAlt} from 'react-icons/fa'
import {FaPhoneVolume} from 'react-icons/fa'
import {FaEnvelope} from 'react-icons/fa'

const Contact = () => {
    return (
        <div className='contact'>
            <div className='container'>
                <div className='contact-1'>
                    <div className='contact-12'>
                        <h3>HAVE ANY QUERY?</h3>
                        <h1>Contact Me</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                             Lorem Ipsum standard dummy text.</p>
                    </div>
                    <div className='contact-13 clearfix'>
                        <div>
                            <a href='#'><FaMapMarkerAlt />  Location</a>
                            <p>1st cross gottigere,bangalore</p>
                        </div>
                        <div>
                            <a href='#'><FaPhoneVolume />  Phone Number</a>
                            <p>+91-7977370990</p>
                        </div>
                        <div>
                            <a href='#'><FaEnvelope />  Email</a>
                            <p> anand003das@gmail.com</p>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default Contact
