import React from 'react'
import {motion} from "framer-motion"

const Ubicacion = () => {
  return <motion.div 
  initial={{ opacity: 0, top: "-100px" }}
  viewport={{ once: true }}
  whileInView={{ opacity: 1, top: "0" }}
  transition={{delay: .5}}
  className='section'>
    <h2 className='simple-h2'>Ubicación de la bodega</h2>
    <p>Av. San Cristóbal Nº220 Distrito Sunampe – Chincha, Ica, Perú.</p>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3880.8994758224467!2d-76.15225588517319!3d-13.418548990563774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91101691532bcdcd%3A0xa811b7d36b564e47!2sBodega%20Castellano!5e0!3m2!1ses-419!2spe!4v1671139116747!5m2!1ses-419!2spe"   allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
  </motion.div>
}

export default Ubicacion