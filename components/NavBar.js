import React, { useEffect } from 'react'
import { Nav } from '../styled-components/nav'
import Image from 'next/image'
import {motion} from "framer-motion"
import Link from 'next/link'
import { useState } from 'react'
import {FaHamburger} from "react-icons/fa"



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
      <Link href={"/"}>
        <h2 className='logo'>
            <FaHamburger/> Nick&apos;s Burgers
        </h2>
      </Link>
      <div className="nav-btns">
        <Link href={"/carta"}>
            <button className='button'>
                Carta
            </button>
        </Link>
      <a target={"_blank"} 
       href={`https://api.whatsapp.com/send?phone=51949161510&text="¡Hola! vengo de su página web. Me gustaría hacer una reserva."`}
       rel='noreferrer'
          >
                    <button className='button white-button'>
                         Haz tu reserva
                    </button>
               </a>
               
          </div>
          
  </nav>
}

export default BrandNavBar