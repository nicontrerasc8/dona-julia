import Image from 'next/image'
import React from 'react'
import {GiHamburger, GiFrenchFries, GiMeal, GiCakeSlice} from "react-icons/gi"
import {FaGlassCheers} from "react-icons/fa"


const arr = [
  {
    icon: <GiHamburger/>,
    catTitle: "Hamburguesas",
    data:[
      {
        i: "Hamburguesa clásica",
        p: 14,  
      },
      {
        i: "Hamburguesa royal",
        p: 16
      },
      {
        i: "Hamburugesa de la casa",
        p: 19
      },
      {
        i: "Hamburugesa con chorizo",
        p: 17
      },
      {
        i: "Hamburuguesa extrema",
        p: 20
      },
      {
        i: "Hamburguesa de pollo",
        p: 15,
      },
      {
        i: "Hamburguesa vegana",
        p: 20
      }
    ]
  },
  {
    icon: <GiMeal/>,
    catTitle: "Platos de fondo",
    data: [
      {
        i: "Hamburguesa con papas fritas y ensalada",
        p: 20
      },
      {
        i: "Hamburguesa con camote frito y ensalada",
        p: 22
      },
      {
        i: "Salchipapa con hamburguesa",
        p: 22
      },
      {
        i: "Pollo broaster con papas fritas y ensalada",
        p: 18
      },
      {
        i: "Pollo broaster con camote frito y ensalada",
        p: 20
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
        i: "Camote frito",
        p: 7
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
        p: 6
      }
    ]
  },
  {
    icon: <FaGlassCheers/>,
    catTitle: "Bebidas",
    data: [
      {
        i: "Agua mineral",
        p: 3
      },
      {
        i: "Gaseosa",
        p: 3.5
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
          return <div key={idx}>
            <i>{i.icon}</i>
            <h3>{i.catTitle}</h3>
              {
                i.data.length && i.data.map((info, id) => {
                  return <li key={id}>
                    <span>{info.i}</span> <span className='price'>s/. {info.p}</span>
                  </li>
                })
              }
          </div>
        })
      }
    </section>
  </div>

}

export default Carta