import React from 'react'

import './header.scss'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className='header'>
        <figure className='header_logo'>
            <img src='https://beadominguezmuah.s3.eu-north-1.amazonaws.com/logos/logobeadominguez_.png' alt='Bea Dominguez MUAH logo'/>
            <figcaption className='h5'>Make - Up & Hair</figcaption>
        </figure>
        <nav className='header_nav'>
            <h1 className='h2 bold'>Work</h1>
            <ul>
                <li><NavLink className=" h4 " to={"/Grooming"}>Grooming</NavLink></li>
                <li><NavLink className=" h4 " to={"/Women"}>Woman</NavLink></li>
                <li><NavLink className=" h4 " to={"/Kids"}>Kids</NavLink></li>
                <li><NavLink className=" h4 " to={"/Advertising"}>Advertising</NavLink></li>
                <li><NavLink className=" h4 " to={"/Celeb"}>Celeb</NavLink></li>
            </ul>
        </nav>
        <nav className='header_info'>
            <NavLink className=" h5 ">About me</NavLink>
            <NavLink className=" h5 ">Contact info</NavLink>
            <NavLink className=" h5 ">Legal notice</NavLink>
        </nav>
    </header>
  )
}