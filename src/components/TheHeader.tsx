import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { authService } from 'firebase'

interface PropsType {
  isLogged: any // auth의 형태 확인하고 나중에 바꿀 것
  init: boolean
}

function TheHeader({ isLogged, init }: PropsType) {
  // const navigate = useNavigate()
  const clickLogout = () => {
    authService.signOut()
  }
  return (
    <div className="w-full  h-[76px] mx-auto bg-transparent  ">
      <header className="absolute top-0 left-0 right-0 z-20">
        <nav className="mx-auto px-24 py-4">
          <div className="md:flex justify-between items-center">
            <div className=" flex justify-between items-center flex-1">
              <Link to="/" className="">
                <svg
                  className="w-8 mr-2 fill-white hover:fill-cyan-300"
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Capa 1"
                  viewBox="0 0 16.16 12.57"
                >
                  <defs></defs>
                  <path d="M14.02 4.77v7.8H9.33V8.8h-2.5v3.77H2.14v-7.8h11.88z"></path>
                  <path d="M16.16 5.82H0L8.08 0l8.08 5.82z"></path>
                </svg>
              </Link>
            </div>
            <div className=" text-4xl font-bold flex-1">
              <h1 className="text-white ml-12">안전해</h1>
            </div>
            <div className=" flex items-center">
              <Link
                to="/about"
                className="text-lg uppercase mx-3 text-white cursor-pointer hover:text-cyan-300"
              >
                About
              </Link>
            </div>
            <div className=" flex items-center text-center">
              <img
                className="rounded-full w-[34px] h-[34px] m-[5px]"
                src="/profile_default.png"
                alt="profile"
              />
              {isLogged && (
                <Link
                  to="/mypage"
                  className="text-lg uppercase mx-3 text-white cursor-pointer  hover:text-cyan-300"
                >
                  마이페이지
                </Link>
              )}
              {!init ? (
                'initializing..'
              ) : isLogged ? (
                <Link
                  onClick={clickLogout}
                  to="/"
                  className="text-lg uppercase mx-3 text-white cursor-pointer  hover:text-cyan-300"
                >
                  로그아웃
                </Link>
              ) : (
                <Link
                  to="/auth"
                  className="text-lg uppercase mx-3 text-white cursor-pointer  hover:text-cyan-300"
                >
                  로그인
                </Link>
              )}
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default TheHeader
