import Image from 'next/image'
import React from 'react'
import {motion} from "framer-motion"

const About = () => {
  return <>
  <motion.div 
  initial={{ opacity: 0}}
  animate={{ opacity: 1 }}
  transition={{ delay: 1 }}
  viewport={{ once: true }}
  className='about alternative-back '>
    <h2>El buen sabor, nuestra especialidad</h2>
    <p>Somos un restaurante fundado en 1951 en la provincia de Lima. Nuestro restaurante es una de las mejores opciones gastronómicas de comida marina en la ciudad. Podrás disfrutar una excelente comida y los mejores cócteles de autor en un ambiente completamente instagrameable! Una experiencia realmente inolvidable.</p>
    <div className='restaurant'>
        <Image alt="Cevichería El Picante" src="/restaurante.jpg" fill/>
    </div>
  </motion.div>

  </>
  
}

export default About