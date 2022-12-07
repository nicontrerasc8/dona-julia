import React from 'react'
import {motion} from "framer-motion"

const Ubicacion = () => {
  return <motion.div 
  initial={{ opacity: 0, top: "-100px" }}
  viewport={{ once: true }}
  whileInView={{ opacity: 1, top: "0" }}
  transition={{delay: .5}}
  className='section'>
    <h2 className='simple-h2'>Nuestra ubicación</h2>
    <p>Av de los Precursores 743, Surco, Lima</p>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.902908712883!2d-76.98474388465607!3d-12.118795291419367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c78dc5bb1b69%3A0x9c8a3d73418d869c!2sAv.%20de%20los%20Precursores%20743%2C%20Santiago%20de%20Surco%2015039!5e0!3m2!1ses-419!2spe!4v1670354851519!5m2!1ses-419!2spe"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
  </motion.div>
}

export default Ubicacion