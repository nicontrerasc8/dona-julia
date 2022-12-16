import { createContext, useContext, useEffect, useState } from "react"
import toast from "react-hot-toast"

const CartConext = createContext()
const UseCartContext = () => useContext(CartConext)

export default UseCartContext
export const ContextProvider = ({children}) => {
    const [Products, setProducts] = useState([])
    const [FinalWhatsAppString, setFinalWhatsAppString] = useState("")

    const AddToCart = (info) => {
        const existing = Products.find((p) => p.name === info.name)
        if(existing) {
            existing.cantidad += 1
            setProducts([...Products])
        }
        else setProducts(Products => [...Products, {
            img: info.img,
            name: info.name,
            price: info.price,
            cantidad: 1
        }])
        toast.success("¡El producto fue añadido al carrito!")
    }

    const ProductsCount = () => {
        return Products.reduce((acc, p) => (acc += p.cantidad), 0)
    }

    const TotalProductsPrice = () => {
        return Products.reduce((acc, p) => (acc += p.cantidad * p.price), 0)
    }

    useEffect(() => {
        var aux = []
        Products.forEach(e => {

            var auxiliar
            if(e.cantidad > 1) auxiliar = e.cantidad + " pizzas de " + e.name 
            else auxiliar = e.cantidad + " pizza de " + e.name 

            console.log(auxiliar)
            aux.push(auxiliar)
        });
        var FinalMessage = aux.join(", ") + "."
        setFinalWhatsAppString(FinalMessage)
    }, [Products])
    

    return <CartConext.Provider
    value={{
      Products, setProducts, AddToCart, ProductsCount, FinalWhatsAppString, TotalProductsPrice
    }}
    >
        {
            children
        }
    </CartConext.Provider>
}