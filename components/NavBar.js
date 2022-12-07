import React, { useEffect } from 'react'
import { Nav } from '../styled-components/nav'
import Image from 'next/image'
import {motion} from "framer-motion"
import Link from 'next/link'
import { useState } from 'react'



const BrandNavBar = () => {

    const [OpenNav, setOpenNav] = useState(false)
     const ChangeNavigationValue = () => setOpenNav(!OpenNav)
     const [NavActiveColor, setNavActiveColor] = useState(false);

     useEffect(()=>{
          const HandleScroll = () => {
               setNavActiveColor(window.scrollY > 1)
          }
          window.addEventListener("scroll", HandleScroll)
    
          return () => {
              window.removeEventListener("scroll", HandleScroll)
          }
      }, [])

  return <nav className={NavActiveColor ? "solidBack" : ""}>
      <div className='image-logo'>
      <Image  alt="Cevichería El Picante" src="/logo.png" fill/>
      </div>
      <div className="nav-btns">
      <a target={"_blank"} 
       href={`https://api.whatsapp.com/send?phone=51949161510&text="¡Hola! vengo de su página web. Me gustaría hacer una reserva."`}
       rel='noreferrer'
          >
                    <button className='button nav-button'>
                         Haz tu reserva
                    </button>
               </a>
               
          </div>
          
  </nav>
}

export default BrandNavBar