import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import UseCartContext from '../context/context'

const Item = ({id, info}) => {

    const {AddToCart} = UseCartContext()
    const [Selected, setSelected] = useState({})
    const [Array, setArray] = useState()

    const SetTo = (i) => {
      setSelected(i)
    }

    const AddToCartWithOptions = () => {
      if(Selected.t) AddToCart(Array)
      else toast.error("Selecciona el tipo de producto")
    }

    useEffect(() => {
      var obj = {
        img: info.img,
        name: info.name + " (" + Selected.t + ")",
        price: Selected.p 
      }
      setArray(obj)
      console.log(obj)
    }, [Selected])
    

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
     {
      info.options ? <>
      {
        info.options.map((data, idx) => {
          return <button className={data.t == Selected.t ? 'button white-button selected' : "button white-button"} onClick={() => SetTo(data)} key={idx}>
            <span>{data.t} - s/. {data.p}</span>
          </button>
        })
      }
      <button className='button' onClick={AddToCartWithOptions}>
        Añadir al carrito
      </button>
      </> : <>
      <strong>s/. {info.price}</strong>
        <button className='button' onClick={() => AddToCart(info)}>
       Añadir al carrito
     </button>
      </>
     }
  </section>
 </li>
}

export default Item