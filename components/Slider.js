import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import {motion} from "framer-motion"
import { DropInFromBottom, DropInFromTop } from '../animations'
import Link from 'next/link'


const ImageArray = [
  "/back.jpg"
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
    <h2>El mejor sabor, hecho en casa</h2>
    <Link href={"/carta"}>
          <button className='button'>
      Ver el catálogo
    </button>
    </Link>
    </div>
  </motion.section>
  {
    ImageArray && ImageArray.map((img, idx) => {
      if(Slide === idx) return <div className='img-slide' key={idx}>
        <Image src={img} alt="Cevichería El Picante" fill/>
      </div>
    })
  }
</div>
}

export default Slider