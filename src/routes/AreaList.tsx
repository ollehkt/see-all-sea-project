import React from 'react'
import Antd from '../carousel/Antd'
import Responsive from '../carousel/Responsive'
import Slick from './../carousel/Slick'

function AreaList() {
  return (
    <>
      <Antd />
      {/* <Responsive /> */}
      {/* <Slick /> */}

      <div className=" h-[200px] container mx-auto  relative z-10 flex justify-center items-center py-2 xl:py-4">
        <div className="z-10 relative">
          <h1 className="font-bold text-4xl sm:text-6xl text-cyan-400 line animate-bounce ">
            원하는 지역을 선택 해!
            <br />
          </h1>
        </div>
      </div>
    </>
  )
}

export default AreaList
