import Image from 'next/image'
import React from 'react'
import {motion} from "framer-motion"
import Link from 'next/link'

const About = () => {
  return <>
  <motion.div 
  initial={{ opacity: 0}}
  animate={{ opacity: 1 }}
  transition={{ delay: 1 }}
  viewport={{ once: true }}
  className='about alternative-back '>
    <h2>El mejor restaurante de hamburugesas en Lima</h2>
    <p>Somos un restaurante fundado en 1991 en la ciudad de Lima. Nos apasiona cocinar hamburugesas de la mejor calidad para nuestros clientes. Podrás disfrutar una excelente comida y los mejores cócteles de autor en un ambiente completamente instagrameable! Una experiencia realmente inolvidable.</p>
    <Link href={"/carta"}>
          <button className='button'>
      Mira la carta
    </button>
    </Link>
    <div className='restaurant'>
        <Image alt="Nick's Burger" src="/restaurante.jpg" fill/>
    </div>
  </motion.div>

  </>
  
}

export default About