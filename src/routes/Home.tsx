import React from 'react'
import { Link } from 'react-router-dom'

const area = ['강원', '경기', '충북', '충남', '경남', '경북', '전남', '전북', '제주']
const Home = () => {
  return (
    <>
      <div className=" h-[450px] container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
        <div className="lg:w-3/5 xl:w-2/5 flex flex-col items-start relative z-10">
          <h1 className="font-bold text-6xl sm:text-6xl text-white leading-3 line">
            눈으로 보는 모든 바다
            <br />
            안전해
          </h1>
          <Link
            className="flex justify-center items-center my-8 no-underline w-[122px] h-[48px] bg-cyan-400 mx-2 text-white text-2xl border-sky-400 rounded-md hover:bg-cyan-100 hover:text-blue-500 cursor-pointer transition-colors duration-300 shadow-md"
            to="area"
          >
            시작해!
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home
