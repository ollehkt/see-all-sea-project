import React from 'react'
import data from '../../TL_SCCO_CTPRVN'
import { Link } from 'react-router-dom'

function TheHeader() {
  return (
    <div className="w-full  h-[76px] mx-auto bg-transparent  ">
      <header className="absolute top-0 left-0 right-0 z-20">
        <nav className="container mx-auto px-6 md:px-12 py-4">
          <div className="md:flex justify-between items-center">
            <div className="flex justify-between items-center">
              <Link to="/" className="">
                <svg
                  className="w-8 mr-2 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Capa 1"
                  viewBox="0 0 16.16 12.57"
                >
                  <defs></defs>
                  <path d="M14.02 4.77v7.8H9.33V8.8h-2.5v3.77H2.14v-7.8h11.88z"></path>
                  <path d="M16.16 5.82H0L8.08 0l8.08 5.82z"></path>
                </svg>
              </Link>
              <div className="md:hidden">
                <button className="text-white focus:outline-none">
                  <svg
                    className="h-12 w-12"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6H20M4 12H20M4 18H20"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="text-white text-4xl font-bold ">
              <h1 className="">안전해</h1>
            </div>
            <div className="hidden md:flex items-center">
              <Link
                to="/about"
                className="text-lg uppercase mx-3 text-white cursor-pointer hover:text-gray-300"
              >
                About
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
{
  /* <div className="w-[1280px]  h-[122px] mx-auto   bg-cyan-200 ">
<h1 className="font-black text-xl">눈으로 보는 모든 바다~! 안전해~!!!</h1>
{/* <span>{filteredData}</span> }
</div> */
}
export default TheHeader
