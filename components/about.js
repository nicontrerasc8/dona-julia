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
    <h2>Nuestra filosofia.</h2>
    <p>Desde su fundación en 1898 en la Bodega Castellano se ha trabajado en la búsqueda de la perfección, combinando la tecnología y el arte, para elaborar vinos y piscos de primera calidad.</p>
    <p>En la Bodega Castellano, estamos comprometidos con el contínuo desarrollo y crecimiento de nuestros trabajadores, como también la de nuestros socios estratégicos (proveedores y distribuidores) en donde la calidad de nuestros productos satisfagan de la mejor manera posible las necesidades del consumidor.</p>
    <p>Asimismo comprometidos con el desarrollo de nuestro país y la preservación del medio ambiente en busca de un futuro mejor y en beneficio de las próximas generaciones.</p>
    <Link href={"/carta"}>
      <button className='button'>
      Ver el catálogo
    </button>
    </Link>
    <div className='restaurant'>
        <Image alt="Bodega Castellano" src="/wine.jpg" fill/>
    </div>
  </motion.div>

  </>
  
}

export default About