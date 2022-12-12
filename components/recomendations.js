import { AnimatePresence } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { DropInFromLeft } from '../animations'
import {motion} from "framer-motion"

const ArrOfRecomendations = [
    {
        r: "El ambiente muy bonito y las hamburguesas buenazas. Fuí con mi familia y la pasamos muy bien.",
        p: "Isabel Díaz"
    },
    {
        r: "Ordené una hamburguesa de la casa y una cerveza artesanal. Definitivamente vuelvo.",
        p: "Esteban Rodríguez"
    },
    {
        r: "Me gustó mucho la atención y la calidad de la comida. 100% recomendable.",
        p: "Ana Cevallos"
    },
]

const Recomendations = () => {

    const [Slide, setSlide] = useState(0)
  const SlidesLength = ArrOfRecomendations.length
  const timeout = useRef(null)

  useEffect(() => {
    const NextSlide = () => {
      setSlide(Slide => (Slide=== SlidesLength - 1 ? 0 : Slide+1))
    }
    timeout.current = setTimeout(NextSlide, 8000);

    return function(){
      if(timeout.current) clearTimeout(timeout.current)
    }

  }, [Slide, SlidesLength])

  return <div className='section alternative-back recomendations'>
    <h2 className='simple-h2'>Lo que dicen de nosotros:</h2>
    <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
    >
        {
            ArrOfRecomendations.length && ArrOfRecomendations.map((data, idx) => {
                if(Slide === idx) return <motion.article key={idx}
                variants={DropInFromLeft} initial="hidden"
            animate="visible"
            exit="exit"
                >
                    <h3>&#8220;{data.r}&quot;</h3>
              <span>{data.p}</span>
                </motion.article>
            })
        }
    </AnimatePresence>
  </div>
}

export default Recomendations