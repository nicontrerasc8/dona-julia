import React from 'react'
import {FaInstagram, FaFacebook, FaWhatsapp} from "react-icons/fa"

const Footer = () => {
  return <footer>
    <a className='facebook' href='https://www.facebook.com/' target={"_blank"}><FaFacebook/></a>
    <a className='instagram' href='https://www.instagram.com/' target={"_blank"}><FaInstagram/></a>
    <a className='whatsapp' href={`https://api.whatsapp.com/send?phone=51949161510&text="¡Hola! vengo de su página web."`} target={"_blank"}><FaWhatsapp/></a>
  </footer>
}

export default Footer