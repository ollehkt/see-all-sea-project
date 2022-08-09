import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

function Responsive() {
  return (
    <Carousel infiniteLoop>
      <div className="h-[300px] bg-cyan-200">1</div>
      <div className="h-[300px] bg-cyan-200">2</div>
      <div className="h-[300px] bg-cyan-200">3</div>
    </Carousel>
  )
}

export default Responsive
