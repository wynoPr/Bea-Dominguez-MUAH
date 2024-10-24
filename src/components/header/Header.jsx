import React from 'react'

import './header.scss'
import { Link, NavLink, useLocation } from 'react-router-dom'

export default function Header() {

    const location = useLocation();
    // console.log(location);
    

  return (
    <header className='header'>
        <Link to={"/"} className='header_logo'>
            <img src='https://beadominguezmuah.s3.eu-north-1.amazonaws.com/logos/logobeadominguez_.png' alt='Bea Dominguez MUAH logo'/>
            <span className='h5'>Make - Up & Hair</span>
        </Link>
        
        { !(location.pathname == '/Legal' || location.pathname === '/Contact' || location.pathname === '/About') &&
            <nav className='header_nav'>
            {location.pathname == '/' &&<h1 className='h2 bold'>Work</h1>}
            {location.pathname == '/Grooming' &&<h1 className='h2 active'>Grooming</h1>}
            {location.pathname == '/Women' &&<h1 className='h2 active'>Woman</h1>}
            {location.pathname == '/Kids' &&<h1 className='h2 active'>Kids</h1>}
            {location.pathname == '/Advertising' &&<h1 className='h2 active'>Advertising</h1>}
            {location.pathname == '/Celeb' &&<h1 className='h2 active'>Celeb</h1>}
            <ul>
                <li><NavLink 
                    className={`h4 ${location.pathname === '/Grooming' ? 'active' : ''}`} 
                    to={location.pathname === '/Grooming' ? '/' : '/Grooming'}>Grooming</NavLink></li>
                <li><NavLink 
                    className={`h4 ${location.pathname === '/Women' ? 'active' : ''}`} 
                    to={location.pathname === '/Women' ? '/' : '/Women'}>Women</NavLink></li>
                <li><NavLink 
                    className={`h4 ${location.pathname === '/Kids' ? 'active' : ''}`} 
                    to={location.pathname === '/Kids' ? '/' : '/Kids'}>Kids</NavLink></li>
                <li><NavLink 
                    className={`h4 ${location.pathname === '/Advertising' ? 'active' : ''}`} 
                    to={location.pathname === '/Advertising' ? '/' : '/Advertising'}>Advertising</NavLink></li>
                <li><NavLink 
                    className={`h4 ${location.pathname === '/Celeb' ? 'active' : ''}`} 
                    to={location.pathname === '/Celeb' ? '/' : '/Celeb'}>Celeb</NavLink></li>
            </ul>

        </nav>}

        <nav className='header_info'>
            <Link to={"/About"} className=" h5 ">About me</Link>
            <a  className=" h5 " href="mailto:tuemail@ejemplo.com?subject=Consulta&body=Hola, me gustaría obtener más información.">tuemail@ejemplo.com </a>
            <Link to={"/Legal"} className=" h5 ">Legal notice</Link>
        </nav>
    </header>
  )
}