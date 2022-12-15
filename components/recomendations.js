import { AnimatePresence } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { DropInFromLeft } from '../animations'
import {motion} from "framer-motion"

const ArrOfRecomendations = [
    {
        r: "El borgoña Castellano es el vino semiseco más rico que he probado.",
        p: "Isabel Díaz"
    },
    {
        r: "Me encantó el Andariego Mosto Verde, apenas lo olí sabía que era un pisco de calidad.",
        p: "Esteban Rodríguez"
    },
    {
        r: "Con el pisco Castellano se puede preparar un muy buen Pisco Sour.",
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
                    <h3>&#8220;{data.r}&#8221;</h3>
              <span>{data.p}</span>
                </motion.article>
            })
        }
    </AnimatePresence>
  </div>
}

export default Recomendations