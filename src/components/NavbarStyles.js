import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavbarContainer = styled.nav`
    width: 100%;
    background: rgb(0 0 50 / .7);
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: 0 3px 10px rgb(200 200 200/.3);
    position:sticky;
    top: 0;
    z-index:2;
`
export const LogoContainer = styled.div`
    margin: 1vh 1vw;
    width: 30%;
`
export const Logo = styled.h1`
    font-size: 48px;
    color: white;
    padding: 5px;
    font-family: 'Neonderthaw', cursive;
    
`
export const IconsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: white;
    font-size: 30px;
    width: 60%;
    
`
export const UserContainer = styled.div`
    display: flex;
    margin-left: 2vw;
`
export const MessageContainer = styled.div`
    margin-left: 2vw;
`
export const Discover = styled.button`
    color: rgb(0 0 50);
    font-size: 27px;
    margin-right: 2vw;
    border: none;
    padding: 0 10px;
    border-radius: 30px;
    background-color: white;
    box-shadow: 0 3px 10px rgb(255 255 255 /.5);
    font-family: 'Hurricane', serif;

`