import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import {motion} from "framer-motion"
import { DropInFromBottom, DropInFromTop } from '../animations'


const ImageArray = [
  "/ceviche1.jpg",
  "/ceviche2.jpg",
  "/ceviche3.jpg",
]


const Slider = () => {
    const [Slide, setSlide] = useState(0)
    const SlidesLength = ImageArray.length
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

  return  <div className='slider'>
  <motion.section 
  initial={{ opacity: 0 }}
  viewport={{ once: true }}
  whileInView={{ opacity: 1 }}
  transition={{delay: .5}} className='slider-header'>
    <div>
    <h2>Disfruta la deliciosa sazón del norte peruano</h2>
    <h5>
      La mejor comida marina chiclayana en Lima
    </h5>
    <a target={"_blank"} 
       href={`https://api.whatsapp.com/send?phone=51949161510&text="¡Hola! vengo de su página web. Me gustaría hacer una reserva."`}
       rel='noreferrer'
    >
          <button className='button'>
      Haz una reserva
    </button>
    </a>
    </div>
  </motion.section>
  {
    ImageArray && ImageArray.map((img, idx) => {
      if(Slide === idx) return <div className='img-slide' key={idx}>
        <Image src={img} fill/>
      </div>
    })
  }
</div>
}

export default Slider