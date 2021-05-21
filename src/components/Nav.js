import React,{useState} from 'react'
import {FaAlignJustify} from 'react-icons/fa'

const Nav = () => {
    const [state, setState] = useState(true);
    return (
        <div className='navbar'>
            <div className='container'>
                <div className='nav_container'>
                    <ul className='navbar__left'>
                        <div className='nav-logo'>
                            <img src='/images/logo.png' alt='logo' />
                        </div>
                    </ul>
                     {state ? (
                      <ul className='navbar__right'>
                      <li><a href="#" >Home</a></li>
                      <li><a href="#" >Services</a></li>
                      <li><a href="#" >About</a></li>
                      <li><a href="#" >Portfolio</a></li>
                      <li><a href="#" >Blog</a></li>
                      <li><a href="#" >Contact</a></li>
                  
                  </ul> ) : ''}
                  
                    
                </div>
                
            </div>
            <div className='toggle' onClick={ () => setState(!state)}><FaAlignJustify /></div>
            
        </div>
        
    )
}

export default Nav
