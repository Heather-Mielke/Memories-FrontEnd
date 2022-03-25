import React from 'react'
import { useState } from 'react'
import { NavbarContainer, Logo, LogoContainer, IconsContainer, UserContainer, MessageContainer, Discover } from './NavbarStyles'
import {MdNotifications, MdKeyboardArrowDown, MdTextsms} from 'react-icons/md'
import {FaUserCircle} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <NavbarContainer>
        <LogoContainer>
             <Link to='/'><Logo className='logo'>Memories</Logo></Link>
        </LogoContainer>
        
        <IconsContainer>
           <Link to='/dicover'><Discover>Discover</Discover></Link> 
            <MdNotifications/>
            <MessageContainer>
                <MdTextsms/>
            </MessageContainer>
            <UserContainer>
                <Link to='/profile'><FaUserCircle/></Link>
                <MdKeyboardArrowDown/>
            </UserContainer>
        </IconsContainer>
    </NavbarContainer>
  )
}

export default Navbar

