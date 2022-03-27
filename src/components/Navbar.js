import React from 'react'
// import { useState } from 'react'
import { NavbarContainer, Logo, LogoContainer, IconsContainer, UserContainer, MessageContainer, Discover } from './NavbarStyles'
import {MdNotifications, MdKeyboardArrowDown, MdTextsms} from 'react-icons/md'
import {FaUserCircle} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {BsGlobe} from 'react-icons/bs'

const Navbar = () => {
  return (
    <NavbarContainer>
        <LogoContainer>
             <Link to='/'><Logo className='logo'>Memories</Logo></Link>
        </LogoContainer>
        
        <IconsContainer>
           {/* <Link to='/discover' className='flex '><Discover>Discover</Discover></Link>  */}
           <Link to='/discover' className='flex h-9'><Discover><BsGlobe/></Discover></Link> 
            <MdNotifications/>
            <MessageContainer>
                <MdTextsms/>
            </MessageContainer>
            <UserContainer>
                <Link to='/login'><FaUserCircle/></Link>
                <MdKeyboardArrowDown/>
            </UserContainer>
        </IconsContainer>
    </NavbarContainer>
  )
}

export default Navbar

