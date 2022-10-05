import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const areas = ['강원', '인천', '충남', '경남', '경북', '전남', '전북', '제주', '부산']
function Nav() {
  return (
    <>
      <div className="flex   h-[60px] justify-center items-center ">
        {areas.map((area) => (
          <Link
            key={area}
            className="flex justify-center items-center no-underline w-[122px] h-[48px] mx-2 my-auto text-white text-2xl border-white border-solid border-2 rounded-full hover:border-none hover:bg-cyan-100 hover:text-blue-500 cursor-pointer transition-colors duration-300 shadow-md"
            to={`/area/${area}`}
          >
            {area}
          </Link>
        ))}
      </div>
      <Outlet />
    </>
  )
}

export default Nav
