import React, { useEffect } from 'react'
import { Nav } from '../styled-components/nav'
import Image from 'next/image'
import {motion} from "framer-motion"
import Link from 'next/link'
import { useState } from 'react'
import {FaWineBottle, FaShoppingCart, FaBoxOpen, FaPizzaSlice} from "react-icons/fa"
import {IoWine} from "react-icons/io5"
import {MdOutdoorGrill} from "react-icons/md"
import UseCartContext from '../context/context'



const BrandNavBar = () => {

    const [OpenNav, setOpenNav] = useState(false)
     const ChangeNavigationValue = () => setOpenNav(!OpenNav)
     const [String, setString] = useState("")
     const [NavActiveColor, setNavActiveColor] = useState(false);
     const {ProductsCount} = UseCartContext()
    

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
            <span>
            <MdOutdoorGrill/>
            </span> Doña Julia
        </h2>
      </Link>
      <div className="nav-btns">
        {/* <Link href={"/carta"}>
            <button className='button white-button'>
                <FaPizzaSlice/> <text>Catálogo</text>
            </button>
        </Link>
        <Link href={"/carrito"}>
        <button className='button white-button'>
                    <FaShoppingCart/> <text>Carrito</text> { ProductsCount() > 0 &&
                        <>
                        &#40;{ProductsCount()}&#41;
                        </>
                    }
                    </button>
        </Link> */}
        <a target={"_blank"} 
       href={`https://api.whatsapp.com/send?phone=51987265986&text="¡Hola! vengo de su página web. Me gustaría hacer una reserva."`}
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