import React,{useState} from 'react'
import {FaAlignJustify} from 'react-icons/fa'
import logo from '../images/logo.png'

const Nav = () => {
    const [state, setState] = useState(true);
    const [show, setShow] = useState(true);
    return (
        <div className='navbar'>
            <div className='container'>
                <div className='nav_container'>
                    <ul className='navbar__left'>
                        <div className='nav-logo'>
                            <img src={logo} alt='logo' />
                        </div>
                    </ul>
                     {state ? (
                      <ul className='navbar__right'>
                      <li><a href="#" onMouseOutCapture={() => setShow(!show)} >Home</a></li> 
                      <li><a href="#" >Services</a></li>
                      <li><a href="#" >About</a></li>
                      <li><a href="#" >Portfolio</a></li>
                      <li><a href="#" >Blog</a></li>
                      <li><a href="#" >Contact</a></li>
                  
                  </ul> ) : null}
                  
                    
                </div>
                <div className='home'>
                   {show ? 
                    <ul>
                        <li>Project</li>
                        <li>My profile</li>
                        <li>Assignment</li>
                        <li>Task</li>
                        <li>Shedule</li>
                    </ul> : null }
                </div>
                
            </div>
            <div className='toggle' onClick={ () => setState(!state)}><FaAlignJustify /></div>
            
        </div>
        
    )
}

export default Nav
