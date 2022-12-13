import Image from 'next/image'
import React from 'react'
import {GiHamburger, GiFrenchFries, GiMeal, GiCakeSlice} from "react-icons/gi"
import {FaGlassCheers} from "react-icons/fa"
import {motion} from "framer-motion"


const arr = [
  {
    icon: <GiHamburger/>,
    catTitle: "Hamburguesas",
    data:[
      {
        i: "Clásica",
        p: 14, 
        d: "Hamburguesa de res con tomate, lechuga y salsas al gusto." 
      },
      {
        i: "Royal",
        p: 16,
        d: "Hamburguesa de res con huevo, queso y salsas al gusto."
      },
      {
        i: "Queso y tocino",
        p: 17,
        d: "Hamburguesa de res con queso, tocino y salsas al gusto."
      },
      {
        i: "De la casa",
        p: 19,
        d: "Hamburguesa de res con platano frito, huevo, tocino y salsas al gusto."
      },
      {
        i: "Hamburguesa extrema",
        p: 20,
        d: "Hamburguesa con chorizo, huevo y salsas al gusto."
      },
      {
        i: "De pollo",
        p: 15,
        d: "Hamburguesa de pollo con tomate, lechuga y salsas al gusto."
      },
    ]
  },
  {
    icon: <GiMeal/>,
    catTitle: "Platos de fondo",
    data: [
      {
        i: "Burger al plato",
        p: 20,
        d: "Hamburguesa de res con papas fritas y ensalada."
      },
      {
        i: "Salchipapa",
        p: 17,
        d: "La receta clásica con un huevo frito y salsas al gusto."
      },
      {
        i: "Salchiburger",
        p: 22,
        d: "Salchipapa con un adicional de trozos de hamburguesa."
      },
      {
        i: "Chicken al plato",
        p: 20,
        d: "Pollo a la plancha con papas fritas y ensalada."
      }
    ]
  },
  {
    icon: <GiFrenchFries/>,
    catTitle: "Complementos",
    data: [
      {
        i: "Papas fritas",
        p: 5
      },
      {
        i: "Platano frito",
        p: 4
      },
      {
        i: "Hot-dog",
        p: 8
      },
      {
        i: "Chorizo parrillero",
        p: 10
      },
      {
        i: "Queso edam",
        p: 4
      },
      {
        i: "Onion rings",
        p: 6,
        d: "Aros de cebolla arrobozados"
      }
    ]
  },
  {
    icon: <FaGlassCheers/>,
    catTitle: "Bebidas",
    data: [
      {
        i: "Agua mineral",
        p: 3,
        d: "Sin gas o con gas"
      },
      {
        i: "Gaseosas",
        p: 3.5,
        d: "Coca Cola, Inca Kola, Sprite, Fanta o Guaraná."
      },
      {
        i: "Vaso de limonada",
        p: 5
      },
      {
        i: "Vaso de chicha",
        p: 5
      },
      {
        i: "Jarra de limonada",
        p: 12
      },
      {
        i: "Jarra de chicha",
        p: 12
      },
    ]
  },
  {
    icon: <GiCakeSlice/>,
    catTitle: "Postres",
    data: [
      {
        i: "Torta de chocolate",
        p: 10
      },
      {
        i: "Pie de manzana",
        p: 9
      },
      {
        i: "Tres leches",
        p: 9
      },
      {
        i: "Pie de limón",
        p: 10
      },
      {
        i: "Torta de alfajor",
        p: 11
      },
      {
        i: "Picarones",
        p: 8
      },
    ]
  }
]

const Carta = () => {
  return <div className='cart'>
    <h2>Nuestra carta</h2>
    <section className='cart-grid'>
      {
        arr.length && arr.map((i, idx) =>{
          return <motion.div 
          initial={{ opacity: 0, left: "-100vw" }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, left: 0 }}
          transition={{delay: .1}}
          key={idx}>
            <i>{i.icon}</i>
            <h3>{i.catTitle}</h3>
              {
                i.data.length && i.data.map((info, id) => {
                  return <li key={id}>
                    <article>
                      <span>{info.i}</span> <span className='price'>s/. {info.p}</span>
                    </article>
                    {
                      info.d && <article className='desc'>
                      <span>{info.d}</span> <span/>
                    </article>
                    }
                  </li>
                })
              }
          </motion.div>
        })
      }
    </section>
  </div>

}

export default Carta