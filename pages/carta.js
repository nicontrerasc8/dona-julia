import Image from 'next/image'
import React from 'react'
import {GiHamburger, GiFrenchFries, GiMeal, GiCakeSlice} from "react-icons/gi"
import {FaGlassCheers} from "react-icons/fa"
import {motion} from "framer-motion"
import Item from '../components/item'

//img, name, desc y price

const arr = [
{
  catTitle: "Pizzas personales",
  data:[
    {
      img: "https://firebasestorage.googleapis.com/v0/b/k-talogo.appspot.com/o/peperoni.jpeg?alt=media&token=b8373d05-8e10-44ed-b7dc-53882d6c3db5",
      name: "Pepperoni",
      price: 14,
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/k-talogo.appspot.com/o/la-otra.jpeg?alt=media&token=73018dd0-dc37-44fa-9160-a3ba766ba65d",
      name: "La favorita de Fabri",
      desc: "Jamón, pepperoni, tocino, cabanossi y piña",
      price: 20,
    }
  ]
},
{
  catTitle: "Pizzas familiares",
  data:[
    {
      img: "https://firebasestorage.googleapis.com/v0/b/k-talogo.appspot.com/o/peperoni.jpeg?alt=media&token=b8373d05-8e10-44ed-b7dc-53882d6c3db5",
      name: "Pepperoni",
      price: 28,
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/k-talogo.appspot.com/o/la-otra.jpeg?alt=media&token=73018dd0-dc37-44fa-9160-a3ba766ba65d",
      name: "La favorita de Fabri",
      desc: "Jamón, pepperoni, tocino, cabanossi y piña",
      price: 40,
    }
  ]
},
]

const Carta = () => {
  return <>
<div className='pagina'>
    <section className='cart-grid'>
      {
        arr.length && arr.map((i, idx) =>{
          return <>
                  <h3>{i.catTitle}</h3>
            <motion.div 
          initial={{ opacity: 0, left: "-100vw" }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, left: 0 }}
          transition={{delay: .1}}
          key={idx}>
             <ul>
             {
                i.data.length && i.data.map((info, id) => {
                  return <Item info={info} key={id}/>
                })
              }
             </ul>
          </motion.div>
          </>
        })
      }
    </section>
  </div>
  </>

}

export default Carta