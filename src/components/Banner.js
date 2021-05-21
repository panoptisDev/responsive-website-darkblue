import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'
import {FaPinterest} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
const Banner = () => {
    return (
        <div className='header'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='header-content'>
                            <div className='header-sections'>
                                <ul className='header-ul'>
                                <li><FaFacebookF /></li>
                                <li><FaTwitterSquare /></li>
                                <li><FaPinterest /></li>
                                <li><FaInstagramSquare /></li>
                                </ul>
                                <h1>I am Anand kumar das</h1>
                                <p>i'm specilized in EEE and i know front-end technoloy and its my passion</p>
                                <div className='btn'>
                                    <a href='#' className='bnt-btn'>My portfolio</a>
                                    <div>
                                    <a href='#' className='btn-youtobe'><FaYoutube  /></a>
                                    </div>
                                   

                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='picture'>
                            <img src='/images/img1.png' alt='images' />
                        </div>

                     </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
