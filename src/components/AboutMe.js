import React from 'react'
import img from '../images/img1.png'
import {Linking} from 'react'

const AboutMe = () => {
    return (
        <div className='About'>
            <div className='container clearfix'>
                <div className='About_me'>
                    <h1>About Me</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                         Lorem Ipsum standard dummy text.</p>
                </div>
                <div className='About-des'>
                    <div className='column'>
                         <img src={img} alt='img2' />
                    </div>
                    <div className='column'>
                        <h2>Hi There</h2>
                        <p>In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui at sapien faucibus fermentum 
                            ut vel diam. Nullam tempus, nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis
                            nunc id efficitur sagittis, urna est ultricies eros, ac porta 
                            sem turpis porta sem turpis quis leo. Nulla in feugiat elit</p>
                        <div className='Intro clearfix'>
                            <div className='Intro-1'>
                                <h5>Name:</h5>
                                <h6>Anand kumar das</h6>
                            </div>
                            <div className='Intro-1'>
                                <h5>Phone:</h5>
                                <h6>+91-7977370990</h6>
                            </div>
                            <div className='Intro-1'>
                                <h5>Email:</h5>
                                <h6>anand003das@gmail.com</h6> 
                            </div>
                            <div className='Intro-1'>
                                <h5>Linkdin:</h5>
                                <h6><a href='https://www.linkedin.com/in/anand-kumar-das-76b7271a1' target='blank' >Click me</a></h6>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default AboutMe
