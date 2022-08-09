import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

function Slick() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="my-[30px]">
      <h2> Single Item</h2>
      <Slider {...settings}>
        <div className="h-[500px]">
          <h3>1</h3>
        </div>
        <div className="h-[500px]">
          <h3>2</h3>
        </div>
        <div className="h-[500px]">
          <h3>3</h3>
        </div>
        <div className="h-[500px]">
          <h3>4</h3>
        </div>
        <div className="h-[500px]">
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  )
}

export default Slick
