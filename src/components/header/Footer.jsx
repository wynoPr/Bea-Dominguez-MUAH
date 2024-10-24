import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='footer'>
        <nav className='footer_info'>
            <Link to={"/About"} className=" h5 ">About me</Link>
            <a  className=" h5 " href="mailto:tuemail@ejemplo.com?subject=Consulta&body=Hola, me gustaría obtener más información.">tuemail@ejemplo.com </a>
            <Link to={"/Legal"} className=" h5 ">Legal notice</Link>
        </nav>
    </footer>
  )
}
