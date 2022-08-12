import React from 'react'
import 'antd/dist/antd.css'
import { Carousel } from 'antd'

function Antd() {
  return (
    <div>
      <Carousel className="xl:w-[1200px] md:w-[800px] sm:w=[600px] mx-auto my-[10px]">
        <img src="/beach-g69064a5d5_1280.jpg" className="h-[500px]" />
        <img src="/hd-wallpaper-g04176a2a8_1280.jpg" className="h-[500px]" />
        <img src="/public/drink-g4ca9558e1_1280.jpg" className="h-[500px]" />
      </Carousel>
    </div>
  )
}

export default Antd
