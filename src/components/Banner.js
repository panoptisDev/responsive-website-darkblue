import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'
import {FaPinterest} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import img from '../images/img2.png'
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
                                <p>i'm specilized in EEE and i know front-end technoloy and looking carrer in it secter</p>
                                <div className='btn'>
                                    <div className='btn-btn'>
                                    <a href='#'>My portfolio</a>
                                    </div>
                                    <div className='btn-youtobe'>
                                    <a href='#' ><FaYoutube  /></a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className='picture'>
                            <img src={img} alt='images' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
