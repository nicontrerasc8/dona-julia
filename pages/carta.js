import Image from 'next/image'
import React from 'react'
import {GiHamburger, GiFrenchFries, GiMeal, GiCakeSlice} from "react-icons/gi"
import {FaGlassCheers} from "react-icons/fa"
import {motion} from "framer-motion"
import Item from '../components/item'


const arr = [
  {
    catTitle: "Piscos",
    data: [
      {
        img: 'https://firebasestorage.googleapis.com/v0/b/racing-online-store.appspot.com/o/uploads%2F1643057593094.0e2d27-4f47-afb1-1540-a1d0406a30c1?alt=media&token=12a0929c-3f8f-421b-8d08-010c613afa60',
        name: 'Pisco quebranta Castellano 750ml',
        price: 20,
      },
      {
        img: 'https://firebasestorage.googleapis.com/v0/b/racing-online-store.appspot.com/o/uploads%2F1643058074182.713e7f-ea7e-d5cd-6746-d423d821dc7?alt=media&token=069af3ac-3fb6-429f-9cb4-a008de74eb75',
                         name: 'Pisco acholado Andariego 750ml',
                         price: 40,
      },
      {
        img: 'https://firebasestorage.googleapis.com/v0/b/racing-online-store.appspot.com/o/uploads%2F1643057952748.6bbd8f7-6b47-440-67b2-3ae88880d41?alt=media&token=7cca2548-13e8-46bc-9cae-70bce30ccc96',
        name: 'Pisco mosto verde Andariego 750ml',
        price: 40,
      },
      {
        img: 'https://firebasestorage.googleapis.com/v0/b/racing-online-store.appspot.com/o/uploads%2F1643057710181.a4814b-c02c-1d33-42de-cee768d6b4?alt=media&token=60294a92-6b4f-48f0-9add-6cb174a8f7e3',
        name: 'Pisco italia Andariego 750ml',
        price: 40,
      },
    ]
  },
  {
    catTitle: 'Vinos',
    data: [
         {
              img: 'https://firebasestorage.googleapis.com/v0/b/racing-online-store.appspot.com/o/uploads%2F1643056838968.c658b85-2ee8-a647-a3-5ef5c6077a2a?alt=media&token=3dd9b9bf-543c-4855-9587-a4a39c851962',
              name: "Vino borgoña 750ml",
              price: 15,
         },
         {
              img: 'https://firebasestorage.googleapis.com/v0/b/racing-online-store.appspot.com/o/uploads%2F1643056744399.1ee8df6-07ab-65b-34a1-6e803a8bb68?alt=media&token=d83b856b-b01a-4353-8426-63ffe9db8954',
              name: 'Vino rosé 750ml',
              price: 15,
         },
    ]
},
]

const Carta = () => {
  return <div className='pagina'>
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
                  return <Item info={info} id={id}/>
                })
              }
             </ul>
          </motion.div>
          </>
        })
      }
    </section>
  </div>

}

export default Carta