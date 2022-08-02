import React from 'react'
import { Link } from 'react-router-dom'

function Entry() {
  return (
    <div className=" h-[450px] container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
      <div className="lg:w-3/5 xl:w-2/5 flex flex-col items-start relative z-10">
        <h1 className="font-bold text-6xl sm:text-6xl text-white leading-3 line">
          눈으로 보는 모든 바다
          <br />
          안전해
        </h1>
        <Link
          to="/home"
          className="block no-underline bg-white hover:bg-cyan-300 hover:text-white py-3 px-4 rounded-lg text-lg text-gray-800 font-bold uppercase mt-10"
        >
          톺아보기
        </Link>
      </div>
    </div>
  )
}

export default Entry
