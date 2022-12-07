import { AnimatePresence } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { DropInFromLeft } from '../animations'
import {motion} from "framer-motion"

const ArrOfRecomendations = [
    {
        r: "El ceviche mixto estuvo bien rico y el ambiente me gustó, lo recomiendo.",
        p: "Alfredo Ruíz"
    },
    {
        r: "Todos los platos bien servidos y de calidad, fuí con mi familia y todos salimos satisfechos.",
        p: "Luis Alfaro"
    },
    {
        r: "El ceviche de conchas negras buenazo, fuí con mis papás y la pasamos muy bien.",
        p: "Ana Cevallos"
    },
    {
        r: "El arroz con mariscos estuvo espectacular, volveré pronto con mis amigos.",
        p: "José Benitez"
    },
    {
        r: "Me atendieron con mucha amabilidad y salí satisfecho del restaruante. Todo excelente.",
        p: "Joaquín Pérez"
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