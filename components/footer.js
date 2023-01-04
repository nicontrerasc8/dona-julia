import React from 'react'
import {FaInstagram, FaFacebook, FaWhatsapp} from "react-icons/fa"

const Footer = () => {
  return <footer>
    <a className='instagram' 
        href='https://www.instagram.com/elpeznuestrodecadadia/' 
        target={"_blank"} 
        rel="noreferrer" >
          <FaInstagram/>
      </a>
    <a className='whatsapp' 
    href={`https://api.whatsapp.com/send?phone=51965917524&text=¡Hola! vengo de su página web.`} 
    target={"_blank"} 
    rel="noreferrer">
      <FaWhatsapp/>
    </a>
  </footer>
}

export default Footer