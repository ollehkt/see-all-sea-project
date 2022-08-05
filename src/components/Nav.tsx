import React from 'react'
import { Link } from 'react-router-dom'
const area = ['강원', '경기', '충북', '충남', '경남', '경북', '전남', '전북', '제주']
function Nav() {
  return (
    <>
      <div className="flex border-4 border-blue-500 rounded-full border-solid h-[60px] justify-center items-center">
        {area.map((item) => (
          <Link
            key={item}
            className="flex justify-center items-center no-underline w-[122px] h-[48px] bg-transparent mx-2 my-auto text-white text-2xl border-sky-400 rounded-full hover:bg-cyan-100 hover:text-blue-500 cursor-pointer transition-colors duration-300 shadow-md"
            to={`/${item}`}
          >
            {item}
          </Link>
        ))}
      </div>
    </>
  )
}

export default Nav
