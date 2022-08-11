import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

function Responsive() {
  return (
    <Carousel infiniteLoop className="w-[1200px] h-[300px] mx-auto">
      <img src="/public/beach-g69064a5d5_1280.jpg" className="object-cover" />
      <img src="/public/beautiful-tropical-empty-beach-sea-ocean-with-white-cloud-on-blue-sky-background_74190-13665.webp" />
      <img src="/public/drink-g4ca9558e1_1280.jpg" />
    </Carousel>
  )
}

export default Responsive
