import Link from 'next/link'
import React, { useState } from 'react'
import Counter from '../components/counter'
import UseCartContext from '../context/context'

const CartProduct = ({info}) => {

    const [CounterValue, setCounterValue] = useState(info.cantidad)
    const {Products, setProducts} = UseCartContext()

    const Add = () => {
        const existing = Products.find((p) => p.name === info.name)
        existing.cantidad += 1
        setCounterValue(CounterValue+1)
        setProducts([...Products])
    }

    const Substract = () => {
        const existing = Products.find((p) => p.name === info.name)
        if(existing.cantidad > 1){
            existing.cantidad -= 1
            setCounterValue(CounterValue-1)
            setProducts([...Products])
        }
    }


    return <div>
    <img src={info.img} alt="Bodega Castellano"/>
    <section>
        <strong>{info.name}</strong>
        <span>Precio unitario: s/. {info.price}</span>
        <Counter Count={CounterValue} AddToCounter={Add} SubstractCounter={Substract}/>
        <span>Total: s/. {info.cantidad * info.price}</span>
    </section>
</div>
}

const Carrito = () => {

    const {Products, FinalWhatsAppString, TotalProductsPrice} = UseCartContext()



  return <div className='pagina'>
    {
        Products.length > 0 ? 
        <div className='carrito'>
            <h2>Carrito de compras</h2>
            {
                Products.map((info, idx) => {
                    return <CartProduct info={info} key={idx}/>
                })
            }
            <p className='total'>Total a pagar: s/. {TotalProductsPrice()}</p>
            <a href={`https://api.whatsapp.com/send?phone=51965917524&text="¡Hola! Vengo de su página web. Mi pedido es el siguiente: ${FinalWhatsAppString}"`}  target={"_blank"} rel="noreferrer">
            <button className="button">
                Hacer el pedido
            </button>
            </a>
        </div> : 
        <>
        <h3>Aún no has agregado ningún producto al carrito</h3>
        <Link href={"/carta"}>
        <button className='button'>
            Buscar productos
        </button>
        </Link>
        </>
    }
  </div>
}

export default Carrito