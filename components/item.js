import React, { useEffect } from 'react'
import UseCartContext from '../context/context'

const Item = ({id, info}) => {

    const {AddToCart} = UseCartContext()

  return <li key={id}>
  <img src={info.img} alt="Bodega Castellano"/>
  <section>
     <strong>
       {info.name}
     </strong>
     {
        info.desc && <span>
        {
          info.desc
        }
      </span>
     }
     <strong>
       s/. {info.price}
     </strong>
     <button className='button' onClick={() => AddToCart(info)}>
       Añadir al carrito
     </button>
  </section>
 </li>
}

export default Item